import { Fragment, useState } from "react";
import Header from "../src/components/Layout/Header";
import Meals from "../src/components/Meals/Meals";
import Cart from '../src/components/Cart/Cart'

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}

  return (
    <Fragment>
      { cartIsShown && <Cart/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
