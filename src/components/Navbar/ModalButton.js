import React, { useState } from "react";
import * as S from "./StyledNavModal";
import NavModal from "./NavModal";

function ModalButton({ children, userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <S.AppWrap>
      <S.NavButton onClick={onClickButton}>{children}</S.NavButton>
      {isOpen && (
        <NavModal
          userName={userName}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </S.AppWrap>
  );
}

export default ModalButton;
