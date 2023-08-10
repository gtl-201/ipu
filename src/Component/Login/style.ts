import {Dimensions, Platform, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { SHADOW_1, SHADOW_2, SHADOW_3, SHADOW_5 } from './../../Utils/Values/shadows';
import { moderateScale } from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      // height: '100%',
      // width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      opacity: 0.9,
    },
    // absoluteBlur: {
    //   ...StyleSheet.absoluteFillObject,
    //   backgroundColor: 'rgba(255, 255, 255, 0.7)', // Điều này sẽ tạo hiệu ứng mờ giống kính
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   zIndex: 100,
    // },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      // left: -200,
      // transform: [{ rotate: '180deg' }],
    },
    input: {
      height: 45,
      fontSize: 16,
      marginVertical: 10,
      width: '100%',
      borderColor: 'gray',
      backgroundColor: 'white',
      marginBottom: 10,
      paddingHorizontal: 10,

      borderWidth: 1,
      borderRadius: 10,
      borderTopWidth: 0,
      borderEndWidth: 0,
      borderLeftWidth: 0,
      borderBottomWidth: 0,
      ...SHADOW_3,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginTop: 10,
      textAlign: 'center',
    },
    showPass: {
      position: 'absolute',
      right: 15,
      top: 23,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      letterSpacing: 1.2,
      // color: '#171717',
      opacity: 0.7,
      textTransform: 'capitalize',
    },
    subTitle: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 2,
      // color: '#171717',
      opacity: 0.7,
      textTransform: 'capitalize',

    },
    continue: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 1,
      marginVertical: 15,
    },
    forgetPass: {
      width: '100%',
      alignItems: 'flex-end',
      marginVertical: 5,
      opacity: 0.7,
    },
    signIn: {
      backgroundColor: '#ED2939',
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      // ...SHADOW_5,
      marginVertical: 20,
    },
    shadow5: {
      shadowColor: '#ED2939',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    image: {
      width: 22,
      height: 22,
    },
    borderIc: {
      borderRadius: 10,
      borderWidth: 5,
      borderColor: 'white',
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginHorizontal: 10,
    },
    flexRow: {
      // flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 25,
    },
  });
};
export default styleScaled;
