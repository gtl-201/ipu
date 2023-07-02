import React, { FC, memo, useRef } from 'react';
import { PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const Test: FC<any> = props => {
  const styles = styleScaled(props.color);


  return (
    <View style={{ flex: 1, backgroundColor: 'blue'}} />
  );
};

export default memo(Test);
