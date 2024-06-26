import styled from "styled-components";
import theme from "../../styles/theme";

export const RecommendAddModalWrapper = styled.div`
  display: flex;
  width: 388px;
  height: auto;
  padding: 20px;
  border-radius: 16px;
  background: ${theme.Neutral0};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  flex-direction: column;
  .recommendAddModalTitleWrapper {
    display: flex;
    margin-bottom: 8px;
    justify-content: flex-end;
    .recommendAddModalQuitBtn {
      cursor: pointer;
      width: 24px;
      height: 24px;
      padding: 4.8px;
    }
  }
  .recommendAddModalDivsionList {
    display: flex;
    flex-direction: column;
    .recommendAddModalTitle {
      color: ${theme.Neutral990};
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: -0.4px;
      margin-bottom: 25.5px;
    }
    .divisionListComment {
      color: ${theme.Neutral800};
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: -0.32px;
      margin-bottom: 14px;
    }
    .divisionList {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 25.5px;
    }
    .modifyOptionTitle {
      color: ${theme.Neutral990};
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
      letter-spacing: -0.4px;
    }
    .modifyOptionComment {
      color: ${theme.Neutral900};
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 21px */
      letter-spacing: -0.3px;
      margin-bottom: 80px;
    }
  }
`;

export const ModifyOptionWrapper = styled.div`
  display: flex;
  padding: 12px 18px;
  gap: 12px;
  justify-content: center;
`;

export const ModifyOptionButton = styled.button`
  color: ${({ isSelected }) => (isSelected ? theme.Neutral0 : theme.Brand600)};
  font-size: 18px;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${({ isSelected }) =>
    isSelected ? theme.Brand600 : theme.Neutral0};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  &:hover {
    opacity: 0.8;
  }
`;

export const ModifyOptionContent = styled.div`
  margin-bottom: 120px;
  display: flex;
  gap: 8px;
  justify-content: center;
  .modifyInput {
    width: 90px;
    text-align: center;
    color: #000;
    font-size: 48px;
    line-height: 150%; /* 72px */
    letter-spacing: -0.96px;
    border-bottom: 2px solid #000;
  }
  .modifyInputUnit {
    color: #000;
    font-size: 48px;
    line-height: 150%; /* 72px */
    letter-spacing: -0.96px;
  }
`;
