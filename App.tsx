import { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStack from "./app/navigation/rootStack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./app/state/store";
import { QueryClient, QueryClientProvider } from "react-query";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Query Client
const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
          "Inter-Italic": require("./assets/fonts/Inter-Italic.ttf"),
          "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
          "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
          "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
          "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
          "Inter-BoldItalic": require("./assets/fonts/Inter-BoldItalic.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RootStack />
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
