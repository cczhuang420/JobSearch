import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./login.styles";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";

const LoginComponent = ({ userName, setName, handleLogin, onRegister }) => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View style={styles.TextInputContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find A New Job</Text>
      </View>

      <View style={styles.TextInputWrapper}>
        <TextInput
          style={styles.TextInput}
          value={userName}
          onChangeText={(userName) => {
            setName(userName);
          }}
          placeholder="Username"
        ></TextInput>
      </View>

      <View style={styles.TextInputWrapper}>
        <TextInput
          style={styles.TextInput}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => {
            console.log(password);
            setPassword(password);
          }}
          placeholder="Password"
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
          <TouchableOpacity onPress={onRegister}>
            <Text style={{ color: COLORS.secondary }}> Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginComponent;
