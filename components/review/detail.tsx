import { Button, Image, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/constant"
import { Props } from "../../types/navigation";
import starIcon from '../../assets/images/star.png'
const DetailScreen = ({ route, navigation }: Props) => {
    const { id, star, title } = route.params
    return (<View style={styles.body}>
        <View style={styles.reviewItem}>
            <Text style={[styles.text, globalStyles.appFont]}>Tiêu đề: {title}</Text>
            <Text style={[styles.text, globalStyles.appFont]}>Đánh giá: {[...new Array(star)].map((item, idx) => {
                return (
                    <Image key={idx} style={styles.star} source={starIcon} />
                )
            })}

            </Text>

        </View>
    </View>)
}
const styles = StyleSheet.create({
    body: { marginHorizontal: 15 },
    header: { color: '#f4511e', fontSize: 25 },
    reviewItem: { padding: 15, backgroundColor: '#F4DEB3', marginVertical: 15 },
    text: { fontSize: 18 },
    star: { height: 25, width: 25 }
})
export default DetailScreen