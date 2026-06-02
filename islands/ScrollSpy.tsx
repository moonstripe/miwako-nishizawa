/** @jsx h */
import { h } from "preact"
import { useLayoutEffect } from "preact/hooks";


export default () => {
    const isInViewPort = (entry: IntersectionObserverEntry, offset = 200) => {
        const rect = entry.boundingClientRect;
        return rect.top - 1 <= 0 + offset && rect.bottom >= 0 + offset;
    };

    useLayoutEffect(() => {
        const scrollables: NodeListOf<Element> = document.querySelectorAll("[data-scrollspy]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const navLink = document.querySelector(`#${entry.target.id}-nav`);
                    if (isInViewPort(entry)) {
                        navLink?.classList.add('text-red-400')
                        navLink?.classList.add('my-4')
                    } else {
                        navLink?.classList.remove('text-red-400')
                        navLink?.classList.remove('my-4')
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px 100% 0px",
                threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            }
        );
        scrollables.forEach((scrollable) => observer.observe(scrollable));
        return () => observer.disconnect();
    }, [])

    return (
        <div style={{height: '0px'}}/>
    );
}
