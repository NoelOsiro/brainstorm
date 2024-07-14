import { ImageResponse } from '@vercel/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = `Brainstorm Junior Children's Center`
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // Font
    const interSemiBold = fetch(
        new URL('./Inter-SemiBold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            // ImageResponse JSX element add beautiful linear gradient sky blue to navy blue
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'linear-gradient(180deg, #2C3E50 0%, #2980B9 100%)',

                }}
            >
                Brainstorm Junior Children's Center
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: await interSemiBold,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    )
}