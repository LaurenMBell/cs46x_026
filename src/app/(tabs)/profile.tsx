import { useAuthContext } from '@/hooks/use-auth-context';
import { Button, StyleSheet, Text, View } from 'react-native';
import SignOutButton from '@/components/sign-out-button';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  const {profile, signOut, token} = useAuthContext()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen - MOBILE</Text>
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



// Example code of pulling from DB for earlier tutorial followed
// Process to be reused
// import { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import { supabase } from '@/lib/supabase';
//
// export default function Index() {
//   const [titles, setTitles] = useState<string[]>([]);
//
//   useEffect(() => {
//     supabase
//       .from('todos')
//       .select()
//       .then(({ data, error }) => {
//         if (error) {
//           setTitles([error.message]);
//           return;
//         }
//         setTitles(data.map(todo => todo.title));
//       });
//   }, []);
//
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {titles.map(title => (
//         <Text key={title}>{title}</Text>
//       ))}
//     </View>
//   );
// }
