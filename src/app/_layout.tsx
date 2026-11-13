import { Stack } from 'expo-router'

import { SplashScreenController } from '@/components/splash-screen-controller'

import { useAuthContext } from '@/hooks/use-auth-context'
import AuthProvider from '@/providers/auth-provider'

import { View, ActivityIndicator } from 'react-native'

// Hide error that only appears in dev build
// Error explicitly states that it will not appear in production
// It will appear in console, but this prevents the emulator from showing it
// Someone opened a pull request to fix this, so check later to
// see if the error is still there -> https://github.com/expo/expo/issues/51970
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "The action 'REMOVE_ROUTES' with payload",
]);

function RootNavigator() {
  const { isLoggedIn, isLoading } = useAuthContext()
  if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  )
}

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
export default function RootLayout() {
  return (
      <AuthProvider>
        <SplashScreenController />
        <RootNavigator />
      </AuthProvider>
  )
}