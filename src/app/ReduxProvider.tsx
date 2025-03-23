'use client';

import { store } from '@/lib/Redux/Store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';


interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}