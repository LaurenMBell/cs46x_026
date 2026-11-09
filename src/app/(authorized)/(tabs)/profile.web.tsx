import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuthSession } from "@/providers/AuthProvider";

export default function ProfileScreen() {
  const { signOut } = useAuthSession();
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen - WEB</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
