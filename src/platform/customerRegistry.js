import { demoCustomer } from "../data/customers/demo";

export const customerRegistry = {
  [demoCustomer.customerId]: demoCustomer,
};

const hostnameRegistry = {
  localhost: demoCustomer.customerId,
  "127.0.0.1": demoCustomer.customerId,
};

function normalizeHostname(hostname) {
  return hostname.trim().toLowerCase().replace(/^www\./, "");
}

export function getCustomer(customerId) {
  return customerRegistry[customerId] ?? null;
}

export function getCustomerByHostname(hostname) {
  const normalizedHostname = normalizeHostname(hostname);
  const customerId = hostnameRegistry[normalizedHostname];

  return customerId ? getCustomer(customerId) : null;
}
