import React, { Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet} from "react-native";
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      enlem: '',
      boylam: '',
    };
  }
  
  onLogin() {
    const { enlem, boylam } = this.state;
    //formatted_address

    const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+enlem+","+boylam+"&key=AIzaSyCmAS4UGJlvNoXcOAYkzJNt4MjlfKeQvO8";
    var response = axios.get(url).then(res => {
      const veri = res.data;
      console.log(veri.results[0].formatted_address);
      Alert.alert('Girdiğiniz Koordinatlara Göre Açık Adres : ', `${JSON.stringify(veri.results[0].formatted_address)}`);

    });


  
  };

  render() {
 

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.enlem}
          onChangeText={(enlem) => this.setState({ enlem })}
          placeholder={'Enlem'}
          style={styles.input}
        />
        <TextInput
          value={this.state.boylam}
          onChangeText={(boylam) => this.setState({ boylam })}
          placeholder={'Boylam'}
          style={styles.input}
        />
        
        <Button
          title={'Sorgula'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 400,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});