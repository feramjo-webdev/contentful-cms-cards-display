import { useFetchProjects } from './FetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className='projects'>
        <div className='loading'></div>;
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map(({ title, url, imgUrl, id }) => {
          return (
            <a
              href={url}
              key={id}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <article>
                <img src={imgUrl} alt={title} className='img' />
                <h5>{title}</h5>
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
