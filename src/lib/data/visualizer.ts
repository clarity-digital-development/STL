import type { ProjectTypeOption, MaterialOption, StyleOption } from '@/types'

export const PROJECT_TYPES: ProjectTypeOption[] = [
  { slug: 'deck', label: 'Custom Deck', icon: 'M3 12h18M3 6h18M3 18h18M6 3v18M18 3v18' },
  { slug: 'fence', label: 'Fence & Gates', icon: 'M3 3v18M9 3v18M15 3v18M21 3v18M3 9h18M3 15h18' },
  { slug: 'screened-enclosure', label: 'Screened Enclosure', icon: 'M3 21V7l9-4 9 4v14M3 7h18M7 21V11h10v10' },
  { slug: 'pergola', label: 'Pergola', icon: 'M3 8h18M6 8V4M18 8V4M3 8v13M21 8v13M7 8v13M17 8v13M3 12h18' },
  { slug: 'patio', label: 'Patio / Concrete', icon: 'M2 20h20M4 20v-4h4v4M10 20v-4h4v4M16 20v-4h4v4M6 16v-4h4v4M12 16v-4h4v4' },
  { slug: 'pool-deck', label: 'Pool Deck', icon: 'M2 15c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0M2 19c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0M3 6h18v5H3z' },
  { slug: 'outdoor-kitchen', label: 'Outdoor Kitchen', icon: 'M3 6h18v14H3zM3 10h18M8 6v4M15 6v4M7 14h3v6H7zM14 14h3v2h-3z' },
  { slug: 'interior', label: 'Interior Woodwork', icon: 'M3 3h18v18H3zM9 3v18M3 9h6M3 15h6M12 8h6M12 12h6M12 16h4' },
  { slug: 'staircase', label: 'Custom Staircase', icon: 'M18 3v4h-4v4h-4v4H6v4H2v2h6v-4h4v-4h4V9h4V3z' },
  { slug: 'furniture', label: 'Custom Furniture', icon: 'M5 12h14M4 12v7M20 12v7M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4M4 19h2M18 19h2' },
]

// ── All available materials ──────────────────────────────
export const ALL_MATERIALS: MaterialOption[] = [
  // Woods
  { slug: 'ipe', label: 'Ipe', color: '#5C3A1E', description: 'rich dark brown Brazilian ipe hardwood with visible natural grain patterns' },
  { slug: 'cedar', label: 'Western Red Cedar', color: '#B87333', description: 'warm honey-toned western red cedar with natural grain variation' },
  { slug: 'white-oak', label: 'White Oak', color: '#C4A76C', description: 'light golden white oak with tight straight grain' },
  { slug: 'mahogany', label: 'Mahogany', color: '#7B3F2E', description: 'deep reddish-brown mahogany with rich grain patterns' },
  { slug: 'pine', label: 'Pine', color: '#D4B87A', description: 'natural pine wood with a light golden tone and visible knots' },
  { slug: 'pressure-treated', label: 'Pressure-Treated Pine', color: '#A8956E', description: 'pressure-treated southern yellow pine with a fresh greenish-tan tone' },
  { slug: 'redwood', label: 'Redwood', color: '#8B4232', description: 'California redwood with rich reddish-brown heartwood and fine straight grain' },
  { slug: 'walnut', label: 'Walnut', color: '#4A3728', description: 'rich dark brown American black walnut with swirling grain patterns' },
  { slug: 'cherry', label: 'Cherry', color: '#8B4513', description: 'warm reddish-brown American cherry with fine smooth grain' },
  { slug: 'maple', label: 'Maple', color: '#E8D5B0', description: 'light creamy American maple with subtle grain and smooth finish' },
  { slug: 'poplar', label: 'Poplar', color: '#C5B99A', description: 'light greenish-tan poplar wood, commonly used for painted trim and millwork' },
  { slug: 'reclaimed', label: 'Reclaimed Wood', color: '#7A6A55', description: 'weathered reclaimed barn wood with rich patina and character marks' },
  // Non-wood
  { slug: 'composite', label: 'Composite', color: '#8B7D6B', description: 'modern composite decking in a warm gray-brown tone' },
  { slug: 'iron', label: 'Ornamental Iron', color: '#2C2C2C', description: 'matte black ornamental iron with clean geometric lines' },
  { slug: 'aluminum', label: 'Aluminum', color: '#A0A0A0', description: 'powder-coated aluminum framing in matte black or bronze' },
  { slug: 'stone', label: 'Natural Stone', color: '#A89F91', description: 'natural Tennessee limestone in warm gray tones' },
  { slug: 'concrete', label: 'Concrete', color: '#9E9E9E', description: 'smooth finished concrete in warm gray' },
  { slug: 'stamped-concrete', label: 'Stamped Concrete', color: '#B5A48A', description: 'decorative stamped concrete with a natural stone or brick pattern' },
  { slug: 'pavers', label: 'Pavers', color: '#A0877A', description: 'interlocking concrete or natural stone pavers in warm earth tones' },
  { slug: 'brick', label: 'Brick', color: '#8B4F3B', description: 'classic red or earth-toned brick masonry' },
  { slug: 'granite', label: 'Granite', color: '#6B6B6B', description: 'polished or honed granite countertops in natural gray or black' },
  { slug: 'vinyl', label: 'Vinyl', color: '#E8E8E8', description: 'clean white vinyl fencing with smooth maintenance-free finish' },
  { slug: 'surprise', label: 'Not Sure', color: '#c4935a', description: 'a beautiful mix of premium materials chosen by a designer' },
]

// ── Materials per project type ───────────────────────────
export const MATERIALS_BY_PROJECT: Record<string, string[]> = {
  'deck':                ['ipe', 'cedar', 'mahogany', 'redwood', 'pressure-treated', 'composite', 'white-oak', 'surprise'],
  'fence':               ['cedar', 'pressure-treated', 'pine', 'redwood', 'iron', 'composite', 'vinyl', 'surprise'],
  'screened-enclosure':  ['cedar', 'pressure-treated', 'pine', 'aluminum', 'composite', 'redwood', 'surprise'],
  'pergola':             ['cedar', 'pressure-treated', 'pine', 'redwood', 'ipe', 'mahogany', 'aluminum', 'surprise'],
  'patio':               ['concrete', 'stamped-concrete', 'pavers', 'stone', 'brick', 'surprise'],
  'pool-deck':           ['composite', 'ipe', 'concrete', 'stamped-concrete', 'pavers', 'stone', 'surprise'],
  'outdoor-kitchen':     ['stone', 'brick', 'concrete', 'stamped-concrete', 'granite', 'surprise'],
  'interior':            ['white-oak', 'walnut', 'cherry', 'maple', 'poplar', 'pine', 'mahogany', 'reclaimed', 'surprise'],
  'staircase':           ['white-oak', 'walnut', 'cherry', 'maple', 'mahogany', 'iron', 'pine', 'surprise'],
  'furniture':           ['white-oak', 'walnut', 'cherry', 'mahogany', 'maple', 'cedar', 'reclaimed', 'surprise'],
}

/** Get materials relevant to a project type, or all materials if no type selected */
export function getMaterialsForProject(projectType: string | null): MaterialOption[] {
  if (!projectType) return ALL_MATERIALS
  const slugs = MATERIALS_BY_PROJECT[projectType]
  if (!slugs) return ALL_MATERIALS
  return slugs
    .map((slug) => ALL_MATERIALS.find((m) => m.slug === slug))
    .filter((m): m is MaterialOption => m !== undefined)
}

export const STYLES: StyleOption[] = [
  { slug: 'modern', label: 'Modern', description: 'clean contemporary lines, minimal ornamentation, geometric forms' },
  { slug: 'traditional', label: 'Traditional', description: 'classic Southern architectural style, detailed millwork, symmetrical design' },
  { slug: 'rustic', label: 'Rustic', description: 'warm rustic aesthetic with natural textures, exposed timber framing' },
  { slug: 'farmhouse', label: 'Farmhouse', description: 'modern farmhouse style with board and batten, metal roofing accents' },
  { slug: 'craftsman', label: 'Craftsman', description: 'craftsman style with tapered columns, exposed rafter tails, natural materials' },
  { slug: 'designers-choice', label: "Designer's Choice", description: 'an elegant design chosen by a professional designer that complements the home' },
]

// Maps for prompt engineering
export const PROJECT_CONTEXT: Record<string, string> = {
  'deck': 'a custom residential deck attached to a home',
  'fence': 'a custom residential fence and gate system',
  'screened-enclosure': 'a screened-in porch or enclosure attached to a home',
  'pergola': 'a freestanding or attached pergola or covered outdoor structure',
  'patio': 'a concrete or paver patio with outdoor living elements',
  'pool-deck': 'a pool surround deck area',
  'outdoor-kitchen': 'an outdoor kitchen and entertaining area',
  'interior': 'an interior residential space with custom woodwork',
  'staircase': 'a custom-built staircase with detailed woodwork',
  'furniture': 'custom handcrafted wood furniture',
}
