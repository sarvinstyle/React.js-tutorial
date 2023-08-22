import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat =() =>{
    const { data  , isLoading , refetch , error} = useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data);
    
      });

      const refechData =()=>{
        alert("data refetched");
        refetch()
      }
      return {data , isLoading  ,refechData , error}
}