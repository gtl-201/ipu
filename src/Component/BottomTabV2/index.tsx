import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';


interface Props {
  color: any,
  allTab: any[],
}

const BottomTabV2: FC<Props> = ({ color, allTab }) => {
  console.log('allTab is', allTab);
  console.log('color is', color);

  const windowWidth = Dimensions.get('window').width * 0.95;
  const widthTab: number = (windowWidth / allTab.length) - (((allTab.length / 2) * 10) - 10);
  const widthTabActive: number = (windowWidth / allTab.length) + (((allTab.length / 2) * 10) + 10);

  const [tabAvtive, setTabAvtive] = useState(0);

  const styles = styleScaled(color);

  // Animation BottomTab Start
  const [bottomTabOpen, setBottomTabOpen] = useState(false);
  const animatedWidthValue = useRef(
    new Animated.Value(0)
  ).current;
  const animatedPositionValue = useRef(
    new Animated.Value(windowWidth + 100)
  ).current;
  const animationBurgerValue = useRef(
    new Animated.Value(0)
  ).current;

  const toggleBottomTab = () => {
    if (bottomTabOpen) {
      Animated.timing(animatedWidthValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedPositionValue, {
        toValue: windowWidth + 400,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(animationBurgerValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      setBottomTabOpen(false);
    } else {
      Animated.timing(animatedWidthValue, {
        toValue: windowWidth,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedPositionValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(animationBurgerValue, {
        toValue: -120,
        duration: 600,
        useNativeDriver: false,
      }).start();
      setBottomTabOpen(true);
    }
  };

  // Animation BottomTab End

  return (
    <View>
      <Animated.View style={[styles.BurgerContainer, { marginRight: animationBurgerValue }]}>
        <TouchableOpacity
          style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            toggleBottomTab();
          }}
        >
          <IconAnt name={'menu-unfold'} size={30} color={'#979797'} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.FlexHorizon, styles.BottomTabContainer, { width: animatedWidthValue, marginLeft: animatedPositionValue }]}>
        {allTab.map((item, index) => (
          <View
            key={index}
          >
            <TouchableOpacity
              onPress={() => {
                if (tabAvtive === index) {
                  toggleBottomTab();
                } else {
                  setTabAvtive(index);
                }
              }}
              style={[{ width: index === tabAvtive ? widthTabActive : widthTab }, styles.EachButton]}>
              <Animated.View style={[index === tabAvtive && styles.ActiveIcon]}>
                <Icon name={index === tabAvtive ? item.icon.fill : item.icon.outline} size={30} color={index === tabAvtive ? '#343434' : '#979797'} />

                {index === tabAvtive && <Text style={{ color: '#343434', marginLeft: 7, fontWeight: 'bold' }}>{item.name}</Text>}

              </Animated.View>
            </TouchableOpacity>
          </View>
        )
        )}
      </Animated.View>
    </View >
  );
};

export default memo(BottomTabV2);
