import BaseService from "./base.service";

class FoodServices extends BaseService {
  async getAllMenu() {
    return this.axios.get();
  }
}

export const foodServices = new FoodServices();
