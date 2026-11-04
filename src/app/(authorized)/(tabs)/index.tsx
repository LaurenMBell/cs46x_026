import { Platform, StyleSheet, View } from "react-native";

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

import { SafeAreaView } from 'react-native-safe-area-context';

const PlaceholderImage = require('@/assets/images/beaver_background-image.png');

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={() => alert('You pressed a button.')}
        />
        <Button label="Use this photo" onPress={() => alert('You pressed a button.')} />
      </View>
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
});
