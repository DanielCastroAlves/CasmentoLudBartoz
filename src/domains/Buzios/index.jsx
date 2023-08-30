import React from "react";
import { Container, Box } from "@mui/material";
import buzios from "../../Assets/Images/Picture-Buzios.png";
import alforria from "../../Assets/Images/hoteis/Alforria 140723.png";
import blueMarlin from "../../Assets/Images/hoteis/blueMarlin.png";
import Sable from "../../Assets/Images/hoteis/Sable.png";

import {
  BannerImage,
  ContainerPageCity,
  Description,
  TituloDescription,
  Topicos,
} from "./style";
import { BannerImageBuzios } from "../Buzios/style";

const hoteis = [
  { nome: "Alforria", imagem: alforria },
  { nome: "Blue Marlin", imagem: blueMarlin },
  { nome: "Sable", imagem: Sable },
];

const Buzios = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Description
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: "var(--terracota, #9C4522)",
            textAlign: "center",
            fontFamily: "Cinzel",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          Ipsum
        </Description>
        <Description
          variant="h6"
          gutterBottom
          sx={{
            color: "var(--terracota, #9C4522)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 20,
            fontWeight: 300,
            textTransform: "uppercase",
          }}
        >
          Diam fusce urna in neque sagittis commodo in tristique. Nunc volutpat.
        </Description>
        <Description
          variant="body1"
          paragraph
          sx={{
            color: "var(--automtico-padro, #545454)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 18,
            fontWeight: 300,
          }}
        >
          Cursus porttitor nunc pharetra lectus massa tristique scelerisque.
          Velit mattis varius cras at mi duis. Fermentum ullamcorper id orci
          odio rhoncus. Bibendum malesuada volutpat volutpat orci penatibus
          tellus morbi mauris blandit. Interdum velit massa in nisl sed vel.
          Tortor aenean duis morbi consequat pretium bibendum pharetra ut. Et
          nunc sed eu tincidunt. Mi aliquet in venenatis interdum eros nunc.
          Placerat condimentum donec eu sit mattis. Enim urna tortor donec
          proin.
        </Description>
        <Description
          variant="body1"
          paragraph
          sx={{
            color: "var(--automtico-padro, #545454)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 18,
            fontWeight: 300,
          }}
        >
          Quisque habitasse quam scelerisque posuere suspendisse platea sit
          aenean ultricies. Posuere id tristique velit diam eget ipsum urna.
          Enim urna massa condimentum condimentum nisi bibendum at. Fames
          volutpat nibh amet suspendisse fusce arcu in. Ipsum nulla fusce orci
          amet. Egestas volutpat ac at et.
        </Description>
      </Box>
      <BannerImage>
        <div>
          <img src={buzios} alt="buzios" style={{ maxWidth: "100%" }} />
        </div>
      </BannerImage>

      <ContainerPageCity>
        <TituloDescription>Lorem ipsum</TituloDescription>
        <Description>
          At ultricies scelerisque consequat sed vestibulum. Vel hac aliquet
          mollis suspendisse auctor ut. Urna volutpat enim in vitae cursus
          pellentesque consectetur lacus habitant. In faucibus massa augue
          pretium pellentesque tincidunt. Dolor fringilla vivamus ullamcorper
          pellentesque blandit integer. Sed massa turpis proin nulla quam id.
          Etiam amet massa vulputate pretium sed. Lectus fames quam purus
          vulputate. Urna lectus ut sed posuere amet mauris semper tempus.
          Feugiat nunc netus nisl iaculis ultrices netus. Varius volutpat
          facilisis vel nisi nisl sapien egestas a pharetra. Volutpat malesuada
          viverra nisi adipiscing.
        </Description>
        <Description>
          {" "}
          Quisque cras turpis proin nunc enim. Tellus odio tellus quam sit
          maecenas pellentesque consequat.
        </Description>
        <Topicos>
          <ul>
            <li>Sed</li>
            <li>consectetur</li>
            <li>sapien</li>
            <li>sed</li>
            <li>amet</li>
            <li>dolor</li>
          </ul>
        </Topicos>
        <Description>
          Orci sapien arcu lectus sed. In id porttitor interdum montes. Euismod
          maecenas eu amet consectetur in sed eget id risus. Nibh eu risus
          ornare viverra velit viverra purus. At tincidunt pulvinar elementum
          arcu maecenas tincidunt.
        </Description>
      </ContainerPageCity>

      <ContainerPageCity>
        <TituloDescription>Lorem ipsum</TituloDescription>
        <Description>
          Sed sed pellentesque volutpat nisl varius curabitur vulputate neque.
          Pellentesque duis magna nisl odio posuere neque facilisi quisque
          faucibus. Libero id sed tristique sit eget tellus. Viverra egestas
          neque diam quis consectetur mauris nunc et semper. Sed morbi enim
          auctor vestibulum sagittis ornare placerat. Et at nisl rhoncus ut duis
          nec habitasse viverra sit. Cursus nam nullam urna in faucibus et
          varius parturient. Ullamcorper volutpat duis in sagittis. Cursus est
          habitant venenatis porta odio vel justo consequat. Proin nibh varius
          sagittis egestas. Integer posuere nibh id ac odio. Eleifend facilisis
          consectetur velit volutpat diam. Scelerisque phasellus et tristique id
          mi vitae. Et et sed diam arcu tristique est pellentesque eu sed.
        </Description>

        <Description>
          Gravida risus nunc amet sapien risus diam. Semper lorem natoque
          suscipit sem.
        </Description>
        <BannerImageBuzios>
          {hoteis.map((hotel, index) => (
            <div key={index} >
              <img src={hotel.imagem} alt={hotel.nome} />
            </div>
          ))}
        </BannerImageBuzios>
      </ContainerPageCity>
    </Container>
  );
};

export default Buzios;
