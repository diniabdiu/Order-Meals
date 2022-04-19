/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { foodServices } from "../../services/food.service";
const AvailableMeals = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDatas = async () => {
    setLoading(true);
    try {
      const res = await foodServices.getAllMenu();
      const c = res.data;

      // Transform object into Array
      let loadedMeals = [];
      for (const key in c) {
        loadedMeals.push({
          id: key,
          name: c[key].name,
          description: c[key].description,
          price: c[key].price,
        });
      }
      setOrders(loadedMeals);

      // setOrders([c]);
      // console.log("HERE ARE THE DATA ON ARRAY => ", orders);
    } catch (error) {
      const err = error;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDatas();
    console.log("i am here");
  }, []);

  const mealsList = orders.map((meal, i) => (
    <MealItem
      id={meal}
      key={i}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  console.log("mealsList", mealsList);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error}</p>}
    </section>
  );
};

export default AvailableMeals;
