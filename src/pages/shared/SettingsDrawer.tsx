import React, { useState } from "react";
import {
    styled,
    Container,
    SwipeableDrawer,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Divider,
    ButtonGroup,
    Button,
} from "@mui/material";
import { useSettingsDrawer, useThemeMode } from "../../modules";
import { Cancel, CancelOutlined, Close } from "@mui/icons-material";

const Panel = styled(Container)`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`;

export interface SettingsDrawerProps {
    className?: string;
}

export function SettingsDrawer(props: SettingsDrawerProps) {
    const { className } = props;

    const [isOpen, setIsOpen] = useSettingsDrawer();
    const [mode, toggleMode] = useThemeMode();

    return (
        <SwipeableDrawer
            className={className}
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: { xs: 310, md: 360 },
                },
            }}
        >
            <Toolbar disableGutters>
                <Box my={2} ml={2}>
                    <Typography variant="h6" component="div">
                        Einstellungen
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "flex" } }}>
                    <IconButton
                        size="large"
                        aria-label="Close the drawer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Close />
                    </IconButton>
                </Box>
            </Toolbar>
            <Divider />
            <Box p={2}>
                <Typography variant="body1" gutterBottom>
                    MODE
                </Typography>
                <ButtonGroup fullWidth>
                    <Button
                        variant={mode == "light" ? "contained" : "outlined"}
                        onClick={() => toggleMode()}
                    >
                        Light
                    </Button>
                    <Button
                        variant={mode == "dark" ? "contained" : "outlined"}
                        onClick={() => toggleMode()}
                    >
                        Dark
                    </Button>
                </ButtonGroup>
            </Box>
        </SwipeableDrawer>
    );
}
