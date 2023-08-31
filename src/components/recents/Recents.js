import React, { useState } from "react";
import cardImage from "../../static/image5.jpg";
import postImage2 from "../../static/image2.jpg";
import IAlogo from "../../static/IAlogo.jpeg";
import BigData from "../../static/BigData.jpg";
import postImage4 from "../../static/image4.jpg";
import { Box, Grid,Link } from "@mui/material";
import Card from "../card/Card";
import txtIArecents from "./IARecents.txt"
import { useNavigate } from 'react-router-dom';

const Recents = () => {

  const [IARecents, setIARecents] = useState("");
 
  fetch(txtIArecents)
  .then(r => r.text())
  .then(text => { setIARecents(text) });

  const navigate = useNavigate();

  const cardTextBigdata = "Actualmente, la privacidad es el gran problema y será un problema más grande en el futuro en la sociedad de la información. Hoy en día la legislación protege la privacidad de las personas a través de un método de notificación y consentimiento. Hay que tomar consciencia de que cuando firmamos un consentimiento para que un sistema informático grabe nuestros datos estamos ofreciendo información que puede ser utilizada posteriormente contra nosotros, es el rastro o huella digital."
  const masInformacion = "<Click Para mas Informacion>";
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>   
          
          <Grid item>
          <div
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/detailsBigDATA')}
            >
            <Card cardImage={BigData} cardTitle="Big-Data" cardSubtitle= "¿Como Afecta en nuestra Privacidad?" cardText={cardTextBigdata + " " + masInformacion} cardDetailsRoute="/BigData"/>
            </div>
          </Grid>
          <Grid item>
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/detailsIA')}
              >
              <Card cardImage={IAlogo} cardTitle="Inteligencia Artificial(IA)" cardSubtitle= "¿Como reacciona la sociedad?" cardText={IARecents + " " + masInformacion}/>
            </div>
          </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
