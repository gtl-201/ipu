import {SHADOW_3} from '../../../Utils/Values/shadows';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (Color: any) => {
  const scWidth = Dimensions.get('window').width;
  return ScaledSheet.create({
    FlexHorizon: {
      display: 'flex',
      flexDirection: 'row',
    },
    BurgerContainer:{
      backgroundColor: Color.primary,
      width: 60,
      height: 60,
      // justifyContent: 'space-between',
      display:'flex',
      alignItems: 'center',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginTop: 0,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      ...SHADOW_3,
    },
    // CircleBlack:{
    //   // backgroundColor: '',
    //   width: 60,
    //   height: 60,
    //   marginTop: -60,
    //   borderRadius: 30,
    //   marginLeft: 15,
    //   borderWidth: 15,
    //   borderColor: '#343434',
    // },
    BottomTabContainer: {
      height: 70,
      // height: 0,
      borderRadius: 35,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Color.onBackground,
      // marginTop: -70,
      // width: scWidth * 0.95,
      ...SHADOW_3,
      position: 'absolute',
      right: scWidth,
      maxWidth: scWidth * 0.98,
    },
    EachButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: 'pink',
      borderRadius: 25,
      height: 50,
      flexDirection: 'row',

      // backgroundColor:'pink',
    },
    ButtonActive: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    },
    ActiveIcon: {
      minWidth: 55,
      height: 50,
      borderRadius: 27,
      backgroundColor: Color.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 15,
      // position: 'absolute',
    },
  });
};
export default styleScaled;
