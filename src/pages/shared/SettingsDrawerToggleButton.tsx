import React from "react";
import { styled, Container, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useSettingsDrawer } from "../../modules";

const Panel = styled(Container)`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`;

export interface SettingsDrawerToggleButtonProps {
    className?: string;
}

export function SettingsDrawerToggleButton(
    props: SettingsDrawerToggleButtonProps
) {
    const { className } = props;

    const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useSettingsDrawer();

    return (
        <IconButton
            className={className}
            size="large"
            aria-label="Go to settings of this app"
            color="inherit"
            onClick={() => setIsSettingsDrawerOpen(!isSettingsDrawerOpen)}
        >
            <Settings />
        </IconButton>
    );
}
