export const testimonials = [
  {
    name: "Aisha J.",
    location: "Philadelphia",
    text: "I never thought I'd buy a home with my credit—Tommy's system got us to 720 in four months. We're now homeowners and building equity!",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    rating: 5
  },
  {
    name: "Marcus D.",
    location: "Atlanta",
    text: "I'd been scammed before, but this restored my faith—and my finances. My business is funded with $75K and I'm scaling operations!",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    rating: 5
  },
  {
    name: "Simone W.",
    location: "Houston",
    text: "The AI made it so easy. I went from overwhelmed to organized in weeks. Now my son's future is secure and we're investing in property!",
    image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg",
    rating: 5
  }
];

export const videoTestimonials = [
  {
    id: "PLpCrgrQb5NWV8NiFLczaGwp4MDutjukcP",
    title: "Client Success Stories",
    description: "Real stories from our clients who have transformed their financial future with Prosperity Path AI™"
  }
];

export const formSteps = [
  {
    title: "Tell us about yourself",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "your.email@example.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "(555) 123-4567",
        required: true,
      },
    ],
  },
  {
    title: "What's your #1 financial goal?",
    fields: [
      {
        name: "financialGoal",
        label: "Financial Goal",
        type: "select",
        required: true,
        options: [
          { value: "credit-repair", label: "Improve my credit score" },
          { value: "business-funding", label: "Get funding for my business" },
          { value: "homeownership", label: "Buy a home" },
          { value: "debt-freedom", label: "Eliminate debt" },
          { value: "wealth-building", label: "Build generational wealth" },
        ],
      },
      {
        name: "currentCreditScore",
        label: "Current Credit Score (if you know it)",
        type: "select",
        options: [
          { value: "below-500", label: "Below 500" },
          { value: "500-600", label: "500-600" },
          { value: "600-700", label: "600-700" },
          { value: "above-700", label: "Above 700" },
          { value: "unknown", label: "I don't know" },
        ],
      },
    ],
  },
  {
    title: "How can we help you?",
    fields: [
      {
        name: "services",
        label: "I'm interested in:",
        type: "select",
        required: true,
        options: [
          { value: "credit-repair", label: "Credit Repair" },
          { value: "funding", label: "Business Funding" },
          { value: "both", label: "Both Credit Repair & Funding" },
          { value: "not-sure", label: "Not sure yet - need guidance" },
        ],
      },
      {
        name: "referralSource",
        label: "How did you hear about us?",
        type: "select",
        options: [
          { value: "social-media", label: "Social Media" },
          { value: "friend", label: "Friend or Family" },
          { value: "google", label: "Google Search" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "consent",
        label: "I consent to receive communications from Prosperity Path AI",
        type: "checkbox",
        required: true,
      },
    ],
  },
];