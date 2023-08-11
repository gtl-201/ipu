import {SHADOW_3} from './../../Utils/Values/shadows';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const width = Dimensions.get('window').width / 3;

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    button: {
      with: 200,
      height: 40,
      backgroundColor: Color.primary,
    },
  });
};
export default styleScaled;
