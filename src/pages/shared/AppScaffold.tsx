import { Settings, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import { Scaffold } from "../../components";
import { useSettingsDrawer } from "../../modules";
import { SettingsDrawerToggleButton } from "./SettingsDrawerToggleButton";

export interface AppScaffoldProps {
    className?: string;
    children?: React.ReactNode;
    title?: string | JSX.Element;
    actions?: JSX.Element[];
}

export function AppScaffold(props: AppScaffoldProps) {
    const { className, children, title, actions } = props;

    const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useSettingsDrawer();

    return (
        <Scaffold
            className={className}
            title={title}
            actions={[
                ...(actions ?? []),
                <IconButton
                    key={"shoppingCart"}
                    size="large"
                    aria-label="Go to Shopping Cart"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>,
                <SettingsDrawerToggleButton key={"settings"} />,
            ]}
        >
            {children}
        </Scaffold>
    );
}
