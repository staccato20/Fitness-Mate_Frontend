import styled from "styled-components";
import theme from "../../../../styles/theme";

export const ProfileInputContainer = styled.div`
  width: 474px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 31px;

  // 경고 문구
  .profileInputWarning {
    color: ${theme.Error};
    font-size: 16px;
  }
  .profileInputChecking {
    color: ${theme.Brand};
    font-size: 16px;
    font-weight: 500;
  }
  .duplicateButton {
    opacity: ${({ isValidState }) => (isValidState ? "1" : "0.3")};
    cursor: ${({ isValidState }) => (isValidState ? "pointer" : "default")};
    position: absolute;
    color: ${theme.Brand};
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.34px;
    margin: 0;
    padding: 0;
    top: 47px;
    right: 14px;
  }
`;

export const InputName = styled.span`
  color: ${theme.Black};
  font-size: 18px;
	font-weight: 500;
  .essentialSymbol {
    color: ${theme.Error};
    font-size: 18px;
  }
`;

export const ProfileInputContentWrapper = styled.input`
  &::-webkit-input-placeholder {
    color: ${theme.Gray50};
  }
  border: 1.5px solid ${theme.Gray20};
  border-radius: 10px;
  padding: 14px;
  background: ${theme.Gray10};
  width: 100%;
  color: ${theme.Black};
  font-size: 18px;
  border: ${({ isFocused, name, valueHistory, isValidState }) =>
    !isFocused && valueHistory
      ? isValidState[name][1]
        ? `1.5px solid ${theme.Gray20}`
          ? name === "loginEmail"
            ? isValidState.emailModal[1]
              ? `1.5px solid ${theme.Brand}`
              : `1.5px solid ${theme.Error}`
            : `1.5px solid ${theme.Gray20}`
          : `1.5px solid ${theme.Gray20}`
        : `1.5px solid ${theme.Error}`
      : `1.5px solid ${theme.Gray20}`};
`;
// `1.5px solid ${theme.Brand}`
