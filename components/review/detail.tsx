import { Button, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/constant"
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../utils/navigation";
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    return (<View>
        <Text style={[styles.text, globalStyles.appFont]}>Hello detail screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
    </View>)
}
const styles = StyleSheet.create({
    text: { color: 'green' }
})
export default DetailScreen