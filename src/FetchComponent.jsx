import { useEffect, useState } from "react";

export function FetchComponent() {
  const URL = "https://api.github.com/users/LinusTropp/repos";

  const [data, setData] = useState([]);
  

  useEffect(() => {

    fetch(URL) 
      .then((resp) => resp.json())
      .then((data) => {
        setData(data); 
        
      });
 },  []);


  return (
    <section>
      <h2>Mina projekt</h2>
      {data.map((repo) => (
        <article key={repo.id}>
          <a className="a-links" href={repo.html_url}>
            <h3>{repo.name}</h3>
          </a>
          
        </article>
      ))}
    </section>
  );
}