import { BUSINESS } from '@/lib/constants'
import type { Service } from '@/types'

interface ServiceSchemaProps {
  service: Service
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} — ${BUSINESS.name}`,
    description: service.longDescription,
    serviceType: service.serviceType,
    url: `${BUSINESS.siteUrl}/services/${service.slug}`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.siteUrl,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Tennessee',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
