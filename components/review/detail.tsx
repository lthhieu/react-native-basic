import { StyleSheet, Text, View } from "react-native"

const DetailScreen = () => {
    return (<View>
        <Text style={styles.helloWorld}>Hello world</Text>
    </View>)
}
const styles = StyleSheet.create({
    helloWorld: { paddingTop: 40 }
})
export default DetailScreen