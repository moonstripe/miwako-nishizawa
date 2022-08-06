/** @jsx h */
import { h } from "preact"
import { useLayoutEffect, useState } from "preact/hooks";


export default ({ setter }) => {
    const [scroll, setScroll] = useState<number>(0)

    const isInViewPort = (entry: any, offset = 200) => {
        const rect = entry.boundingClientRect;
        return rect.top - 1 <= 0 + offset && rect.bottom >= 0 + offset;
    };
    useLayoutEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY))
    }, []);

    useLayoutEffect(() => {
        const scrollables: NodeListOf<Element> = document.querySelectorAll("[data-scrollspy]");
        // console.log(scrollables)
        for (let scrollable of scrollables) {
            // console.log('hello observer')
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (isInViewPort(entry)) {
                            const active = `#${entry.target.id}`;
                            console.log(document.querySelector(`#${entry.target.id}-nav`));
                            document.querySelector(`#${entry.target.id}-nav`)?.classList.add('text-red-400')
                            document.querySelector(`#${entry.target.id}-nav`)?.classList.add('my-4')
                            console.log(setter)
                            setter(active)        
                        }
                        document.querySelector(`#${entry.target.id}-nav`)?.classList.remove('text-red-400')
                        document.querySelector(`#${entry.target.id}-nav`)?.classList.remove('my-4')
                    });
                },
                {
                    root: null,
                    rootMargin: "0px 0px 100% 0px",
                    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
                }
            );
            observer.observe(scrollable);
        }
    }, [scroll, setter])

    return (
        <div/>
    );
}