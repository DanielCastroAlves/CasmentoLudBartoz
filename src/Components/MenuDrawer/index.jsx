import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export const MenuDrawer = ({open, handleDrawerOpen}) => {

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            <Drawer anchor="left" open={open} onClose={handleDrawerOpen}>
            <Button onClick={handleDrawerOpen}>Fechar</Button>
                {/* Adicione aqui o conteúdo que deseja exibir no Drawer */}
                <div style={{ width: 250 }}>
                    <h2>Drawer Content</h2>
                    <p>Customize this content as you like!</p>
                </div>
            </Drawer>
        </div>
    );
};
