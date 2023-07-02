import React, { FC, memo, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  color: any,
  allTab: any[],
}

const BottomTab: FC<Props> = ({ color, allTab }) => {
  console.log('allTab is', allTab);
  console.log('color is', color);

  const windowWidth = Dimensions.get('window').width;
  const widthTab: number = windowWidth / allTab.length;
  console.log(widthTab);
  const [tabAvtive, setTabAvtive] = useState(1);
  const styles = styleScaled(color);
  return (
    <View style={[styles.FlexHorizon, styles.BottomTabContainer]}>
      {allTab.map((item) => tabAvtive === item.component ? (
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            console.log(item.component);
            setTabAvtive(item.component);
          }}
          style={[{ width: widthTab }, styles.EachButton]}>
          <Icon name={item.icon.fill} size={30} color={'#3a7bf6'} />
          <Text style={{ color: '#3a7bf6' }}>{item.name}</Text>
        </TouchableOpacity>
      ) :
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            console.log(item.component);
            setTabAvtive(item.component);
          }}
          style={[{ width: widthTab }, styles.EachButton]}>
          <Icon name={item.icon.outline} size={30} />
          <Text>{item.name}</Text>
        </TouchableOpacity>)}
    </View>
  );
};

export default memo(BottomTab);
