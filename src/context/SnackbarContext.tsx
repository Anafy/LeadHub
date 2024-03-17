import { createContext } from 'react';
import { OptionsObject } from 'notistack';

export const SnackbarContext = createContext({
    enqueueSnackbar: (() => {}) as (message: string, options?: OptionsObject) => void
})