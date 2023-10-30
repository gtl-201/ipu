import {SHADOW_3} from '../../../Utils/Values/shadows';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  const windowWidth = Dimensions.get('window').width;
  return ScaledSheet.create({
    container: {
      // flex: 1,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      // height: 100,
      paddingVertical: 15,
      justifyContent: 'space-between',
      alignContent: 'space-between',
    },

    brandBox: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerImg: {
      overflow: 'hidden',
      // ...SHADOW_3,
      padding: 5,
    },
    image: {
      height: windowWidth / 6,
      width: windowWidth / 6,
      borderRadius: 40,
    },
    brandName: {
      fontSize: 15,
      fontWeight: '600',
      textTransform: 'uppercase',
      color: Color.primaryText,
    },
  });
};
export default styleScaled;
