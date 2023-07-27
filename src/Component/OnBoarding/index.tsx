/* eslint-disable react-native/no-inline-styles */
import React, { memo, useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoard = (props: any) => {
  const styles = styleScaled(props.color);
  const navigation = props.navigation;
  const windowWidth = Dimensions.get('window').width;
  const data = [
    {
      id: 1,
      title: 'Guide Title 1',
      subTitle: 'sub title 1, please write content over here to display',
      urlLinked: require('../../Asset/Picture/Gif/5.gif'),
    },
    {
      id: 2,
      title: 'Guide Title 2',
      subTitle: 'sub title 2, please write content over here to display',
      urlLinked: require('../../Asset/Picture/Gif/2.gif'),
    },
    {
      id: 3,
      title: 'Guide Title 3',
      subTitle: 'sub title 3, please write content over here to display',
      urlLinked: require('../../Asset/Picture/Gif/3.gif'),
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
        {itemUse.urlLinked && itemUse.urlLinked !== '' && <Image source={itemUse.urlLinked} style={styles.image} />}
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
          {itemUse.title && itemUse.title !== '' && <Text style={styles.title}>{itemUse.title}</Text>}
          {itemUse.subTitle && itemUse.subTitle !== '' && <Text style={styles.subTitle}>{itemUse.subTitle}</Text>}
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
          { backgroundColor: currentIndex === indexNow ? 'black' : 'gray' }]
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

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, width: '100%' }}>
        {/* {
          currentIndex < data.length - 1 && */}
        <Animated.View style={[styles.skip,SkipStyle]}>
          <TouchableOpacity onPress={() => skip()} style={{flexDirection: 'row', width: 80}}>
            <Text style={{ fontSize: 16, fontWeight: '600', letterSpacing: 0.6 }}>Skip</Text>
            <IconIon name={'play-skip-forward-sharp'} size={22} color={'black'} />
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
            <Icon name={'left'} size={30} color={'white'} />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {data.map((item) => (
              <ScrollBox key={item.id} index={item.id} />
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => goToNextItem()} >
            <Animated.View style={[styles.circleBtn, continueBtnStyle]}>
              <Animated.View style={TextStyle}>
                <Text style={[styles.textWhite, { width: 80 }]}>Continues</Text>
              </Animated.View>
              <Icon name={'right'} size={30} color={'white'} />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(OnBoard);

