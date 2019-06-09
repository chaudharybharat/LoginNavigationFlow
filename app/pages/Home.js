import React from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer,createDrawerNavigator,StackNavigator} from 'react-navigation';
export default class Home extends React.Component {

  static navigationOptions =({navigation})=>({
  title: 'Home',
  headerRight:<TouchableOpacity
       style = {styles.submitButton}
       onPress = {() => navigation.navigate("Login")}>
       <Text style = {styles.submitButtonText}> Login </Text>
    </TouchableOpacity>,
     // headerLeft: <Image
     //      style={styles.logo}
     //      source={require("../images/menu.png")}/>
 headerLeft:<View styles={{height:50}}>
 <Text>Text</Text>
  <Text>Text</Text>
   <Text>Text</Text>
    <Text>Text</Text>
            </View>
  });

 static rightButtonPress =() => {
    alert('right button')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Scrren</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   logo: {
      width: 25,
      height: 25,
        marginLeft:20,
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
       alignItems: 'center',
     width:150,
  },
    submitButtonText:{
     color: 'white',
     justifyContent: 'center',
     alignItems: 'center',
  }
});
