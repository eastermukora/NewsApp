import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/All';
import Gaming from './screens/Gaming';
import Newsletter from './screens/Newsletter';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ showLabel: false, activeTintColor: '' }}>
      <Tab.Screen name="All" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Icon type='font-awesome' name='home' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Gaming" component={Gaming}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Icon type='font-awesome' name='gamepad' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Newsletters" component={Newsletter}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Icon type='font-awesome' name='paperclip' color={props.color} />
          ),
        }} />
    </Tab.Navigator><StatusBar style="auto" />
    </NavigationContainer>
  );
}


