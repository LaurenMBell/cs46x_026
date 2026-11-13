import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from '@/hooks/use-auth-context'
import SignOutButton from '@/components/sign-out-button';

export default function ProfileScreen() {
  const {profile, signOut, token} = useAuthContext()
    
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Profile screen - WEB</Text>
    {/*
    <Text type="subtitle">Username</Text>
    <Text>{profile?.username}</Text>
    <Text type="subtitle">Full name</Text>
    <Text>{profile?.full_name}</Text>
    */}
    <SignOutButton />
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
