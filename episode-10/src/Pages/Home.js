import { useQuery } from "react-query";
import Axios from "axios";
export const Home = () => {
  const { data : catData, isLoading , isError , error , refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) return <h2>Loading ...</h2>;
  if(isError) return <h2>sorry , there was an error : error : {error.message}</h2>
  return (
    <div>
      home page
      <h1>{catData?.fact}</h1>
      <button onClick={refetch}>update</button>
    </div>
  );
};
