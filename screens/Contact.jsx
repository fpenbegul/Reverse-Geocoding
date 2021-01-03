import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {Linking} from 'react-native'

const Contact = () => {
  
  return (
    <View style={styles.center}>
      <Text>Bize Aşağıdaki Numaradan Ulaşabilirsiniz!</Text>
      <Text style={{fontSize:56}} onPress={()=>{Linking.openURL('tel:123456');} }>123456 ✆ ( Tıklayın )</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;
