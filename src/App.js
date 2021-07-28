// import logo from './logo.svg';
import CakeContainer from './components/CakeContainer';
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer  />
      <ItemContainer cake />
      <CakeContainer/>
      <HooksCakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
