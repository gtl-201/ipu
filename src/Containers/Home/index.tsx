import React, { FC, memo, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import auth from '@react-native-firebase/auth';
import { useTheme } from '../../Utils/Themes/index';
import ImageSlider from '../../Component/WithLogin/ImageSlider';
import TypeProduct from '../../Component/WithLogin/TypeProduct';
import Product from '../../Component/WithLogin/BoxProductV1';
import TextBox from '../../Component/TextBox';




const Home: FC<any> = (props) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;

  useEffect(() => {
    // const userInfo = auth().currentUser;
    // console.log(user, 'helppppp');
    // if (userInfo?.emailVerified === false) {
    //   navigation.navigate('verify');
    // }
    // else if (userInfo?.displayName === null || userInfo?.photoURL === null) {
    //   navigation.navigate('firstSetInfo');
    // }
    // else {
    //   console.log('???');
    // };
    // navigation.navigate('setAvatar');
    // navigation.navigate('firstSetInfo');
  }, []);

  return (
    // {...panResponder.panHandlers}
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }} >
      {/* <FirstSetInfo/> */}
      {/* <SetAvatar/> */}
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Login');
          auth()
            .signOut().then((value) => {
              console.log(value);
              // storage.delete('user.name');
              // storage.delete('user.photoURL');
            }).catch(err => {
              console.log(err);
            });
          // console.log('Tên của Firebase:', firebase.app());
        }}
        style={styles.button}>
        <TextBox>Sign out</TextBox>
      </TouchableOpacity>
      <ImageSlider />

      {/* Type Component */}
      <View style={styles.boxContainer}>
        <TypeProduct />
      </View>
      {/* Type Component */}


      {/* Product Component */}
      <View style={styles.boxContainer2}>
        <Product />
      </View>
      {/* Product Component */}


    </ScrollView >
  );
};

export default memo(Home);
