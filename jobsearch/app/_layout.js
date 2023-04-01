import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // the app initial loading, this makes it visible

const Layout = () => {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("../assets/fonts/DMSans-Bold.ttf"),
    RobotoMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
