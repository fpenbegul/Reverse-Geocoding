import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Sorgu Ekranı" component={TabNavigator} />
      <Drawer.Screen name="Hakkında" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
