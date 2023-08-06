import styled from "styled-components";
export const ProfileInputContainer = styled.div`
  width: 433px;
  height: 116px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  // 비밀번호와 이메일 사이의 18px - gap(4px) = 14px
  margin-top: ${({ content }) => (content === "비밀번호" ? "14px" : "0")};

  // 경고 문구
  .profileInputWarning {
    color: #eb444c;
    font-size: 16px;
  }
  .profileInputChecking {
    color: #0b98ff;
    font-size: 16px;
    font-weight: 500;
  }
  .duplicateButton {
    position: absolute;
    color: #0b98ff;
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
  color: #000;
  font-size: 20px;
  .essentialSymbol {
    color: #eb444c;
    font-size: 18px;
  }
`;

// 이메일을 제외한 input태그들은 빨간색 or none
// 이메일은 빨/파/none

export const ProfileInputContentWrapper = styled.input`
  border: ${({ isValidateChecked, isNextButton }) =>
    isNextButton
      ? isValidateChecked[1]
        ? isValidateChecked[2]
          ? "1px solid #0b98ff"
          : ""
        : "1px solid #eb444c"
      : ""};

  &::-webkit-input-placeholder {
    color: #9a9798;
  }
  border-radius: 10px;
  padding: 14px;
  background: #f5f6f7;
  width: 100%;
  color: #9a9798;
  font-size: 18px;
`;
