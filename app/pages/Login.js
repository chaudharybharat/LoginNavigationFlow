/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions,Image,ImageBackground,ScrollView,Platform,TextInput, StyleSheet,Button,TouchableOpacity, Text, View} from 'react-native';
import Style from '../style/Styles';
// import Home from './Home';
import { StackNavigator } from 'react-navigation';
import Bgpath from '../images/bg.jpg';
import LoginIcon from '../images/loginicon.png';
import Icon from 'react-native-vector-icons/Ionicons'
type Props = {};

const {width: WIDTH} =Dimensions.get('window')
export default class Login extends Component<Props> {
  static navigationOptions = {
     header:null
   };
    state = {
       email: '',
       password: ''
    }
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
 }

 checkValidateEmail = (text) => {
   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
   if(reg.test(text) === false)
   {
   return false;
    }
   else {
    return true;
       }
   }
 handleChangeEmailInput = (text) => {
     this.setState({ email: text })
   }
 handleChangePasswordInput = (text) => {
     this.setState({ password: text })
   }
   componentWillMount(){
  bundle=this.props.navigation.state.params;
  if(bundle!=null){
   this.setState({ email: bundle.name })
    this.setState({ password: bundle.password })
  }
 }
   onLogin = () => {
  var email=this.state.email;
  var pass=this.state.password;
  //  this.props.navigation.navigate('HomeScreen')
   if(email==""){
        alert('Please enter email')
           return;
   }else if(!this.checkValidateEmail(email)){
       alert('Please enter valid email')
   }
   else if(pass==""){
           alert('Please enter password')
           return;
   }else{
    // alert("Suceessfully")
     //this.props.navigation.navigate('Home');
     this.props.navigation.replace('Home');
//  this.props.navigation.navigate('HomeScreen')
   }
 }

  render() {
    // console.log("test call"+util.inspect(this.props.navigation,false,null));

    return (

    //
  <ScrollView contentContainerStyle={{ flex: 1 }}>
 <ImageBackground source={Bgpath} style={style.background_container}>
      <View style={style.log_container}>
     <Image source={LoginIcon} style={style.logo}/>
      <Text style={style.logintext}>React Native </Text>
      </View>
        <View>
         <TextInput style={style.input} placeholder={'Enter email'}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
            onChangeText={this.handleChangeEmailInput}
             value={bundle!=null?bundle.name:""}
         underLineColorAndroid='transparent'/>

         <TextInput style={style.input} placeholder={'Enter password'}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
         onChangeText={this.handleChangePasswordInput}
         secureTextEntry={true}
         value={bundle!=null?bundle.password:""}
         underLineColorAndroid='transparent'/>
        </View>
      <View style={{marginTop:20}}>

     <TouchableOpacity
          style={style.btnLogin}
          onPress={this.onLogin}
          underlayColor='#fff'>
          <Text style={style.textBtn}>Login</Text>
    </TouchableOpacity>
     </View>

      </ImageBackground>
      </ScrollView>

    );
  }
}
  const style=StyleSheet.create({
    background_container:{
      flex:1,
      width:null,
      height:null,
      justifyContent:'center',
      alignItems:'center',

    },
    log_container:{
     alignItems:'center'
    },
    logo:{
      width:120,
      height:120,
    },
    logintext:{
      color:'white',
      fontSize:20,
      fontWeight:'500',
      opacity:0.8,
      marginTop:10,
    },
    input:{
      width:WIDTH-55,
      height:45,
      borderRadius:45,
      fontSize:16,
      paddingLeft:45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
      marginTop:25,
      fontStyle:'italic'
    },
    inputIcon:{
      position:'absolute',
      top:10,
      left:37,
    },
     btnLogin:{
       width:WIDTH-55,
       height:45,
       backgroundColor:'#453291',
       justifyContent:'center',
       marginTop:20,
      borderRadius:45,

     },
     textBtn:{
       color:'white',
       fontSize:16,
       opacity:0.5,
       textAlign:'center',
       fontFamily:'Montserrat-Bold.ttf'

     }
    });
