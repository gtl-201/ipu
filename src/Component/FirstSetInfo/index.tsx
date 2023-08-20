import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes';
// import { connect } from 'react-redux';

const FirstSetInfo = (props: any) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigation = props.navigation;
  const styles = styleScaled(theme);

  return (
    <></>
  );
};

export default FirstSetInfo;

