import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image3.jpg";
import Rightbar from "../rightbar/Rightbar";
import _QuesEsIA from './IATxt/QueEsIA.txt'; //este archivo esta en mi ubicacion, contiene el texto "Hola Mundo!!..."
import txtIATrabajo from "./IATxt/IATrabajo.txt"
import txtLowCode from "./IATxt/IALowCode.txt"
import txtConclusion from "./IATxt/IAConclusion.txt"

const DetailsIA = () => {
  
  const [QueEsIa, setQueEsIa] = useState("");
 
  fetch(_QuesEsIA)
  .then(r => r.text())
  .then(text => { setQueEsIa(text) });

  const [IATrabajo, setIATrabajo] = useState("");
 
  fetch(txtIATrabajo)
  .then(r => r.text())
  .then(text => { setIATrabajo(text) });

  const [IALowCode, setIALowCode] = useState("");
 
  fetch(txtLowCode)
  .then(r => r.text())
  .then(text => { setIALowCode(text) });


  const [IAConclusion, setIAConclusion] = useState("");
 
  fetch(txtConclusion)
  .then(r => r.text())
  .then(text => { setIAConclusion(text) });


  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/04/39/63/56/1000_F_439635674_0mEVTGzc4w82vQQB8AmE9uGRvdeoUvGK.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"black"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10, color:"white" }}
        >
          Big Data
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} >
            <Typography
              m={4}
              align="center"
              mt={2}
              variant="h4"
              sx={{ fontWeight: 900 }}
            >
              ¿Que es la Inteligencia Artificial (IA)?
            </Typography>
            <Typography
              m={4}
              align="justify" 
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
            {QueEsIa}
            </Typography>
            <CardMedia
              component="img"
              height="500px"
              image="https://media.licdn.com/dms/image/D5612AQGBuj568U7XOA/article-cover_image-shrink_720_1280/0/1687542210847?e=2147483647&v=beta&t=3lSaKHI8YKoNC8gTMqQxGdF6X3p4dDXP4OdB3yGY8Ok"
              alt="Bid-Data-Image"
            />
            <Typography align="center" variant="h5" mt={2}>
              La IA hará parte de mi trabajo, pero no me preocupa.
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
             {IATrabajo}
            </Typography>
            <Typography align="center" variant="h5" mt={2}>
              ¿Cómo afectará la inteligencia artificial al desarrollo low-code?
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {IALowCode}
            </Typography>
            <Typography align="center" variant="h5" mt={2}>
              Conclusión
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {IAConclusion}
            </Typography>
            
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DetailsIA;
