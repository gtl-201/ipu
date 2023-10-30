import { Dimensions, Platform } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (theme: any) => {
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.8;
  // const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.5;
  return ScaledSheet.create({
    container: {
      flex: 1,
    },
    bottomSheet: {
      position: 'absolute',
      width: '100%',
      height: BOTTOM_SHEET_MAX_HEIGHT,
      bottom: -BOTTOM_SHEET_MAX_HEIGHT + 50,
      ...Platform.select({
        android: {elevation: 3},
        ios: {
          shadowColor: '#a8bed2',
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },
      }),
      backgroundColor: 'white',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
    },
    draggableArea: {
      width: 132,
      height: 35,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dragHandle: {
      width: 100,
      height: 6,
      backgroundColor: '#d3d3d3',
      borderRadius: 10,
    },
  });
};
export default styleScaled;
