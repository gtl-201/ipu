import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../Utils/Themes';
import ThemeSwitchScreen from '../../../WithLogin/ChangeTheme/changeTheme';
import PicturePicker from '../../../WithLogin/PicturePicker';
import DraggableBottomSheet from '../../../WithLogin/DragableBottomSheet';
// import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import TextBox from '../../../TextBox';

const SetAvatarScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const { t } = useTranslation();
  const user = auth().currentUser;

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>(user ? user.photoURL : '');

  const navigation = props.navigation;
  console.log(image, '???????/');


  // Update firebase auth
  const UpdateUser = (url: string) => {
    if (user?.photoURL === '' || user?.photoURL === null) {
      user?.updateProfile({
        // displayName: newUserName,
        photoURL: url,
      })
        .then(() => {
          console.log('Cập nhật thông tin hồ sơ người dùng thành công');
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật thông tin hồ sơ người dùng:', error);
        });
    } else {
      console.log('not update');
    }
  };

  // Put image to firebase storage
  const handleImageUpload = async () => {
    const name = 'Avatar/' + user?.uid + '.jpg';
    let reference = storage().ref(name);         // 2
    let task = reference.putFile(image);               // 3
    task.then(async () => {                                 // 4
      console.log('Image uploaded to the bucket!');
      await setUserAvatar();
      navigation.navigate('home');
    }).catch((e) => {
      console.log('uploading image error => ', e);
      setLoading(false);
    });
  };

  // get image URL from firebase storage to update firebase auth
  const setUserAvatar = () => {
    const name = 'Avatar/' + user?.uid + '.jpg';
    storage()
      .ref(name) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        UpdateUser(url);
        setLoading(false);
      })
      .catch((e) => {
        console.log('Errors while downloading => ', e);
        setLoading(false);
      });
  };

  const choosePhotoFromLibrary = () => {
    if (ImagePicker) {
      setLoading(true);
      ImagePicker.openPicker({
        width: 180,
        height: 180,
        cropping: true,
        multiple: false,
        compressImageQuality: 1,
      }).then(imageChoosed => {
        setImage(imageChoosed.path);
        setLoading(false);
      }).catch((err: any) => {
        console.log('>>>>>>>>', err);
        setLoading(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color={theme.primary} style={{ width: '140%', height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', zIndex: 20 }} />}
      <TouchableOpacity style={styles.skipContainer} onPress={async () => {
        await UpdateUser('');
        navigation.navigate('home');
      }
      }>
        <TextBox style={styles.skip}>{t('FOR_AFTER')}</TextBox>
      </TouchableOpacity>
      <View style={styles.CenterContainer}>
        <TextBox style={styles.title}>{t('SET_A_PICTURE_FOR_YOURSELFT') + user?.displayName + '!'}</TextBox>

        <TouchableOpacity style={styles.pictureContainer}
          onPress={() => {
            choosePhotoFromLibrary();
          }}>
          <Image
            source={image !== ''
              ? { uri: image }
              : (user?.photoURL !== null)
                ? { uri: user?.photoURL }
                : require('../../../../../asset/picture/avatar-default.jpg')}
            style={styles.imageStyle} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.signUp, styles.shadow5]}
        onPress={() => {
          setLoading(true);
          image !== '' && handleImageUpload();
        }}
      >
        <TextBox style={{ color: 'white', fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>{t('CONTINUES')}</TextBox>
      </TouchableOpacity>

    </View>
  );
};

export default SetAvatarScreen;

