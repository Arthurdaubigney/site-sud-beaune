import { SITE } from '../data/site';

const abs = (p: string) => new URL(p, SITE.url).toString();
const clean = <T extends Record<string, unknown>>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== '' && v !== undefined)) as T;

const ORG_ID = abs('/#organisation');

export function organisationSchema() {
  return clean({
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'Store'],
    '@id': ORG_ID,
    additionalType: 'https://en.wikipedia.org/wiki/Antique_shop',
    name: SITE.name,
    alternateName: 'Cabinet d’Expertise & Antiquités du Sud-Ouest',
    url: SITE.url,
    logo: abs('/favicon.svg'),
    image: abs('/img/commode-louis-xv-1400.webp'),
    description:
      'Antiquaire passionné et cabinet d’expertise itinérant : estimation gratuite, expertise, rachat de succession et d’antiquités dans toute la Nouvelle-Aquitaine et toute l’Occitanie.',
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: 'Estimation gratuite',
    address: { '@type': 'PostalAddress', addressRegion: 'Nouvelle-Aquitaine', addressCountry: 'FR' },
    areaServed: [
      ...['Nouvelle-Aquitaine', 'Occitanie'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
      ...['Bordeaux', 'Toulouse', 'Montpellier', 'Poitiers', 'Limoges', 'Biarritz', 'Périgueux', 'Angoulême', 'La Rochelle', 'Nîmes', 'Perpignan', 'Albi'].map((n) => ({ '@type': 'City', name: n })),
    ],
    knowsAbout: ['Antiquités', 'Expertise d’objets d’art', 'Rachat de succession', 'Tableaux anciens', 'Bronzes', 'Bijoux anciens', 'Mobilier d’époque'],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Estimation gratuite d’antiquités et d’objets d’art' },
      price: '0',
      priceCurrency: 'EUR',
    },
  });
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': ORG_ID },
  };
}

export function zoneSchema(slug: string, name: string, areas: string[], kind: 'AdministrativeArea' | 'City' = 'City') {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Store'],
    '@id': abs(`/zones-intervention/${slug}/#zone`),
    additionalType: 'https://en.wikipedia.org/wiki/Antique_shop',
    name: `${SITE.name} – ${name}`,
    url: abs(`/zones-intervention/${slug}/`),
    parentOrganization: { '@id': ORG_ID },
    description: `Antiquaire et expert en objets d’art : estimation gratuite, rachat de succession et d’antiquités – ${name}.`,
    address: { '@type': 'PostalAddress', addressRegion: name, addressCountry: 'FR' },
    areaServed: areas.map((n) => ({ '@type': kind, name: n })),
    priceRange: 'Estimation gratuite',
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: abs(path),
    provider: { '@id': ORG_ID },
    areaServed: ['Nouvelle-Aquitaine', 'Occitanie'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Estimation gratuite et sans engagement' },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: abs(t.path) })),
  };
}
