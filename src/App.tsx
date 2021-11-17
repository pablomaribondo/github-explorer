import { Header } from "./components/Header";
import { RepositoryInfo } from "./components/RepositoryInfo";
import { RepositoryList } from "./components/RepositoryList";

import "./styles/global.scss";
import "./styles/app.scss";

const PROFILE = "rocketseat";

const App = () => (
  <div className="app">
    <Header />
    <RepositoryInfo profile={PROFILE} />
    <RepositoryList profile={PROFILE} />
  </div>
);

export default App;
