import * as S from "./StyledProfileInput";
import { EmailState, validationState } from "../../../../recoil/atom";
import { ProfileInputContentWrapper } from "./StyledProfileInput";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import ValidateTest from "../../../../utils/exp";

// placeholder : Input창 마다 다양해서 Home에서 받아옴
// children : 아이디/비밀번호/이메일 등등..

const ProfileInput = ({ placeholder, children, name, value, handleChange }) => {
	// 유효성 검사
	const [isValidState, setIsValidState] = useRecoilState(validationState);
	// 포커스 검사
	const [isFocused, setIsFocused] = useState(false);

	// 입력했는지 체크(한 번 입력한 순간 쭉 true)
	const [valueHistory, setValueHistory] = useState(false);
	let NotAvailable = "";

	// 규칙이 맞지 않은 경우
	if (name === "weight" || name === "height") {
		NotAvailable = (
			<span className="profileInputWarning">
				{children}를 다시 입력해주세요
			</span>
		);
	} else {
		NotAvailable = (
			<span className="profileInputWarning">
				{children}을 다시 입력해주세요
			</span>
		);
	}

	return (
		<S.ProfileInputContainer isValidState={isValidState.loginEmail[1]}>
			<S.InputName>
				{children}
			</S.InputName>
			{/* 체크가 되지 않았을때만 Warning 문구 */}
			<ProfileInputContentWrapper
				placeholder={isFocused ? "" : placeholder}
				name={name}
				valueHistory={valueHistory}
				isValidState={isValidState}
				isFocused={isFocused}
				onFocus={() => {
					setIsFocused(true);
				}}
				onBlur={() => {
					setIsFocused(false);
				}}
				onChange={handleChange}
				value={value}
			/>

			{/* 비밀번호 입력창에만 재확인 입력창을 하나 더 추가 */}
			{children === "신규 비밀번호" && (
				<ProfileInputContentWrapper
					placeholder={isFocused ? "" : "신규 비밀번호를 재입력 해주세요"}
					valueHistory={valueHistory}
					isValidState={isValidState}
					isFocused={isFocused}
					onFocus={() => {
						setIsFocused(true);
					}}
					onBlur={() => {
						setIsFocused(false);
					}}
					onChange={handleChange}
				/>
			)}

			{!isFocused && valueHistory
				? isValidState[name][1]
					? ""
					: NotAvailable
				: ""}

		</S.ProfileInputContainer>
	);
};

export default ProfileInput;
