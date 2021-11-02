import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

const BASE_URL = "https://api.github.com/orgs/rocketseat/repos";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem
            key={repository.name}
            repository={{
              name: repository.name,
              description: repository.description,
              link: repository.html_url,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
