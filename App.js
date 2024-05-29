import Navigation from "./Navigation/Navigation";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./store/store";
import {StatusBar} from "react-native";
import {useEffect} from "react";
import {fetchExpenses} from "./util/http";

export default function App() {
  return <Provider store={store}>
    <>
      <StatusBar barStyle={"light-content"}/>
      <Navigation/>
    </>
  </Provider>
}

