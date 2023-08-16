import { Box, Stack } from "@mui/material";

export const LocationAndWeather = () => {
    (function (d, s, id) {
        if (d.getElementById(id)) {
            if (window.__TOMORROW__) {
                window.__TOMORROW__.renderWidget();
            }
            return;
        }
        const fjs = d.getElementsByTagName(s)[0];
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "tomorrow-sdk");

    return (
        <Stack width="100%" alignItems="center" px={30}>
            <Stack direction="row" width="100%" gap={8}>
                <Box width="50%" sx={{ border: "2px solid black" }}></Box>
                <Box>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.946544808715!2d-41.91187708872573!3d-22.76736497926735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ff1202fcdb65%3A0xa27673cadca1dc57!2sVilla%20Tres%20Marias%20Buzios!5e0!3m2!1sen!2sch!4v1689846300672!5m2!1sen!2sch"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        frameBorder="0"
                    ></iframe>
                </Box>
            </Stack>
            <Stack width="100%" mt={8}>
                <div class="tomorrow" data-location-id="010607" data-language="EN" data-unit-system="METRIC" data-skin="light" data-widget-type="summary">
                    <a href="https://www.tomorrow.io/weather-api/" rel="nofollow noopener noreferrer" target="_blank">
                        <img alt="Powered by the Tomorrow.io Weather API" src="https://weather-website-client.tomorrow.io/img/powered-by.svg" width="250" height="18" />
                    </a>
                </div>
            </Stack>
        </Stack>
    );
};
