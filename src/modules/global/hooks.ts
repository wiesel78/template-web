import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    GlobalCacheState,
    setCacheState,
    setNavDrawer,
    setSettingsDrawer,
} from "./slice";

/**
 * Verwaltet den Wert hinter state.global.cacheState
 * @return [
 *      value GlobalCacheState aktueller Wert,
 *      setValue (x : GlobalCacheState) => void
 * ]
 */
export const useCacheState = (): [
    GlobalCacheState,
    (x: GlobalCacheState) => void
] => {
    const value = useAppSelector((state) => state.global.cacheState);
    const dispatch = useAppDispatch();

    return [value, (x: GlobalCacheState) => dispatch(setCacheState(x))];
};

export function useNavDrawer(): [boolean, (value: boolean) => void] {
    const isNavDrawerOpen = useAppSelector(
        (state) => state.global.isNavDrawerOpen
    );
    const dispatch = useAppDispatch();

    return [isNavDrawerOpen, (value: boolean) => dispatch(setNavDrawer(value))];
}

export function useSettingsDrawer(): [boolean, (value: boolean) => void] {
    const isSettingsDrawerOpen = useAppSelector(
        (state) => state.global.isSettingsDrawerOpen
    );
    const dispatch = useAppDispatch();

    return [
        isSettingsDrawerOpen,
        (value: boolean) => dispatch(setSettingsDrawer(value)),
    ];
}
