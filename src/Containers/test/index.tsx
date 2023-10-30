import React, { FC, memo, useRef, useState } from 'react';
import { Button, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import ThemeSwitchScreen from '../../Component/WithLogin/ChangeTheme/changeTheme';
import DraggableBottomSheet from '../../Component/WithLogin/DragableBottomSheet';
import PicturePicker from '../../Component/WithLogin/PicturePicker';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import TextBox from '../../Component/TextBox';

const Test: FC<any> = props => {
  const styles = styleScaled(props.color);

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
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <TextBox>{t('HELLO') + auth().currentUser?.displayName}</TextBox>

      <Button title={t("CHECK_USER")} onPress={() => console.log('currentUser:', auth().currentUser)} />

      <Button title={t("UPDATE_USER")} onPress={() => UpdateUser()} />


      <ThemeSwitchScreen />

      <Button title={t("OPEN_PICTURE_PICKER")} onPress={() => showPicturePicker()} />

      <DraggableBottomSheet showUp={showUp} percentHeight={0.6}>
        <PicturePicker></PicturePicker>
      </DraggableBottomSheet>
    </View>
  );
};

export default memo(Test);
