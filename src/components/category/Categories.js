import React from "react";
import kidsImage from "../../static/kids.jpg";
import womenImage from "../../static/women.jpg";
import menImage from "../../static/men.jpg";
import { Box, Stack, styled, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";

const StyledBox = styled(Box)({
  height: 300,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  position: 'relative', // Agrega position relative

});
const StyledTypography = styled(Typography)({
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox>
          <StyledTypography align="center" variant="h3">
          <div style={{ position: 'relative',width:"100%", height: "280px" }}>
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=rAIGjkzngD0&ab_channel=FabricioValdez"}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  },
                }}
                controls
              />
            </div>
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography align="center" variant="h3">
          <div style={{ position: 'relative',width:"100%" , height: "280px"}}>
              <ReactPlayer
                url={"https://www.youtube.com/watch?si=PulYHxZM6t2aBvvL&v=5RxXysSd1gM&feature=youtu.be"}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  },
                }}
                controls
              />
            </div>
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
