import { Stack } from "@mui/material";
import { LocationAndWeather } from "../../components/LocationAndWeather";
import { WeddingInvitation } from "../../components/WeddingInvitation";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";

export const PreWedding = () => {
    const path = [
        { label: "Casamento", url: "/wedding" },
        { label: "Dress Code", url: "/dresscode" },
    ];
    return (
        <Stack width="100%" height="100%" mb={10}>
            <WeddingInvitation />
            <LocationAndWeather />
            <ButtonNavigation path={path} url />
        </Stack>
    );
};
