import "./App.css";
import { getCustomer } from "./platform/customerRegistry";

function App() {
  const customerId = "demo-athlete";
  const customer = getCustomer(customerId);

  if (!customer) {
    return <h1>Customer not found</h1>;
  }

  return (
    <main>
      <h1>{customer.identity.displayName}</h1>
      <p>{customer.identity.sport}</p>
      <p>Customer ID: {customer.customerId}</p>
      <p>Platform Version: {customer.platform.templateVersion}</p>
    </main>
  );
}

export default App;