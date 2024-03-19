declare module "*.svg?react" {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}


interface ChatProps {
    ai: 'dalle' | 'gpt',
    title: string
}

type ChatMessageContent = string;

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

interface MarathonDataMainPrizes {
    id: number,
    name: string,
    image: string
}

interface MarathonDataAltPrizes {
    id: number,
    name: string,
    urls: string
}

interface MarathonData {
    status: true | false,
    ends: Date,
    mainPrizes: MarathonDataMainPrizes[],
    altPrizes: MarathonDataAltPrizes[]
}