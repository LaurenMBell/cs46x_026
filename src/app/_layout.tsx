// import {useAuthSession} from "@/providers/AuthProvider";
// import { Stack } from 'expo-router';
//
// const {token, isLoading} = useAuthSession()
// // Protected screen routing via https://docs.expo.dev/router/advanced/protected/
// export default function RootLayout(): ReactNode {
//   return (
//     <Stack>
//       <Stack.Protected guard={!token}>
//         <Stack.Screen name="login" />
//       </Stack.Protected>
//
//       <Stack.Protected guard={token}>
//         <Stack.Screen name="(authorized)" options={{ headerShown: false }} />
//       </Stack.Protected>
//       {/* Expo Router includes all routes by default. Adding Stack.Protected creates exceptions for these screens. */}
//     </Stack>
//   );
// }

import AuthProvider from "@/providers/AuthProvider";
import {Slot} from "expo-router";
import {ReactNode} from "react";

export default function RootLayout(): ReactNode {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}