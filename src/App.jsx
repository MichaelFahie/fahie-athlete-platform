import "./App.css";
import { getCustomer } from "./platform/customerRegistry";
import { getTier } from "./platform/tierConfig";

function App() {
  const customerId = "demo-athlete";
  const customer = getCustomer(customerId);

  if (!customer) {
    return <h1>Customer not found</h1>;
  }

  const tier = getTier(customer.tierId);

  if (!tier) {
    return <h1>Customer tier not found</h1>;
  }

  return (
    <main>
      <h1>{customer.identity.displayName}</h1>
      <p>{customer.identity.sport}</p>
      <p>Plan: {tier.name}</p>
      <p>Monthly Price: ${tier.monthlyPrice}</p>
      <p>Platform Version: {customer.platform.templateVersion}</p>
    </main>
  );
}

export default App;