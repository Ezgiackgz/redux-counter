import {useSelector} from "react-redux";
import Counter from "./compenents/Counter";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import CounterActions from "./compenents/CounterActions";
function App() {

    const {dark} = useSelector(state => state.site)
  return (
    <div className={dark ? "dark": "light"} >
        <Header />
      <Counter />
      <CounterActions />
        <Footer />
    </div>
  );
}

export default App;
