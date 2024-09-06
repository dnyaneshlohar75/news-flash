"use client";
import React, { useState } from 'react'

interface NewsTypeProviderProps {
    children?: React.ReactNode;
}

type NewsTypeProps = {
    type: string | null,
    setType: (type: string) => any

}

const NewsType = React.createContext<NewsTypeProps | null>(null);

export const ChangeLocalToGlobalNews : React.FC<NewsTypeProviderProps> = ({children}) => {
    
    const [type, setType] = useState<NewsTypeProps['type']>("global");

    return (
        <NewsType.Provider value={{type, setType}}>
            {children}
        </NewsType.Provider>
    )
}