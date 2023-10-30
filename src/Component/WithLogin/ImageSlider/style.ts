import {Dimensions, Platform, StatusBar} from 'react-native';
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
      // flex: 1,
      // justifyContent: 'center',
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    TextContainer: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 30,
    },
    title: {
      fontWeight: '800',
      fontSize: 25,
      letterSpacing: 1,
      width: windowWidth * (90 / 100),
      textAlign: 'center',
      color: Color.primaryText,
      marginBottom: 5,
      marginTop: 18,
    },
    subTitle: {
      fontWeight: '700',
      fontSize: 18,
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
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
    },
    scrollBox: {
      // width: 10,
      height: 3,
      // borderRadius: 5,
      // marginHorizontal: 5,
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
    boxCount: {
      position: 'absolute',
      backgroundColor: '#A9a9a9',
      borderRadius: 5,
      bottom: 10,
      right: 10,
      paddingVertical: 2,
      paddingHorizontal: 5,
    },
    numCount: {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: '700',
      letterSpacing: 2,
    },
  });
};
export default styleScaled;
