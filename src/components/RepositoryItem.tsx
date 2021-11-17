import { FC } from "react";

import arrowImg from "../assets/right-arrow.svg";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

const RepositoryItem: FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <li>
      <div>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
      </div>

      <a href={repository.html_url}>
        <img src={arrowImg} alt="right arrow" />
      </a>
    </li>
  );
};

export default RepositoryItem;
