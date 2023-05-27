import { useEffect } from 'react'

export const useTitle = (title) => {


    useEffect(() => {
        document.title = `${title} | Shooping Cart`

    },[title])

    return null;
  
}
