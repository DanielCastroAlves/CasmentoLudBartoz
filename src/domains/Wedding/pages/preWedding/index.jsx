import { Breadcrumbs, Stack } from "@mui/material";
import { LocationAndWeather } from "../../components/LocationAndWeather";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../../../../Components/BreadCrumb";

export const PreWedding = () => {
    const { language } = useLanguage();
    const path = [
        { label: "Casamento", url: "/wedding" },
        { label: "Dress Code", url: "/wedding/dresscode" },
    ];

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
        { label: text.preWedding.title[language], url: "/wedding/prewedding" },
    ];

    return (
        <Stack width="100%" height="100%" mb={10}>
            <BreadCrumb data={data} />
            <FirstSection title={text.preWedding.title[language]} subtitle={text.preWedding.subtitle[language]} paragraph1={text.preWedding.introP1[language]} paragraph2={text.preWedding.introP2[language]} />
            <LocationAndWeather />
            <ButtonNavigation path={path} />
        </Stack>
    );
};
