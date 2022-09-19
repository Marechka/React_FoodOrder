import { Fragment } from "react";
import Header from "../src/components/Layout/Header";
import Meals from "../src/components/Meals/Meals";
import Cart from '../src/components/Cart/Cart'

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
