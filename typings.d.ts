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
    created: Date,
    content: ChatMessageContent
}

interface User {
    id: number,
    email: string,
    subscription: string,
    registered: Date,
    username: string
}

interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    updateUser: () => Promise<null>;
}