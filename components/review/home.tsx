import { StyleSheet, Text, View } from "react-native"

const HomeScreen = () => {
    return (<View>
        <Text style={styles.helloWorld}>Hello world</Text>
        <Text style={{ fontFamily: 'Pacifico-Regular' }}>OpenSans-Regular</Text>
    </View>)
}
const styles = StyleSheet.create({
    helloWorld: { paddingTop: 40 }
})
export default HomeScreen