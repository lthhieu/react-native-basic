import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../../utils/constant"
import { HomeProps } from "../../types/navigation";
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomModal from "./custom.modal";

export interface IReview {
    id: number;
    title: string;
    star: number;
}
const HomeScreen = ({ route, navigation }: HomeProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'React Native', star: 5 },
        { id: 2, title: 'ReactJS', star: 4 },
    ])
    const addNewReview = (item: IReview) => {
        setReviews([...reviews, item])
    }
    const renderReviewList = ({ item }: { item: IReview }) => {
        return (<View style={styles.reviewItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                <Text style={globalStyles.appFont}>{item.title}</Text>
            </TouchableOpacity>
        </View>)
    }
    return (
        <View style={styles.body}>
            <View style={styles.headerHome}>
                <Text style={[styles.header, globalStyles.appFont]}>Review list</Text>
                <Pressable
                    onPress={() => { setModalVisible(true) }}>
                    <MaterialIcons name="add-box" size={36} color="#5b6b7b" />
                </Pressable>

            </View>
            <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} addNewReview={addNewReview} />

            <View>
                <FlatList data={reviews} keyExtractor={item => item.id + ''} renderItem={renderReviewList} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body: { marginHorizontal: 15 },
    header: { color: '#f4511e', fontSize: 25 },
    reviewItem: { padding: 15, backgroundColor: '#F4DEB3', marginBottom: 15 },
    headerHome: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
})
export default HomeScreen