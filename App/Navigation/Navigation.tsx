import { NavigationContainer, Route, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../Screens/NotFoundScreen';
import MainNavigator from './MainNavigation';
import theme from './navigationTheme';


export type RootStackParamList = {  
  NotFound: undefined;
  Root:any;

};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
  onReady,
}: {
  colorScheme?: ColorSchemeName;
  onReady?: (() => void) | undefined;
}) {
  const navigationRef = useNavigationContainerRef();
  const currentRouteRef = React.useRef<Route<string>>();

  const handleReady = () => {
    currentRouteRef.current = navigationRef.getCurrentRoute();
    onReady?.();
  };

  const handleStateChange = () => {
    const previousRoute = currentRouteRef.current;
    const currentRoute = navigationRef.getCurrentRoute();
    // Save the current route name for later comparison
    currentRouteRef.current = currentRoute;
    // console.log(currentRoute)
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
      onReady={handleReady}
      onStateChange={handleStateChange}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={MainNavigator} options={{ headerShown:false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
