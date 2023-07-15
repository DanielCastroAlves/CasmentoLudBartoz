import { Box, Stack, useTheme } from "@mui/material"
import mainLogo from '../../Images/mainLogo.png'


export const Header = () => {
    return (
        <Stack direction='row' width='-webkit-fill-available' sx={{paddingLeft: '40px'}} alignItems='center' justifyContent='space-between'>
            <Box component='img' src={mainLogo} ></Box>
            <Box>massa</Box>
        </Stack>    
    )
}