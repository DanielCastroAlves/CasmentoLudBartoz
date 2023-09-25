import { Stack } from "@mui/material";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { FirstSection } from "../../../../Components/FirstSection";
import { DressCodeInfo } from "./components/DressCodeInfo";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { BreadCrumb } from "../../../../Components/BreadCrumb";

export const DressCode = () => {
    const { language } = useLanguage();

    const path = [
        { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
        { label: text.gifts.title[language], url: "/wedding/gifts" },
    ];

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
        { label: text.dressCode.title[language], url: "/wedding/dresscode" },
    ];

    return (
        <Stack width="100%" height="100%" mb={10}>
            <BreadCrumb data={data} />
            <FirstSection title={text.dressCode.title[language]} subtitle={text.dressCode.subtitle[language]} paragraph1={text.dressCode.introP1[language]} />
            <DressCodeInfo />
            <ButtonNavigation path={path} />
        </Stack>
    );
};
