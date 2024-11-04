'use client';
import React from "react";
import { useUser } from "$/app/contexts/UserContext"; // Importe o contexto
import HeaderAuth from "$/app/components/Header/HeaderAuth/HeaderAuth";
import NotLoggedHeader from "$/app/components/Header/NotLoggedHeader/NotLoggedHeader";

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  const { userName } = useUser() || ''; // Pegue o userName do contexto

  return (
    <>
      <header
        className={`px-spacing-lg min-h-24 m-auto w-full flex place-content-center ${isLoggedIn ? 'bg-background-default' : 'bg-black'
          }`}
      >
        {isLoggedIn ? <HeaderAuth username={userName || ''} /> : <NotLoggedHeader />}
      </header>
    </>
  );
};

export default Header;
