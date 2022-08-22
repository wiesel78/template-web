import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { AppScaffold } from "../shared";

export interface MainPageProps {
    className?: string;
}

export function MainPage(props: MainPageProps) {
    const { className } = props;

    return (
        <AppScaffold className={className} title={"Bowleria"}>
            <Container maxWidth="md">
                <Box
                    sx={{ my: 2 }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                >
                    {/* Headline */}
                    <Typography variant="h4" gutterBottom align="center">
                        Template Main Page
                    </Typography>
                </Box>
            </Container>
        </AppScaffold>
    );
}
