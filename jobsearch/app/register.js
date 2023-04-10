import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/register.styles";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
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
          <Text style={styles.title}>Register</Text>
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
            value={email}
            onChangeText={(email) => {
              setEmail(email);
            }}
            placeholder="Email"
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
            style={styles.registerButton}
            onPress={() =>
              alert("Register functionality is under development.")
            }
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          <View
            style={{
              color: COLORS.tertiary,
              flexDirection: "row",
              marginTop: SIZES.medium,
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={{ color: COLORS.secondary }}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
