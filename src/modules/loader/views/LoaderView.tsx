import { Container, Skeleton, styled, Theme } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store";
import { IHasTheme } from "../../theme";

const PaddedSkeleton = styled(Skeleton)(
    ({theme}) => `
        margin: ${theme.spacing(1)};
    `,
)

export const LoaderView = ({children} : React.PropsWithChildren) => {
    const {isLoading, message} = useAppSelector(state => state.loader);

    return (
        <>
        {!isLoading ? (children) : (
            <Container>
                <PaddedSkeleton variant="text" sx={{ fontSize: '1rem' }} animation="wave" />

                <PaddedSkeleton variant="circular" width={40} height={40} />

                <PaddedSkeleton variant="rectangular" height={60} />
                <PaddedSkeleton variant="rectangular" height={30} />
                <PaddedSkeleton variant="rectangular" height={40} />
                
                <PaddedSkeleton variant="rounded" height={60}  />
            </Container>
        )}
        </>
    );
}