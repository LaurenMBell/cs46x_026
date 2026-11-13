import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle Supabase Sign In
  async function handleSignIn() {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      Alert.alert('Sign In Failed', error.message);
    }
    setLoading(false);
  }

  // Handle Supabase Sign Up (Optional convenience feature)
  async function handleSignUp() {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (error) {
      Alert.alert('Sign Up Failed', error.message);
    } else {
      Alert.alert('Success', 'Check your inbox for email verification if enabled!');
    }
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Text>Welcome Back</Text>
        <Text>Sign in to your account to continue</Text>

        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />

        <TouchableOpacity
          disabled={loading}
          onPress={handleSignIn}
        >
          <Text >{loading ? 'Processing...' : 'Sign In'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={loading}
          onPress={handleSignUp}
        >
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}