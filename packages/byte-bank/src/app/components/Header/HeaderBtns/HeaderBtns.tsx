"use client";

import React, { useState } from "react";
import { Button } from "../../../../../../design-system/src";
import ModalLogin from "../HeaderLogin/ModalLogin";

const HeaderBtns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const openLoginModal = () => {
    setIsLoginMode(true);
    setIsModalOpen(true);
  };

  const openSignupModal = () => {
    setIsLoginMode(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={
          "max-tablet:hidden grid grid-cols-2 gap-spacing-lg max-desktop:gap-spacing-md"
        }
      >
        <Button variant={"primaryGreen"} onClick={openSignupModal}>
          Abrir minha conta
        </Button>
        <Button variant={"outlineGreen"} onClick={openLoginModal}>
          Já tenho conta
        </Button>
      </div>
      <ModalLogin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isLogin={isLoginMode}
      />
    </>
  );
};

export default HeaderBtns;
