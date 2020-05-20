import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LogingScreen from "./Screens/LogingScreen";
import ChatScreen from "./Screens/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    Login: LogingScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);