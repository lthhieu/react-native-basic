import { Button, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/constant"
import { StackNavigation } from "../../utils/navigation";

const HomeScreen = ({ navigation }: StackNavigation) => {

    return (<View>
        <Text style={[styles.text, globalStyles.appFont]}>Hello home screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Detail')}
        />
    </View>)
}
const styles = StyleSheet.create({
    text: { color: 'red' }
})
export default HomeScreen