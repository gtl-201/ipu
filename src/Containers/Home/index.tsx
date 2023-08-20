import React, { FC, memo, useRef, useState } from 'react';
import { Alert, Button, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes/index';
import ThemeSwitchScreen from '../../Component/ChangeTheme/changeTheme';
import PicturePicker from '../../Component/PicturePicker';
import DraggableBottomSheet from '../../Component/DragableBottomSheet';
import Verify from '../../Component/Verify';


const Home: FC<any> = (props) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;

  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, guesture) => {
      // console.log('event: ', event);
      console.log('gusture: ', guesture);
    },
  })).current;

  const { t } = useTranslation();
  const user = auth().currentUser;
  const UpdateUser = () => {
    user?.updateProfile({
      displayName: 'Tên Hiển Thị Mới',
      photoURL: 'https://example.com/profile.jpg',
    })
      .then(() => {
        console.log('Cập nhật thông tin hồ sơ người dùng thành công');
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật thông tin hồ sơ người dùng:', error);
      });
  };

  const [showUp, setShowUp] = useState(false);
  const showPicturePicker = async () => {
    await setShowUp(true);
    setShowUp(false);
  };

  return (
    // {...panResponder.panHandlers}
    <View style={{ flex: 1, backgroundColor: theme.background }} >
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Login');
          auth()
            .signOut().then((value) => {
              console.log(value);
            }).catch(err => {
              console.log(err);
            });
          // console.log('Tên của Firebase:', firebase.app());
        }}
        style={styles.button}>
        <Text>Sign out</Text>
      </TouchableOpacity>

      {/* <Button title={t("VERIFY_EMAIL")} onPress={() => auth().currentUser?.sendEmailVerification()
        .then((data) => console.log(data))
        .catch((err: any) => console.log(err))} /> */}
      <Text>{t('HELLO')} {auth().currentUser?.displayName}</Text>

      <Button title={t("CHECK_USER")} onPress={() => console.log('currentUser:', auth().currentUser)} />

      <Button title={t("UPDATE_USER")} onPress={() => UpdateUser()} />


      <ThemeSwitchScreen />

      <Button title={t("OPEN_PICTURE_PICKER")} onPress={() => showPicturePicker()} />

      <DraggableBottomSheet showUp={showUp} percentHeight={0.6}>
        <PicturePicker></PicturePicker>
      </DraggableBottomSheet>
      <View style={{ position: 'absolute', bottom: 50, left: 100 }}>
      </View>
    </View >
  );
};

export default memo(Home);
