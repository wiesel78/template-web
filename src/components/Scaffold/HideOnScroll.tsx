import { Slide, useScrollTrigger } from "@mui/material";

/**
 * Hide its content on scroll down
 * @param children content which will be hide on scroll
 * @returns
 */
export function HideOnScroll({ children }: { children?: any }) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
