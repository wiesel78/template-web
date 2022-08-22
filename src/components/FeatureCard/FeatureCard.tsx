import { Avatar, Box, styled, Typography } from "@mui/material";
import { StandardCSSProperties } from "@mui/system";

export interface FeatureCardProps {
    className?: string;
    title: string;
    subtitle: string;
    icon: JSX.Element;
    bgcolor?: StandardCSSProperties["backgroundColor"];
}

export function FeatureCard(props: FeatureCardProps) {
    const { title, subtitle, icon, bgcolor, className } = props;

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            flex="1 1 auto"
            className={className}
        >
            <Avatar
                sx={{
                    width: 64,
                    height: 64,
                    bgcolor: bgcolor,
                    mb: 2,
                    mt: 4,
                }}
            >
                {icon}
            </Avatar>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1">{subtitle}</Typography>
        </Box>
    );
}
