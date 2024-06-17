import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import Screen1 from '@/screens/Screen1';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// const Stack = createNativeStackNavigator();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const [hideSplashScreen, setHideSplashScreen] = useState(true);

  // const [fontsLoaded, error] = useFonts({
    
  //   "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  //   "Montserrat-Regular": require("@/assets/fonts/Montserrat-Regular.ttf"),
  //   "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
     
    </ThemeProvider>
  );
}
