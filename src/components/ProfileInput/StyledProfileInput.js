import styled from "styled-components";

export const ProfileInputContainer = styled.div`
  width: 433px;
  height: 116px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  // 경고 문구
  .profileInputWarning {
    color: ${({ theme }) => theme.Error};
    font-size: 16px;
  }
  .profileInputChecking {
    color: ${({ theme }) => theme.Brand};
    font-size: 16px;
    font-weight: 500;
  }
  .duplicateButton {
    opacity: ${({ isValidState }) => (isValidState ? "1" : "0.3")};
    cursor: ${({ isValidState }) => (isValidState ? "pointer" : "default")};
    position: absolute;
    color: ${({ theme }) => theme.Brand};
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
  color: ${({ theme }) => theme.Black};
  font-size: 20px;
  .essentialSymbol {
    color: ${({ theme }) => theme.Error};
    font-size: 18px;
  }
`;

// 이메일을 제외한 input태그들은 빨간색 or none
// 이메일은 빨/파/none

export const ProfileInputContentWrapper = styled.input`
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.Gray50};
  border-radius: 10px;
  padding: 14px;
  background:${({ theme }) => theme.Gray10};
  width: 100%;
  color: ${({ theme }) => theme.Gray50};
  font-size: 18px;
`;
