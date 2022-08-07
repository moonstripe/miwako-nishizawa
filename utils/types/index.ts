import { ComponentChildren } from "preact";

export interface Meta {
    title?: string,
    type?: string,
    description?: string,
    url?: string,
    image?: string
}

export interface LayoutProps {
    children: ComponentChildren;
    meta: Meta;
}

export interface ScrollSpyProps {
    setter: Function
}

export interface NavProps {
    inView: string | undefined;
}