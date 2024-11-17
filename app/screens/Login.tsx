import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your emails');
    } catch (error: any) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoiding}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : null}
      </KeyboardAvoidingView>

      {/* Блок с кнопками внизу */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#f8f8f8', // Фон для лучшего восприятия
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 8,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 20, // Расположение от нижней части экрана
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12, // Уменьшенная высота
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10, // Расстояние между кнопками
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14, // Уменьшенный текст
  },
});