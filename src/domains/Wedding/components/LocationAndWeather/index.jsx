import { Box, Stack } from "@mui/material";

export const LocationAndWeather = () => {
    return (
        <Stack width='100%' alignItems='center'>
            <Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.946544808715!2d-41.91187708872573!3d-22.76736497926735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ff1202fcdb65%3A0xa27673cadca1dc57!2sVilla%20Tres%20Marias%20Buzios!5e0!3m2!1sen!2sch!4v1689846300672!5m2!1sen!2sch"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </Stack>
    );
};
