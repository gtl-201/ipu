import React, { FC, memo, useRef } from 'react';
import { Button, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const Home: FC<any> = (props) => {
  const styles = styleScaled(props.color);
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
        style={{ with: 200, height: 40, backgroundColor: 'blue' }} />
      <Button title="Verify Email" onPress={() => auth().currentUser?.sendEmailVerification()
        .then((data) => console.log(data))
        .catch((err: any) => console.log(err))} />
      <Text>Hello {auth().currentUser?.displayName}</Text>

      <Button title="check user" onPress={() => console.log('currentUser:', auth().currentUser)} />
    </View >
  );
};

export default memo(Home);
