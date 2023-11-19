import { useEffect, useState } from "react";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--tqdjfphdjc9k.code.run/characters"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = data?.results.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <CharactersCard data={currentCharacters} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={data.results.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
