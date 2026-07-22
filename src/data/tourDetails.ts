export type TourDetail = {
  introduction: string[];
  ptIntroduction: string[];
  facts: { label: string; value: string; ptLabel: string; ptValue: string }[];
  notIncluded: string[];
  ptNotIncluded: string[];
  goodToKnow: string[];
  ptGoodToKnow: string[];
};

export const tourDetails: Record<string, TourDetail> = {
  'full-day-tour-from-manaus': {
    introduction: [
      'Designed for travellers staying in Manaus who want one complete day beyond the city, this journey combines river travel, a substantial forest walk and time with a local Amazonian family.',
      'The route changes from road to motorised canoe before entering the forest. Lunch is served locally, and the afternoon continues on the water with wildlife-focused activities through sunset and early evening.',
    ],
    ptIntroduction: [
      'Criada para quem está hospedado em Manaus e deseja viver um dia completo fora da cidade, esta viagem reúne navegação, uma boa caminhada na floresta e tempo com uma família amazônica local.',
      'O percurso muda da estrada para a canoa motorizada antes da entrada na floresta. O almoço é servido localmente e a tarde continua no rio, com atividades de observação da fauna até o pôr do sol e o início da noite.',
    ],
    facts: [
      { label: 'Hotel pickup', value: '07:00 in Manaus', ptLabel: 'Busca no hotel', ptValue: '07h00 em Manaus' },
      { label: 'Expected return', value: 'Around 20:00', ptLabel: 'Retorno previsto', ptValue: 'Por volta das 20h00' },
      { label: 'Forest walk', value: 'Approximately 3 hours', ptLabel: 'Caminhada', ptValue: 'Aproximadamente 3 horas' },
      { label: 'Transport', value: 'Air-conditioned vehicle and canoe', ptLabel: 'Transporte', ptValue: 'Veículo climatizado e canoa' },
    ],
    notIncluded: ['Alcoholic drinks', 'Guide and staff gratuities', 'Personal travel insurance'],
    ptNotIncluded: ['Bebidas alcoólicas', 'Gorjetas para guias e equipe', 'Seguro pessoal de viagem'],
    goodToKnow: ['Wildlife sightings depend on season and natural conditions.', 'Swimming with pink dolphins is possible only when local conditions and regulations allow.', 'The day is long and active; comfortable mobility is recommended.'],
    ptGoodToKnow: ['A observação de animais depende da estação e das condições naturais.', 'O contato com botos somente acontece quando as condições e regras locais permitem.', 'É um dia longo e ativo; recomenda-se boa mobilidade.'],
  },
  '2-day-amazon-experience-at-jardim-maravilha-guesthouse': {
    introduction: [
      'Jardim Maravilha is a simple, welcoming riverside guesthouse in the São José community on the Rio Preto da Eva, about 104 km from Manaus. It is suited to solo travellers, couples, families and small groups looking for a genuine forest stay rather than resort luxury.',
      'Guests may sleep in a private chalet or a traditional hammock. The guesthouse has 110V electricity, Wi-Fi and an open-air restaurant, offering practical comfort while keeping the experience close to the river, forest and local community.',
    ],
    ptIntroduction: [
      'O Jardim Maravilha é uma pousada simples e acolhedora à beira do Rio Preto da Eva, na comunidade de São José, a cerca de 104 km de Manaus. É indicada para viajantes individuais, casais, famílias e pequenos grupos que procuram uma vivência autêntica, não o luxo de um resort.',
      'Os hóspedes podem dormir em chalé privativo ou em redes tradicionais. A pousada dispõe de energia 110V, Wi-Fi e restaurante aberto, oferecendo conforto prático sem perder a proximidade com o rio, a floresta e a comunidade local.',
    ],
    facts: [
      { label: 'Location', value: 'São José, Rio Preto da Eva', ptLabel: 'Localização', ptValue: 'São José, Rio Preto da Eva' },
      { label: 'From Manaus', value: 'About 104 km', ptLabel: 'Desde Manaus', ptValue: 'Cerca de 104 km' },
      { label: 'Accommodation', value: 'Private chalet or hammock', ptLabel: 'Hospedagem', ptValue: 'Chalé privativo ou rede' },
      { label: 'Facilities', value: '110V electricity, Wi-Fi, restaurant', ptLabel: 'Estrutura', ptValue: 'Energia 110V, Wi-Fi e restaurante' },
    ],
    notIncluded: ['Beer, caipirinhas and other alcoholic drinks', 'Guide and staff gratuities', 'Personal purchases'],
    ptNotIncluded: ['Cerveja, caipirinhas e outras bebidas alcoólicas', 'Gorjetas para guias e equipe', 'Compras pessoais'],
    goodToKnow: ['Pickup is normally at 07:00 from your Manaus hotel.', 'The final approach includes a 30–40 minute journey in a small aluminium boat.', 'Return can be arranged to a Manaus hotel or directly to the airport.'],
    ptGoodToKnow: ['A busca normalmente acontece às 07h00 no hotel em Manaus.', 'O trecho final inclui 30–40 minutos em um pequeno barco de alumínio.', 'O retorno pode ser para o hotel em Manaus ou diretamente para o aeroporto.'],
  },
  '3-days-2-nights-at-rio-preto-da-eva-lodge': {
    introduction: [
      'This three-day version allows the rhythm of the Rio Preto da Eva to unfold more naturally. Jardim Maravilha is a modest riverside lodge in the São José community, approximately 104 km from Manaus, with genuine local hospitality at the centre of the stay.',
      'Choose a chalet or hammock and use the lodge as a base for sunrise outings, jungle walks, a waterfall visit, piranha fishing and quiet exploration by paddle canoe. Electricity, Wi-Fi and a restaurant provide basic comfort between activities.',
    ],
    ptIntroduction: [
      'A versão de três dias permite acompanhar com mais calma o ritmo do Rio Preto da Eva. O Jardim Maravilha é uma pousada ribeirinha simples, na comunidade de São José, a aproximadamente 104 km de Manaus, onde a hospitalidade local faz parte da experiência.',
      'Escolha entre chalé ou rede e use a pousada como base para saídas ao amanhecer, caminhadas, visita à cachoeira, pesca de piranhas e exploração tranquila em canoas a remo. Energia, Wi-Fi e restaurante oferecem conforto básico entre as atividades.',
    ],
    facts: [
      { label: 'Stay', value: '2 nights in chalet or hammock', ptLabel: 'Pernoite', ptValue: '2 noites em chalé ou rede' },
      { label: 'Meals', value: 'Breakfast, lunch and dinner', ptLabel: 'Refeições', ptValue: 'Café da manhã, almoço e jantar' },
      { label: 'Facilities', value: '110V electricity, Wi-Fi, restaurant', ptLabel: 'Estrutura', ptValue: 'Energia 110V, Wi-Fi e restaurante' },
      { label: 'Return', value: 'Late afternoon on Day 3', ptLabel: 'Retorno', ptValue: 'Fim da tarde no Dia 3' },
    ],
    notIncluded: ['Beer, caipirinhas and other alcoholic drinks', 'Guide and staff gratuities', 'Personal purchases'],
    ptNotIncluded: ['Cerveja, caipirinhas e outras bebidas alcoólicas', 'Gorjetas para guias e equipe', 'Compras pessoais'],
    goodToKnow: ['The programme includes early starts around 05:15–05:30.', 'Flooded-forest access varies with the river level.', 'Airport drop-off can be requested when timings permit.'],
    ptGoodToKnow: ['O programa inclui saídas cedo, por volta das 05h15–05h30.', 'O acesso à floresta alagada varia conforme o nível do rio.', 'O desembarque no aeroporto pode ser solicitado quando os horários permitem.'],
  },
  '4-days-3-nights-at-jardim-maravilha-lodge': {
    introduction: [
      'Four days at Jardim Maravilha create space for both active exploration and the slower details of life beside the Rio Preto da Eva. The simple lodge sits in the São José community, around 104 km from Manaus, and welcomes individuals, families and small groups.',
      'Accommodation is in a chalet or hammock, with 110V electricity, Wi-Fi and a restaurant. The longer programme adds a second forest outing, flooded-forest paddling, traditional night fishing and time for local archery and handicrafts.',
    ],
    ptIntroduction: [
      'Quatro dias no Jardim Maravilha abrem espaço tanto para a exploração ativa quanto para os detalhes tranquilos da vida às margens do Rio Preto da Eva. A pousada simples fica na comunidade de São José, a cerca de 104 km de Manaus, e recebe viajantes individuais, famílias e pequenos grupos.',
      'A hospedagem é em chalé ou rede, com energia 110V, Wi-Fi e restaurante. O programa mais longo acrescenta outra caminhada, canoagem na floresta alagada, pesca noturna tradicional e tempo para arco e flecha e artesanato local.',
    ],
    facts: [
      { label: 'Stay', value: '3 nights in chalet or hammock', ptLabel: 'Pernoite', ptValue: '3 noites em chalé ou rede' },
      { label: 'Meals', value: 'Breakfast, lunch and dinner', ptLabel: 'Refeições', ptValue: 'Café da manhã, almoço e jantar' },
      { label: 'Water activities', value: 'Motor canoe and paddle canoe', ptLabel: 'Atividades no rio', ptValue: 'Canoa motorizada e canoa a remo' },
      { label: 'Manaus arrival', value: 'About 17:30 on Day 4', ptLabel: 'Chegada a Manaus', ptValue: 'Por volta das 17h30 no Dia 4' },
    ],
    notIncluded: ['Beer, caipirinhas and other alcoholic drinks', 'Guide and staff gratuities', 'Personal purchases'],
    ptNotIncluded: ['Cerveja, caipirinhas e outras bebidas alcoólicas', 'Gorjetas para guias e equipe', 'Compras pessoais'],
    goodToKnow: ['Activities may change order according to weather and river conditions.', 'Flooded-forest canoeing is seasonal.', 'Airport transfer is possible when compatible with the programme.'],
    ptGoodToKnow: ['A ordem das atividades pode mudar conforme o clima e o nível dos rios.', 'A canoagem na floresta alagada é sazonal.', 'O traslado ao aeroporto é possível quando compatível com o programa.'],
  },
  'amazon-cruise-3-days-2-nights': {
    introduction: [
      'A compact expedition aboard a traditional two-deck regional boat, combining the Meeting of the Waters, Janauari Lake, Rio Negro wildlife and a full day in the forest. The small-group format normally brings together four to eight guests.',
      'Sleeping is in hammocks under the covered upper deck, with shared toilets and showers below. Meals are prepared aboard, turning the boat into both transport and a simple floating base for the journey.',
    ],
    ptIntroduction: [
      'Uma expedição compacta em barco regional tradicional de dois andares, reunindo o Encontro das Águas, o Lago Janauari, a fauna do Rio Negro e um dia inteiro na floresta. O formato normalmente reúne de quatro a oito viajantes.',
      'O pernoite é em redes no convés superior coberto, com banheiros e chuveiros compartilhados no piso inferior. As refeições são preparadas a bordo, fazendo do barco o transporte e também uma base flutuante simples.',
    ],
    facts: [
      { label: 'Group', value: 'Normally 4–8 guests', ptLabel: 'Grupo', ptValue: 'Normalmente 4–8 viajantes' },
      { label: 'Departure', value: '08:00 from Manaus', ptLabel: 'Saída', ptValue: '08h00 de Manaus' },
      { label: 'Sleeping', value: 'Hammocks on covered upper deck', ptLabel: 'Pernoite', ptValue: 'Redes no convés superior coberto' },
      { label: 'On board', value: 'Shared showers, toilets and kitchen', ptLabel: 'A bordo', ptValue: 'Chuveiros, banheiros e cozinha compartilhados' },
    ],
    notIncluded: ['Alcoholic and soft drinks', 'Guide and crew gratuities', 'Personal travel insurance'],
    ptNotIncluded: ['Bebidas alcoólicas e refrigerantes', 'Gorjetas para guia e tripulação', 'Seguro pessoal de viagem'],
    goodToKnow: ['Original scheduled departures are the 10th and 20th of each month; confirm current availability with Antonio.', 'Giant water lilies and flooded forest are seasonal, generally strongest during higher water.', 'Facilities are practical and communal, in the style of a traditional Amazon regional boat.'],
    ptGoodToKnow: ['As saídas tradicionais são nos dias 10 e 20 de cada mês; confirme a disponibilidade atual com Antonio.', 'Vitórias-régias e floresta alagada são sazonais, geralmente melhores na cheia.', 'A estrutura é prática e compartilhada, no estilo de um barco regional amazônico.'],
  },
  'amazon-cruise-4-days-3-nights': {
    introduction: [
      'The longer regional-boat expedition reaches the Anavilhanas archipelago and gives the forest programme room to develop across two distinct ecosystems. Groups are normally kept between four and eight guests.',
      'Depending on the assigned boat, guests sleep in hammocks or cabins. The traditional vessel has two decks, shaded sleeping space, an open sun area, shared bathrooms with showers and a working kitchen for meals prepared aboard.',
    ],
    ptIntroduction: [
      'A expedição mais longa em barco regional alcança o arquipélago de Anavilhanas e permite conhecer dois tipos diferentes de floresta. Os grupos normalmente são mantidos entre quatro e oito viajantes.',
      'Conforme o barco disponível, os hóspedes dormem em redes ou cabines. A embarcação tradicional possui dois andares, área coberta para dormir, espaço aberto para sol, banheiros compartilhados com chuveiros e cozinha para as refeições preparadas a bordo.',
    ],
    facts: [
      { label: 'Group', value: 'Normally 4–8 guests', ptLabel: 'Grupo', ptValue: 'Normalmente 4–8 viajantes' },
      { label: 'Departure', value: '08:00 from Manaus', ptLabel: 'Saída', ptValue: '08h00 de Manaus' },
      { label: 'Sleeping', value: 'Hammock or cabin, by boat', ptLabel: 'Pernoite', ptValue: 'Rede ou cabine, conforme o barco' },
      { label: 'Return', value: 'Around 17:00 on Day 4', ptLabel: 'Retorno', ptValue: 'Por volta das 17h00 no Dia 4' },
    ],
    notIncluded: ['Alcoholic and soft drinks', 'Guide and crew gratuities', 'Personal travel insurance'],
    ptNotIncluded: ['Bebidas alcoólicas e refrigerantes', 'Gorjetas para guia e tripulação', 'Seguro pessoal de viagem'],
    goodToKnow: ['Departure dates vary each month and should be confirmed before booking flights.', 'The final boat and sleeping arrangement depend on group size and availability.', 'The order of canoe and forest activities may change with weather and water level.'],
    ptGoodToKnow: ['As datas de saída variam a cada mês e devem ser confirmadas antes da compra dos voos.', 'O barco e a forma de pernoite dependem do tamanho do grupo e da disponibilidade.', 'A ordem das atividades pode mudar conforme o clima e o nível da água.'],
  },
  'amazon-jungle-survival-experience': {
    introduction: [
      'This is a genuine multi-day camping programme, not a staged survival demonstration. With experienced local guides, guests carry their belongings into the forest, sleep in hammocks and learn how to make fire, establish camp, prepare food and recognise useful and medicinal plants.',
      'Three-, four- and five-day versions are possible. Longer programmes add a second forest camp, waterfalls, a riverside camp, piranha fishing, nocturnal wildlife observation and paddle-canoe exploration of seasonally flooded forest.',
    ],
    ptIntroduction: [
      'Este é um verdadeiro programa de acampamento de vários dias, não uma demonstração encenada de sobrevivência. Com guias locais experientes, os participantes carregam seus pertences para a floresta, dormem em redes e aprendem a fazer fogo, montar acampamento, preparar alimentos e reconhecer plantas úteis e medicinais.',
      'Há versões de três, quatro e cinco dias. Os programas mais longos acrescentam outro acampamento, cachoeiras, acampamento ribeirinho, pesca de piranhas, observação noturna e exploração da floresta alagada em canoas a remo.',
    ],
    facts: [
      { label: 'Options', value: '3, 4 or 5 days', ptLabel: 'Opções', ptValue: '3, 4 ou 5 dias' },
      { label: 'First departure', value: '07:00 from Manaus', ptLabel: 'Saída inicial', ptValue: '07h00 de Manaus' },
      { label: 'Sleeping', value: 'Hammock camps in the forest', ptLabel: 'Pernoite', ptValue: 'Acampamentos com redes na floresta' },
      { label: 'Access', value: 'Road, motorboat and hiking', ptLabel: 'Acesso', ptValue: 'Estrada, barco motorizado e caminhada' },
    ],
    notIncluded: ['Alcoholic drinks', 'Specialist personal clothing and footwear', 'Personal travel insurance', 'Guide and staff gratuities'],
    ptNotIncluded: ['Bebidas alcoólicas', 'Roupas e calçados pessoais especializados', 'Seguro pessoal de viagem', 'Gorjetas para guias e equipe'],
    goodToKnow: ['The route and length must be agreed with Antonio according to fitness and experience.', 'Participants should be comfortable carrying personal equipment and sleeping in hammocks.', 'Weather, river conditions and safety may require programme changes.'],
    ptGoodToKnow: ['A rota e a duração devem ser combinadas com Antonio conforme o preparo e a experiência.', 'Os participantes devem estar preparados para carregar equipamento pessoal e dormir em redes.', 'Clima, rios e segurança podem exigir mudanças no programa.'],
  },
  'amazon-safari-6-to-8-days': {
    introduction: [
      'This remote private expedition travels through Novo Airão and the Anavilhanas archipelago into Jaú National Park, one of the largest protected forest areas in Brazil. It is for travellers who value time, patience and access to genuinely remote Amazon waterways.',
      'Days are shaped by long boat journeys, wildlife observation, forest walks and simple hammock camps. The exact route is adapted to water levels, park access, weather and the interests of the group rather than forced into a rigid sightseeing timetable.',
    ],
    ptIntroduction: [
      'Esta expedição privativa e remota passa por Novo Airão e pelo arquipélago de Anavilhanas até o Parque Nacional do Jaú, uma das maiores áreas florestais protegidas do Brasil. É indicada para quem valoriza tempo, paciência e acesso a rios verdadeiramente isolados.',
      'Os dias combinam longas navegações, observação da fauna, caminhadas e acampamentos simples em redes. A rota exata se adapta ao nível dos rios, acesso ao parque, clima e interesses do grupo, sem forçar um roteiro rígido.',
    ],
    facts: [
      { label: 'Route', value: 'Manaus, Novo Airão, Anavilhanas, Jaú', ptLabel: 'Rota', ptValue: 'Manaus, Novo Airão, Anavilhanas e Jaú' },
      { label: 'Distance', value: 'Roughly 250 km from Manaus', ptLabel: 'Distância', ptValue: 'Cerca de 250 km desde Manaus' },
      { label: 'Sleeping', value: 'Remote hammock camps', ptLabel: 'Pernoite', ptValue: 'Acampamentos remotos em redes' },
      { label: 'Format', value: 'Private, 6–8 days', ptLabel: 'Formato', ptValue: 'Privativo, 6–8 dias' },
    ],
    notIncluded: ['Flights to Manaus', 'Alcoholic drinks', 'Personal travel insurance and medication', 'Guide and crew gratuities'],
    ptNotIncluded: ['Voos até Manaus', 'Bebidas alcoólicas', 'Seguro de viagem e medicamentos pessoais', 'Gorjetas para guia e tripulação'],
    goodToKnow: ['Park permits and final route are confirmed during planning.', 'Wildlife is never guaranteed; slower travel improves observation opportunities.', 'A detailed personal packing list is supplied before departure.'],
    ptGoodToKnow: ['Autorizações do parque e rota final são confirmadas durante o planejamento.', 'A fauna nunca é garantida; viajar devagar aumenta as oportunidades de observação.', 'Uma lista detalhada de equipamentos pessoais é enviada antes da saída.'],
  },
};

export const getTourDetail = (slug: string) => tourDetails[slug];
