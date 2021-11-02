const RepositoryItem = ({ repository: { name, description, link } }) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={link}>Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
