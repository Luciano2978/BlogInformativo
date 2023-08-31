import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image3.jpg";
import Rightbar from "../rightbar/Rightbar";
import _raw from './BigDataTxt/ComoAfecta.txt'; //este archivo esta en mi ubicacion, contiene el texto "Hola Mundo!!..."
import txtPrivacidad from './BigDataTxt/PrivacidadLey.txt';
import txtConclusion from "./BigDataTxt/Conclusion.txt"
const QueEsBigData = "El término Big-data es confuso, ya que si son grandes datos ¿a qué tamaño se refiere? Así según la bibliografía consultada no se refiere a un tamaño de información específica (IBM, 2014), ya que es usualmente utilizado cuando se habla en términos de petabytes (PB) y exabytes (EB) de datos. La información digital se mide en bytes que es la unidad básica de información, a partir de ésta se construye la escala de medida digital de bytes."



const Details = () => {
  
  const [raw, setRaw] = useState("");
 
  fetch(_raw)
  .then(r => r.text())
  .then(text => { setRaw(text) });

  const [privacidad, setPrivacidad] = useState("");
 
  fetch(txtPrivacidad)
  .then(r => r.text())
  .then(text => { setPrivacidad(text) });

  const [conclusion, setConclusion] = useState("");
 
  fetch(txtConclusion)
  .then(r => r.text())
  .then(text => { setConclusion(text) });

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
              ¿Que es Big Data?
            </Typography>
            <Typography
              m={4}
              align="justify" 
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {QueEsBigData}
            </Typography>
            <CardMedia
              component="img"
              height="500px"
              image="https://i2.wp.com/gestioncomplejidad.com/wp-content/uploads/2016/10/Complejidad-tecnologica.jpg?fit=412%2C291"
              alt="Bid-Data-Image"
            />
            <Typography align="center" variant="h5" mt={2}>
              Cómo afecta el Big-data a la sociedad en general.
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {raw}
            </Typography>
            <Typography align="center" variant="h5" mt={2}>
              La Privacidad y la Ley
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {privacidad}
            </Typography>
            <Typography align="center" variant="h5" mt={2}>
              Conclusion
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              align="justify"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {conclusion}
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

export default Details;
