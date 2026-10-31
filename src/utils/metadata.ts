import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = "RoVetra — AI Product & Marketing Studio by Tuan Philip",
    description = "RoVetra is an intelligent AI product & marketing platform by Tuan Philip that transforms how teams work together. Leverage AI to automate workflows, enhance collaboration, and boost productivity.",
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "AI marketing automation",
        "social media marketing",
        "content generation",
        "marketing analytics",
        "campaign management",
        "multilingual marketing",
        "AI copywriting",
        "marketing workflow",
        "performance tracking",
        "digital marketing tools"
    ],
        author = "Tuan Philip",
        type = "website",
    }: MetadataProps = {}): Metadata => {
        const metadataBase = new URL("https://rovetra.vercel.app");

        return {
            metadataBase,
            title: {
                template: "%s | RoVetra",
                default: title
            },
            description,
            keywords,
            authors: [{ name: "Tuan Philip" }],
            creator: "Tuan Philip",
            publisher: "RoVetra",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};