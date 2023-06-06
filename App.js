import AppNavigation from "./navigation/appNavigation";
import { Provider } from "react-redux";
import store from "./reduxConfig/store/index";
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
