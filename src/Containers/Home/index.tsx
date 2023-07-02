import React, { FC, memo, useRef } from 'react';
import { PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const Home: FC<any> = props => {
  const styles = styleScaled(props.color);

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
    <View style={{ flex: 1, backgroundColor: 'red'}} {...panResponder.panHandlers} />
  );
};

export default memo(Home);
