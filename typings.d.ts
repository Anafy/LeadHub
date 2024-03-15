declare module "*.svg?react" {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}


interface ChatProps {
    ai: 'dalle' | 'gpt',
    title: string
}

type ChatMessageContent = string | Array<string>;

interface ChatMessage {
    role: string,
    content: ChatMessageContent
}