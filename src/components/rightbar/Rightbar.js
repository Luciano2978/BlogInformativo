import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import postImage2 from "../../static/image2.jpg";
import postImage3 from "../../static/image3.jpg";
import postImage4 from "../../static/image4.jpg";
import React from "react";
import Card from "../card/Card";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Bibliografia
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemText
            secondary={"-El impacto del Big-data en la Sociedad de la Información. Significado y utilidad,Antonio Monleón-Getino,25 de noviembre de 2015"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemText
              secondary={"-¿Cómo afecta la inteligencia artificial al desarrollo low-code?,valneo 01 de marzo de 2023"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemText
            secondary={"-La IA hará parte de mi trabajo, pero no me preocupa,ARANTXA HERRANZ,08 de septiembre de 2015"}
          />
        </ListItem>

      </List>
    </Box>
  );
};

export default Rightbar;
