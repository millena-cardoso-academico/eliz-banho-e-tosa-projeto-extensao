
// Site configuration
export const SITE_CONFIG = {
  name: "Eliz Banho & Tosa",
  logoUrl: "/lovable-uploads/9fd75fa2-1f07-411a-a604-888eb8bab467.png",
  description: "Cuidando do seu pet com todo carinho e atenção",
  contact: {
    phone: "(31) 9999-9999",
    whatsapp: "5531999999999",
    instagram: "elizbanhoetosamg"
  },
  address: {
    street: "Rua Exemplo, 123",
    neighborhood: "Bairro Exemplo",
    city: "Cidade Exemplo",
    state: "MG",
    zipcode: "00000-000",
    googleMapsUrl: "https://maps.google.com",
    wazeUrl: "https://waze.com/ul?ll=-19.902425,-43.964352&navigate=yes",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124039.63529392037!2d-43.98033906051636!3d-19.9025405769587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1716246962678!5m2!1spt-BR!2sbr"
  },
  openHours: {
    weekdays: "9h às 18h",
    saturday: "9h às 15h",
    sunday: "Fechado"
  }
};

// Navigation
export const NAV_ITEMS = [
  { name: 'Início', href: '#home' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Antes & Depois', href: '#before-after' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
  { name: 'Localização', href: '#location' },
];

// Services
export const SERVICES = [
  {
    icon: "Bath",
    title: "Banho Completo",
    description: "Banho com shampoo e condicionador de qualidade, secagem e escovação",
    price: "A partir de R$40",
  },
  {
    icon: "Scissors",
    title: "Banho & Tosa",
    description: "Banho completo + tosa tradicional ou personalizada para o seu pet",
    price: "A partir de R$70",
    isPopular: true
  },
  {
    icon: "Dog",
    title: "Pet Sitter",
    description: "Passeios e cuidados especiais para seu pet enquanto você está fora",
    price: "A partir de R$50",
  }
];

// Team qualifications
export const QUALIFICATIONS = [
  "Técnica em Estética Animal - Escola X",
  "Especialista em Tosa para Raças Especiais",
  "Curso de Pet Sitter Profissional",
  "Primeiros Socorros para Pets"
];

// Before-after section data
export const BEFORE_AFTER_DATA = [
  {
    petName: "Max",
    service: "Tosa Completa",
    beforeImage: "/lovable-uploads/95fa05c6-935e-40e5-8d93-42627dfc4a75.png",
    afterImage: "/lovable-uploads/6be328a7-e103-403a-a744-8ee49ff36f46.png"
  },
  {
    petName: "Luna",
    service: "Banho & Hidratação",
    beforeImage: "/lovable-uploads/a4bfd8fd-2bf3-42ec-88de-2dc89e38a8a5.png",
    afterImage: "/lovable-uploads/bcf17b26-306e-43ed-8ad7-d81ee2767004.png"
  },
  {
    petName: "Bella",
    service: "Tosa Higiênica",
    beforeImage: "/lovable-uploads/0bf05a79-e056-4b07-985e-7a98d0a9ca7e.png",
    afterImage: "/lovable-uploads/bdfe85b2-1cd9-41bb-81d3-8bf456337138.png"
  },
  {
    petName: "Thor",
    service: "Banho Especial",
    beforeImage: "/lovable-uploads/b9f76bc0-9983-45ee-b7c1-215394ac53f1.png",
    afterImage: "/lovable-uploads/7b99518b-0a21-4bb1-826d-baa130c5eb09.png"
  },
];

// Gallery images - Removido pois está sendo definido diretamente no componente Gallery.tsx

// Hero carousel items
export const CAROUSEL_ITEMS = [
  {
    title: "Banho & Tosa",
    description: "Seu pet limpinho e cheiroso com os melhores produtos",
    image: "/lovable-uploads/20daf9c6-88bb-4261-af46-d20dd768756d.png"
  },
  {
    title: "Pet Sitter",
    description: "Cuidamos do seu pet enquanto você está fora",
    image: "/lovable-uploads/bcf17b26-306e-43ed-8ad7-d81ee2767004.png"
  },
  {
    title: "Tratamentos Especiais",
    description: "Hidratação, perfumaria e outros cuidados para seu amiguinho",
    image: "/lovable-uploads/95fa05c6-935e-40e5-8d93-42627dfc4a75.png"
  }
];
