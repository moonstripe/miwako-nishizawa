/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { NavProps } from "../utils/types/index.ts";

export default ({ inView }: NavProps) => {
    return (
        <div class={tw`relative xl:fixed`}>
            <nav class={tw`flex flex-col my-0 xl:my-8`}>
            <a class={tw`flex flex-row`} href={'/'}>
                <img class={tw`w-28 mx-auto`} src="/hanko.png" alt="Miwako's hanko, a traditional artist's signature in Japan." />
            </a>
                <div class={tw`w-fit mx-auto mt-8 invisible xl:visible`}>
                    <a href="#woodblock" id="woodblock-nav" class={tw`my-4`}><p>Woodblock</p></a>
                    <a href="#artist" id="artist-nav" class={tw`my-4`}><p>Artist</p></a>
                </div>

                <br class={tw`my-0 xl:my-20 w-5/6 mx-auto`} />

                <div class={tw`w-fit mx-auto`}>
                    <svg class="my-4" viewBox="0 0 24 24" width="24px" fill="#0a66c2"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                    <svg class="my-4" viewBox="0 0 24 24" width="24px" fill="rgb(29, 155, 240)"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    <svg class="my-4" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                </div>

                <br class={tw`my-0 xl:my-20 w-1/3 mx-auto`} />

                <div class={tw`w-fit mx-auto invisible xl:visible h-0 xl:h-fit`}>
                    <p class={tw`text-sm w-2/3 mb-2`}>© artwork:</p>
                    <p class={tw`text-sm w-2/3 mb-6 ml-4`}>Miwako Nishizawa</p>
                    <p class={tw`text-sm w-2/3 mb-2`}>© website:</p>
                    <p class={tw`text-sm w-2/3 mb-6 ml-4`}><a class={tw`text-red-400`} href="https://www.kojinglick.com" target="_blank" rel="noreferrer noopener">Moonstripe Design</a></p>
                </div>
            </nav>
        </div>
    )
}