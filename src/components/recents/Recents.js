import React from "react";
import cardImage from "../../static/image5.jpg";
import postImage2 from "../../static/image2.jpg";
import IAlogo from "../../static/IAlogo.jpeg";
import BigData from "../../static/BigData.jpg";
import postImage4 from "../../static/image4.jpg";
import { Box, Grid,Link } from "@mui/material";
import Card from "../card/Card";

const Recents = () => {
  
  const cardTextBigdata = "Actualmente, la privacidad es el gran problema y será un problema más grande en el futuro en la sociedad de la información. Hoy en día la legislación protege la privacidad de las personas a través de un método de notificación y consentimiento. Hay que tomar consciencia de que cuando firmamos un consentimiento para que un sistema informático grabe nuestros datos estamos ofreciendo información que puede ser utilizada posteriormente contra nosotros, es el rastro o huella digital."
  const cardTextIA = "";
  const masInformacion = "<Click Para mas Informacion>";
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>   
        <Link
          href="http://localhost:3000/detailsBigDATA"
          sx={{ textDecoration: "none" }}
        >
          <Grid item>
            <Card cardImage={BigData} cardTitle="Big-Data" cardSubtitle= "¿Como Afecta en nuestra Privacidad?" cardText={cardTextBigdata + " " + masInformacion} cardDetailsRoute="/BigData"/>
          </Grid>
        </Link>
        <Grid item>
          <Card cardImage={IAlogo} cardTitle="Inteligencia Artificial(IA)" cardSubtitle= "¿Como reacciona la sociedad?" cardText={cardTextIA}/>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Recents;
