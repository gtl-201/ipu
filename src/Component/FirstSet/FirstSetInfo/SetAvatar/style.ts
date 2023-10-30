import { SHADOW_1, SHADOW_2, SHADOW_5, SHADOW_7 } from '../../../../Utils/Values/shadows';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { moderateScale } from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Color.background,
      paddingHorizontal: 20,
    },
    skipContainer:{
      alignSelf: 'flex-end',
      paddingVertical: 20,
    },
    skip: {
      color: Color.primaryText2,
      fontSize: 15,
    },
    CenterContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      maxWidth: '60%',
      textAlign: 'center',
      color: Color.primaryText,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    pictureContainer: {
      width: 180,
      height: 180,
      backgroundColor: 'red',
      borderRadius: 100,
      overflow: 'hidden',
      ...SHADOW_1,
    },
    imageStyle: {
      width: 180,
      height: 180,
      resizeMode: 'stretch',
    },
    signUp: {
      backgroundColor: Color.primary,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      // ...SHADOW_5,
      marginVertical: 40,
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
  });
};
export default styleScaled;
