import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/login.styles";

// TODO - add login
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setName("");
    setPassword("");
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
            onChangeText={(n) => {
              setName(n);
            }}
            placeholder="Username"
          ></TextInput>
        </View>

        <View style={styles.TextInputWrapper}>
          <TextInput
            style={styles.TextInput}
            value={password}
            secureTextEntry={true}
            onChangeText={(p) => {
              setPassword(p);
            }}
            placeholder="Password"
          ></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin()}
          >
            <Text style={styles.loginButtonText}>Login In</Text>
          </TouchableOpacity>

          <View
            style={{
              color: COLORS.tertiary,
              flexDirection: "row",
              marginTop: SIZES.medium,
            }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={{ color: COLORS.secondary }}> Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
