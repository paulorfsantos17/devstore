import Image from 'next/image'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { env } from '@/env'

import { getProductBySlug } from './page'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)

  const productImageUrl = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: colors.zinc['950'],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageUrl} style={{ width: '100%' }} alt="" />
      </div>
    ),
    {
      ...size,
    },
  )
}
