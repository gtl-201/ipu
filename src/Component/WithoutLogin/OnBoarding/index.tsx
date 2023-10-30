/* eslint-disable react-native/no-inline-styles */
import React, { memo, useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, FlatList, Image, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';

const OnBoardScreen = (props: any) => {
  const {theme} = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;
  const windowWidth = Dimensions.get('window').width;
  const data = [
    {
      id: 1,
      title: 'Guide Title 1',
      subTitle: 'sub title 1, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/happy.png'),
    },
    {
      id: 2,
      title: 'Guide Title 2',
      subTitle: 'sub title 2, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/happy.png'),
    },
    {
      id: 3,
      title: 'Guide Title 3',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/happy.png'),
    },
  ];
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationContinueValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentIndex === data.length - 1) {
      Animated.timing(animationContinueValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,

      }).start();
    } else {
      Animated.timing(animationContinueValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,

      }).start();
    }
  }, [currentIndex]);

  const goToNextItem = () => {
    if (currentIndex < data.length - 1) {
      // flatListRef.scrollToIndex({ index: currentIndex + 1, animated: true });
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigation.navigate('login');
    }
  };

  const goToPrevItem = () => {
    if (currentIndex > 0) {
      // flatListRef.scrollToIndex({ index: currentIndex - 1, animated: true });
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1, animated: true });
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const skip = () => {
    flatListRef.current?.scrollToIndex({ index: data.length - 1, animated: true });
    setCurrentIndex(data.length - 1);

  };

  const onScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = (item: any) => {
    const itemUse = item.item.item;
    return (
      <View style={styles.containerItem}>
        {itemUse.urlLinked && itemUse.urlLinked !== '' && <Image source={itemUse.urlLinked} style={styles.image} resizeMode='cover'/>}
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
          {itemUse.title && itemUse.title !== '' && <TextBox style={styles.title}>{t(itemUse.title)}</TextBox>}
          {itemUse.subTitle && itemUse.subTitle !== '' && <TextBox style={styles.subTitle}>{t(itemUse.subTitle)}</TextBox>}
        </View>
      </View>);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const ScrollBox = (index: any) => {
    const indexNow = index.index - 1;
    const animationScrollBoxValue = useRef(
      new Animated.Value(0),
    ).current;

    useEffect(() => {
      if (indexNow === currentIndex) {
        Animated.timing(animationScrollBoxValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animationScrollBoxValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    }, [currentIndex]);

    const boxStyle = {
      width: animationScrollBoxValue.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 20],
      }),
    };


    return (
      <Animated.View
        style={
          [styles.scrollBox, boxStyle,
          { backgroundColor: currentIndex === indexNow ? theme.primaryText : theme.primaryText3 }]
        } />
    );
  };




  const continueBtnStyle = {
    width: animationContinueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 130],
    }),
    borderRadius: animationContinueValue.interpolate({
      inputRange: [0, 2],
      outputRange: [15, 70],
    }),
  };
  const TextStyle = {
    width: animationContinueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80],
    }),
    opacity: animationContinueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };
  const SkipStyle = {
    width: animationContinueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [80, 0],
    }),
    opacity: animationContinueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };


  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        {/* {
          currentIndex < data.length - 1 && */}
        <Animated.View style={[styles.skip,SkipStyle]}>
          <TouchableOpacity onPress={() => skip()} style={{flexDirection: 'row', width: 80}}>
            <TextBox style={{ fontSize: 16, fontWeight: '600', letterSpacing: 0.6, color: theme.primaryText }}>{t('SKIP')}</TextBox>
            <IconIon name={'play-skip-forward-sharp'} size={22} color={theme.primaryText} />
          </TouchableOpacity>
        </Animated.View>

        {/* } */}

        <FlatList
          ref={flatListRef}
          keyExtractor={(item) => item.id.toString()}
          data={data}
          style={{ flex: 0.9 }}
          horizontal={true}
          // bounces={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={handleScroll}
          onMomentumScrollEnd={onScrollEnd}
          renderItem={(item) => <RenderItem item={item} />}
        />
        <View style={[styles.navigator, { flex: 0.1 }]}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => goToPrevItem()} style={styles.circleBtn}>
            <Icon name={'left'} size={30} color={'#FFFFFF'} />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {data.map((item) => (
              <ScrollBox key={item.id} index={item.id} />
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => goToNextItem()} >
            <Animated.View style={[styles.circleBtn, continueBtnStyle]}>
              <Animated.View style={TextStyle}>
                <TextBox style={[styles.textWhite, { width: 80 }]}>{t('CONTINUES')}</TextBox>
              </Animated.View>
              <Icon name={'right'} size={30} color={'#FFFFFF'} />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(OnBoardScreen);

