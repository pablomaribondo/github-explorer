import RepositoryItem from "./RepositoryItem";

const mockRepository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={mockRepository} />
        <RepositoryItem repository={mockRepository} />
        <RepositoryItem repository={mockRepository} />
        <RepositoryItem repository={mockRepository} />
      </ul>
    </section>
  );
};

export default RepositoryList;
