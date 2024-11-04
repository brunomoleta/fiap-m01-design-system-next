'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
  userName: string | null;
  setUserName: (name: string) => void;
  userId: string | null;
  setUserId: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserNameState] = useState<string | null>(null);
  const [userId, setUserIdState] = useState<string | null>(null);

  // Função para definir o userName e salvar no localStorage
  const setUserName = (name: string) => {
    setUserNameState(name);
    localStorage.setItem('userName', name);
  };

  // Função para definir o userId e salvar no localStorage
  const setUserId = (id: string) => {
    setUserIdState(id);
    localStorage.setItem('userId', id);
  };

  // Carrega valores do localStorage no lado do cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName');
      const storedUserId = localStorage.getItem('userId');
      if (storedUserName) setUserNameState(storedUserName);
      if (storedUserId) setUserIdState(storedUserId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de UserProvider');
  }
  return context;
};
