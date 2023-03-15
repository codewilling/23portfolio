
type Project = {
  project: {
    name: string;
    link: string;
    image: string;
    skills: string;
  };
};
export const Card = ({ project }: Project) => {
  const { name, link } = project;
  return (
    <div className="card-container">
      <a href={link} className="card-link">
        <div className="card-text-container">
          <p className="card-text">{name}</p>
        </div>
      </a>
    </div>
  );
};
