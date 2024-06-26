// < 버튼 스타일 >

import styled from "styled-components";
import theme from "./../../styles/theme";

// < 가로 길이가 긴 버튼 >

export const BigButtonWrapper = styled.button`
  width: 474px;
  height: 62px;
  padding: 22px 24px;
  background: ${(props) => props.backcolor || props.theme.Brand600};
  color: ${(props) => props.fontcolor || props.theme.Neutral0};
`;

// < 가로 길이가 중간인 버튼 >

export const MiddleButtonWrapper = styled.button`
  width: 354px;
  height: 62px;
  padding: 22px 24px;
  background: ${({ isReady }) =>
    isReady === undefined || isReady === true
      ? theme.Brand600
      : theme.BrandLight};
  cursor: ${({ isReady }) => (isReady ? "pointer" : "default")};
  color: ${theme.Neutral0};
`;

// < 가로 길이가 중간인데 세로 길이가 짧은 버튼 >

export const SemiMiddleButtonWrapper = styled.button`
  width: 100%;
  height: 56px;
  padding: 22px 24px;
  background: ${({ isReady }) =>
    isReady === undefined || isReady === true
      ? theme.Brand600
      : theme.BrandLight};
  cursor: ${({ isReady }) => (isReady ? "pointer" : "default")};
  color: ${theme.Neutral0};
  display: flex;
  gap: 12px;

  .selectedCount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background: ${theme.Neutral0};
    color: ${theme.Brand600};
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;

// < 가로 길이가 짧은 버튼 >

export const SmallButtonWrapper = styled.button`
  display: flex;
  height: 62px;
  padding: 18px 39px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ isReady }) => (isReady ? theme.Brand600 : theme.BrandNon)};
  cursor: ${({ isReady }) => (isReady ? "pointer" : "default")};
  color: ${theme.Neutral0};
  font-size: 22px;
  letter-spacing: -0.44px;
`;

// < 이전 버튼 >

export const BeforeButtonWrapper = styled.button`
  width: 134px;
  height: 62px;
  padding: 22px 10px;
  background: ${theme.Neutral0};
  color: ${theme.Brand600};
`;

// < 목록 버튼 >

export const ListButtonWrapper = styled.button`
  display: inline-flex;
  width: auto;
  height: 44px;
  padding: 10px 24px;
  gap: 10px;
  border-radius: 16px;
  font-size: 17px;

  background: ${theme.Neutral200};
  color: ${theme.Neutral990};
`;

export const BeforeArrowButtonWrapper = styled.div`
  cursor: ${({ isLoading }) => (isLoading ? "auto" : "pointer")};
  display: flex;
  width: 150px;
  height: 62px;
  padding: 22px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.Neutral0};

  .beforeArrowBtnImg {
    width: 24px;
    height: 24px;
    opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  }
  .beforeArrowBtnText {
    color: ${theme.Brand600};
    font-size: 22px;
    letter-spacing: -0.44px;
    opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  }

  &:hover {
    background: ${({ isLoading, theme }) =>
      isLoading ? "none" : theme.Neutral200};
  }
`;

export const AfterArrowButtonWrapper = styled.button`
  display: flex;
  width: 150px;
  height: 62px;
  padding: 22px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ isReady }) => (isReady ? theme.Brand600 : theme.BrandNon)};
  cursor: ${({ isReady }) => (isReady ? "pointer" : "default")};

  .afterArrowBtnText {
    color: ${theme.Neutral0};
    font-size: 22px;
    letter-spacing: -0.44px;
  }

  .afterArrowBtnImg {
    width: 24px;
    height: 24px;
  }
`;
