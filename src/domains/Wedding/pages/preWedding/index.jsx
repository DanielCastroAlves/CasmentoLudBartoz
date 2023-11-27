import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { LocationAndWeather } from "../../components/LocationAndWeather";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { BreadCrumb } from "../../../../Components/BreadCrumb";

export const PreWedding = () => {
    const { language } = useLanguage();
    const path = [
        {
            label: text.MenuHeaderLinks.teamBrideGroom[language],
            url: "/wedding/weddingparty",
        },
        { label: text.dressCode.title[language], url: "/wedding/dresscode" },
    ];

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
        { label: text.preWedding.title[language], url: "/wedding/prewedding" },
    ];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack width="100%" height="100%" mb={!isMobile && 10}>
            <BreadCrumb data={data} />
            <FirstSection title={text.preWedding.title[language]} subtitle={text.preWedding.subtitle[language]} paragraph1={text.preWedding.introP1[language]} paragraph2={text.preWedding.introP2[language]} />
            <LocationAndWeather
                title={text.preWedding.BoxEvent.boxTitle[language]}
                titleBox={text.preWedding.BoxEvent.Titlebox[language]}
                address1={text.preWedding.BoxEvent.addressP1[language]}
                address2={text.preWedding.BoxEvent.addressP2[language]}
                date={text.preWedding.BoxEvent.dateTime[language]}
                src={
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7357.821953921361!2d-41.9139298!3d-22.7686848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9701b3a2e4add5%3A0x60f20f24c43c0e4f!2sSirena%20B%C3%BAzios%20Gastrobar!5e0!3m2!1spt-BR!2sbr!4v1698618755881!5m2!1spt-BR!2sbr"
                }
                dressCode={text.preWedding.dressCode[language].toUpperCase()}
            />
            <ButtonNavigation path={path} />
        </Stack>
    );
};
