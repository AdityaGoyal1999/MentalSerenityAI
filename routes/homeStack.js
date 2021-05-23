import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../screens/LoginPage';
import Dashboard from '../screens/Dashboard';
import StoreView from '../screens/StoreView';
import Checkout from '../screens/Checkout';
import VideoCall from '../screens/VideoCall';
import VoiceToText from '../screens/VoiceToText';
import PaymentSuccessful from '../screens/PaymentSucessfull';
import ChooseImage from '../screens/ChooseImage';
import StressZone from '../screens/StressZone';
import AddictionZone from '../screens/AddictionZone';

const screens = {
    LoginPage: {
        screen: LoginPage,
    },
    Dashboard: {
        screen: Dashboard,
    },
    StoreView:{
        screen: StoreView,
    },
    Checkout: {
        screen: Checkout,
    },
    VideoCall: {
        screen: VideoCall,
    },
    VoiceToText: {
        screen: VoiceToText,
    },
    PaymentSuccessful:{
        screen: PaymentSuccessful,
    },
    ChooseImage:{
        screen: ChooseImage,
    },
    StressZone:{
        screen: StressZone,
    },
    AddictionZone:{
        screen: AddictionZone,
    },

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);