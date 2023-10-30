import {Dimensions, Platform, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { SHADOW_1, SHADOW_2, SHADOW_3, SHADOW_5 } from '../../../Utils/Values/shadows';
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
      // justifyContent: 'space-around',
    },
    containerInput:{
      width: '100%',
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: Color.primaryText3,
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 45,
      fontSize: 16,
      width: '100%',
      borderColor: Color.primaryText2,
      // marginLeft: 10,
      // backgroundColor: Color.onBackground,
      // marginBottom: 20,
      paddingHorizontal: 10,
      color: Color.primaryText,
      // borderWidth: 1,
      // borderRadius: 10,
      // borderTopWidth: 0,
      // borderEndWidth: 0,
      // borderLeftWidth: 0,
      // borderBottomWidth: 0,
      // ...SHADOW_3,
    },
    text: {
      marginTop: 10,
      textAlign: 'center',
    },
    showPass: {
      position: 'absolute',
      right: 15,
      // top: 23,
    },
    inputTitle: {
      fontSize: 15,
      fontWeight: '500',
      letterSpacing: 1.1,
      color: Color.primaryText3,
      opacity: 0.9,
      // opacity: 0.7,
      // textTransform: '',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      letterSpacing: 1.2,
      color: Color.primaryText,
      // opacity: 0.7,
      textTransform: 'capitalize',
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    subTitle: {
      fontSize: 15,
      fontWeight: '500',
      letterSpacing: 1.3,
      color: Color.primaryText3,
      // opacity: 0.7,
      // textTransform: '',
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    continue: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 1,
      marginVertical: 15,
      color: Color.primaryText,
    },
    forgetPass: {
      width: '100%',
      alignItems: 'flex-end',
      marginTop: 5,
      marginBottom: 25,
      opacity: 0.7,
    },
    signIn: {
      backgroundColor: Color.primary,
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    shadow5: {
      shadowColor: Color.primary,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    image: {
      width: 30,
      height: 30,
    },
    borderIc: {
      // borderRadius: 10,
      // borderWidth: 5,
      // borderColor: Color.onBackground,
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
    },
  });
};
export default styleScaled;
