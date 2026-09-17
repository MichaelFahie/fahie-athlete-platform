import { useEffect, useState } from "react";
import "./App.css";
import { resolveCustomerByHostname } from "./platform/customerService";
import {
  getInitialCharge,
  platformPricing,
} from "./platform/pricingConfig";
import { getTier, tierConfig } from "./platform/tierConfig";

function App() {
  const [customer, setCustomer] = useState(undefined);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function loadCustomer() {
      try {
        const resolvedCustomer = await resolveCustomerByHostname(
          window.location.hostname,
        );

        if (isActive) {
          setCustomer(resolvedCustomer);
        }
      } catch {
        if (isActive) {
          setLoadError("Unable to load customer");
        }
      }
    }

    loadCustomer();

    return () => {
      isActive = false;
    };
  }, []);

  if (loadError) {
    return <h1>{loadError}</h1>;
  }

  if (customer === undefined) {
    return <h1>Loading athlete experience...</h1>;
  }

  if (customer === null) {
    return <h1>Customer not found</h1>;
  }

  const tier = getTier(customer.tierId);

  if (!tier) {
    return <h1>Customer tier not found</h1>;
  }

  const publicTiers = Object.entries(tierConfig).filter(
    ([, plan]) => plan.isPublic !== false,
  );
  const launch = platformPricing.athleteBrandLaunch;

  return (
    <main>
      <h1>{customer.identity.displayName}</h1>
      <p>{customer.identity.sport}</p>
      <p>Current Plan: {tier.name}</p>
      <p>Monthly Price: ${tier.monthlyPrice}</p>
      <p>Platform Version: {customer.platform.templateVersion}</p>

      <section>
        <h2>{launch.name}</h2>
        <p>${launch.oneTimePrice} one-time</p>
        <ul>
          {launch.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{launch.premiumDomainPolicy}</p>
      </section>

      <section>
        <h2>Available Plans</h2>

        {publicTiers.map(([tierId, plan]) => (
          <article key={tierId}>
            <h3>{plan.name}</h3>
            <p>Due today: ${getInitialCharge(plan.monthlyPrice)}</p>
            <p>Then ${plan.monthlyPrice}/month</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
