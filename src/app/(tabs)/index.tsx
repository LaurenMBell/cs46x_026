import { View, Image, StyleSheet } from "react-native";

const TOKEN = process.env.EXPO_PUBLIC_MAPBOX_TOKEN;

const uri =
  "https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/" +
  "pin-l+ff0000(-123.262047,44.564568)/-123.262047,44.564568,12/600x800@2x" +
  `?access_token=${TOKEN}`;

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.map} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#25292e" },
  map: { width: "100%", height: "100%" },
});

//================
//Mapbox for React Native tut: https://docs.mapbox.com/help/tutorials/getting-started-react-native/?step=4