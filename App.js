import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Router from "./src/Router";

export default function App() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}
