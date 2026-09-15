export const tierConfig = {
  // Limited early-adopter plan for the first platform customers.
  // Provides the core athlete presence at a discounted founding rate.
  founding: {
    name: "Founding",
    monthlyPrice: 15,
    features: {
      athleteProfile: true,
      academics: true,
      achievements: true,
      spotlightVideo: true,
      mediaGallery: false,
      schedule: false,
      recruitingContact: true,
      customDomain: false,
      analytics: false,
      multiAthlete: false,
      organizationBranding: false,
      prioritySupport: false,
    },
  },

  // Standard individual-athlete plan with a profile, recruiting
  // information, spotlight video, media gallery, and contact capability.
  essential: {
    name: "Essential",
    monthlyPrice: 25,
    features: {
      athleteProfile: true,
      academics: true,
      achievements: true,
      spotlightVideo: true,
      mediaGallery: true,
      schedule: false,
      recruitingContact: true,
      customDomain: false,
      analytics: false,
      multiAthlete: false,
      organizationBranding: false,
      prioritySupport: false,
    },
  },

  // Full recruiting platform for athletes requiring scheduling,
  // a custom domain, expanded media, and visitor analytics.
  professional: {
    name: "Professional",
    monthlyPrice: 100,
    features: {
      athleteProfile: true,
      academics: true,
      achievements: true,
      spotlightVideo: true,
      mediaGallery: true,
      schedule: true,
      recruitingContact: true,
      customDomain: true,
      analytics: true,
      multiAthlete: false,
      organizationBranding: false,
      prioritySupport: true,
    },
  },

  // Organization-level plan for AAU teams, clubs, and programs
  // managing multiple athletes under a shared branded experience.
  growth: {
    name: "Growth",
    monthlyPrice: 200,
    features: {
      athleteProfile: true,
      academics: true,
      achievements: true,
      spotlightVideo: true,
      mediaGallery: true,
      schedule: true,
      recruitingContact: true,
      customDomain: true,
      analytics: true,
      multiAthlete: true,
      organizationBranding: true,
      prioritySupport: true,
    },
  },

  // Internal demonstration and innovation environment.
  // Not publicly sold; used to validate new capabilities before tier assignment.
  showcase: {
    name: "Showcase",
    monthlyPrice: null,
    isPublic: false,
    features: {
      athleteProfile: true,
      academics: true,
      achievements: true,
      spotlightVideo: true,
      mediaGallery: true,
      schedule: true,
      recruitingContact: true,
      customDomain: true,
      analytics: true,
      multiAthlete: false,
      organizationBranding: false,
      prioritySupport: true,
      experimentalFeatures: true,
    },
  },
};

export function getTier(tierId) {
  return tierConfig[tierId] ?? null;
}
