import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./register.styles";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";

const RegisterComponent = ({
  userName,
  setName,
  email,
  setEmail,
  handleLogin,
}) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  return (
    <View style={styles.TextInputContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register</Text>
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
          onChangeText={(password) => {
            console.log(password);
          }}
          placeholder="Password"
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
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
  );
};
export default RegisterComponent;
