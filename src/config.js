// ─────────────────────────────────────────────────────────────────────────────
// LISTING CONFIGURATION
// Edit this file to update all listing details and photos.
// ─────────────────────────────────────────────────────────────────────────────

export const listing = {
  // ── Core details ──────────────────────────────────────────────────────────
  address:   "40 Meadowbrook Rd",
  city:      "Toronto, ON",
  price:     2800,
  beds:      3,
  baths:     2,
  sqft:      1000,
  available: "Available Now",
  type:      "Apartment — Multiplex",

  // ── Contact ───────────────────────────────────────────────────────────────
  // Replace with your real email and phone number.
  contact: {
    email: "your@email.com",
    phone: "+1 (416) 000-0000",
  },

  // ── Description paragraphs ────────────────────────────────────────────────
  description: [
    "Welcome to 40 Meadowbrook Road — a generously proportioned three-bedroom apartment offering updated interiors within a quiet, residential multiplex. Fresh laminate flooring runs throughout the living areas, and large windows fill every room with natural light.",
    "The kitchen features full-height white cabinetry, granite-look countertops, and a double stainless steel sink beneath a bright window. Two well-appointed bathrooms serve the home — one with a soaking tub and hand shower, the other with a separate shower stall.",
    "Baseboard heating provides per-room comfort control. A balcony door off the living room opens to your own private outdoor space. The building sits on a mature, tree-lined street with convenient access to TTC routes, schools, parks, and everyday shopping.",
  ],

  // ── Quick-facts sidebar ───────────────────────────────────────────────────
  details: [
    { label: "Rent",      value: "$2,800 / month" },
    { label: "Bedrooms",  value: "3" },
    { label: "Bathrooms", value: "2" },
    { label: "Size",      value: "~1,000 sq. ft." },
    { label: "Type",      value: "Apartment — Multiplex" },
    { label: "Heating",   value: "Electric baseboard" },
    { label: "Parking",   value: "Inquire" },
    { label: "Pets",      value: "Inquire" },
    { label: "Laundry",   value: "Inquire" },
  ],

  // ── Feature cards ─────────────────────────────────────────────────────────
  features: [
    {
      title: "Two Full Bathrooms",
      body:  "Soaking tub with hand shower in one, separate shower stall in the other. No sharing required.",
    },
    {
      title: "Updated Kitchen",
      body:  "White cabinetry, granite-look countertops, double stainless sink, and included appliances.",
    },
    {
      title: "Private Balcony",
      body:  "A balcony door off the living room provides your own outdoor space for morning coffee or evening air.",
    },
    {
      title: "New Laminate Flooring",
      body:  "Wide-plank grey laminate throughout the living areas and bedrooms — clean, modern, and easy to maintain.",
    },
    {
      title: "Abundant Natural Light",
      body:  "Oversized windows in every room keep the apartment bright throughout the day.",
    },
    {
      title: "TTC Accessible",
      body:  "Multiple bus routes within walking distance with straightforward connections to the subway network.",
    },
  ],

  // ── Nearby tags ───────────────────────────────────────────────────────────
  nearby: [
    "TTC Bus Routes",
    "Schools",
    "Parks & Green Space",
    "Grocery & Shopping",
    "Cafes & Restaurants",
  ],

  // ── Photos ────────────────────────────────────────────────────────────────
  // 1. Drop your image files into the  public/photos/  folder.
  // 2. Add an entry here for each one: { src: "/photos/filename.jpg", caption: "Room Name" }
  // The FIRST photo is used as the hero image.
  photos: [
    { src: "/photos/living-room.jpg",  caption: "Living Room" },
    { src: "/photos/bedroom-1.jpg",    caption: "Bedroom 1" },
    { src: "/photos/bedroom-2.jpg",    caption: "Bedroom 2" },
    { src: "/photos/kitchen.jpg",      caption: "Kitchen" },
    { src: "/photos/bathroom-1.jpg",   caption: "Bathroom" },
    { src: "/photos/bathroom-2.jpg",   caption: "Second Bathroom" },
    // { src: "/photos/hallway.jpg",   caption: "Hallway" },
    // { src: "/photos/exterior.jpg",  caption: "Building Exterior" },
    // ...add as many as you like
  ],
}
