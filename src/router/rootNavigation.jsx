import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CHARACTERDETAIL, TABNAVIGATOR} from '../utils/routes';
import TabNavigation from './tabNavigation';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../theme/color';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },

        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigation}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
