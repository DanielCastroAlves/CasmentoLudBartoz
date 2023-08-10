import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack, useTheme } from "@mui/material";
import { MenuAvatar, MenuContainer } from "./style";

export const HeaderMenu = ({ anchorEl, setAnchorEl, menuOptions, setMenuOptions }) => {
    const theme = useTheme();
    const open = Boolean(anchorEl);
    const handleClose = (e, index) => {
        const updatedMenuOptions = menuOptions.map((option, i) => ({
            ...option,
            selected: i === index ? true : false,
        }));
        setMenuOptions(updatedMenuOptions);
        setAnchorEl(null);
    };

    return (
        <Stack gap={8}>
            <MenuContainer
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                hideBackdrop
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {menuOptions.map(
                    (option, index) =>
                        option.selected && (
                            <MenuItem key={option.language} onClick={(e) => handleClose(e, index)} sx={{ marginBottom: theme.spacing(15) }}>
                                <MenuAvatar alt={option.alt} src={option.image} />
                            </MenuItem>
                        )
                )}
                {menuOptions.map((item, i) => {
                    return (
                        <MenuItem key={item.language} onClick={(e) => handleClose(e, i)} >
                            <MenuAvatar alt={item.alt} src={item.image} sx={item.selected ? { border: `1px solid ${theme.palette.primary.main}` } : {}} />
                        </MenuItem>
                    );
                })}
            </MenuContainer>
        </Stack>
    );
};
