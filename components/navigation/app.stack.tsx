import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RootDrawerParamList, RootProps, RootStackParamList } from "../../types/navigation";
import { PACIFICO } from "../../utils/constant";
import DetailScreen from "../review/detail";
import HomeScreen from "../review/home";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const AppStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator screenOptions={headerCss}>
            <Stack.Screen name="Home" options={{ title: 'Trang chủ' }} component={HomeScreen} />
            <Stack.Screen name="Detail" options={({ navigation }: { navigation: RootProps }) => ({
                title: 'Chi tiết', headerTitleAlign: 'left', headerSearchBarOptions: { headerIconColor: '#fff' }, headerLeft: (props) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><SimpleLineIcons name="arrow-left" size={24} color="#fff" style={{ marginRight: 20 }} /></TouchableOpacity>
                ),
            })} component={DetailScreen} />
        </Stack.Navigator>
    )
}
const Left = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>()
    return (
        <TouchableOpacity onPress={() => { navigation.openDrawer() }}><MaterialIcons name="menu" size={36} color="#fff" /></TouchableOpacity>
    )
}
export const headerCss: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: '#FF8A8A'
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: PACIFICO
    },
    headerTitleAlign: 'center',
    headerLeft: () => {
        return (
            <Left />
        )
    }
}
export default AppStack