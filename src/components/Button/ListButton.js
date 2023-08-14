// < 목록 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function ListButtonWrapper({ children }) {
	return (
			<S.ListButton className="Button">{ children }</S.ListButton>
	);
}

export default ListButtonWrapper;