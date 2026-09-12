import { demoCustomer } from "../data/customers/demo";

export const customerRegistry = {
  [demoCustomer.customerId]: demoCustomer,
};

export function getCustomer(customerId) {
  return customerRegistry[customerId] ?? null;
}