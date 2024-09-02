import { StyleSheet, Text, View } from "react-native"
import { globalStyles, PACIFICO } from "../../utils/constant"

const HomeScreen = () => {
    return (<View>
        <Text style={styles.helloWorld}>Hello world</Text>
        <Text style={[styles.text, globalStyles.appFont]}>OpenSans-Regular</Text>
    </View>)
}
const styles = StyleSheet.create({
    helloWorld: { paddingTop: 40 },
    text: { color: 'red' }
})
export default HomeScreen