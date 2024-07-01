import { createClient } from 'microcms-js-sdk'
import type { worksCard } from '@/types/works_card'

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.MICROCMS_API_KEY || '',
})

export async function getWorkList(): Promise<worksCard[]> {
    const data = await client.get({ endpoint: 'works_card' })

    return data.contents;
}