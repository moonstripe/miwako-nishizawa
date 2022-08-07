/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { NavProps } from "../utils/types/index.ts";

export default ({ inView }: NavProps) => {
    return (
        <div class={tw`relative xl:fixed`}>
            <nav class={tw`flex flex-col my-0 xl:my-4`}>
                <a class={tw`flex flex-row`} href={'/'}>
                    <img class={tw`w-28 mx-auto`} src="/hanko.png" alt="Miwako's hanko, a traditional artist's signature in Japan." />
                </a>

                <div class={tw`w-fit mx-auto flex flex-row xl:h-fit`}>
                    <a href="https://www.linkedin.com/in/miwako-nishizawa-85a3a541/" target="_blank" rel="noopener noreferrer"><svg class="mx-2 xl:mx-0.5 my-4" viewBox="0 0 24 24" width="24px" fill="#0a66c2"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                    <a href="https://www.instagram.com/miwartist/" target="_blank" rel="noopener noreferrer"><svg class="mx-2 xl:mx-0.5 my-4" viewBox="0 0 24 24" width="24px" fill="#c32aa3"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></a>
                    <a href="mailto:miwako.nishizawa@gmail.com" target="_blank" rel="noopener noreferrer"><svg class="mx-2 xl:mx-0.5 my-4" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg></a>
                </div>

                <div class={tw`w-fit mx-auto invisible xl:visible h-0 xl:h-full`}>
                    <a href="#woodblock" id="woodblock-nav" class={tw`mb-4`}><p>Woodblock</p></a>
                    <a href="#artist" id="artist-nav" class={tw`mb-4`}><p>Artist</p></a>
                </div>

                <div class={tw`w-3/4 mx-auto invisible xl:visible h-0 xl:h-fit xl:mt-24`}>
                    <p class={tw`text-sm w-fit mb-2`}>© artwork:</p>
                    <p class={tw`text-sm w-fit mb-6`}>Miwako Nishizawa</p>
                    <p class={tw`text-sm w-fit mb-2`}>© website:</p>
                    <p class={tw`text-sm w-fit mb-6`}><a class={tw`text-red-400`} href="https://www.moonstripe.com" target="_blank" rel="noreferrer noopener">Moonstripe</a> {new Date().getFullYear()}</p>
                </div>
            </nav>
        </div>
    )
}