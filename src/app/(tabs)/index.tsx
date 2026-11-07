import { useState } from "react";
import { View, Image, StyleSheet, LayoutChangeEvent } from "react-native";

const TOKEN = process.env.EXPO_PUBLIC_MAPBOX_TOKEN;

function staticMapUrl(opts: {
  lng: number;
  lat: number;
  zoom: number;
  width: number;
  height: number;
}) {
  const { lng, lat, zoom, width, height } = opts;
  const marker = `pin-l+ff0000(${lng},${lat})`;

  const w = Math.min(1280, Math.max(1, Math.round(width)));
  const h = Math.min(1280, Math.max(1, Math.round(height)));

  return (
    `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/` +
    `${marker}/${lng},${lat},${zoom}/${w}x${h}@2x` +
    `?access_token=${TOKEN}`
  );
}

export default function MapScreen() {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    //if we pick a dynamic map option then resizing will be smooth
    setSize((prev) =>
      prev &&
      Math.round(prev.width) === Math.round(width) &&
      Math.round(prev.height) === Math.round(height)
        ? prev
        : { width, height }
    );
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {size && (
        <Image
          source={{
            uri: staticMapUrl({
              lng: -123.262047,
              lat: 44.564568,
              zoom: 12,
              width: size.width,
              height: size.height,
            }),
          }}
          style={styles.map}
          resizeMode="cover"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});


//================
//Mapbox for React Native tut: https://docs.mapbox.com/help/tutorials/getting-started-react-native/?step=4