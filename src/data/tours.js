// Sample data structure - replace with your content from brochures
export const toursData = [
  {
    id: 1,
    name: "Downtown Live Oak Walk",
    description: "A journey through the heart of Live Oak's historic downtown.",
    lat: 36.975,
    lng: -121.795,
    bounds: {
      north: 36.980,
      south: 36.970,
      east: -121.785,
      west: -121.805
    },
    waypoints: [
      {
        id: 1,
        name: "Old General Store",
        lat: 36.9755,
        lng: -121.7955,
        text: "Established in 1892, this building served as the commercial heart of Live Oak for over a century. Originally built as a general merchandise store, it provided essential goods to residents and farmers in the area.",
        type: "modal",
        image: null
      },
      {
        id: 2,
        name: "Historic Oak Tree",
        lat: 36.9760,
        lng: -121.7950,
        text: "This magnificent oak tree has stood on this spot for an estimated 300+ years. Local historians believe it was a gathering point for Indigenous peoples long before European settlement. It remains a symbol of the area's continuity and resilience.",
        type: "modal",
        image: null
      },
      {
        id: 3,
        name: "Community Hall History",
        lat: 36.9752,
        lng: -121.7960,
        text: "Built in 1912 to serve as a gathering place for community events, dances, and public meetings, the Live Oak Community Hall was the social center of the area for generations. The building reflects the architectural styles popular in early 20th century California, with its simple but elegant design.\n\nThe hall hosted countless celebrations, from harvest festivals to holiday gatherings. Local families gathered here to share news, coordinate farming efforts, and celebrate together. The wooden floors, still visible in parts of the structure, bear the marks of decades of dancing and celebration.\n\nDuring World War II, the hall was used for community support activities and bond drives. After the decline of agricultural focus in the area, the building fell into disrepair, but efforts to preserve it have kept its historic character intact.\n\nToday, the Community Hall stands as a reminder of Live Oak's vibrant social history and the importance of gathering spaces in building community bonds.",
        type: "page",
        image: null
      },
      {
        id: 4,
        name: "Apple Orchard Site",
        lat: 36.9758,
        lng: -121.7940,
        text: "This location was once part of a thriving apple orchard that operated from the 1880s through the 1950s. The area's Mediterranean climate proved ideal for growing several varieties of apples.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 2,
    name: "Oak Tree Park Loop",
    description: "A nature-focused tour highlighting the natural heritage of Live Oak.",
    lat: 36.980,
    lng: -121.800,
    bounds: {
      north: 36.985,
      south: 36.975,
      east: -121.790,
      west: -121.810
    },
    waypoints: [
      {
        id: 1,
        name: "Native Oak Forest",
        lat: 36.9805,
        lng: -121.8005,
        text: "This area preserves some of the original coast live oak forest that once covered much of Santa Cruz County.",
        type: "modal",
        image: null
      },
      {
        id: 2,
        name: "Grassland Restoration Project",
        lat: 36.9790,
        lng: -121.7995,
        text: "Local volunteers have been working since 2005 to restore native grasslands in this area.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 3,
    name: "Agricultural Heritage Trail",
    description: "Explore the farms and ranches that built Live Oak's economy.",
    lat: 36.972,
    lng: -121.802,
    bounds: {
      north: 36.978,
      south: 36.966,
      east: -121.792,
      west: -121.812
    },
    waypoints: [
      {
        id: 1,
        name: "Historic Farm Fence",
        lat: 36.9720,
        lng: -121.8015,
        text: "Original barbed wire fence from the 1920s ranch era.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 4,
    name: "Capitola Connection Trail",
    description: "The historic route connecting Live Oak to Capitola.",
    lat: 36.977,
    lng: -121.785,
    bounds: {
      north: 36.982,
      south: 36.972,
      east: -121.775,
      west: -121.795
    },
    waypoints: [
      {
        id: 1,
        name: "Old Trading Post",
        lat: 36.9775,
        lng: -121.7855,
        text: "This location once served as a trading post for goods between Live Oak and Capitola.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 5,
    name: "Water & Wetlands Walk",
    description: "Following the water systems that sustained the community.",
    lat: 36.970,
    lng: -121.810,
    bounds: {
      north: 36.975,
      south: 36.965,
      east: -121.800,
      west: -121.820
    },
    waypoints: [
      {
        id: 1,
        name: "Historic Spring",
        lat: 36.9705,
        lng: -121.8105,
        text: "A natural spring that provided fresh water to early settlers.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 6,
    name: "Residential District Heritage",
    description: "Historic homes and residential development of Live Oak.",
    lat: 36.975,
    lng: -121.792,
    bounds: {
      north: 36.980,
      south: 36.970,
      east: -121.782,
      west: -121.802
    },
    waypoints: [
      {
        id: 1,
        name: "Victorian-Era Home",
        lat: 36.9755,
        lng: -121.7925,
        text: "Built in the 1890s, this home reflects Victorian architectural influences adapted for California's climate.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 7,
    name: "Transportation History Route",
    description: "How Live Oak connected to the wider world.",
    lat: 36.973,
    lng: -121.798,
    bounds: {
      north: 36.978,
      south: 36.968,
      east: -121.788,
      west: -121.808
    },
    waypoints: [
      {
        id: 1,
        name: "Old Road Marker",
        lat: 36.9735,
        lng: -121.7985,
        text: "Original road marker from early 1900s highway system.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 8,
    name: "Education & Culture Trail",
    description: "Schools, libraries, and cultural institutions of Live Oak.",
    lat: 36.976,
    lng: -121.800,
    bounds: {
      north: 36.981,
      south: 36.971,
      east: -121.790,
      west: -121.810
    },
    waypoints: [
      {
        id: 1,
        name: "Schoolhouse Site",
        lat: 36.9765,
        lng: -121.8005,
        text: "The first schoolhouse in Live Oak served students from ages 5 to 16.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 9,
    name: "Religious & Community Sites",
    description: "Places of worship and spiritual gathering throughout Live Oak's history.",
    lat: 36.974,
    lng: -121.796,
    bounds: {
      north: 36.979,
      south: 36.969,
      east: -121.786,
      west: -121.806
    },
    waypoints: [
      {
        id: 1,
        name: "Chapel Ruins",
        lat: 36.9745,
        lng: -121.7965,
        text: "Remnants of a small chapel built by early settlers for community worship.",
        type: "modal",
        image: null
      }
    ]
  },
  {
    id: 10,
    name: "Industrial & Commercial Evolution",
    description: "The changing economy and industry in Live Oak over time.",
    lat: 36.975,
    lng: -121.794,
    bounds: {
      north: 36.980,
      south: 36.970,
      east: -121.784,
      west: -121.804
    },
    waypoints: [
      {
        id: 1,
        name: "Factory Building",
        lat: 36.9755,
        lng: -121.7945,
        text: "Built in 1925, this building housed various manufacturing operations serving the agricultural community.",
        type: "modal",
        image: null
      }
    ]
  }
];

// Area boundary for the main Live Oak map
export const areaCenter = {
  lat: 36.975,
  lng: -121.797
};

export const areaBounds = {
  north: 36.982,
  south: 36.968,
  east: -121.785,
  west: -121.809
};
