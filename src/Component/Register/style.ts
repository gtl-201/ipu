import {SHADOW_3} from './../../Utils/Values/shadows';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (theme: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      opacity: 0.9,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      letterSpacing: 1.2,
      color: theme.primaryText,
      opacity: 0.9,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 2,
      color: theme.primaryText,
      opacity: 0.9,
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
      marginVertical: 10,
      width: '100%',
      borderColor: theme.onBackground2,
      backgroundColor: theme.onBackground,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderWidth: 0,
      borderRadius: 10,
      color: theme.primaryText,
      ...SHADOW_3,
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
      top: 23,
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
  });
};
export default styleScaled;
