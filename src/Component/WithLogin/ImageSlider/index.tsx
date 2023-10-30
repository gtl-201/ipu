/* eslint-disable react-native/no-inline-styles */
import React, { memo, useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';

const ImageSlider = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;
  const { t } = useTranslation();
  const windowWidth = Dimensions.get('window').width;

  const fakeData = [
    {
      id: 1,
      title: 'Guide Title 1',
      subTitle: 'sub title 1, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/1.jpg'),
      textColor: '#000000',
    },
    {
      id: 2,
      title: 'Guide Title 2',
      subTitle: 'sub title 2, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/2.jpg'),
      textColor: '#F3F3F3F3',
    },
    {
      id: 3,
      title: 'Guide Title 3',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/3.jpg'),
      textColor: '#000000',
    },
    {
      id: 4,
      title: 'Guide Title 4',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/4.jpg'),
      textColor: '#FF7F50',
    },
    {
      id: 5,
      title: 'Guide Title 5',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/5.jpg'),
      textColor: '#000000',
    },
    {
      id: 6,
      title: 'Guide Title 6',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../../../Asset/Picture/HomeMyPham/6.png'),
      textColor: '#000000',
    },
  ];

  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationContinueValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentIndex === fakeData.length - 1) {
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
    if (currentIndex < fakeData.length - 1) {
      // flatListRef.scrollToIndex({ index: currentIndex + 1, animated: true });
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    else {
      flatListRef.current?.scrollToIndex({ index: 0, animated: true });
      setCurrentIndex(0);

    }
  };

  const goToPrevItem = () => {
    if (currentIndex > 0) {
      // flatListRef.scrollToIndex({ index: currentIndex - 1, animated: true });
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1, animated: true });
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    else {
      flatListRef.current?.scrollToIndex({ index: fakeData.length - 1, animated: true });
      setCurrentIndex(fakeData.length - 1);
    }
  };
  const onScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };
  const autoScrollToNextItem = () => {
    if (currentIndex < fakeData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      flatListRef.current?.scrollToIndex({ index: 0, animated: true });
      setCurrentIndex(0);
    }
  };
  useEffect(() => {
    // Thiết lập interval tự động cuộn mỗi 3 giây
    const intervalId = setInterval(autoScrollToNextItem, 3000);
    // Xóa interval khi component bị hủy
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = (item: any) => {
    const itemUse = item.item.item;
    return (
      <View style={styles.containerItem}>
          {itemUse.urlLinked && itemUse.urlLinked !== '' && <Image source={itemUse.urlLinked} style={styles.image} resizeMode="center" />}
        <View style={styles.TextContainer}>
          {itemUse.subTitle && itemUse.subTitle !== '' && <TextBox style={[styles.subTitle, { color: itemUse.textColor }]}>{t(itemUse.subTitle)}</TextBox>}
          {itemUse.title && itemUse.title !== '' && <TextBox style={[styles.title, { color: itemUse.textColor }]}>{t(itemUse.title)}</TextBox>}
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
        outputRange: [20, 40],
      }),
      height: animationScrollBoxValue.interpolate({
        inputRange: [0, 1],
        outputRange: [3, 6],
      }),
      borderRadius: animationScrollBoxValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 5],
      }),
    };
    return (
      <Animated.View
        style={
          [styles.scrollBox, boxStyle,
          { backgroundColor: currentIndex === indexNow ? '#ffff' : '#D3d3d3' }]
        } />
    );
  };

  return (
    <View style={{ height: Dimensions.get('window').height * 0.4, width: '100%' }}>

      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.id.toString()}
        data={fakeData}
        style={{ flex: 1 }}
        horizontal={true}
        // bounces={false}
        removeClippedSubviews={false}
        initialNumToRender= {6}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        // onScrollEndDrag={onScrollEnd}
        renderItem={(item) => <RenderItem item={item} />}
      />
      <View style={[styles.navigator, { flex: 0.1, position: 'absolute', bottom: 10 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          {fakeData.map((item) => (
            <ScrollBox key={item.id} index={item.id} />
          ))}
        </View>
      </View>

      <View style={styles.boxCount}>
        <TextBox style={styles.numCount}>{currentIndex + 1 + '/' + fakeData.length}</TextBox>
      </View>
    </View>
  );
};

export default memo(ImageSlider);

