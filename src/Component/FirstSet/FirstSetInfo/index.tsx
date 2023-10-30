import React, { useState } from 'react';
import { View, TextInput, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon2 from 'react-native-vector-icons/Feather';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';
// import { connect } from 'react-redux';


const FirstSetInfoScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const user = auth().currentUser;
  const baseName = (user && user.displayName && user.displayName !== null) ? user.displayName : '';
  const [newUserName, setnewUserName] = useState(baseName);
  const [loading, setLoading] = useState(false);

  const navigation = props.navigation;


  const UpdateUser = () => {
    setLoading(true);
    user?.updateProfile({
      displayName: newUserName,
      // photoURL: 'https://example.com/profile.jpg',
    })
      .then(() => {
        console.log('Cập nhật thông tin hồ sơ người dùng thành công');
        navigation.navigate('setAvatar');
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật thông tin hồ sơ người dùng:', error);
        setLoading(false);
      });
  };

  //   const handleUpdatePhoneNumber = async () => {
  //     try {
  //         const user = auth().currentUser;
  //         if (user) {
  //             const credential = auth.PhoneAuthProvider.credential(
  //                 user.phoneNumber, // Số điện thoại hiện tại của người dùng
  //                 // OTP (Mã xác thực một lần) gửi đến số điện thoại mới
  //             );
  //             await user.reauthenticateWithCredential(credential);
  //             await user.updatePhoneNumber(newPhoneNumber);

  //             Alert.alert('Success', 'Phone number updated successfully.');
  //         }
  //     } catch (error: any) {
  //         Alert.alert('Error', error.message);
  //     }
  // };

  const { t } = useTranslation();
  return (
    <ImageBackground
      source={theme.theme === 'light' ? require('../../../../asset/picture/5.jpg') : require('../../../../asset/picture/bgLoginDark.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={100}
    >
      {loading && <ActivityIndicator size="large" color={theme.primary} style={{ width: '140%', height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', zIndex: 20 }} />}

      <TextBox style={styles.title}>{t('WELCOME_TO')}</TextBox>
      <TextBox style={[styles.title, { color: theme.error }]}> Ipu </TextBox>
      <TextBox style={styles.title}>{t('app')}</TextBox>
      <TextBox style={[styles.subTitle, { marginBottom: 22 }]}>{t('ENTER_YOUR_INFOMATION')}</TextBox>

      <TextBox style={styles.inputTitle}>{t('USER_NAME')}</TextBox>
      <View style={styles.containerInput}>
        <Icon2
          name={'user'}
          size={24}
          color={theme.primaryText2} />
        <TextInput
          style={styles.input}
          placeholder={t('EX_IPU988')}
          value={newUserName}
          onChangeText={setnewUserName}
          placeholderTextColor={theme.primaryText3}
        />
      </View>

      {/* <TextBox style={styles.inputTitle}>{t('PHONE_NUMBER')}</TextBox>
      <View style={styles.containerInput}>
        <Icon2
          name={'phone'}
          size={24}
          color={theme.primaryText2} />
        <TextInput
          style={styles.input}
          placeholder={t('EX_086899765')}
          value={newPhoneNumber}
          onChangeText={setNewPhoneNumber}
          placeholderTextColor={theme.primaryText3}
        />
      </View> */}

      <TouchableOpacity style={[styles.signIn, styles.shadow5]} onPress={() => { UpdateUser() }}>
        <TextBox style={{ color: theme.onBackground, fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>{t('CONTINUES')}</TextBox>
      </TouchableOpacity>
    </ImageBackground>
  );
};


// function mapStateToProps(state: any) {
//   return {
//     color: state.controlApp.settings.color.LOGIN,
//     language: state.controlApp.settings.language,
//   };
// }

// export default connect(mapStateToProps)(FirstSetInfoScreen);


export default FirstSetInfoScreen;

