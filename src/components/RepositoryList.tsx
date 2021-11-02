import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

const BASE_URL = "https://api.github.com/orgs/rocketseat/repos";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
