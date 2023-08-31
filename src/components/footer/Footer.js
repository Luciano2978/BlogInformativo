import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Integrantes
          </Typography>
          <Typography color={"white"} align={"center"}>
            -ORTEGA MARTIN
          </Typography>
          <Typography color={"white"} align={"center"}>
            -ROJAS LUCIANO
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Aspectos Profesionales
          </Typography>
          <Typography color={"white"} align={"center"}>
            Docente:
          </Typography>
          <Typography color={"white"} align={"center"}>
            HOFEREK, SILVIA ROSANA
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
