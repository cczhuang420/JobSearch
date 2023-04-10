import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import LoginComponent from "../components/login/Login.component";
import { COLORS } from "../constants";

// TODO - add login
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    router.push(`/screens/${name}`);
  };

  const onRegister = () => {
    router.push("/register");
  };

  // const handleLogin = () => {
  //   router.push("/jobInfo/jobInfo");
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <LoginComponent
        userName={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleLogin={handleLogin}
        onRegister={onRegister}
      />
    </SafeAreaView>
  );
};

export default Login;
