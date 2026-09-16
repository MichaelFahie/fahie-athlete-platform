export const platformPricing = {
  athleteBrandLaunch: {
    name: "Athlete Brand Launch",
    oneTimePrice: 99,
    includedStandardDomains: 1,
    includes: [
      "Custom-domain registration",
      "Account configuration",
      "Initial branding",
      "Profile setup",
      "Website activation",
    ],
    premiumDomainPolicy:
      "Premium domains and specialized extensions are quoted separately.",
  },
};

export function getInitialCharge(monthlyPrice) {
  return platformPricing.athleteBrandLaunch.oneTimePrice + monthlyPrice;
}
