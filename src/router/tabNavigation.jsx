import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import HeaderRight from '../components/router/headerRight';
import Colors from '../theme/color';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  //   . route nedir ve nereden gelir?
  // route parametresi, React Navigation tarafından sağlanır. Her bir ekranın navigasyonla ilgili bilgilerini içerir. Örneğin:

  // route.name: Şu anda aktif olan ekranın ismini döner (örneğin, "CHARACTERS").
  // Diğer route bilgileri (parametreler gibi) route.params altında bulunabilir.
  // screenOptions={({ route }) => ...} kısmında, her bir ekran için route bilgisi erişilebilir hale gelir ve bu bilgi ekranlara özel seçenekler tanımlamak için kullanılır.
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.PRIMARY,
        headerRight: () => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
