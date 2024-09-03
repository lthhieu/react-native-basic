import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../review/about";
import AppStack from "./app.stack";
import { RootDrawerParamList } from "../../utils/navigation";

const AppDrawer = () => {
    const Drawer = createDrawerNavigator<RootDrawerParamList>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeLayout" component={AppStack} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}
export default AppDrawer