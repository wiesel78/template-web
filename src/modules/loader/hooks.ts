import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { LoaderState, setLoader } from "./slice";

// Hooks
export function useLoader<T>() : [
    boolean, 
    (loaderState : LoaderState) => void, 
    (action : () => Promise<any|void>, setState? : undefined | ((loading : boolean) => LoaderState)) => Promise<any|void> ] 
{
    const isLoading = useAppSelector((state) => state.loader.isLoading ?? false);
    const dispatch = useAppDispatch();

    const setLoading = (value : LoaderState | boolean) => 
        dispatch(setLoader(value));
    
    const wrapper = async (action : () => Promise<any|void>) : Promise<any|void> => {
        setLoading({isLoading : true, message : "Daten werden geladen"});

        try{
            return await action();
        }catch(e){
            throw e;
        }finally{
            setLoading({isLoading : false, message : ""});
        }

    };

    return [isLoading, setLoading, wrapper];
};