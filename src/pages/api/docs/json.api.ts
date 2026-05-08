import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { NextApiRequest, NextApiResponse } from 'next'

// Lazy-load yaml parser — falls back to a tiny manual JSON parse if the
// openapi file happens to be JSON.  We keep `js-yaml` as an optional dep;
// when it is not installed the route still works for JSON specs.

function parseSpec(): Record<string, unknown> {
  const yamlPath = join(process.cwd(), 'public', 'openapi.yaml')
  const jsonPath = join(process.cwd(), 'openapi.json')

  // Try YAML first
  try {
    const raw = readFileSync(yamlPath, 'utf-8')
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const yaml = require('js-yaml')
      return yaml.load(raw) as Record<string, unknown>
    } catch {
      // js-yaml not installed — try parsing as JSON
      return JSON.parse(raw)
    }
  } catch {
    // YAML file not found — fall back to JSON
    const raw = readFileSync(jsonPath, 'utf-8')
    return JSON.parse(raw)
  }
}

let cached: Record<string, unknown> | null = null

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  if (!cached) {
    cached = parseSpec()
  }
  res.status(200).json(cached)
}
