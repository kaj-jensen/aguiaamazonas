export type PlanningGuide = {
  slug: string;
  ptSlug: string;
  title: string;
  ptTitle: string;
  description: string;
  ptDescription: string;
  eyebrow: string;
  ptEyebrow: string;
  lead: string;
  ptLead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  ptSections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedTourSlugs: string[];
};

export const planningGuides: PlanningGuide[] = [
  {
    slug: 'best-time-to-visit-amazon-from-manaus',
    ptSlug: 'melhor-epoca-para-visitar-amazonia-saindo-de-manaus',
    title: 'Best Time to Visit the Amazon from Manaus',
    ptTitle: 'Melhor época para visitar a Amazônia saindo de Manaus',
    description: 'Compare high water, low water, rainfall, wildlife and activities to choose the best time for your Amazon tour from Manaus.',
    ptDescription: 'Compare cheia, seca, chuvas, fauna e atividades para escolher a melhor época para seu passeio na Amazônia saindo de Manaus.',
    eyebrow: 'Seasons · Water · Wildlife',
    ptEyebrow: 'Estações · Águas · Fauna',
    lead: 'There is no single best month. The right season depends on whether you dream of flooded forest, exposed river beaches, longer walks or a balance of river and land exploration.',
    ptLead: 'Não existe um único mês perfeito. A melhor época depende de você preferir floresta alagada, praias de rio, caminhadas mais longas ou uma mistura de atividades na água e em terra.',
    sections: [
      { heading: 'December to June: rising and high water', paragraphs: ['Rain becomes more frequent and rivers steadily rise. By May and June, canoes can often move between trees in seasonally flooded forest, creating an extraordinary water-level view of the canopy.', 'Rain does not usually mean an entire day is lost. Tropical showers can be intense and local, while routes remain flexible around weather and river conditions.'], bullets: ['Excellent for canoe exploration and flooded forest', 'Lush landscapes and expansive waterways', 'Pack dependable rain protection and dry bags'] },
      { heading: 'July to November: falling and low water', paragraphs: ['River levels begin to fall, gradually revealing banks, beaches and more walking terrain. October and November generally bring the broadest access to dry ground, although exact conditions vary each year.', 'This period works well for travellers prioritising trails, forest camps and river beaches. Boat travel remains central; the scenery and access simply change with the water.'], bullets: ['More exposed trails, banks and beaches', 'Strong choice for hiking and hammock camps', 'Hot conditions make hydration particularly important'] },
      { heading: 'Choose by experience—not a wildlife promise', paragraphs: ['Wildlife is present throughout the year, but no ethical guide can guarantee a particular sighting. Dawn, dusk, habitat, water level and patience matter more than a marketing promise.', 'Tell Antonio what matters most—canoeing, hiking, photography, family comfort or remote forest—and he can recommend a route suited to the current season.'] },
    ],
    ptSections: [
      { heading: 'Dezembro a junho: subida e cheia', paragraphs: ['As chuvas ficam mais frequentes e os rios sobem. Em maio e junho, as canoas muitas vezes navegam entre árvores na floresta alagada, oferecendo uma perspectiva extraordinária da copa.', 'Chuva não significa necessariamente perder o dia. Pancadas tropicais podem ser intensas e localizadas, e o roteiro se adapta ao clima e ao nível dos rios.'], bullets: ['Excelente para canoas e floresta alagada', 'Paisagem verde e rios amplos', 'Leve boa proteção contra chuva e sacos impermeáveis'] },
      { heading: 'Julho a novembro: vazante e seca', paragraphs: ['Os níveis baixam e revelam margens, praias e mais terreno para caminhar. Outubro e novembro costumam oferecer o maior acesso à terra firme, embora cada ano seja diferente.', 'É uma boa fase para quem prioriza trilhas, acampamento na floresta e praias fluviais. Os barcos continuam essenciais; o cenário e os acessos é que mudam.'], bullets: ['Mais trilhas, margens e praias expostas', 'Boa escolha para caminhada e acampamento em redes', 'O calor exige atenção especial à hidratação'] },
      { heading: 'Escolha pela experiência, não por promessas de animais', paragraphs: ['A fauna está presente o ano inteiro, mas nenhum guia responsável garante uma espécie. Amanhecer, entardecer, habitat, nível da água e paciência importam mais que uma promessa comercial.', 'Conte ao Antonio o que mais deseja viver — canoagem, caminhada, fotografia, conforto em família ou floresta remota — e ele indicará uma rota adequada à estação.'] },
    ],
    relatedTourSlugs: ['full-day-tour-from-manaus', '3-days-2-nights-at-rio-preto-da-eva-lodge', 'amazon-cruise-4-days-3-nights'],
  },
  {
    slug: 'how-many-days-amazon-tour-manaus',
    ptSlug: 'quantos-dias-passeio-amazonia-manaus',
    title: 'How Many Days for an Amazon Tour from Manaus?',
    ptTitle: 'Quantos dias reservar para um passeio na Amazônia?',
    description: 'Compare one-day, 2–4 day and 6–8 day Amazon tours from Manaus and choose the right trip length for your interests and pace.',
    ptDescription: 'Compare passeios de um dia, 2–4 dias e 6–8 dias saindo de Manaus para escolher a duração certa para seu ritmo e interesses.',
    eyebrow: 'Trip length · First visits · Remote journeys',
    ptEyebrow: 'Duração · Primeira visita · Expedições remotas',
    lead: 'One day can introduce the forest. Three or four days let you feel its daily rhythm. Six days or more create time to travel beyond the most accessible routes.',
    ptLead: 'Um dia apresenta a floresta. Três ou quatro dias permitem sentir seu ritmo diário. Seis dias ou mais dão tempo para alcançar áreas realmente remotas.',
    sections: [
      { heading: 'One day: a complete introduction', paragraphs: ['A full day from Manaus can combine river travel, a substantial forest walk, local food, piranha fishing, sunset and caiman spotting. It suits short stays and travellers who are not ready for an overnight in the forest.', 'Expect a long, active day. Arrive in Manaus beforehand rather than relying on a same-day flight.'] },
      { heading: 'Two to four days: the best first-visit balance', paragraphs: ['Overnight time changes the experience. Dawn wildlife, quiet evenings, longer canoe routes and unhurried conversations become possible. Three or four days are usually the strongest choice for a first Amazon journey.', 'Choose a simple lodge for a stable base, or a regional boat when you want the route itself to keep moving.'], bullets: ['Two days for a compact overnight experience', 'Three days for a balanced first journey', 'Four days for more depth and an optional forest camp'] },
      { heading: 'Six to eight days: reach genuinely remote country', paragraphs: ['Longer expeditions suit travellers who value remoteness more than a fixed checklist. Reaching Jaú National Park involves significant road and boat travel, changing camps and adapting to conditions.', 'Allow a buffer night in Manaus before and after a remote programme. Weather, permits and river conditions deserve flexibility.'] },
    ],
    ptSections: [
      { heading: 'Um dia: uma introdução completa', paragraphs: ['Um dia inteiro saindo de Manaus pode reunir navegação, uma boa caminhada, comida local, pesca de piranhas, pôr do sol e focagem de jacarés. É indicado para estadias curtas e para quem ainda não quer pernoitar na floresta.', 'Espere um dia longo e ativo. Chegue a Manaus com antecedência em vez de depender de um voo no mesmo dia.'] },
      { heading: 'Dois a quatro dias: o melhor equilíbrio para a primeira visita', paragraphs: ['Pernoitar transforma a experiência. Amanhecer, noites tranquilas, rotas de canoa mais longas e conversas sem pressa tornam-se possíveis. Três ou quatro dias costumam ser a melhor escolha para uma primeira viagem.', 'Escolha uma pousada simples para ter uma base fixa ou um barco regional quando quiser que o deslocamento faça parte da aventura.'], bullets: ['Dois dias para uma experiência compacta', 'Três dias para uma primeira viagem equilibrada', 'Quatro dias para mais profundidade e acampamento opcional'] },
      { heading: 'Seis a oito dias: alcance áreas realmente remotas', paragraphs: ['Expedições longas são para quem valoriza isolamento mais do que uma lista fixa. Chegar ao Parque Nacional do Jaú exige estrada, navegação, diferentes acampamentos e adaptação às condições.', 'Reserve uma noite de margem em Manaus antes e depois. Clima, autorizações e nível dos rios pedem flexibilidade.'] },
    ],
    relatedTourSlugs: ['full-day-tour-from-manaus', '3-days-2-nights-at-rio-preto-da-eva-lodge', 'amazon-safari-6-to-8-days'],
  },
  {
    slug: 'what-to-pack-amazon-jungle-tour',
    ptSlug: 'o-que-levar-para-passeio-na-amazonia',
    title: 'What to Pack for an Amazon Jungle Tour',
    ptTitle: 'O que levar para um passeio na Amazônia',
    description: 'A practical Amazon jungle packing list for tours from Manaus: clothing, footwear, rain protection, medication and useful equipment.',
    ptDescription: 'Lista prática para a Amazônia saindo de Manaus: roupas, calçados, proteção contra chuva, medicamentos e equipamentos úteis.',
    eyebrow: 'Packing · Clothing · Practical preparation',
    ptEyebrow: 'Bagagem · Roupas · Preparação prática',
    lead: 'Pack lightly enough for small boats, but deliberately enough for heat, humidity, sudden rain and wet transfers. Quick-drying essentials matter more than a large suitcase.',
    ptLead: 'Leve pouco para facilitar os barcos pequenos, mas prepare-se para calor, umidade, chuva repentina e traslados molhados. Itens de secagem rápida valem mais que uma mala grande.',
    sections: [
      { heading: 'Clothing and footwear', paragraphs: ['Bring lightweight long sleeves and trousers for sun, insects and forest walks, plus swimwear and completely dry clothing reserved for sleeping. Dark or neutral colours are generally more practical than bright whites.', 'Use broken-in closed shoes or light hiking boots. Add secure sandals for the lodge or boat, but follow Antonio’s advice when closed footwear is required.'], bullets: ['Quick-drying long trousers and shirts', 'Swimwear and dry sleep clothing', 'Closed walking shoes plus secure sandals', 'Hat and compact rain jacket'] },
      { heading: 'Protection, health and documents', paragraphs: ['Carry insect repellent, sunscreen, a reusable water bottle and personal medication in accessible waterproof storage. Discuss yellow fever, malaria risk and your own medical needs with a travel-health professional well before departure.', 'Keep passport copies, insurance details and essential medication with you rather than in checked luggage. Tell Antonio about allergies, dietary needs or mobility concerns before the trip.'] },
      { heading: 'Small equipment that earns its place', paragraphs: ['A head torch leaves both hands free at camp. A power bank, dry bag, binoculars and small packing pouches are consistently useful. Protect cameras and phones from rain and condensation.', 'Avoid bringing unnecessary valuables. Soft bags are easier than hard suitcases on canoes; larger luggage can usually remain in Manaus.'] },
    ],
    ptSections: [
      { heading: 'Roupas e calçados', paragraphs: ['Leve camisas leves de manga longa e calças compridas para sol, insetos e caminhadas, além de roupa de banho e uma troca completamente seca reservada para dormir.', 'Use tênis ou bota leve já amaciada. Acrescente sandália firme para pousada ou barco, mas siga a orientação de Antonio quando calçado fechado for necessário.'], bullets: ['Calça e camisa compridas de secagem rápida', 'Roupa de banho e roupa seca para dormir', 'Calçado fechado e sandália firme', 'Chapéu e capa de chuva compacta'] },
      { heading: 'Proteção, saúde e documentos', paragraphs: ['Leve repelente, protetor solar, garrafa reutilizável e medicamentos pessoais em embalagem impermeável e acessível. Converse com um profissional de saúde sobre febre amarela, risco de malária e suas necessidades com antecedência.', 'Mantenha cópias de documentos, seguro e remédios essenciais na bagagem de mão. Informe alergias, restrições alimentares ou limitações de mobilidade antes da viagem.'] },
      { heading: 'Equipamentos pequenos que valem o espaço', paragraphs: ['Lanterna de cabeça deixa as mãos livres. Bateria externa, saco impermeável, binóculos e pequenos organizadores são muito úteis. Proteja câmera e celular da chuva e condensação.', 'Evite objetos de valor desnecessários. Bolsas flexíveis funcionam melhor que malas rígidas em canoas; a bagagem maior pode ficar em Manaus.'] },
    ],
    relatedTourSlugs: ['2-day-amazon-experience-at-jardim-maravilha-guesthouse', 'amazon-jungle-survival-experience', 'amazon-cruise-3-days-2-nights'],
  },
  {
    slug: 'private-amazon-tour-english-speaking-guide-manaus',
    ptSlug: 'passeio-privativo-amazonia-guia-ingles-manaus',
    title: 'Private Amazon Tours with an English-Speaking Guide in Manaus',
    ptTitle: 'Passeios privativos na Amazônia com guia que fala inglês',
    description: 'Plan a private or small-group Amazon tour from Manaus with Antonio, a licensed local guide who speaks English and Portuguese.',
    ptDescription: 'Planeje um passeio privativo ou em pequeno grupo saindo de Manaus com Antonio, guia local credenciado que fala português e inglês.',
    eyebrow: 'Local guide · English & Portuguese · Made to measure',
    ptEyebrow: 'Guia local · Português e inglês · Sob medida',
    lead: 'A private journey is not simply a standard itinerary with fewer people. It creates room to match the pace, interests and comfort of your group to the living conditions of the forest.',
    ptLead: 'Uma viagem privativa não é apenas um roteiro padrão com menos pessoas. Ela permite ajustar ritmo, interesses e conforto do grupo às condições reais da floresta.',
    sections: [
      { heading: 'Meet Antonio, your local Amazon guide', paragraphs: ['Antonio is a registered regional tourism guide in Amazonas through Brazil’s Ministry of Tourism and Cadastur. He guides in Portuguese and English and has worked in the Amazon since 2003.', 'His role is both practical and interpretive: organising transfers and local partners, reading river and weather conditions, explaining forest knowledge and helping travellers understand the communities they visit.'] },
      { heading: 'What can be personalised?', paragraphs: ['Private and small-group journeys can adapt walking time, early starts, canoe time, accommodation style and the balance between wildlife, culture, photography and forest skills.', 'Conditions still set boundaries. Water levels, weather, safety and local access can change the order or feasibility of activities; a good private guide explains those changes honestly.'], bullets: ['Families and multigenerational groups', 'Couples, friends and solo travellers', 'Photography and wildlife interests', 'Lodge, boat or hammock-camp combinations'] },
      { heading: 'How to request the right journey', paragraphs: ['Send Antonio your travel dates, number of travellers, ages where relevant, preferred trip length and the experiences that matter most. Mention swimming confidence, dietary needs, mobility limitations and accommodation expectations.', 'You will receive a proposal shaped around your group and the season—not a promise that wild animals or weather will follow a schedule.'] },
    ],
    ptSections: [
      { heading: 'Conheça Antonio, seu guia local', paragraphs: ['Antonio é guia regional de turismo credenciado no Amazonas pelo Ministério do Turismo e Cadastur. Conduz em português e inglês e trabalha na Amazônia desde 2003.', 'Seu papel é prático e interpretativo: organizar traslados e parceiros locais, ler as condições do rio e do clima, explicar conhecimentos da floresta e ajudar visitantes a compreender as comunidades.'] },
      { heading: 'O que pode ser personalizado?', paragraphs: ['Passeios privativos e grupos pequenos permitem adaptar caminhadas, saídas cedo, tempo de canoa, estilo de hospedagem e o equilíbrio entre fauna, cultura, fotografia e técnicas de floresta.', 'As condições continuam definindo limites. Nível da água, clima, segurança e acesso local podem mudar atividades; um bom guia explica essas mudanças com honestidade.'], bullets: ['Famílias e grupos de diferentes gerações', 'Casais, amigos e viajantes individuais', 'Interesse em fotografia e fauna', 'Combinações de pousada, barco e acampamento em redes'] },
      { heading: 'Como pedir a viagem certa', paragraphs: ['Envie ao Antonio suas datas, número de viajantes, idades quando relevante, duração desejada e principais interesses. Informe confiança na água, alimentação, mobilidade e expectativas de hospedagem.', 'Você receberá uma proposta adequada ao grupo e à estação — não uma promessa de que animais selvagens ou clima seguirão um horário.'] },
    ],
    relatedTourSlugs: ['full-day-tour-from-manaus', '4-days-3-nights-at-jardim-maravilha-lodge', 'amazon-safari-6-to-8-days'],
  },
];

export const getPlanningGuide = (slug: string, isPt = false) => planningGuides.find((guide) => isPt ? guide.ptSlug === slug : guide.slug === slug);
