import { OptionsObject } from 'notistack';

export default async function apiFetch(
    url: string, 
    method: string, 
    body: Record<string, unknown> | null = null, 
    type: 'cabinet' | null,
    enqueueSnackbar: (msg: string, options?: OptionsObject) => void,
    navigate: (path: string) => void
) {

    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`https://chat-guru.ru/api${url}`, options);
        const data = await response.json();

        if (response.status === 401) {
            if (type === 'cabinet') {
                navigate('/auth');
            }
            throw new Error(data.message);
        }

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        if (data.status === false) {
            throw new Error(data.message);
        }

        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            if (error.message.includes('token')) {
                if (type === 'cabinet') {
                    navigate('/auth');
                }
            }
        } else {
            enqueueSnackbar('An unknown error occurred', { variant: 'error' });
        }
        throw error;
    }
}