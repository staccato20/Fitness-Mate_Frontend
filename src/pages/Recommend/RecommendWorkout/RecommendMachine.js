import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { bodyPartState } from "./../../../recoil/atom";
import {
  BorderTextCheckboxContainer,
  BorderTextCheckboxInnerContainer,
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTextContainer,
  RecommendTitle,
  RecommendTitleContainer,
  RecommendTitleHide,
} from "./../StyledRecommend";
import { SmallButton, SmallTextCheckbox } from "./../../../components/";
import theme from "../../../styles/theme";
import {
  recommendPostAPI,
  recommendWorkoutHistoryAPI,
} from "./../../../apis/API";
import TokenApi from "../../../apis/TokenApi";
import { BeforeArrowButton } from "./../../../components/Button/BeforeArrowButton";
import { SignupTitle } from "../../Signup/StyledSignup";
const RecommendMachine = () => {
  const navigate = useNavigate();

  // 운동 부위 객체
  const [selectedBodyPart, setSelectedBodyPart] = useRecoilState(bodyPartState);

  // 운동 기구 배열
  const [isMachineSelected, setIsMachineSelected] = useState([]);

  // 전체 선택 상태
  const [isAllSelected, setIsAllSelected] = useState(false);

  const [isReady, setIsReady] = useState(false);

  // 부위를 선택했을때만 서버에서 기구 리스트를 받아옴
  const fetchData = async () => {
    if (selectedBodyPart.bodyPartKoreanName.length) {
      const response = await TokenApi.post("/machines/list", selectedBodyPart);
      const newArr = response.data.map((obj, index) => ({
        ...obj,
        isSelected: false,
      }));
      setIsMachineSelected(newArr);
    } else {
      console.log("운동 부위를 선택하지 않았습니다");
    }
  };
  // 최초 렌더링 시 운동기구 목록 받아옴
  useEffect(() => {
    fetchData();
  }, []);

  const handleReady = () => {
    return isMachineSelected.filter((machine) => machine.isSelected).length;
  };

  // 운동 기구 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = isMachineSelected.map((item, index) => {
      if (index === idx) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setIsMachineSelected(newArr);
    setIsReady(false);
    if (handleReady() !== 0) {
      setIsReady(true);
    }
  };

  // 전체선택
  const handleAllSelect = () => {
    const newArr = isMachineSelected.map((item, index) => {
      item.isSelected = !isAllSelected;
      return item;
    });

    // 전체 선택 state 반전
    setIsAllSelected(!isAllSelected);
    // 배열 업데이트
    setIsMachineSelected(newArr);
    setIsReady(false);
    if (handleReady() !== 0) {
      setIsReady(true);
    }
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    if (isReady) {
      // 선택된 기구
      const checkedMachineList = isMachineSelected
        .filter((machine) => machine.isSelected)
        .map((item) => item.koreanName);

      // 선택된 부위
      const checkedBodyPartList = Object.entries(selectedBodyPart).map(
        ([key, value]) => {
          return value;
        }
      )[0];

      // 선택된 기구 + 부위 객체
      const recommendExercise = {
        // 배열
        bodyPartKoreanName: checkedBodyPartList, // ["등", "가슴"]
        machineKoreanName: checkedMachineList, // ["바벨", "케틀벨"]
      };
      const response = await TokenApi.post(
        `/recommendation/workout`,
        recommendExercise
      );
      const recommendId = response.data;
      console.log(recommendId);
      const response2 = await recommendWorkoutHistoryAPI.get(`/100156`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      console.log(response2);

      navigate("/recommend/fitnessequipment");
    }
  };

  return (
    <RecommendContainer>
      <SignupTitle status="3">
        <div className="statusBar">
          <div className="statusBar2"></div>
        </div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="600">
          운동 기구를 선택해주세요
          <br />
        </RecommendTitle>
        <RecommendTitleHide>운동 부위에 맞는 운동기구예요</RecommendTitleHide>
      </SignupTitle>
      <RecommendTextContainer>
        <BorderTextCheckboxContainer>
          <BorderTextCheckboxInnerContainer>
            {isMachineSelected.map((item, index) => {
              return (
                <SmallTextCheckbox
                  key={item.koreanName}
                  handleClick={handleSelect}
                  isSelected={item.isSelected}
                  elementidx={index}
                >
                  {item.koreanName}
                </SmallTextCheckbox>
              );
            })}
          </BorderTextCheckboxInnerContainer>
        </BorderTextCheckboxContainer>
        {isAllSelected ? (
          <button className="allClearButton" onClick={handleAllSelect}>
            전체 선택해제
          </button>
        ) : (
          <button className="allSelectButton" onClick={handleAllSelect}>
            전체 선택
          </button>
        )}
      </RecommendTextContainer>
      <RecommendButtonContainer>
        <BeforeArrowButton handleClick={handleBackPage}></BeforeArrowButton>
        <SmallButton handleSubmit={handleSubmit} isReady={isReady}>
          추천받기
        </SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendMachine;
