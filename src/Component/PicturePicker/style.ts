import {ScaledSheet} from 'react-native-size-matters';

const styleScaled = (theme: any) => {
  return ScaledSheet.create({
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      // padding: 20,
      backgroundColor: theme.onBackground,
      // paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: theme.onBackground,
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
      color: theme.primaryText,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
      color: theme.primaryText,
    },
    panelSubtitle: {
      fontSize: 14,
      height: 30,
      marginBottom: 10,
      color: theme.primaryText2,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: theme.primary,
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      //   opacity: 0.9,
    },
    containerPicturePreview: {
      flexDirection: 'row',
      width: '100%',
    },
    imageContainer: {
      width: 100,
      height: 100,
      marginHorizontal: 5,
    },
    removeContainer: {
      // position: 'absolute',
      // zIndex: 10,
      // backgroundColor: 'red',
      width: 100,
      height: 100,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      // top: -10,
      // left: -10,
      marginHorizontal: 5,
    },
    rashIc: {
      position: 'absolute',
      top: 40,
      left: 40,
      zIndex: 1,
      width: 100,
      height: 100,
      //   backgroundColor: theme.onBackground,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
export default styleScaled;
