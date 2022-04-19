// Context
import CartContext from "../../../store/cart-context";

// Components
import MealItemForm from "./MealItemForm";

// Style
import classes from "./MealItem.module.css";
import { useContext } from "react";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
