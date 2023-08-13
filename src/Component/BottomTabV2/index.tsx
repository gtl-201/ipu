import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useTheme } from '../../Utils/Themes';


// interface Props {
//   color: any,
//   allTab: any[],
//   navigation: any,
// }

const EachButton = (props: any) => {
  const { index, item, allTab, toggleBottomTab, press, tabAvtive, setTabAvtive } = props;
  const {theme} = useTheme();
  const styles = styleScaled(theme);
  const windowWidth = Dimensions.get('window').width * 0.95;
  const widthTab: number = (windowWidth / allTab.length) - (((allTab.length / 2) * 10) - 10);
  const widthTabActive: number = (windowWidth / allTab.length) + (((allTab.length / 2) * 10) + 10);

  const animatedValueText = useRef(
    new Animated.Value(0)
  ).current;


  useEffect(() => {
      Animated.timing(animatedValueText, {
        toValue: tabAvtive === index ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
  }, [tabAvtive]);

  const textStyle = {
    marginLeft: animatedValueText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 7],
    }),
    opacity: animatedValueText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    fontSize: animatedValueText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    }),
    width: animatedValueText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 44],
    }),
  };


  return (
    <View
      key={index}
    >
      <TouchableOpacity
        onPress={() => {
          if (tabAvtive === index) {
            toggleBottomTab();
          } else {
            setTabAvtive(index);
            console.log('item: ', item);
            press(item.name);
            // navigation.navigate('test');
            // press('test');
          }
        }}
        style={[{ width: index === tabAvtive ? widthTabActive : widthTab }, styles.EachButton]}>
        {/* animatedWidthValue */}
        <Animated.View style={[index === tabAvtive ? styles.ActiveIcon : styles.EachButton]}>
          <Icon name={index === tabAvtive ? item.icon.fill : item.icon.outline} size={30} color={index === tabAvtive ? '#FFFFFF' : theme.onBackground2} />

          <Animated.Text style={[{color: '#FFFFFF', fontWeight: 'bold', flexWrap: 'nowrap'}, textStyle]}>{item.name}</Animated.Text>

        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const BottomTabV2: FC<any> = ({ allTab, press }) => {

  const windowWidth = Dimensions.get('window').width * 0.95;
  const {theme} = useTheme();
  const styles = styleScaled(theme);

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

  const [tabAvtive, setTabAvtive] = useState(0);
  // Animation BottomTab End
  return (
    <View style={{ marginTop: -100 }}>
      <Animated.View style={[styles.BurgerContainer, { marginRight: animationBurgerValue }]}>
        <TouchableOpacity
          style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            toggleBottomTab();
          }}
        >
          <IconAnt name={'menu-unfold'} size={30} color={'white'} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.FlexHorizon, styles.BottomTabContainer, { width: animatedWidthValue, marginLeft: animatedPositionValue }]}>
        {allTab.map((item: any, index: any) => (
          <EachButton key={index} index={index} item={item} allTab={allTab} toggleBottomTab={() => toggleBottomTab()} press={press} tabAvtive={tabAvtive} setTabAvtive={setTabAvtive} />
        )
        )}
      </Animated.View>
    </View >
  );
};

export default memo(BottomTabV2);
