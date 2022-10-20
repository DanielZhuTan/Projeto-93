import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AgendaDog from "../screens/AgendaDog";
import AlertDog from "../screens/AlertDog";
import DashBoard from "../screens/DashBoard";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name="DashBoard" component={DashBoard}/>
        <Tab.Screen name="AgendaDog" component={AgendaDog}/>
        <Tab.Screen name="AlertDog" component={AlertDog}/>
      </Tab.Navigator>
    )
  }
}
