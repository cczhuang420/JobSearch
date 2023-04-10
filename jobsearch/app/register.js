import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import RegisterComponent from "../components/register/Register.component";
import { COLORS } from "../constants";

// TODO - add login
const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    router.push(`/screens/${name}`);
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
      <RegisterComponent
        userName={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleLogin={handleLogin}
      />
    </SafeAreaView>
  );
};

export default Register;
