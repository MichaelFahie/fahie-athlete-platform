import {
  getCustomerByHostname as getLocalCustomerByHostname,
} from "./customerRegistry";

// Application-facing boundary for customer data.
//
// The platform currently resolves development customers from local fixtures.
// This implementation can later call an API/database without requiring
// components such as App.jsx to change how they request customer data.
export async function resolveCustomerByHostname(hostname) {
  return getLocalCustomerByHostname(hostname);
}
