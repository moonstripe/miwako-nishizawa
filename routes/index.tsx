/** @jsx h */
import { h } from "preact";
import { useEffect, useState, useCallback } from "preact/hooks";
import { tw } from "@twind";
import Layout from '../components/Layout.tsx'
import { Meta } from "../utils/types/index.ts";
import Nav from "../islands/Nav.tsx";
import ScrollSpy from "../islands/ScrollSpy.tsx";

export default function Home() {
  const [inView, setInView] = useState<string | undefined>()

  const setScrollSpy = useCallback((id: string) => {
    setInView(id)
  }, [])

  const homeSEO: Meta = {
    title: "Miwako Nishizawa: Artist",
    type: "website",
    description: "Miwako Nishizawa is a woodblock printer who resides in Berkeley, CA.",
    url: "www.miwakonishizawa.art/",
    image: "/hanko.png"
  }

  useEffect(() => {
    console.log('inView:')
    console.log(inView)
  }, [inView])

  return (
    <Layout meta={homeSEO}>
      <ScrollSpy setter={setScrollSpy} />
      <div class={tw`grid grid-cols-1 xl:grid-cols-4 font-sans mx-2`}>
        <div class={tw`col-span-1`}>
          {/* fixed nav and socials bar */}
          <Nav inView={inView} />
        </div>
        <h1 class={tw`col-span-1 xl:col-start-2 xl:col-end-5 w-fit xl:w-full mx-auto xl:mx-0 xl:w-100 text-4xl text-red-500 font-title mt-0 xl:mt-12`}>miwako nishizawa</h1>
        <section class={tw`col-span-1 xl:col-start-2 xl:col-end-5`} data-scrollspy="#woodblock" id="woodblock">
          {/* woodblock section */}
          <div class={tw`flex flex-col xl:my-12`}>
            {/* Twelve Views of Virginia */}
            <div class={tw`flex flex-wrap -m-1 md:-m-2 mt-4`}>
              <div class={tw`flex flex-wrap w-1/2 h-full`}>
                <div class={tw`h-full xl:my-10 w-full p-1 md:p-2`}>
                  <a href="http://vmfa.museum/exhibitions/exhibitions/miwako-nishizawa-twelve-views-virginia/" target="_blank" rel="noopener noreferrer">
                    <p class={tw`mx-auto w-5/6 font-title font-extralight text-lg text-red-500`}>Twelve Views of Virginia</p>
                    <p class={tw`mx-auto w-3/4 text-sm text-red-300 font-title font-thin`}>Virginia Museum of Fine Art, 2014 - 2015</p>
                  </a>
                </div>
                <div class={tw`w-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/college.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/skyline.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/monticello.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/hollywood.jpeg" />
                </div>
              </div>
              <div class={tw`flex flex-wrap w-1/2 h-full`}>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/jamestown.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/floyd.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/bridge.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/manassas.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/horse.jpeg" />
                </div>
              </div>
              <div class={tw`flex flex-wrap w-full h-full`}>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/lighthouse.jpeg" />
                </div>
              </div>
            </div>

            <hr class={tw`my-20`} />

            {/* Sixteen Views of Mt. Tam */}
            <div class={tw`flex flex-wrap -m-1 md:-m-2`}>
              <div class={tw`flex flex-wrap w-1/2 h-full`}>
                <div class={tw`w-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam1.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam2.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam3.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam11.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam9.jpeg" />
                </div>
              </div>
              <div class={tw`flex flex-wrap w-1/2 h-full`}>
                <div class={tw`h-full xl:my-10 w-full p-1 md:p-2`}>
                  <a href="https://www.sfgate.com/news/article/New-BART-art-manages-to-make-public-9308244.php#photo-11065903" target="_blank" rel="noopener noreferrer">
                    <p class={tw`mx-auto w-5/6 font-title font-extralight text-lg text-red-500`}>Sixteen Views of Mt. Tam</p>
                    <p class={tw`mx-auto w-3/4 text-sm text-red-300 font-title font-thin`}>2016</p>
                  </a>
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam5.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam6.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam7.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam8.jpeg" />
                </div>
                <div class={tw`w-full h-full p-1 md:p-2`}>
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded"
                    src="/woodblock/tam10.jpeg" />
                </div>
              </div>

            </div>
          </div>
        </section>
        <section class={tw`col-span-1 xl:col-start-2 xl:col-end-5 my-24`} data-scrollspy="#artist" id="artist">
          {/* artist content */}
          {/* TODO: some hero image */}
          <div class={tw`flex flex-col`}>
            {/* Copied from Web Archive */}
            <h1 class={tw`mb-4 text-2xl text-red-500 font-title font-light`}>Biography</h1>

            <p class={tw`mb-4`}>Miwako Nishizawa was born in Kyoto, Japan, and now lives in Berkeley, California.</p>
            <p class={tw`mb-4`}>She creates artwork that adapts traditional Japanese Woodblock techniques to today's landscape.</p>
            <p class={tw`mb-4`}>She received a commission from the <a class={tw`text-red-400 light`} href="http://vmfa.museum/" target="_blank" rel="noopener noreferrer">Virginia Museum of Fine Arts</a> in Richmond, VA to create a series of Japanese woodblock prints, in conjunction with the exhibition, Hasui: Water &amp; Shadow. The exhibition celebrated the Museum's impressive collection of <a class={tw`text-red-400 light`} href="http://en.wikipedia.org/wiki/Hasui_Kawase" target="_self">Kawase Hasui</a> donated by Ren&eacute; and Carolyn Balcer.</p>
            <p class={tw`mb-4`}>She was awarded an Artist-In-Residence package through <a class={tw`text-red-400 light`} href="http://www.kala.org/" target="_blank" rel="noopener noreferrer">Kala Art Institute</a>. </p>

            <h1 class={tw`mb-4 text-xl text-red-500`} id="publications">Publications and Media</h1>

            <p class={tw`text-red-400 mb-4`}><a href="http://www.styleweekly.com/richmond/outside-views/Content?oid=2171220" target="_blank" rel="noopener noreferrer">Style Weekly</a></p>
            <p class={tw`text-red-400 mb-4`}><a href="https://www.youtube.com/watch?v=vmfynFn4WMQ" target="_blank" rel="noopener noreferrer">Artist Miwako Nishizawa@VMFA</a></p>
            <p class={tw`text-red-400 mb-4`}><a href="http://easternimp.blogspot.com/2015_10_01_archive.html" target="_blank" rel="noopener noreferrer">Eastern Impressions: Blog</a></p>
            <p class={tw`text-red-400 mb-4`}><a href="http://www.japaneseartsoc.org/impressions" target="_blank" rel="noopener noreferrer">Impressions</a>: The Journal of the Japanese Art Society, Number 34, 2013, pp 120-121</p>
            <p class={tw`mb-4`}>Choice: An Art Exhibition of Women's Reproductive Rights, published by Northern California Women's Caucus for Art</p>
            <p class={tw`text-red-400 mb-4`}><a href="http://www.asianartnewspaper.com/" target="_blank" rel="noopener noreferrer">ASIAN ART: The newspaper for collectors, dealers, museums and galleries</a>, November 2014</p>
            <p class={tw`text-red-400 mb-4`}><a href="http://www.styleweekly.com/richmond/outside-views/Content?oid=2171220" target="_blank" rel="noopener noreferrer">Style Weekly: Richmond's alternative for news, arts, culture and opinion</a>, Feb 3-23, 2015, Vol. 33, No. 8</p>
            <p class={tw`text-red-400 mb-4`}><a href="http://blog.needsupply.com/2014/11/16/miwako-nishizawa-twelve-views-of-virginia/" target="_blank" rel="noopener noreferrer">Need Supply Co, </a>Blog</p>
            <p class={tw`text-red-400 mb-4`}><a href="https://www.youtube.com/watch?v=vmfynFn4WMQ" target="_blank" rel="noopener noreferrer">Artist Miwako Nishizawa@VMFA</a>, Youtube video</p>


            <h1 class={tw`my-4 text-xl text-red-500`} id="education">Education</h1>

            <p class={tw`mb-4`}>MA Studio Art, New York University, majored in Printmaking </p>
            <p class={tw`mb-4`}>BA Education, Kyoto University of Education, majored in Art Education<br /><br /></p>

            <h1 class={tw`my-4 text-xl text-red-500`} id="exhibitions">Exhibitions</h1>

            <p class={tw`mb-4`}>Gallery Maronie, Kyoto, Japan, 1984</p>
            <p class={tw`mb-4`}>Gallery Sai, Kyoto, Japan, 1987 </p>
            <p class={tw`mb-4`}>NYU Kimmel Student Center,  New York, NY, 1990</p>
            <p class={tw`mb-4`}>80 Washington Square East Gallery, New York, NY, 1991</p>
            <p class={tw`mb-4`}>Japan Society, New York, NY, 1995</p>
            <p class={tw`mb-4`}>Freundorfer Gallery at the Kitano, New York, NY, 2001</p>
            <p class={tw`mb-4`}>Princeton University Art Museum, 2004</p>
            <p class={tw`text-red-400 mb-4`}>Online exhibition on the homepage of <a href="http://www.nationalwca.org/" target="_blank" rel="noopener noreferrer">Women's Caucus for Art</a>, May 2013</p>
            <p class={tw`mb-4`}>Alta Bates Summit Medical Center Art Gallery, Berkeley CA, August 2013</p>
            <p class={tw`mb-4`}>Phoenix Gallery, New York, NY, September 2013</p>
            <p class={tw`mb-4`}>Arc Studios &amp; Gallery, "Choice," San Francisco CA, December 2013</p>
            <p class={tw`mb-4`}>First Street Gallery, New York NY, January 2014</p>
            <p class={tw`mb-4`}>Transmission Gallery, Oakland CA, June 2014</p>
            <p class={tw`mb-4`}>Arc Studios &amp; Gallery, "FourSquare," San Francisco CA, August-September 2014</p>
            <p class={tw`mb-4`}>2014-2015 Civic Center Art Exhibition, Berkeley CA, June 2014- May 2015</p>
            <p class={tw`mb-4`}>Berkeley Art Center, "HERE," Berkeley CA, November 15- December 14, 2014</p>
            <p class={tw`text-red-400 mb-4`}><a href="http://www.reynoldsgallery.com/category/exhibitions/" target="_blank" rel="noopener noreferrer">Reynolds Gallery, Richmond VA, January 16-February 28, 2015</a></p>

            <h1 class={tw`my-4 text-xl text-red-500`} id="solo-exhibition">Solo Exhibition</h1>
            <p class={tw`text-red-400 mb-4`}><a href="http://vmfa.museum/exhibitions/exhibitions/miwako-nishizawa-twelve-views-virginia/" target="_blank" rel="noopener noreferrer">Twelve Views of Virginia</a><br />Virginia Museum of Fine Arts, Richmond VA, November 15, 2014 to March 29, 2015<br /><br /></p>

            <h1 class={tw`my-4 text-xl text-red-500`} id="demo-education-outreach">Demonstration/Educational Outreach</h1>

            <p class={tw`mb-4`}>Brooklyn Botanic Gardens, New York, NY 1993-1995</p>
            <p class={tw`mb-4`}>American Museum of Natural History, New York, NY 1994 and 1995</p>
            <p class={tw`mb-4`}>The Manhattan Graphics Center, New York, NY 1994, 1997</p>
            <p class={tw`mb-4`}>Japan Society, New York, NY, 1995, 2000 and 2001</p>
            <p class={tw`mb-4`}>Japan Society, Seminar for NY Public High School Students, New York, NY 1998</p>
            <p class={tw`mb-4`}>Princeton University Art Museum, New York, NY 2004</p>
            <p class={tw`mb-4`}>City and Country School, New York, NY 2010</p>
            <p class={tw`mb-4`}>Virginia Museum of Fine Art Studio School, Richmond, VA 2014</p>
            <p class={tw`mb-4`}>Diablo Valley College, Pleasant Hill, CA 2014</p>
            <p class={tw`mb-4`}>California State University, Chico, Chico, CA, 2015</p>

            <h1 class={tw`my-4 text-xl text-red-500`} id="miscellaneous">Miscellaneous</h1>

            <p class={tw`mb-4`}>Served as the juror for the exhibition "Beauty of Imperfection: Wabi Sabi" at the <a class={tw`text-red-400`} href="http://ohanloncenter.org/exhibits/upcoming/" target="_blank" rel="noopener noreferrer">O'Hanlon Center for the Arts</a> at Mill Valley, CA</p>

            <p class={tw`mb-4`}>Serve as Vice President on the board of Northern California Chapter of Women's Caucus for Art</p>

            <p class={tw`mb-4`}>Served as the juror for the exhibition "Ink/Clay" at <a class={tw`text-red-400`} href="http://www.janetturner.org/exhibitions/schedule.php" target="_blank" rel="noopener noreferrer">California State University, Chico</a>.</p>

          </div>
        </section>
      </div>
    </Layout>
  );
}