import "./App.css";
import { getCustomer } from "./platform/customerRegistry";
import { getTier, tierConfig } from "./platform/tierConfig";

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

  const publicTiers = Object.entries(tierConfig).filter(
    ([, plan]) => plan.isPublic !== false,
  );

  return (
    <main>
      <h1>{customer.identity.displayName}</h1>
      <p>{customer.identity.sport}</p>
      <p>Current Plan: {tier.name}</p>
      <p>Monthly Price: ${tier.monthlyPrice}</p>
      <p>Platform Version: {customer.platform.templateVersion}</p>

      <section>
        <h2>Available Plans</h2>

        {publicTiers.map(([tierId, plan]) => (
          <article key={tierId}>
            <h3>{plan.name}</h3>
            <p>${plan.monthlyPrice}/month</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;