import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import AboutScreen from "../review/about";
import AppStack from "./app.stack";
import { RootDrawerParamList } from "../../utils/navigation";
import { PACIFICO } from "../../utils/constant";

const AppDrawer = () => {
    const Drawer = createDrawerNavigator<RootDrawerParamList>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeLayout" component={AppStack} options={{ ...headerBase, drawerLabel: 'Trang chủ', headerShown: false }} />
            <Drawer.Screen name="About" component={AboutScreen} options={{ ...headerBase, drawerLabel: 'Thông tin', title: "Thông tin" }} />
        </Drawer.Navigator>
    )
}

export const headerBase: DrawerNavigationOptions = {
    drawerLabelStyle: { fontFamily: PACIFICO },
    drawerActiveBackgroundColor: '#FF8A8A',
    drawerActiveTintColor: '#fff',
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