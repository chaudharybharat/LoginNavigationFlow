
import React, {Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import SplaceLog from '../images/react_splace_icon.png';
import { StackNavigator } from 'react-navigation';

export default class SplaceScreen extends React.Component {

  static navigationOptions = {
     header:null
   };
   constructor(){
     super();
     console.log("first call");
   }
   moveLoginscreen(){
    setTimeout(() => {
       this.props.navigation.replace('Login',{name:'bharat@gmail.com',password:"123"});
      // this.props.navigation.navigate('Login');
    }, 3000)
  }
  //this method call
  componentDidMount(){
      console.log('third call this');
    this.moveLoginscreen();
  }
  componentWillMount(){
      console.log('second call this');

  }
  render(){
    return(
      <View style={style.main}>
     <Image source={SplaceLog} style={style.logo} />
      </View>
    );
  }
}
 const style=StyleSheet.create({
   main:{
     flex:1,
     width:null,
     height:null,
     justifyContent:'center',
     alignItems:'center',
     opacity:0.5,
    backgroundColor:'blue',
   },
   logo:{
     width:120,
     height:120,
     justifyContent:'center',
     alignItems:'center'
   }
 });
