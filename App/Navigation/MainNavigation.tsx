import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import TabIcon from '../Components/TabBarIcon/tabBarIcon';
import Colors from '../Constants/Colors';
import Home from '../Screens/Home';
import Shop from '../Screens/Shop';
import MallMap from '../Screens/MallMap';
import More from '../Screens/More';


const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {

// const [isRtl, setIsRtl] = React.useState(i18next.language);
// const {t} = useTranslation();

// React.useEffect(() => {
//   const languageChangeHandler = () => {
//     setIsRtl(i18next.language);
//   };
//  i18next.on('languageChanged', languageChangeHandler);
 
//   return () => {
//     i18next.off('languageChanged', languageChangeHandler);
//   }
// }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          padding: 2,
          height: Platform.OS === 'ios' ? 70 : 62,
          backgroundColor: Colors.Iconwhite,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
    
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: props => (
                <TabIcon name="home-outline" {...props} label={'Home'} />
              ),
            }}
          />
             <Tab.Screen
            name='Store'
            component={Shop}
            options={{
              tabBarIcon: props => (
                <TabIcon name="store-marker" {...props} label={'Store Locator'} />
              ),
            }}
          />
         <Tab.Screen
            name='MallMap'
            component={MallMap}
            options={{
              tabBarIcon: props => (
                <TabIcon name="map" {...props} label={'Mall Map'} />
              ),
            }}
          />
            <Tab.Screen
            name='Services'
            component={MallMap}
            options={{
              tabBarIcon: props => (
                <TabIcon name="information-outline" {...props} label={'Services'} />
              ),
            }}
          />
        <Tab.Screen
            name='More'
            component={More}
            options={{
              tabBarIcon: props => (
                <TabIcon name="dots-horizontal" {...props} label={'More'} />
              ),
            }}
          />
          
    </Tab.Navigator>
  );
};

export default MainNavigator;
