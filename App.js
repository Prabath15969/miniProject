import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LogingScreen from "./Screens/LogingScreen";
import ChatScreen from "./Screens/ChatScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ChatBodyScreen from "./Screens/ChatBodyScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import { color } from "react-native-reanimated";

const AppNavigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    Login: LogingScreen,
    Register: RegisterScreen,
    Chat: ChatScreen,
    ChatBody : ChatBodyScreen,
    
  },
  {
    headerMode: "float",
    color: "cyan"
  }
);
export default createAppContainer(AppNavigator);