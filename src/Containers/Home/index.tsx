import React, { FC, memo, useRef } from 'react';
import { PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';

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
  console.log('u la troi');

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} {...panResponder.panHandlers}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('test')
        }}
        style={{ with: 200, height: 40, backgroundColor: 'blue' }} />


    </View >
  );
};

export default memo(Home);
