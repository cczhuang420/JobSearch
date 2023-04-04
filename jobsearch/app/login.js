import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import styles from "../styles/login";
import { COLORS } from "../constants";

// TODO - add login
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleLogin = () => {
    router.push(`/screens/${name}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View style={styles.TextInputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Find A New Job</Text>
        </View>

        <View style={styles.TextInputWrapper}>
          <TextInput
            style={styles.TextInput}
            value={name}
            onChangeText={(name) => {
              setName(name);
            }}
            placeholder="Username"
          ></TextInput>
        </View>

        <View style={styles.TextInputWrapper}>
          <TextInput
            style={styles.TextInput}
            value={email}
            onChangeText={(email) => {
              setEmail(email);
            }}
            placeholder="Email"
          ></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
