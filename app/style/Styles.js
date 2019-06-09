import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  center_View:{
      width:'100%',
      alignItems: 'center',
      textAlign:'center',
      // height:'100%',
       justifyContent:'center'
  },
  container: {
    flex: 1,
    height:'100%',
    alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
    justifyContent:'center'
  },
  text_header: {
   color:'black',
   padding:20,
    fontWeight: 'bold',
   fontSize:20,
  },
text_input:{
  height: 40,
   paddingRight:20,
   paddingLeft:20,
   paddingTop:10,
   paddingBottom:10,
  borderColor: 'gray',
  borderWidth: 1,
  width:'80%'

},

  button:{
   paddingRight:40,
   paddingLeft:40,
   paddingTop:10,
   paddingBottom:10,
   backgroundColor:'#1E6738',
   borderRadius:10,
   borderWidth: 1,
   borderColor: '#fff'
 },
 button_text:{
     color:'#fff',
      fontSize:16,
     textAlign:'center',
     paddingLeft : 10,
     paddingRight : 10
 },
 bg:{
   alignItems:'center',
     flex:1,
      width:null,
      height:null,
      justifyContent:'center'
 }
});
