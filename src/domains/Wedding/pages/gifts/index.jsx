import { Stack } from "@mui/material";
import { LocationAndWeather } from "../../components/LocationAndWeather";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from '../../../../Assets/text.json'
import { useLanguage } from "../../../../hooks/useLanguage";
import { Gift } from "./components/Gift";

export const Gifts = () => {
    const path = [
        { label: "Casamento", url: "/wedding" },
        { label: "Nossa História", url: "/wedding/ourhistory" },
    ];

    const { language } = useLanguage();
    return (
        <Stack width="100%" height="100%" mb={10}>
            <FirstSection title={text.gifts.title[language]} subtitle={text.gifts.subtitle[language]} paragraph1={text.gifts.introP1[language]} />
            <Gift />
            <ButtonNavigation path={path} />
        </Stack>
    );
};
