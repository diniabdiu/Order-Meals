import BaseService from "./base.service";

class FoodServices extends BaseService {
  async getAllMenu() {
    return this.axios.get(
      "https://react-http-ede40-default-rtdb.firebaseio.com/meals.json"
    );
  }
}

export const foodServices = new FoodServices();
