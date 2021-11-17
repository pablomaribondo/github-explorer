import { FC, useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

interface RepositoryListProps {
  profile: string;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList: FC<RepositoryListProps> = ({ profile }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const BASE_URL = `https://api.github.com/orgs/${profile}/repos`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <ul>
        {repositories && repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};
