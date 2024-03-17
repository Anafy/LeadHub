// useSnackbarContext.ts
import { useContext } from 'react';
import { SnackbarContext } from './SnackbarContext';

export function useSnackbarContext() {
    return useContext(SnackbarContext);
}