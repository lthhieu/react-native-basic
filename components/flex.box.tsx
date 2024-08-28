import { StyleSheet, Text, View } from "react-native"

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text style={styles.text}>Item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text style={styles.text}>Item 4</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // paddingTop: 40,
        flex: 1,
        justifyContent: 'center'
    },
    item1: {
        backgroundColor: '#FFBE98',
        padding: 30
    },
    item2: {
        backgroundColor: '#F05A7E',
        padding: 30
    }, item3: {
        backgroundColor: '#125B9A',
        padding: 30
    }, item4: {
        backgroundColor: '#0B8494',
        padding: 30
    }, text: {
        color: '#fff', textAlign: 'center'
    }
})
export default FlexBox