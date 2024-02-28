import styled from "styled-components";
import theme from "../../styles/theme";

export const GuideModalWrapper = styled.div`
  display: flex;
  width: 388px;
  height: 318px;
  padding: 24px;
  border-radius: 16px;
  background: ${theme.White};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  flex-direction: column;
	justify-content: space-between;

  .guideModalTitle {
    color: ${theme.Black};
		font-size: 22px;
		font-weight: 600;
		line-height: 130%;
		letter-spacing: -0.44px;
  }

	.middleModalArea {
		display: grid;
		padding: 12px 0px 12px 12px;
		grid-column-gap: 40px;
		grid-row-gap: 12px;
		grid-template-columns: 41px 1fr;

		.middleModalTitle {
			grid-column: 1;
			display: flex;
			justify-content: end;
			color: ${theme.Gray50};
			font-size: 16px;
			font-weight: 500;
			line-height: 130%;
			letter-spacing: -0.32px;
		}

		.middleModalContent {
			grid-column: 2;
			color: ${theme.Gray80};
			font-size: 18px;
			font-weight: 500;
			line-height: 130%;
			letter-spacing: -0.36px;
		}
	}

	.bottomModalArea {
		display: flex;
		gap: 8px;

		.bottomModalButton {
			width: 166px;
			height: 47px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
			font-size: 16px;
			font-weight: 500;
			letter-spacing: -0.32px;
		}
		.bottomModalButton.return {
			background: ${theme.Gray10};
			color: ${theme.Gray80};
		}
		.bottomModalButton.next {
			background: ${theme.Brand};
			color: #FFF;
		}
	}
`;