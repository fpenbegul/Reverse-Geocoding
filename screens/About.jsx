import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.baseText}>Bu Uygulama Enlem-Boylam bilgilerinden adres bilgisini getirmektedir. {'\n'}  2021 ®</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingStart:25,
    paddingEnd:36,
    backgroundColor: 'lightblue',
    textAlign: "center"
  }, baseText: {
    fontSize: 27, 
    fontWeight: 'bold'
  },  
});

export default About;
