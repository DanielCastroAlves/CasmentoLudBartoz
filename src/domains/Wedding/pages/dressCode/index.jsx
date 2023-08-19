import { Stack } from "@mui/material";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { FirstSection } from "../../../../Components/FirstSection";
import { DressCodeInfo } from "./components/DressCodeInfo";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";


export const DressCode = () => {
    const { language } = useLanguage();

    const path = [
        { label: "Casamento", url: "/wedding" },
        { label: "Presente", url: "/wedding/gift" },
    ];

    return (
        <Stack width="100%" height="100%" mb={10}>
            <FirstSection title={text.dressCode.title[language]} subtitle={text.dressCode.subtitle[language]} paragraph1={text.dressCode.introP1[language]} />
            <DressCodeInfo />
            <ButtonNavigation path={path} />
        </Stack>
    );
};
