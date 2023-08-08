import { useRecoilState } from "recoil";
import { ProfileInputContentWrapper } from "./StyledProfileInput";
import { validationState } from "../../recoil/atom";
import ValidateTest from "./../../utils/exp";

const ProfileInputContent = ({ placeholder, name }) => {
  const [isClicked, setIsClicked] = useState(false);

  // 나중에 utils로 빼기
  const usernameExp = /^[가-힣]{2,10}$/;
  const passwordExp = /^[a-zA-Z0-9]{8,}$/;
  const birthdateExp = /^\d{4}-\d{2}-\d{2}$/;

  const [isValidateChecked, setIsValidateChecked] =
    useRecoilState(validationState);

  const [isNextButton, setIsNextButton] = useRecoilState(nextButtonValidate);
  // 비밀번호 재 확인

  const Validation = (name) => {
    return;
  };

  // 유효성 검사
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.target.name;
    let exp = Validation(name);
    switch (name) {
      case "username":
        exp = usernameExp;
        break;

      case "birthdate":
        exp = birthdateExp;
        break;

      case "password":
        exp = passwordExp;
        break;

      case "password2":
        exp = passwordExp;
        break;

      default:
        break;
    }

    // 유효성 검사
    const updatedValidationState = {
      ...isValidState,
      [name]: [value, exp && exp.test(value), isValidState[name][2]],
    };
    setIsValidState(updatedValidationState);

    // 이메일은 프론트가 아닌 백에서 검사(중복 + 유효성검사), 값만 업데이트 함
    const updateEmailState = {
      ...isValidateChecked,
      [name]: [value, isValidateChecked[name][1], isValidateChecked[name][2]],
    };

    if (name === "email") {
      setIsValidateChecked(updateEmailState);
    } else {
      setIsValidateChecked(updatedValidationState);
    }

    // 패스워드가 바뀔때만 검사
    if (name.includes("password")) {
      if (
        updatedValidationState.password[0] ===
        updatedValidationState.password2[0]
      ) {
        setIsValidateChecked((pre) => ({
          ...pre,
          password2: [value, true, updatedValidationState[name][2]],
        }));
      } else {
        setIsValidateChecked((pre) => ({
          ...pre,
          password2: [value, false, updatedValidationState[name][2]],
        }));
      }
    }
  };

  // input 태그
  return (
    <ProfileInputContentWrapper
      placeholder={isFocused ? "" : placeholder}
      name={name}
      isFocused={isFocused}
      isValidState={isValidState[name]}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      onChange={handleChange}
    />
  );
};

export default ProfileInputContent;
