import Navigation from "./Navigation/Navigation";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {StatusBar} from "react-native";

export default function App() {
  return <Provider store={store}>
    <>
      <StatusBar barStyle={"light-content"}/>
      <Navigation/>
    </>
  </Provider>
}

