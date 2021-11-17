import { FC, useEffect, useState } from "react";

import "../styles/repository-info.scss";

interface RepositoryInfoProps {
  profile: string;
}

interface Profile {
  name: string;
  description: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export const RepositoryInfo: FC<RepositoryInfoProps> = ({ profile }) => {
  const BASE_URL = `https://api.github.com/orgs/${profile}`;

  const [profileInfo, setProfileInfo] = useState<Profile>({} as Profile);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setProfileInfo(data));
  }, []);

  return (
    <div className="info-container">
      <header>
        <div className="info">
          <img src={profileInfo.avatar_url} alt={profileInfo.name} />
          <div className="info-text">
            <strong>{profileInfo.name}</strong>
            <p>{profileInfo.description}</p>
          </div>
        </div>

        <div className="summary">
          <div>
            <strong>{profileInfo.public_repos}</strong>
            <p>Repositories</p>
          </div>
          <div>
            <strong>{profileInfo.followers}</strong>
            <p>Followers</p>
          </div>
          <div>
            <strong>{profileInfo.following}</strong>
            <p>Following</p>
          </div>
        </div>
      </header>
    </div>
  );
};
