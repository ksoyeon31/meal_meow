import { Box } from "@mui/material";
import Logo from "../assets/logo.png"; // 로고 이미지 경로

function MealMeowLogo () {
  return (
    <Box
      component="img"
      src={Logo}
      alt="로고"
      sx={{
        position: "fixed",
        top: 16, // 위쪽 여백
        right: 30, // 오른쪽 여백
        width: 80, // 로고 크기
        height: "auto",
        zIndex: 2000, // 다른 요소 위로 띄우기
      }}
    />
  );
}

export default MealMeowLogo;