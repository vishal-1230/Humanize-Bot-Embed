import React from 'react';
import './style.css';
declare function BotEmbed(props: BotProps): React.JSX.Element;
declare namespace BotEmbed {
    var defaultProps: {
        className: string;
        style: {};
        theme: string;
        title: string;
        autoposition: string;
    };
}
interface BotProps {
    className?: string;
    style: React.CSSProperties;
    theme: "default" | "blue" | "red" | "green" | "purple";
    title: string;
    autoposition?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    apiKey: string;
    initialMessage?: string;
}
export default BotEmbed;
