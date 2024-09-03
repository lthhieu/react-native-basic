import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/constant"

const AboutScreen = () => {
    return (<View style={styles.body}>
        <Text style={globalStyles.appFont}>Hello about</Text>
    </View>)
}
const styles = StyleSheet.create({
    body: { marginHorizontal: 15 },
})
export default AboutScreen