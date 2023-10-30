import React, { FC, memo, useState } from 'react';
import en from '../Languages/en';
import vi from '../Languages/vi';
import 'intl-pluralrules';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextBox from '../../Component/TextBox';
// import firebase from '@react-native-firebase/app';

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        vi: { translation: vi },
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ fallback nếu không tìm thấy dịch cho ngôn ngữ hiện tại
    interpolation: {
        escapeValue: false, // không thoát các ký tự đặc biệt trong chuỗi dịch
    },
});


const I18nHelper: FC<any> = (props: any) => {
    const { } = props;
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const changeLanguage = (language: string) => {
        setCurrentLanguage(language);
        i18next.changeLanguage(language);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => changeLanguage(currentLanguage === 'vi' ? 'en' : 'vi')}>
                <View style={styles.circle}>
                    <Image
                        source={currentLanguage === 'vi' ? require('../../../asset/picture/Flag/VN.png') : require('../../../asset/picture/Flag/EN.png')}
                        style={styles.flag}
                    />
                </View>
                <TextBox>{currentLanguage === 'vi' ? 'VI' : 'EN'}</TextBox>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        width: 80,
        backgroundColor: '#E56144',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 59,
        right: 10,
        zIndex: 1,
    },
    button: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flag: {
        width: 50,
        height: 30,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
});

export default memo(I18nHelper);
