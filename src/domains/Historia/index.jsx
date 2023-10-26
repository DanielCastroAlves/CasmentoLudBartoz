import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CustomImage, CustomMB, CustomParagraph, CustomVideo, SectionText } from "./style";
import ibiza from "./imagens/Picture Ibiza [01].png";
import civil from "./imagens/Galeria Civil Wedding 2021 Desktop.png";
import galeria from "./imagens/Galeria Engagement 2021 Desktop.png";
import viagem from "./imagens/Galeria Viagem Desktop.png";
import original from "./imagens/Original.png";

import originalMB from "./imagens/mobile/Ibiza 02 [Desktop].png";
import ibizaMB from "./imagens/mobile/Picture IbizaMB.png";
import civilMB from "./imagens/mobile/Galeria Civil Wedding 2021MB.png";
import galeriaMB from "./imagens/mobile/Galeria Engagement 2021MB.png";
import viagemMB from "./imagens/mobile/Galeria ViagemMB.png";

import { FirstSection } from "../../Components/FirstSection";
import { useLanguage } from "../../hooks/useLanguage";
import text from "../../Assets/text.json";
import { BreadCrumb } from "../../Components/BreadCrumb";
import { ButtonNavigation } from "../../Components/ButtonNavigation";

const Historia = () => {
    const { language } = useLanguage();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
        { label: text.story.title[language], url: "/wedding/ourhistory" },
    ];

    const path = [
        { label: text.gifts.title[language], url: "/wedding/gifts" },
        { label: text.dressCode.title[language], url: "/wedding/gifts" },
    ];

    return (
        <Stack width="100%" height="100%" mb={10}>
            <BreadCrumb data={data} />
            <FirstSection title={text.Wedding.title[language]} subtitle={text.Wedding.subTitle[language]} paragraph1={text.Wedding.introP1[language]} paragraph2={text.Wedding.introP2[language]} />
            {!isMobile ? <CustomImage src={ibiza} alt="Descrição da imagem" /> : <CustomMB src={originalMB} alt="Descrição da imagem" />}

            <SectionText>
                <CustomParagraph>
                    Non diam in pharetra sodales odio ornare sit. Pharetra non amet lacus ipsum non volutpat convallis. Arcu amet sagittis egestas nisl cras interdum. Nulla vel semper in nunc nulla vitae id egestas. Leo duis semper id feugiat. Nunc sed vitae
                    in viverra suscipit convallis quam vulputate nulla. Id euismod viverra egestas nec pellentesque. Ut porta turpis vitae congue id. Ut vitae ullamcorper nulla bibendum lectus ipsum orci euismod sit. Magna aliquam ultrices aliquam feugiat
                    elit. In feugiat tempor blandit at. Maecenas dui nullam quisque in justo donec congue venenatis. Morbi pellentesque dui aliquam vel congue pretium. Id tristique sapien pellentesque semper convallis. Turpis amet elementum ut et morbi ac
                    viverra. Mi adipiscing pretium volutpat blandit amet nullam.
                </CustomParagraph>
                <CustomParagraph>- Eu etiam a habitasse suspendisse placerat semper. Nisi sagittis egestas vitae semper donec pellentesque dignissim. Sit tortor mauris egestas imperdiet feugiat a.</CustomParagraph>
                <CustomParagraph>
                    Enim donec ac pretium ac enim quisque malesuada condimentum mauris. Libero est vulputate massa id diam eget turpis rhoncus viverra. Dapibus amet malesuada nibh netus aliquet cum leo sapien felis. Dignissim ipsum neque mi enim sit lobortis
                    malesuada. Pretium vel purus lacus a nibh sit enim sagittis tortor. Sed viverra et adipiscing vestibulum arcu. Adipiscing massa eleifend egestas tristique. Tortor aenean id consectetur donec nec sodales aenean. Sit augue mauris tellus
                    nullam. Quam gravida quis posuere rhoncus mauris mus nulla facilisis. Ultrices urna maecenas eget sit blandit ultricies turpis a. Scelerisque lobortis nisi lorem integer. Bibendum id nec eu aliquam pretium fusce cum phasellus. Molestie
                    sollicitudin in consequat blandit at at scelerisque. A vestibulum posuere pellentesque scelerisque. Eget donec a fames dui tempus vitae ac.
                </CustomParagraph>
            </SectionText>

            <SectionText>
                <CustomVideo>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fIWuD1b4xNI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </CustomVideo>
            </SectionText>
            <SectionText>
                <CustomParagraph>
                    Ac arcu venenatis ullamcorper pulvinar. Consectetur eget blandit at gravida facilisis ut nulla odio. Aliquam donec turpis quisque amet placerat amet. Dictum sed tellus vel tellus penatibus adipiscing tristique. Turpis eu accumsan netus
                    magna ullamcorper viverra. Amet sed congue sed euismod. Lacinia egestas sit elementum semper diam. In vitae eget sem enim tellus fames maecenas. Morbi risus enim proin volutpat viverra odio. Massa quam risus morbi orci facilisi.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Enim vestibulum porttitor sem neque ultrices urna suspendisse. Aliquet vestibulum lacinia donec at in at. Et sed nec commodo ornare. Sapien dui platea cras venenatis sapien eleifend mauris. Placerat ullamcorper tortor aliquam et sed eget
                    leo varius. integer elementum.
                </CustomParagraph>
                <CustomParagraph> - Integer ullamcorper dictum congue eget natoque quisque amet auctor. Id metus amet tincidunt sapien neque vel commodo. Auctor viverra sit massa aliquam nisi.</CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Magna ullamcorper pulvinar iaculis eget sit vel bibendum. Leo enim justo pellentesque enim. Donec neque volutpat sodales ut non risus. Nulla ullamcorper proin in vel arcu eu sapien egestas ipsum. Non faucibus elementum odio nisl diam arcu.
                    Nibh semper turpis quis libero diam purus. Tincidunt elit et bibendum imperdiet massa pretium neque. Lectus maecenas mauris et euismod purus feugiat.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Sem ornare integer nec odio cursus et eu odio. Vulputate lorem ut integer sed gravida. Mollis dapibus dignissim lacus quam fermentum sagittis leo scelerisque congue. Lorem lectus facilisis nibh cras. Non venenatis tincidunt tellus tortor ut
                    laoreet consectetur. Gravida odio faucibus laoreet vel. Sed mi tellus ac nec. Et pellentesque mauris porta quisque. A integer duis at magna hac diam at orci. Mauris scelerisque purus facilisis lobortis vel molestie vitae. Consectetur
                    integer elementum.
                </CustomParagraph>
                {!isMobile ? <CustomImage src={original} alt="Descrição da imagem" /> : <CustomMB src={ibizaMB} alt="Descrição da imagem" />}
            </SectionText>

            <SectionText>
                <CustomParagraph>
                    Laoreet semper etiam malesuada enim nam volutpat ipsum. Scelerisque semper ac faucibus a pellentesque. Fermentum non egestas nec ut. Convallis nam leo tortor vel. Gravida lectus eget semper pulvinar eget volutpat. Nibh ornare fringilla
                    tempor neque morbi sed. Diam ipsum ut sed varius quam elementum. Faucibus lectus vestibulum nascetur morbi felis nec diam phasellus. Etiam orci malesuada venenatis vulputate a duis est quam lorem. Ut facilisis tempor malesuada mi.
                </CustomParagraph>
                <CustomParagraph>
                    Cursus auctor vulputate vulputate at lorem. Dui turpis nulla consequat facilisis maecenas adipiscing. Maecenas diam est neque eu neque ut. At neque quis adipiscing ut urna in nunc risus aliquam. Consectetur sem quam tristique sit sed
                    placerat aliquam ullamcorper semper. Feugiat vel sit purus lectus laoreet risus fermentum elementum faucibus. Egestas pellentesque a aliquam ac enim duis. Justo suspendisse eget eu quis purus. Eget massa mi nisi in non. Dolor tellus
                    malesuada bibendum rutrum faucibus bibendum at eleifend. Mauris risus in vel ullamcorper nec morbi. Sit nisl fames mauris sed faucibus nunc purus facilisis dolor.
                </CustomParagraph>

                <CustomParagraph>
                    Nisi integer mattis nibh ullamcorper. Tortor proin purus neque volutpat adipiscing senectus volutpat feugiat. Aliquam felis nunc magnis blandit amet nunc diam. Tincidunt non accumsan magna pellentesque nunc sed eu. Et tellus sed mi sed.
                    Amet pharetra adipiscing laoreet quis. Tristique risus molestie arcu ac. Nec fermentum amet convallis massa convallis. Adipiscing mauris odio luctus nulla. Eros quis sed eget urna accumsan. Ut tellus sed faucibus eget purus ut.
                </CustomParagraph>
                {!isMobile ? <CustomImage src={viagem} alt="Descrição da imagem" /> : <CustomImage src={viagemMB} alt="Descrição da imagem" />}
            </SectionText>
            <SectionText>
                <CustomParagraph>
                    Odio tincidunt ullamcorper diam eget lacus justo tempor posuere eget. Non placerat ullamcorper ultricies accumsan ligula. Porta pretium netus vitae velit vel eleifend nibh dolor. In mattis orci tellus venenatis eu semper tempor. Dolor
                    adipiscing pellentesque congue pellentesque eget. Nulla non nisl tristique velit ipsum sit. In leo ut nulla in ac orci et enim. Libero nisl sed quam convallis aliquam morbi tincidunt leo mattis. Pulvinar nulla pellentesque ipsum in gravida
                    praesent.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Et orci semper vel sit. Odio feugiat donec sem et tortor. Donec vehicula ullamcorper adipiscing diam aenean porta risus interdum. Eu lobortis mauris facilisis ut massa tincidunt faucibus nulla. Porttitor ut morbi scelerisque bibendum
                    scelerisque est sollicitudin at ut. Elit at in habitasse consectetur vel etiam. Ridiculus pharetra commodo ut interdum sit cras urna dictumst. Parturient tempus vitae magna nunc neque pretium etiam. Accumsan tempor amet nunc duis blandit
                    sem ut.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    In nunc rhoncus interdum pulvinar. Risus lectus tincidunt volutpat proin. Posuere aliquam sed suscipit molestie. Interdum ultrices velit nunc vel. Vel sed vitae velit iaculis sit sit elementum. Morbi sem lorem orci massa. Scelerisque massa
                    nec ornare sit proin viverra quam. Euismod molestie ac cras sit diam turpis ornare. Eu felis non magna molestie. Pulvinar varius in feugiat vestibulum nisi maecenas. Sit vitae tortor erat volutpat sit eget. Egestas pellentesque a sapien in
                    lacinia.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Blandit condimentum mi aliquam facilisi odio tempus sociis. Condimentum at neque ullamcorper pellentesque ultrices aliquet mus dictum. Integer massa interdum maecenas egestas nisl non cras. Mauris sit nunc tincidunt euismod tellus magna
                    libero. Dui ullamcorper non duis vulputate tincidunt purus vestibulum laoreet morbi.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Imperdiet consectetur ullamcorper rutrum iaculis cursus magnis integer ultricies quisque. Viverra purus ut phasellus ut volutpat. Ut massa morbi ac dignissim in egestas quis ut cursus. Et sem integer ut ornare massa ac eget. Donec
                    adipiscing neque augue eleifend. Elit accumsan a nunc suspendisse egestas. Nisl mi ornare netus mauris morbi lobortis mauris elementum. Ornare sed.
                </CustomParagraph>
                <CustomVideo>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/z-602UWUcMc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </CustomVideo>
            </SectionText>
            <SectionText>
                <CustomParagraph>
                    Facilisis dignissim eget dui dignissim aliquam commodo adipiscing. Dui id id molestie sed. Ullamcorper dignissim mattis nascetur mi semper consequat sit tempor. Vestibulum ridiculus consectetur etiam risus sed viverra pharetra volutpat. Id
                    egestas mi enim porta imperdiet netus. Neque amet netus integer a convallis nec aliquam.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Etiam pharetra dolor donec elit augue maecenas ipsum. Vivamus maecenas in faucibus at. Et tellus sed tempor eleifend pellentesque mattis facilisis non tellus. Ipsum porttitor in sit nisl ac. Tincidunt varius felis odio et. Eget sapien sit
                    diam nullam. Odio nisi laoreet turpis mauris libero imperdiet at. Aliquam vel cursus eget gravida. Lobortis mi at sem pulvinar. Sed vel sit non iaculis. Euismod enim in at bibendum auctor. Eget mauris morbi facilisi volutpat parturient. Sed
                    egestas enim arcu id enim. Vel et quis facilisis ornare sed venenatis porttitor.
                </CustomParagraph>
                <CustomParagraph> - Nulla in arcu turpis.</CustomParagraph>
            </SectionText>
            {!isMobile ? <CustomImage src={galeria} alt="Descrição da imagem" /> : <CustomImage src={galeriaMB} alt="Descrição da imagem" />}

            <SectionText>
                <CustomParagraph>
                    Facilisis dignissim eget dui dignissim aliquam commodo adipiscing. Dui id id molestie sed. Ullamcorper dignissim mattis nascetur mi semper consequat sit tempor. Vestibulum ridiculus consectetur etiam risus sed viverra pharetra volutpat. Id
                    egestas mi enim porta imperdiet netus. Neque amet netus integer a convallis nec aliquam.
                </CustomParagraph>
                <CustomParagraph>
                    {" "}
                    Etiam pharetra dolor donec elit augue maecenas ipsum. Vivamus maecenas in faucibus at. Et tellus sed tempor eleifend pellentesque mattis facilisis non tellus. Ipsum porttitor in sit nisl ac. Tincidunt varius felis odio et. Eget sapien sit
                    diam nullam. Odio nisi laoreet turpis mauris libero imperdiet at. Aliquam vel cursus eget gravida. Lobortis mi at sem pulvinar. Sed vel sit non iaculis. Euismod enim in at bibendum auctor. Eget mauris morbi facilisi volutpat parturient. Sed
                    egestas enim arcu id enim. Vel et quis facilisis ornare sed venenatis porttitor.
                </CustomParagraph>
                <CustomParagraph> - Nulla in arcu turpis.</CustomParagraph>
            </SectionText>
            {!isMobile ? <CustomImage src={civil} alt="Descrição da imagem" /> : <CustomImage src={civilMB} alt="Descrição da imagem" />}

            <SectionText>
                <CustomParagraph>
                    Nibh velit tristique augue pellentesque pulvinar commodo eget. Egestas elementum cras porttitor fermentum tincidunt suscipit integer ante mauris. Consectetur magna consequat tristique scelerisque integer vestibulum. Pellentesque euismod
                    urna fermentum sit leo feugiat neque lobortis aliquam. Nibh urna nibh et sagittis sem eget mauris. Risus purus interdum lorem sit quis in vulputate cursus adipiscing.
                </CustomParagraph>
            </SectionText>
            <ButtonNavigation path={path} />
        </Stack>
    );
};

export default Historia;
