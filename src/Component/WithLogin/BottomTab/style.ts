import { SHADOW_3 } from '../../../Utils/Values/shadows';
import { Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';



const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    FlexHorizon:{
      display:'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingBottom: 30,
      margin: 0,
    },
    BottomTabContainer:{
      height: 80,
      // backgroundColor: 'white',
      borderTopRightRadius: 25,
      borderRadius: 25,
      // borderWidth: 5,
      // borderColor: 'white',
      borderTopStartRadius: 25,
      ...SHADOW_3,
    },
    EachButton:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: 'pink',
      borderRadius: 25,
    },
    ButtonActive:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    }
  });
};
export default styleScaled;
