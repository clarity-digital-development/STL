import { BUSINESS } from '@/lib/constants'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS.name,
    description:
      "Premium craftsman contractor specializing in custom fences, decks, pergolas, screened enclosures, staining, concrete, and interior finish work. Serving Nashville, Clarksville, Brentwood, Franklin, and surrounding areas.",
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Tennessee',
      },
    })),
    sameAs: [BUSINESS.facebook],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor Living & Contractor Services',
      itemListElement: [
        'Fence Installation',
        'Screened Enclosure Installation',
        'Deck Construction',
        'Pergola Construction',
        'Wood Staining and Restoration',
        'Concrete Construction',
        'Interior Carpentry',
        'Custom Woodworking',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
