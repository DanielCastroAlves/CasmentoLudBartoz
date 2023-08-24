import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack, useTheme } from "@mui/material";
import { MenuAvatar, MenuContainer, MenuItemContainer, StyledAvatar } from "./style";
import { useLanguage } from "../../../../../hooks/useLanguage";

export const HeaderMenu = ({ anchorEl, setAnchorEl }) => {
    const theme = useTheme();
    const { handleFormLanguage, handleLanguage, menuOptions, setMenuOptions } = useLanguage();
    const open = Boolean(anchorEl);
    const handleClose = (e, index, lang) => {
        const updatedMenuOptions = menuOptions.map((option, i) => ({
            ...option,
            selected: i === index ? true : false,
        }));
        setMenuOptions(updatedMenuOptions);
        handleLanguage(lang);
        handleFormLanguage(lang);
        setAnchorEl(null);
    };

    return (
        <Stack>
            <MenuContainer
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                hideBackdrop
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                {/* {menuOptions.map(
                    (option, index) =>
                        option.selected && (
                            <MenuItem key={option.language} onClick={(e) => handleClose(e, index, option.language)} sx={{ marginBottom: theme.spacing(15) }}>
                                <MenuAvatar alt={option.alt} src={option.image} />
                            </MenuItem>
                        )
                )} */}
                {menuOptions.map((item, i) => {
                    return (
                        <MenuItemContainer key={item.language} onClick={(e) => handleClose(e, i, item.language)}>
                            <StyledAvatar alt={item.alt} src={item.image} sx={item.selected ? { border: `1px solid ${theme.palette.primary.main}` } : {}} />
                        </MenuItemContainer>
                    );
                })}
            </MenuContainer>
        </Stack>
    );
};
