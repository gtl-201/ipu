/* eslint-disable react-native/no-inline-styles */
import React, { memo, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';

const BoxProductV1 = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;
  const windowWidth = Dimensions.get('window').width;
  const { t } = useTranslation();

  const fakeData = [
    {
      id: 1,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 2,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 3,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 4,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 5,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 6,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },
    {
      id: 7,
      nameShop: 'Gongcha',
      shopUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      follow: 30,
      nameProduct: "Xịt tẩy tế bào chết ONE-Day's YOU GAK ZL SSG SSG HELPFUL LIFE STYLE",
      productUrl: require('../../../../Asset/Picture/Brand/gong.jpg'),
      description: 'Mỗi khi hè đến lại có nhiều mụn',
      time: 1679903671,
      react: 10,
      cmt: [
        {
          name: '',
          comment: '',
        },
      ],
      price: 20,
      currency: '$',
    },

  ];
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const EachProduct = (item: any) => {
    const itemUsed = item.item;

    const nameProduct = truncateText(itemUsed.nameProduct, 60);
    return (
      <TouchableOpacity onPress={()=>console.log('open Product Detail')} style={styles.eachItemContainer} key={itemUsed.id}>
        <View style={styles.productImgContainer}>
          <Image source={itemUsed.productUrl} style={styles.productImg} resizeMode='contain'></Image>
        </View>

        <View style={styles.textProductContainer}>
          <TextBox style={styles.nameProduct}>{nameProduct}</TextBox>
          <TextBox style={styles.priceProduct}>{(itemUsed.price * 23000).toLocaleString() + 'VNĐ'}</TextBox>
          <TextBox style={styles.priceProduct}>{itemUsed.currency + (itemUsed.price).toLocaleString()}</TextBox>
        </View>
      </TouchableOpacity>
    );
  };

  const renderProductColumn = (columnData: Array<any>) => {
    return columnData.map((item) => (
      <EachProduct key={item.id} item={item} />
    ));
  };

  // Calculate the number of columns needed to display 5 products in each column.
  const numberOfColumns = Math.ceil(fakeData.length / 4);

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (windowWidth - 20));

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      scrollViewRef !== null
        && scrollViewRef.current !== null
        && scrollViewRef.current.scrollTo({ x: newIndex * (windowWidth - 20), animated: true });
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexDirection: 'row' }}
        showsHorizontalScrollIndicator={false}
        // onScrollAnimationEnd={handleEndScrollAnimation}
        onScroll={handleScroll}
        ref={scrollViewRef}
        pagingEnabled // Enable paging for smooth transitions between columns
        scrollEventThrottle={16}
      >
        {[...Array(numberOfColumns).keys()].map((columnIndex) => {
          const columnData = fakeData.slice(columnIndex * 4, (columnIndex + 1) * 4);
          return (
            <View style={styles.column} key={columnIndex}>
              {renderProductColumn(columnData)}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.pageCount}>
        <TextBox style={styles.countNumber}>{currentIndex + '|' + numberOfColumns}</TextBox>
      </View>
    </View>
  );
};

export default memo(BoxProductV1);

