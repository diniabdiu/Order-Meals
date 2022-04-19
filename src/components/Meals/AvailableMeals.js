/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// Import services
import { foodServices } from "../../services/food.service";

// Import Component
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  // States
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDatas = async () => {
    setLoading(true);
    try {
      const res = await foodServices.getAllMenu();
      const c = res.data;

      // Transform object named C into Array
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
    } catch (error) {
      const err = error;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDatas();
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
