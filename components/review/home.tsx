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
    const [status, setStatus] = useState('')
    const [dataUpdate, setDataUpdate] = useState<null | IReview>(null)
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'React Native', star: 5 },
        { id: 2, title: 'ReactJS', star: 4 },
    ])
    const addNewReview = (item: IReview) => {
        setReviews([...reviews, item])
    }
    const deleteReview = (id: number) => {
        setReviews(reviews.filter((item: IReview) => { return item.id !== id }))
    }
    const updateReview = (item: IReview) => {
        setDataUpdate(item)
        setStatus("Cập nhật")
        setModalVisible(true)
    }
    const renderReviewList = ({ item }: { item: IReview }) => {
        return (<TouchableOpacity onLongPress={() => { updateReview(item) }} onPress={() => navigation.navigate('Detail', item)}><View style={[styles.reviewItem, styles.headerHome]}>

            <Text style={globalStyles.appFont}>{item.title}</Text>

            <Pressable
                onPress={() => { deleteReview(item.id) }}>
                <MaterialIcons name="delete" size={24} color="#dc3545" />
            </Pressable>
        </View></TouchableOpacity>)
    }
    return (
        <View style={styles.body}>
            <View style={styles.headerHome}>
                <Text style={[styles.header, globalStyles.appFont]}>Review list</Text>
                <Pressable
                    onPress={() => { setModalVisible(true); setStatus('Thêm mới') }}>
                    <MaterialIcons name="add-box" size={36} color="#5b6b7b" />
                </Pressable>

            </View>
            <CustomModal setReviews={setReviews} reviews={reviews} setDataUpdate={setDataUpdate} dataUpdate={dataUpdate} status={status} modalVisible={modalVisible} setModalVisible={setModalVisible} addNewReview={addNewReview} />

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