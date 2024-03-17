import { createContext, useState, ReactNode } from 'react';

export const LoaderContext = createContext({
    isLoading: false,
    showLoading: () => {},
    hideLoading: () => {},
});

interface LoaderProviderProps {
    children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => {
        setIsLoading(true);
    };

    const hideLoading = () => {
        setIsLoading(false);
    };

    return (
        <LoaderContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};