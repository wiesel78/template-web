import { AppBar, Box, Paper, styled, Toolbar, Typography } from "@mui/material";
import { SettingsDrawer } from "../../pages/shared/SettingsDrawer";
import { HideOnScroll } from "./HideOnScroll";

const Panel = styled(Paper)`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`;

export interface ScaffoldProps {
    className?: string;
    children?: React.ReactNode;
    title?: string | JSX.Element;
    actions?: JSX.Element[];
}

export function Scaffold(props: ScaffoldProps) {
    const { className, children, title, actions } = props;

    return (
        <Panel className={className}>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "flex" } }}>{actions}</Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <SettingsDrawer />
            {children}
        </Panel>
    );
}
