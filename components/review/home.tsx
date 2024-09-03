import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../../utils/constant"
import { HomeProps } from "../../utils/navigation";
import { useState } from "react";

export interface IReview {
    id: number;
    title: string;
    star: number;
}
const HomeScreen = ({ route, navigation }: HomeProps) => {
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'React Native', star: 5 },
        { id: 2, title: 'ReactJS', star: 4 },
    ])
    const renderReviewList = ({ item }: { item: IReview }) => {
        return (<View style={styles.reviewItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                <Text style={globalStyles.appFont}>{item.title}</Text>
            </TouchableOpacity>
        </View>)
    }
    return (<View style={styles.body}>
        <Text style={[styles.header, globalStyles.appFont]}>Review list</Text>
        <View>
            <FlatList data={reviews} keyExtractor={item => item.id + ''} renderItem={renderReviewList} />
        </View>
    </View>)
}
const styles = StyleSheet.create({
    body: { marginHorizontal: 15 },
    header: { color: '#f4511e', fontSize: 25 },
    reviewItem: { padding: 15, backgroundColor: '#F4DEB3', marginBottom: 15 }
})
export default HomeScreen