import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from "expo-linking";

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

import CircleButton from '@/components/circle-button';
import IconButton from '@/components/icon-button';


const PlaceholderImage = require('@/assets/images/upload_default.png');

export default function UploadScreen() {
  const [asset, setAsset] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const handleResult = (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled) {
      setAsset(result.assets[0]);
      setShowAppOptions(true);
    }
  };

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
      exif: true, // photo metadata
    });
    handleResult(result);
  };

  const openCameraAsync = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Permission required to use camera!');
      if (!permission.canAskAgain) Linking.openSettings();
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
      exif: true,
    });
    handleResult(result);
  };

  const onReset = () => {
    setAsset(null);
    setShowAppOptions(false);
  };

  const onAddSighting = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };


  return (
    // POST UPLOAD OPTIONS
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={asset?.uri} />
      </View>
      {showAppOptions ? (
        <View style={styles.footerContainer}>
          <View style={styles.optionsRow}>
            <IconButton
              icon={{
                android: require('@expo/material-symbols/refresh.xml'),
                ios: 'arrow.counterclockwise',
                web: 'refresh',
              }}
              label="Reset"
              onPress={onReset}
            />
            <CircleButton onPress={onAddSighting} />
            <IconButton
              icon={{
                android: require('@expo/material-symbols/download.xml'),
                ios: 'square.and.arrow.down',
                web: 'download',
              }}
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        // PRE UPLOAD OPTIONS
        <View style={styles.footerContainer}>
          <View style={styles.mainButtonsRow}>
            <Button theme="primary" label="Photo Library" onPress={pickImageAsync} />
            <Button theme="primary" label="Camera" onPress={openCameraAsync} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#245809',
    alignItems: "center",
    justifyContent: "center",
  },
  text : {
    fontSize: 25,
    color: '#fff'
  },
  button : {
    fontSize: 20
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 96, default: 20 }),
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsRow: {
  alignItems: 'center',
  flexDirection: 'row',
  },
  mainButtonsRow: {

  }
});