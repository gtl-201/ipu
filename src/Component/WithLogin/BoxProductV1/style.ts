import {SHADOW_3} from '../../../Utils/Values/shadows';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  const windowWidth = Dimensions.get('window').width;
  return ScaledSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      paddingBottom: 35,
    },
    eachItemContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    productImgContainer: {
      width: 90,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      // ...SHADOW_3,
      marginRight: 10,
    },
    productImg: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    textProductContainer: {
      overflow: 'hidden',
      width: windowWidth - 20 - 100,
      justifyContent: 'center',
    },
    nameProduct: {
      color: Color.primaryText,
      marginBottom: 4,
      fontSize: 15,
      fontWeight: '500',
    },
    priceProduct: {
      color: Color.primaryText3,
      fontSize: 15,
    },
    column: {
      width: windowWidth - 20,
    },
    pageCount: {
      position: 'absolute',
      bottom: 0,
      width: 100,
      height: 30,
      // backgroundColor: 'red',
      right: (windowWidth / 2) - 75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countNumber:{
      fontSize: 19,
      fontWeight: '500',
      letterSpacing: 10,
    },
  });
};
export default styleScaled;
