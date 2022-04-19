import BaseService from "./base.service";

class OrdersService extends BaseService {
  async orderFood(data) {
    return this.axios.post("/orders.json", data);
  }
}

export const orderServices = new OrdersService();
