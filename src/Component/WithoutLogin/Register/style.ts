import {SHADOW_3} from '../../../Utils/Values/shadows';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (theme: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      padding: 20,
      opacity: 0.9,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 30,
      letterSpacing: 1.2,
      color: theme.primaryText,
      opacity: 0.9,
      // alignSelf: 'left',
    },
    subTitle: {
      fontSize: 15,
      fontWeight: '500',
      letterSpacing: 1.3,
      color: theme.primaryText2,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    signUp: {
      backgroundColor: theme.error,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      // ...SHADOW_5,
      marginVertical: 40,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    input: {
      height: 45,
      fontSize: 16,
      width: '100%',
      borderColor: theme.primaryText2,
      paddingHorizontal: 10,
      color: theme.primaryText,
    },
    shadow5: {
      shadowColor: theme.error,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    showPass: {
      position: 'absolute',
      right: 15,
      // top: 23,
    },
    flexRow: {
      // flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 25,
    },
    continue: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 1,
      marginVertical: 15,
    },
    inputTitle: {
      fontSize: 15,
      fontWeight: '500',
      letterSpacing: 1.1,
      color: theme.primaryText3,
      opacity: 0.9,
      // opacity: 0.7,
      // textTransform: '',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    containerInput:{
      width: '100%',
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: theme.primaryText3,
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
export default styleScaled;
