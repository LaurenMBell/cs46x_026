import { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Map, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

setWorkerUrl("/maplibre-gl-worker.mjs");

export default function MapScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const map = new Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-123.262047,44.564568],
      zoom: 5,
    });
    return () => map.remove();
  }, []);

  return (
    <View style={styles.container}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
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

/*
- https://maplibre.org/maplibre-gl-js/docs/
- openfreemap.org/quick_start
*/