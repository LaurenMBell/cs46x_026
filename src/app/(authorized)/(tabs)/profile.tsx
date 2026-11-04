import {useAuthSession} from "@/providers/AuthProvider";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const {signOut, token} = useAuthSession()
  const logout = () => {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
      <Button title={"Logout"} onPress={logout}/>
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
