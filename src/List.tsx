import { useState, useEffect } from "react";

async function fetcher() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=1070730380f5fee0d87cf0382670b255&page=2"
  );
  const data = await response.json();
  return data.results; 
}
function List() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher();
      setArr(data);
    };
    fetchData();
  }, []);    
  return <>
  <div>
  <section className="">
  <h2>Trending Now</h2>
  <div className="flex flex-wrap justify-center" id="card-container">
  {arr.map((item)=>
        //<li>{item['id']}</li>
        <div className="">
          <img src={"https://image.tmdb.org/t/p/w200"+item['poster_path']} alt="Movie"/>
          <p id="card-title">{(item['name'])?item['name'] :item['title']}</p>
        </div>
    )}
    </div>
    </section>
    </div>
    </>
}
export default List