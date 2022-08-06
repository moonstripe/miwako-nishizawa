/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { Meta } from "../utils/types/index.ts";


export default function Lost(props: PageProps) {
  const lostSEO: Meta = {
    title: "Miwako Nishizawa: 404",
    type: "website",
    description: "Looks like you're lost!",
    image: "/hanko.png"
  };

  console.log(props)

  return (
    <Layout meta={lostSEO}>
      <p class={tw`mt-5 text-xl`}>Looks like you're lost!</p>
      <p class={tw`mt-5`}>There isn't anything at www.miwakonishizawa.art{props.url.pathname}</p>
      <p class={tw`mt-5`}><a class={tw`text-red-500`} href="/">Return home</a>.</p>
    </Layout>
  )
}
