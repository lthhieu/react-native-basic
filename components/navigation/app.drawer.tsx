import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import AboutScreen from "../review/about";
import AppStack from "./app.stack";
import { RootDrawerParamList } from "../../utils/navigation";
import { PACIFICO } from "../../utils/constant";
import { Text, View } from "react-native";

const AppDrawer = () => {
    const Drawer = createDrawerNavigator<RootDrawerParamList>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeLayout" component={AppStack} options={{ title: 'Trang chủ', headerShown: false }} />
            <Drawer.Screen name="About" component={AboutScreen} options={headerCss} />
        </Drawer.Navigator>
    )
}
export const headerCss: DrawerNavigationOptions = {
    title: "Thông tin",
    headerStyle: {
        backgroundColor: '#FF8A8A',
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: PACIFICO
    },
    headerTitleAlign: 'center',
}
export default AppDrawer