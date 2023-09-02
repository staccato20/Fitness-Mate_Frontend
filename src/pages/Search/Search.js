import * as S from "./StyledSearch";
import ToggleSwitch from "./../MyPage/My/toggle";
import { useEffect, useState } from "react";
import { FitnessType } from "../../components";
import { userWorkoutBatchAPI } from "../../apis/API";
import toggleBtn from "../../assets/images/toggle.svg";
import SearchBar from "./../../components/SearchBar/SearchBar";

const Search = () => {
  // 토글

  const [visible, setVisible] = useState(false);
  const [machineList, setMachineList] = useState([]);

  const fetchData = async () => {
    const request = {
      searchKeyword: "",
      bodyPartKoreanName: null,
    };
    // 운동 기구 batch 조회(12개)
    const workoutResponse = await userWorkoutBatchAPI.post(`1`, request);

    setMachineList(workoutResponse.data);
  };

  // 필터 토글
  const [isSearchFilterModal, setIsSearchFilterModal] = useState(false);

  // 필터 목록
  const [searchFilterValue, setSearchFilterValue] = useState({
    운동명: true,
    "운동 부위": false,
  });

  // 운동 검색
  const handleSearch = async (searchValue) => {
    const request = {};
    request.searchKeyword = searchValue;
    request.bodyPartKoreanName = null;
    const workoutResponse = await userWorkoutBatchAPI.post(`1`, request);

    setMachineList(workoutResponse.data);
  };
  // 필터 선택
  const handleToggleValue = (filtervalue) => {
    // 모든 키의 값을 false로 설정
    const updatedObject = Object.keys(searchFilterValue).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // 대상 키의 값을 true로 설정
    updatedObject[filtervalue] = true;

    // 상태 업데이트
    setSearchFilterValue(updatedObject);
  };

  const labels = {
    left: {
      title: "내 운동",
      value: "workout",
    },
    right: {
      title: "내 보조제",
      value: "supplement",
    },
  };

  const onChange = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.SearchContainer>
      {/* 타이틀(문구 + 토글) */}
      <section className="searchTopWrapper">
        <div className="searchTitleWrapper">
          <div className="searchTitleTextWrapper">
            <p className="searchTitle1">나에게 핏한 </p>
            <p className="searchTitle2">운동 정보를 찾아보세요</p>
          </div>
        </div>
        <div className="toggleMenu">
          <S.Toggle>
            <div class="toggleSwitch_wrap">
              <div class="toggleSwitch">
                <ToggleSwitch labels={labels} onChange={onChange} />
              </div>
            </div>
          </S.Toggle>
        </div>

        {/* 검색 창 */}
        <div className="searchBarWrapper">
          <button
            className="searchBarFilter"
            onClick={() => {
              setIsSearchFilterModal(!isSearchFilterModal);
            }}
          >
            {Object.entries(searchFilterValue).map(
              ([key, value]) =>
                value && <span className="searchBarFilterText">{key}</span>
            )}
            <img
              src={toggleBtn}
              alt="운동 검색 필터 토글 버튼"
              className="searchBarFilterToggleBtn"
            />
          </button>
          {isSearchFilterModal && (
            <div className="searchFilterModalWrapper">
              {Object.keys(searchFilterValue).map((filtervalue) => (
                <button
                  key={filtervalue}
                  className="searchFilterModalContent"
                  onClick={(e) => {
                    setIsSearchFilterModal(!isSearchFilterModal);
                    handleToggleValue(filtervalue);
                  }}
                >
                  {filtervalue}
                </button>
              ))}
            </div>
          )}
          <SearchBar handleSearch={handleSearch} />
        </div>
      </section>

      {/* 운동/보조제 리스트 */}
      <section className="searchContentWrapper">
        {machineList.map((machine, idx) => {
          return (
            // 부위 map으로 처리해야함
            <FitnessType
              parts={machine.bodyPartKoreanName}
              description={machine.description}
              imgPath={machine.imgPath}
            >
              {machine.koreanName}
            </FitnessType>
          );
        })}
      </section>
      <section className="serachButtonWrapper">
        <button className="backBtn">이전</button>
        <button className="nextBtn">다음</button>
      </section>
    </S.SearchContainer>
  );
};

export default Search;
