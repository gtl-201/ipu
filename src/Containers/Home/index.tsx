import React, { FC, memo, useRef } from 'react';
import { Button, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes/index';
import ThemeSwitchScreen from '../../Component/ChangeTheme/changeTheme';


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
  }

  )).current;
  console.log('u la troi', auth().currentUser?.displayName);

  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
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

      <Button title="Verify Email" onPress={() => auth().currentUser?.sendEmailVerification()
        .then((data) => console.log(data))
        .catch((err: any) => console.log(err))} />
      <Text>{t('hello')} {auth().currentUser?.displayName}</Text>

      <Button title="check user" onPress={() => console.log('currentUser:', auth().currentUser)} />

      <ThemeSwitchScreen />
    </View >
  );
};

export default memo(Home);
