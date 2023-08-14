// < 가로길이가 짧은 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function SmallButtonWrapper({ children }) {
	return (
			<S.SmallButton className="Button">{ children }</S.SmallButton>
	);
}

export default SmallButtonWrapper;