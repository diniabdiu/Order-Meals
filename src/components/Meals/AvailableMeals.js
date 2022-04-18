import { useState, useEffect } from "react";
import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { foodServices } from "../../services/food.service";
const AvailableMeals = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMenu = async () => {
      try {
        const res = foodServices.getAllMenu();
        setLoading(false);
        const orders = await res.json();
        setOrders(orders);
        console.log(orders);
      } catch (error) {
        setLoading(false);
        const err = error;
        console.log(err);
      }
    };
    getMenu();
  }, []);

  console.log(orders);
  // const mealsList = DUMMY_MEALS.map((meal, index) => (
  //   <MealItem
  //     id={meal.id}
  //     key={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //   />
  // ));

  return (
    <section className={classes.meals}>
      <Card>{/* <ul>{mealsList}</ul> */}</Card>
    </section>
  );
};

export default AvailableMeals;
