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
  const { theme } = useTheme();
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
  const IconStyle = {
    transform: [
      {
        rotate: animatedValueText.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
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
        <Animated.View style={[index === tabAvtive ? styles.ActiveIcon : styles.EachButton]}>
          <Animated.View style={IconStyle}>
            <Icon name={index === tabAvtive ? item.icon.fill : item.icon.outline} size={30} color={index === tabAvtive ? '#FFFFFF' : theme.onBackground2} />
          </Animated.View>
          <Animated.Text style={[{ color: '#FFFFFF', fontWeight: 'bold', flexWrap: 'nowrap', fontSize: 15 }, textStyle]}>{item.name}</Animated.Text>

        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const BottomTabV2: FC<any> = ({ allTab, press }) => {

  const windowWidth = Dimensions.get('window').width * 0.95;
  const { theme } = useTheme();
  const styles = styleScaled(theme);

  // Animation BottomTab Start
  const [bottomTabOpen, setBottomTabOpen] = useState(false);

  const animatedBarValue = useRef(new Animated.Value(0)).current;
  const animationBurgerValue = useRef(new Animated.Value(0)).current;

  const toggleBottomTab = () => {
    if (bottomTabOpen) {
      Animated.timing(animatedBarValue, {
        toValue: 0,
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
      Animated.timing(animatedBarValue, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(animationBurgerValue, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      setBottomTabOpen(true);
    }
  };

  const animationBurger = {
    right: animationBurgerValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -120],
    }),
  };
  const animationBar2 = {
    transform: [
      {
        translateX: animatedBarValue.interpolate({
          inputRange: [0, 1],
          outputRange: [(windowWidth * 2) + 100, (windowWidth * 0.98) + (windowWidth * 0.05)],
          // extrapolate: 'clamp',
        }),
      },
      // {
      //   scale: animatedBarValue.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: [0, 1],
      //   }),
      // },
    ],

  };

  const [tabAvtive, setTabAvtive] = useState(0);
  // Animation BottomTab End
  return (
    <View style={{ position: 'absolute', bottom: 12, right: 0 }}>
      <Animated.View style={[styles.BurgerContainer, animationBurger]}>
        <TouchableOpacity
          style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            toggleBottomTab();
          }}
        >
          <IconAnt name={'menu-unfold'} size={30} color={'white'} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.FlexHorizon, styles.BottomTabContainer, animationBar2]}>
        {allTab.map((item: any, index: any) => (
          <EachButton key={index} index={index} item={item} allTab={allTab} toggleBottomTab={() => toggleBottomTab()} press={press} tabAvtive={tabAvtive} setTabAvtive={setTabAvtive} />
        )
        )}
      </Animated.View>
    </View >
  );
};

export default memo(BottomTabV2);
