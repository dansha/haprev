import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top:30,
      },
      background:{
        width: '100%',
        height: '100%'
      },
      backIcon:{
        width:17,
        height:27,
        marginLeft:21,
        marginTop:21
      },
      userView:{
        alignItems:'center',
        justifyContent:'center',
      },
      userImage:{
        width:150,
        height:150,
      },
      title:{
        color:'white',
        fontSize: 36,
        fontWeight:'400'
      },
      registerButton: {
        justifyContent: 'center',
        marginTop: 24,
        height: 60,
        width: '100%',
      },
      buttonsContainer: {
        marginHorizontal: 36,
        justifyContent: 'center'
      },
      buttonText: {
        color:'white',
        fontSize: 26,
        fontWeight: '400',
      }
});