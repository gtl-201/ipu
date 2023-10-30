/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';

const TypeProduct = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;
  const windowWidth = Dimensions.get('window').width;
  const { t } = useTranslation();

  const fakeData = [
    {
      id: 1,
      name: 'Gongcha',
      urlLinked: require('../../../../Asset/Picture/Brand/gong.jpg'),
    },
    {
      id: 2,
      name: 'Highland',
      urlLinked: require('../../../../Asset/Picture/Brand/highland.png'),
    },
    {
      id: 3,
      name: 'The Deer',
      urlLinked: require('../../../../Asset/Picture/Brand/deer.jpg'),
    },
    {
      id: 4,
      name: 'Degray',
      urlLinked: require('../../../../Asset/Picture/Brand/degray.png'),
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const BrandBox = (item: any) => {
    console.log('brand', item);
    const itemUsed = item.item;
    return (
      <TouchableOpacity
        key={itemUsed.id}
        style={styles.brandBox}
      // onPress={}
      >
        <View style={styles.containerImg}>
          {itemUsed.urlLinked && itemUsed.urlLinked !== ''
            && <Image source={itemUsed.urlLinked} style={styles.image} resizeMode="contain" />}
        </View>
        <TextBox style={styles.brandName}>{itemUsed.name}</TextBox>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      {fakeData.map((item) => (
        <BrandBox key={item.id} item={item} />
      ))}
    </View>
  );
};

export default memo(TypeProduct);

