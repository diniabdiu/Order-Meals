import BaseService from "./base.service";

class FoodServices extends BaseService {
  async getAllMenu() {
    return this.axios.get("/meals.json");
  }
}

export const foodServices = new FoodServices();
