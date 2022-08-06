/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "fresh/runtime.ts"
import { LayoutProps, Meta } from "../utils/types/index.ts"

export default ({ children, meta }: LayoutProps) => {
    const seo: Meta = {
        title: meta.title ? meta.title : "Default Title",
        type: meta.type ? meta.type : "website",
        description: meta.description ? meta.description : "A description should indicate the main purpose of a website.",
        url: meta.url ? meta.url : "https://www.seo-example.deno.dev/",
        image: meta.image ? meta.image : "https://www.seo-example.deno.dev/logo.png"
    }

    return (
        <div class={tw`my-4 mx-auto w-5/6 max-w-screen-md`}>
            <Head>
                <title>{meta.title}</title>

                {/* Robots.txt */}
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}

                <meta property="og:type" content={meta.type} />

                <meta property="og:title" content={meta.title} />

                <meta property="og:description" content={meta.description} />

                <meta property="og:image" content={meta.image} />

                <meta property="og:image:secure_url" content={meta.image} />

                <meta property="og:url" content={meta.url} />

                <meta property="og:site_name" content={meta.title} />

                <meta property="og:image:type" content="image/png" />

                <meta property="og:image:alt" content="the fresh logo: a sliced lemon dripping with juice." />

                {/* Twitter */}

                <meta name="twitter:title" content={meta.title} />

                <meta name="twitter:description" content={meta.description} />

                <meta name="twitter:site" content="@deno_land" />

                <meta name="twitter:creator" content="@deno_land" />

                {/* Canonical */}

                <link rel="canonical" href="https://www.fresh.deno.dev/" />

                {/* Fonts */}
                <link href="http://fonts.cdnfonts.com/css/lucida-sans" rel="stylesheet"></link>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <main class={tw`my-4`}>
                {children}
            </main>
        </div>
    )
}