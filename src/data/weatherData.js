export const citiesData = [
  {
    id: 1,
    name: "Wrocław",
    current: { 
      temp: 12, 
      condition: "Słonecznie", 
      icon: "☀️",
      rainProb: 5, 
      rainAmount: 0, 
      windSpeed: 12, 
      windDir: "NW", 
      cloudiness: 10 
    },
    forecast: [
      { day: "Pon", temp: 14, condition: "☀️" },
      { day: "Wt", temp: 13, condition: "⛅" },
      { day: "Śr", temp: 11, condition: "☁️" },
      { day: "Czw", temp: 10, condition: "🌧️" },
      { day: "Pt", temp: 12, condition: "⛅" },
    ]
  },
  {
    id: 2,
    name: "Poznań",
    current: { 
      temp: 15, 
      condition: "Lekkie zachmurzenie", 
      icon: "⛅",
      rainProb: 20, 
      rainAmount: 0.5, 
      windSpeed: 8, 
      windDir: "S", 
      cloudiness: 30 
    },
    forecast: [
      { day: "Pon", temp: 16, condition: "☀️" },
      { day: "Wt", temp: 17, condition: "☀️" },
      { day: "Śr", temp: 15, condition: "⛅" },
      { day: "Czw", temp: 14, condition: "⛅" },
      { day: "Pt", temp: 13, condition: "☁️" },
    ]
  },
  {
    id: 3,
    name: "Olsztyn",
    current: { 
      temp: 9, 
      condition: "Wietrznie", 
      icon: "💨",
      rainProb: 40, 
      rainAmount: 1.2, 
      windSpeed: 35, 
      windDir: "N", 
      cloudiness: 60 
    },
    forecast: [
      { day: "Pon", temp: 8, condition: "🌧️" },
      { day: "Wt", temp: 10, condition: "☁️" },
      { day: "Śr", temp: 9, condition: "🌧️" },
      { day: "Czw", temp: 11, condition: "⛅" },
      { day: "Pt", temp: 10, condition: "💨" },
    ]
  },
  {
    id: 4,
    name: "Szczecin",
    current: { 
      temp: 18, 
      condition: "Gorąco", 
      icon: "☀️",
      rainProb: 0, 
      rainAmount: 0, 
      windSpeed: 5, 
      windDir: "E", 
      cloudiness: 0 
    },
    forecast: [
      { day: "Pon", temp: 19, condition: "☀️" },
      { day: "Wt", temp: 20, condition: "☀️" },
      { day: "Śr", temp: 22, condition: "☀️" },
      { day: "Czw", temp: 21, condition: "⛅" },
      { day: "Pt", temp: 19, condition: "⛅" },
    ]
  },
  {
    id: 5,
    name: "Katowice",
    current: { 
      temp: 4, 
      condition: "Deszcz ze śniegiem", 
      icon: "🌨️",
      rainProb: 85, 
      rainAmount: 5.5, 
      windSpeed: 20, 
      windDir: "SW", 
      cloudiness: 100 
    },
    forecast: [
      { day: "Pon", temp: 3, condition: "🌨️" },
      { day: "Wt", temp: 2, condition: "❄️" },
      { day: "Śr", temp: 4, condition: "🌨️" },
      { day: "Czw", temp: 5, condition: "🌧️" },
      { day: "Pt", temp: 6, condition: "☁️" },
    ]
  }
];