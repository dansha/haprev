import { StackNavigator } from 'react-navigation';
import HomeScreen from '../views/App';
import DashboardScreen from '../views/Dashboard';
import SearchScreen from '../views/search/Search';
import HospitalScreen from '../views/hospitalList/HospitalList';
import SplashScreen from '../views/Splash';
import Root from './LogedInNavigator';
import GuestIntro from '../views/login/GuestIntro';
import SelectDateScreen from '../views/hospitalList/SelectDate';
import RegisterScreen from '../views/register/Register';

export default StackNavigator(
  { 
    Home: {
      screen: HomeScreen,
      headerMode: 'none',
      header: null,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: RegisterScreen,
      headerMode: 'none',
      header: null,
      navigationOptions: {
        header: null,
      },
    },
    LoggedIn: { screen: Root,
      navigationOptions: {
        header: null,
      }, 
    },
    GuestIntro: {
      screen: GuestIntro,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 20,
          left: 0,
          right: 0,
          flex: 1,
        },
      },
    },
    Dashbaord: { screen: DashboardScreen },
    Search: { screen: SearchScreen },
    Hospital: { screen: HospitalScreen },
    Splash: {
      screen: SplashScreen,
      headerMode: 'none',
      header: null,
      navigationOptions: {
        header: null,
      },
    },
    SelectDate: { screen: SelectDateScreen },
  },
  {

    initialRouteName: 'Splash',


  },
);
