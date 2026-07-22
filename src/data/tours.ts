export type Tour = {
  slug: string;
  ptSlug: string;
  name: string;
  ptName: string;
  eyebrow: string;
  duration: string;
  group: string;
  summary: string;
  ptSummary: string;
  image: string;
  accent: string;
  highlights: string[];
  itinerary: { label: string; text: string }[];
  included: string[];
  bring: string[];
};

export const tours: Tour[] = [
  {
    slug: 'full-day-tour-from-manaus',
    ptSlug: 'um-dia-de-adventura',
    name: 'Full Day Amazon Experience',
    ptName: 'Um dia de aventura na Amazônia',
    eyebrow: 'Day expedition',
    duration: '1 full day',
    group: 'Private or small group',
    summary: 'Leave Manaus behind for jungle trails, river life, piranha fishing, pink dolphins and a night-time caiman encounter.',
    ptSummary: 'Saia de Manaus para trilhas na selva, vida ribeirinha, pesca de piranhas, botos e uma experiência noturna com jacarés.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2026/03/Experiencia-de-sobrevivencia-na-floresta-amazonica-25-768x1365.jpeg',
    accent: '#e9b949',
    highlights: ['Jungle hike with a local guide', 'Amazonian lunch', 'Pink dolphins and piranha fishing', 'Sunset and caiman spotting'],
    itinerary: [
      { label: '07:00', text: 'Hotel pickup in Manaus and transfer across the Rio Negro bridge.' },
      { label: 'Morning', text: 'Motorised canoe journey and a guided three-hour rainforest walk focused on flora, fauna and medicinal plants.' },
      { label: 'Afternoon', text: 'Lunch with a local family, pink dolphins, flooded forest, wildlife watching and piranha fishing.' },
      { label: 'Evening', text: 'Sunset on the river followed by a guided caiman-spotting excursion and return to Manaus.' },
    ],
    included: ['Hotel transfers', 'Experienced local guide', 'Lunch and drinking water', 'Boat and canoe transport'],
    bring: ['Light long clothing', 'Closed walking shoes', 'Swimwear', 'Sun protection and insect repellent'],
  },
  {
    slug: '2-day-amazon-experience-at-jardim-maravilha-guesthouse',
    ptSlug: '2-dias-no-sitio-jardim-maravilha',
    name: 'Jardim Maravilha Escape',
    ptName: 'Experiência no Sítio Jardim Maravilha',
    eyebrow: 'Jungle lodge',
    duration: '2 days / 1 night',
    group: 'Made to measure',
    summary: 'A compact immersion for travellers who want river journeys, forest knowledge and warm Amazonian hospitality without rushing.',
    ptSummary: 'Uma imersão compacta com passeios fluviais, conhecimento da floresta e a hospitalidade calorosa da Amazônia.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2026/03/Experiencia-de-sobrevivencia-na-floresta-amazonica-33-768x1365.jpeg',
    accent: '#56c596',
    highlights: ['Guesthouse in the forest', 'River and canoe journeys', 'Wildlife after dark', 'Local food and hospitality'],
    itinerary: [
      { label: 'Day 1', text: 'Leave Manaus, explore the Meeting of the Waters region and continue to Jardim Maravilha for lunch, canoe exploration and caiman spotting.' },
      { label: 'Day 2', text: 'Sunrise wildlife tour, guided forest activities and a relaxed return journey to Manaus.' },
    ],
    included: ['Return transfer from Manaus', 'Accommodation', 'Meals and mineral water', 'Local guide and activities'],
    bring: ['Swimwear', 'Long trousers and sleeves', 'Rain jacket', 'Flashlight and insect repellent'],
  },
  {
    slug: '3-days-2-nights-at-rio-preto-da-eva-lodge',
    ptSlug: '3-dias-2-noites-no-sitio-jardim-maravilha',
    name: 'Jardim Maravilha Discovery',
    ptName: 'Descoberta do Sítio Jardim Maravilha',
    eyebrow: 'Jungle lodge',
    duration: '3 days / 2 nights',
    group: 'Couples, families & friends',
    summary: 'Slow down at a simple forest guesthouse and discover the waterways, wildlife and daily rhythms of Rio Preto da Eva.',
    ptSummary: 'Viva o ritmo da floresta em uma pousada acolhedora e descubra os rios, a fauna e a vida de Rio Preto da Eva.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2023/05/Amazon-tour-Aguia-Amazonas-Turismo-20-min.jpg',
    accent: '#75d18b',
    highlights: ['Three days away from the city', 'Forest and waterfall walks', 'Piranha fishing', 'Sunrise and nocturnal wildlife'],
    itinerary: [
      { label: 'Day 1', text: 'Travel from Manaus via the Meeting of the Waters, arrive at the lodge and explore by canoe before a nocturnal wildlife tour.' },
      { label: 'Day 2', text: 'Early wildlife observation, jungle interpretation with your guide and time to enjoy the lodge surroundings.' },
      { label: 'Day 3', text: 'A final forest or river activity, lunch and return to Manaus.' },
    ],
    included: ['Lodge accommodation', 'All meals', 'Manaus transfers', 'Guided programme'],
    bring: ['Comfortable walking shoes', 'Swimwear', 'Hat and sun protection', 'Personal medication'],
  },
  {
    slug: '4-days-3-nights-at-jardim-maravilha-lodge',
    ptSlug: '4-dias-3-noites-no-sitio-jardim-maravilha',
    name: 'Deep Amazon Lodge Journey',
    ptName: 'Jornada profunda na floresta',
    eyebrow: 'Jungle lodge',
    duration: '4 days / 3 nights',
    group: 'Private or small group',
    summary: 'Four unhurried days of forest, river and community life—with the option to spend a night in a hammock camp in the jungle.',
    ptSummary: 'Quatro dias de floresta, rios e vida comunitária, com opção de pernoite em redes em um acampamento na selva.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2026/03/Experiencia-de-sobrevivencia-na-floresta-amazonica-14-768x1365.jpeg',
    accent: '#9bd36a',
    highlights: ['Complete lodge programme', 'Waterfall jungle walk', 'Optional forest camp', 'Hands-on survival knowledge'],
    itinerary: [
      { label: 'Day 1', text: 'Meeting of the Waters, local market, lodge arrival, canoe tour, piranha fishing and nocturnal caiman spotting.' },
      { label: 'Day 2', text: 'Sunrise tour, forest activities and visits shaped around current river and wildlife conditions.' },
      { label: 'Day 3', text: 'Waterfall hike and an optional overnight hammock camp with dinner prepared in the forest.' },
      { label: 'Day 4', text: 'Breakfast in the forest, traditional climbing demonstration, lunch and return to Manaus.' },
    ],
    included: ['Three nights accommodation', 'All meals and water', 'All transfers', 'Guide and scheduled activities'],
    bring: ['Long trousers and sleeves', 'Closed shoes', 'Flashlight', 'Rain protection and binoculars'],
  },
  {
    slug: 'amazon-cruise-3-days-2-nights',
    ptSlug: 'cruzeiro-3-dias-2-noites',
    name: 'Rio Negro Explorer Cruise',
    ptName: 'Cruzeiro explorador pelo Rio Negro',
    eyebrow: 'River expedition',
    duration: '3 days / 2 nights',
    group: '4–8 guests',
    summary: 'Sleep in a cabin or hammock and follow the Rio Negro through flooded forest, giant water lilies and unforgettable wildlife encounters.',
    ptSummary: 'Durma em cabine ou rede e navegue pelo Rio Negro entre florestas alagadas, vitórias-régias e encontros com a fauna.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2013/06/Amazon-Cruise-in-Hammocks.jpg',
    accent: '#49b8c8',
    highlights: ['Meeting of the Waters', 'Cabin or hammock sleeping', 'Pink dolphins and piranhas', 'Indigenous family visit'],
    itinerary: [
      { label: 'Day 1', text: 'Depart Manaus, visit the Meeting of the Waters and Janauari Lake, then continue upriver for dolphins, piranha fishing and caiman spotting.' },
      { label: 'Day 2', text: 'Sunrise and birds, a full-day jungle hike with camp lunch, and a swim in the river.' },
      { label: 'Day 3', text: 'Visit an Indigenous family, enjoy lunch aboard and return to Manaus by late afternoon.' },
    ],
    included: ['Boat accommodation', 'Breakfast, lunch and dinner', 'Mineral water and fruit', 'Return transfer and guide'],
    bring: ['Long light clothing', 'Walking shoes', 'Swimwear', 'Flashlight and rain jacket'],
  },
  {
    slug: 'amazon-cruise-4-days-3-nights',
    ptSlug: 'cruzeiro-4-dias-3-noites',
    name: 'Anavilhanas Expedition Cruise',
    ptName: 'Cruzeiro de expedição em Anavilhanas',
    eyebrow: 'River expedition',
    duration: '4 days / 3 nights',
    group: '4–8 guests',
    summary: 'Journey deeper into the Rio Negro and the immense Anavilhanas archipelago aboard a traditional regional boat.',
    ptSummary: 'Explore o Rio Negro e o imenso arquipélago de Anavilhanas a bordo de um barco regional tradicional.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2017/04/Cruise-4days-3-nights-2.jpeg',
    accent: '#5ab6e6',
    highlights: ['Anavilhanas National Park', 'Two distinctive forest walks', 'Canoe exploration', 'Traditional regional boat'],
    itinerary: [
      { label: 'Day 1', text: 'Meeting of the Waters, giant water lilies and an evening caiman excursion.' },
      { label: 'Day 2', text: 'Medicinal-plant jungle walk, local family visit and piranha fishing.' },
      { label: 'Day 3', text: 'Sunrise, terra-firme forest walk and canoe exploration among the islands of Anavilhanas.' },
      { label: 'Day 4', text: 'Morning wildlife tour, Indigenous cultural visit and afternoon return to Manaus.' },
    ],
    included: ['Cabin or hammock place', 'All meals and water', 'Manaus transfers', 'Guide, canoe and activities'],
    bring: ['Long light clothing', 'Closed shoes', 'Sun and rain protection', 'Camera and binoculars'],
  },
  {
    slug: 'amazon-jungle-survival-experience',
    ptSlug: 'experiencia-de-sobrevivencia-na-floresta-amazonica',
    name: 'Amazon Survival Experience',
    ptName: 'Experiência de sobrevivência na Amazônia',
    eyebrow: 'True wilderness',
    duration: 'Tailored expedition',
    group: 'Private',
    summary: 'Learn practical rainforest skills with guides who grew up here. Raw, respectful and shaped around your ability and ambition.',
    ptSummary: 'Aprenda técnicas reais da floresta com guias que cresceram aqui, em uma expedição adaptada ao seu preparo e objetivo.',
    image: 'https://www.aguiaamazonas.com.br/wp-content/uploads/2026/03/Experiencia-de-sobrevivencia-na-floresta-amazonica-38-768x1365.jpeg',
    accent: '#ef7d4f',
    highlights: ['Build a forest camp', 'Find and prepare food safely', 'Navigation and medicinal plants', 'Nocturnal wildlife observation'],
    itinerary: [
      { label: 'Your expedition', text: 'Antonio plans the route, pace and number of nights around your experience and the current forest and river conditions.' },
      { label: 'In the forest', text: 'Learn shelter building, fire and food preparation, navigation, safe movement and the traditional uses of plants.' },
      { label: 'After dark', text: 'Experience the rainforest at its most alive with careful nocturnal observation alongside your guide.' },
    ],
    included: ['Expedition planning', 'Specialist local guide', 'Essential camp equipment', 'Transport and expedition meals'],
    bring: ['A personal packing list is supplied', 'Durable closed footwear', 'Long quick-drying clothing', 'Personal medication'],
  },
];

export const getTour = (slug: string) => tours.find((tour) => tour.slug === slug);
