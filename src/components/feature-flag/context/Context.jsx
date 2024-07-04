import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagesContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [loading,setLoading] = useState(false);
    const [enableFlags,setEnableFlags] = useState({});

    async function fetchFeatureFlags(){
        try{
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnableFlags(response);
            setLoading(false);
        }
        catch(error){
            setLoading(true);
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(()=>{
        fetchFeatureFlags();
    },[])

    return (
        <FeatureFlagesContext.Provider value={{loading,enableFlags}}>
            {children}
        </FeatureFlagesContext.Provider>
    )
}