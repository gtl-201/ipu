import {SHADOW_3} from './../../Utils/Values/shadows';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const width = Dimensions.get('window').width / 3;

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
    },
    header: {
      width: '100%',
      height: 80,
      backgroundColor: Color.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleHeader: {
      color: '#FFFFFF',
      fontSize: 23,
      fontWeight: 'bold',
    },
    VerifyBoxContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'center',
      // alignItems: 'center',
    },
    tittle: {
      color: Color.primaryText2,
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 5,
    },
    content: {
      color: Color.primaryText3,
      fontSize: 16,
      fontWeight: '400',
      paddingVertical: 10,
      letterSpacing: 1.1,
      lineHeight: 22,
    },
    button: {
      width: 170,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Color.primary,
      borderRadius: 7,
      marginVertical: 20,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    imageStyle: {
      width: '100%',
      resizeMode: 'contain',
      marginTop: -40,
      alignSelf: 'center',
    },
  });
};
export default styleScaled;
