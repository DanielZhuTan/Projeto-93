import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashBoard from "../screens/DashBoard";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={DashBoard} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;