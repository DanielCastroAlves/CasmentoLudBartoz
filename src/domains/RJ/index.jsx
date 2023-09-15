import React from "react";
import { Container, Box } from "@mui/material";
import rio from "../../Assets/Images/Picture-RJ.png";
import {
  BannerImage,
  BannerImageRJ,
  ContainerPageCity,
  Description,
  TituloDescription,
  Topicos,
} from "./style";
import IMG_2905 from "../../Assets/Images/hoteis/IMG_2905.png";
import ipanemaHotel from "../../Assets/Images/hoteis/ipanemaHotel.png";



const RioDeJaneiro = () => {

  const hoteis = [
    { nome: "hotel", imagem: IMG_2905 },
    { nome: "hotel ipanema", imagem: ipanemaHotel },
  
  ];
  
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
          Lorem ipsum
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
          Lorem ipsum dolor sit amet consectetur. Volutpat mattis massa turpis
          adipiscing dignissim nibh non habitant a.
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
          Accumsan sit tempus lorem ut lorem sem at mauris turpis. Augue eget
          placerat turpis pellentesque. Fusce consequat non sed senectus urna
          aliquam. Pharetra ipsum consequat tincidunt pharetra id vestibulum
          semper. Senectus congue amet nibh enim eget amet habitasse. Sagittis
          justo malesuada nec magna nunc. Egestas lectus vitae in enim
          sollicitudin senectus ullamcorper sed. Est lacinia tortor lectus purus
          fusce viverra sed neque accumsan. Ultrices arcu gravida id nulla
          molestie ut. Nulla amet in pretium in neque purus. Neque dolor
          sagittis felis ultricies commodo. Aliquam in pretium lacus arcu. In
          morbi rhoncus dictumst vestibulum diam amet. Quis elit ut risus
          tristique euismod lobortis suspendisse maecenas mauris. Leo nisi
          pretium cras massa. Tellus mauris sit sit faucibus. Neque dapibus nisi
          risus consequat vivamus. Augue magna cursus feugiat cras. Pellentesque
          amet diam mi consectetur pellentesque lectus sed velit aenean.
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
          Libero vitae amet porttitor mattis amet tellus ultrices libero id.
          Consectetur nulla auctor nunc dolor lorem congue semper. Pharetra
          porta lacus quis eget. Elementum auctor commodo eget integer sed
          dignissim. Ullamcorper urna nibh nec neque consequat et vulputate. Ut
          nec sollicitudin lectus mi blandit dui diam morbi. Faucibus felis
          etiam in at vitae nunc nec. Dictum mattis convallis fringilla nulla
          nunc. Non suspendisse vitae ut faucibus fames nulla sit ultrices diam.
          Morbi pellentesque semper mi sed a nunc. In velit elementum luctus
          nunc. Interdum egestas lectus dis tempor etiam suspendisse volutpat.
          At et non odio amet iaculis.
        </Description>
      </Box>
      <BannerImage>
        <div>
          <img src={rio} alt="Rio de Janeiro" style={{ maxWidth: "100%" }} />
        </div>
      </BannerImage>

      <ContainerPageCity>
        <TituloDescription>Lorem ipsum</TituloDescription>
        <Description>
          A erat in at nunc tempor tristique sem orci lacus. Leo enim quis et
          interdum sapien suspendisse eget arcu. At curabitur vitae adipiscing
          orci. Eget scelerisque iaculis dignissim amet tincidunt blandit elit.
          Risus at cras euismod mi vel. Eget ut eu aliquam nisl. Nibh blandit
          est nec risus. Egestas nisi sit proin id. Condimentum augue tristique
          faucibus nulla massa. Turpis in varius nisl risus integer semper urna
          semper at. Eu nunc volutpat risus nunc pulvinar.
        </Description>
        <Description> Nisl sed sit tempus in egestas elementum</Description>
        <Topicos>
          <ul>
            <li>Feugiat</li>
            <li>pellentesque</li>
            <li>eget</li>
            <li>tincidunt</li>
            <li>malesuada</li>
          </ul>
        </Topicos>
        <Description>
          in egestas elementum in. Egestas feugiat laoreet velit elit. Sagittis
          tristique amet elementum placerat urna libero. Auctor quis scelerisque
          enim eget ut. Amet morbi ipsum dolor proin fringilla. Sollicitudin
          consequat sit et augue. Adipiscing odio ac cras non. Ac nascetur
          accumsan in nec ultricies. Porttitor neque blandit ultrices cursus.
          Non proin in faucibus dui cras sed rhoncus. Volutpat tempor tortor
          amet nunc purus bibendum vitae. Turpis nec velit etiam eleifend elit
          euismod. Id cursus imperdiet mauris.
        </Description>
      </ContainerPageCity>

      <ContainerPageCity>
        <TituloDescription>Lorem ipsum</TituloDescription>
        <Description>
          Eros pharetra eget fermentum dapibus quam. At non tellus egestas
          massa. Quisque praesent facilisis dictum odio non iaculis etiam nullam
          id. Nulla tortor facilisis commodo cras. Cras mauris accumsan viverra
          dolor vulputate volutpat. Dolor ultrices eu in viverra morbi sed mus
          tristique. Mauris mauris faucibus dictumst odio facilisis ultricies
          scelerisque pellentesque. Consectetur ullamcorper nam rhoncus nibh.
          Euismod dictum pharetra a blandit ipsum sed diam sed. Sed dolor
          maecenas quam integer mauris malesuada ultrices vitae. Adipiscing
          condimentum lacus erat morbi quam orci.
        </Description>

        <Description>
          Proin eget vitae congue varius diam sed suspendisse. Hendrerit sit mi
          arcu tincidunt sodales et nunc blandit nam. Et velit eget consequat.
        </Description>
        <BannerImageRJ>
          {hoteis.map((hotel, index) => (
            <div key={index} >
              <img src={hotel.imagem} alt={hotel.nome} />
            </div>
          ))}
        </BannerImageRJ>
      </ContainerPageCity>
    </Container>
  );
};

export default RioDeJaneiro;
