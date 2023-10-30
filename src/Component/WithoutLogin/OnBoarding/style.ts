import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  const windowWidth = Dimensions.get('window').width;
  return ScaledSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.background,
    },
    containerItem: {
      flex: 1,
      width: windowWidth,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 0.7,
      // justifyContent: 'center',
      width: windowWidth,
      // alignItems: 'center',
      // alignSelf: 'center',
      // width: 50,
      // height: 50,
    },
    title: {
      fontWeight: '800',
      fontSize: 35,
      letterSpacing: 1,
      width: windowWidth * (90 / 100),
      textAlign: 'center',
      color: Color.primaryText,
    },
    subTitle: {
      // fontWeight: '800',
      fontSize: 16,
      letterSpacing: 0.7,
      // paddingHorizontal: 20,
      width: windowWidth * (70 / 100),
      color: Color.primaryText,
      textAlign: 'center',
    },
    circleBtn: {
      width: 50,
      height: 50,
      backgroundColor: Color.primary,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    navigator: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 50,
    },
    scrollBox: {
      // width: 10,
      height: 10,

      borderRadius: 5,
      marginHorizontal: 5,
    },
    textWhite: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      letterSpacing: 0.8,
    },
    skip: {
      position: 'absolute',
      // top: statusBarHeight,
      top: 0,
      right: 0,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'row',
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  });
};
export default styleScaled;
