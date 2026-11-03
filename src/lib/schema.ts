import { SITE, MAISONS, EXTENSION } from '../data/site';

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
    alternateName: 'Maisons d’Antiquaires et d’Expertise d’Art',
    url: SITE.url,
    logo: abs('/favicon.svg'),
    image: abs('/img/commode-louis-xv-1400.webp'),
    description:
      'Réseau d’antiquaires et d’experts en objets d’art : estimation gratuite, expertise, rachat de succession et d’antiquités de la Charente au Pays basque, dans le Périgord, la Gironde, le Gard et l’Hérault.',
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: 'Estimation gratuite',
    address: { '@type': 'PostalAddress', addressRegion: 'Nouvelle-Aquitaine', addressCountry: 'FR' },
    areaServed: [
      ...['Charente', 'Charente-Maritime', 'Dordogne', 'Gironde', 'Landes', 'Pyrénées-Atlantiques', 'Gard', 'Hérault'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
      ...['Bordeaux', 'Biarritz', 'Périgueux', 'Angoulême', 'La Rochelle', 'Nîmes', 'Montpellier'].map((n) => ({ '@type': 'City', name: n })),
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

export function maisonSchema(slug: string) {
  const m = MAISONS.find((x) => x.slug === slug);
  const name = m ? m.name : `Antiquaire ${EXTENSION.name}`;
  const cities = m ? m.cities : EXTENSION.cities;
  const region = m ? m.region : EXTENSION.name;
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Store'],
    '@id': abs(`/nos-maisons/${slug}/#maison`),
    additionalType: 'https://en.wikipedia.org/wiki/Antique_shop',
    name,
    url: abs(`/nos-maisons/${slug}/`),
    parentOrganization: { '@id': ORG_ID },
    description: `Antiquaire et expert en objets d’art : estimation gratuite, rachat de succession et d’antiquités – ${region}.`,
    address: { '@type': 'PostalAddress', addressRegion: region, addressCountry: 'FR' },
    areaServed: cities.map((n) => ({ '@type': 'City', name: n })),
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
    areaServed: ['Charente', 'Charente-Maritime', 'Dordogne', 'Gironde', 'Landes', 'Pyrénées-Atlantiques', 'Gard', 'Hérault'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
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
