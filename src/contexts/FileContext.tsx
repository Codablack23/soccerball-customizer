import { ReactNode, createContext, useState } from "react";

interface FileContextInterface{
    files:File[],
    actions?:{
        addFile:(files:File[])=>void
    }
}
interface FileProps{
    children:ReactNode | ReactNode[]
}
export const FilesContext = createContext<FileContextInterface>({
    files:[],
})

export default function FileContextProvider({children}:FileProps){
   const [files,setFile] = useState<File[]>([])

   return <FilesContext.Provider  value={{
    files,
    actions:{
        addFile(files) {
            setFile(files)
        },
    }
   }}>
     {children}
   </FilesContext.Provider>
}