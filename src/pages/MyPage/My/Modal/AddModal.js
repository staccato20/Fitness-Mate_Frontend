// 편집 모달

import React, { useEffect, useRef, useState } from "react";
import * as S from "./StyledAddModal";
import { TextCheckbox, BigButton, SearchBar } from "../../../../components/index";
import x from "../../../../assets/images/X_Icon.svg";
import OutSideClick from "../../../../components/Navbar/OutSideClick";
import { userWorkoutBatchAPI } from "../../../../apis/API";
import NoSearch from "../../../../components/NoSearch/NoSearch";
import { useNavigate, useParams } from "react-router-dom";

function AddModal({ onClose }) {
	let { pageNum } = useParams();

	// 보여질 운동 리스트
	const [machineList, setMachineList] = useState([]);

	// 검색결과가 없을 때 페이지
	const [nosearch, setNoSearch] = useState(false);

	const fetchData = async () => {
		const request = {
			searchKeyword: "",
			bodyPartKoreanName: [],
		};
		// 운동 기구 batch 조회(12개)

		try {
			console.log('여기 들어오나?')
			const workoutResponse = await userWorkoutBatchAPI.post(
				`1`,
				request
			);
			console.log('여기는?')
			if (workoutResponse.data.length) {
				setNoSearch(false);
				setMachineList(workoutResponse.data);
			} else {
				setNoSearch(true);
			}
		} catch (err) {
			// 페이지넘버가 이상한 경우 오류페이지
			setNoSearch(true);
		}
	};

	// 운동 검색
	const handleSearch = async (searchValue) => {

		if (searchValue === "") {
			const request = {
				searchKeyword: "",
				bodyPartKoreanName: [],
			};
			const workoutResponse = await userWorkoutBatchAPI.post(
				request
			);
			setMachineList(workoutResponse.data);
		} else {
			const request = {};
			request.searchKeyword = searchValue;
			request.bodyPartKoreanName = [searchValue];

			const workoutResponse = await userWorkoutBatchAPI.post(
				request
			);
			setMachineList(workoutResponse.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, [pageNum]);

	//modal

	const handleClose = () => {
		onClose?.();
	};
	const modalRef = useRef(null);
	OutSideClick(modalRef, handleClose);

	useEffect(() => {
		const $body = document.querySelector("body");
		const overflow = $body.style.overflow;
		$body.style.overflow = "hidden";
		return () => {
			$body.style.overflow = overflow
		};
	}, []);

	return (
		<S.AppWrap>
			<S.Overlay>
				<S.ModalContainer ref={modalRef}>
					<S.ModalWrap>
						<S.Header>
							<S.ModalTitle>
								<h1>이 목록에 운동 추가하기</h1>
								<S.CloseButton onClick={handleClose}>
									<img src={x} alt="닫기 버튼" />
								</S.CloseButton>
							</S.ModalTitle>
						</S.Header>
						<S.SerchArea>
							<SearchBar handleSearch={handleSearch} />
						</S.SerchArea>
						{nosearch ? (
							<S.Contents>
								<NoSearch />
							</S.Contents>
						) : (
							<S.Contents>
								{machineList.map((machine, idx) => {
									return (
										<S.CheckboxArea>
											<TextCheckbox>{machine.koreanName}</TextCheckbox>
										</S.CheckboxArea>
									);
								})}
							</S.Contents>
						)}
						<BigButton>선택한 2개의 운동 추가하기</BigButton>
					</S.ModalWrap>
				</S.ModalContainer>
			</S.Overlay>
		</S.AppWrap>
	);
};

export default AddModal;