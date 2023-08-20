import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Alert,
    Platform,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import styleScaled from './style';
import { useTheme } from '../../Utils/Themes';
import Icon from 'react-native-vector-icons/AntDesign';


const ImageUploadScreen = () => {
    const { theme } = useTheme();
    const styles = styleScaled(theme);
    const [image, setImage] = useState<any>();
    // const [loading, setloading] = useState(false);
    const takePhotoFromCamera = () => {
        ImagePicker !== null && ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7,
        }).then(imageChoosed => {
            console.log(imageChoosed);
            // setloading(true);
            setImage(imageChoosed);
            // bs.current?.snapTo(1);
        }).catch((err: any) => { console.log(err); });
    };
    const choosePhotoFromLibrary = () => {
        if (ImagePicker) {
            ImagePicker.openPicker({
                // width: 300,
                // height: 300,
                // cropping: true,
                multiple: true,
                compressImageQuality: 0.7,
            }).then(imageChoosed => {
                console.log(imageChoosed);
                // setloading(true);
                setImage(imageChoosed);
                // bs.current?.snapTo(1);
            }).catch((err: any) => { console.log(err); });
        }
    };
    const cancel = () => {
    };

    const removeImageByIndex = (indexToRemove: number) => {
        setImage((prevImage: any) => {
            const updatedImage = [...prevImage];
            updatedImage.splice(indexToRemove, 1);
            return updatedImage;
        });
    };



    return (
            <View style={styles.panel}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                </View>
                {/* {loading && <ActivityIndicator size="large" color={theme.primary} />} */}
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }} horizontal={true} style={styles.containerPicturePreview}>
                    {image && image.lenght !== 0 &&
                        image.map((data: any, index: number) => {
                            console.log(index);

                            return (

                                <TouchableOpacity key={index} style={styles.removeContainer} onPress={() => removeImageByIndex(index)}>

                                    {/* <Text>X</Text> */}
                                    <Icon name='delete' size={20} style={styles.rashIc} color={theme.error} />
                                    <Image
                                        source={{ uri: data.path }}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>


                            );
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={choosePhotoFromLibrary}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={cancel}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>

    );
};

export default ImageUploadScreen;
