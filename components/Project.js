import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import { GITHUB_LOGO_QUERY, GLOBE_LOGO_QUERY } from '../graphql/queries';
import { PortfolioGrid, SmallImageStyles } from '../styles/PageStyles';
import Loading from './Loading';
import Error from './Error';

function Project({ project }) {
  const { data, loading, error } = useQuery(GITHUB_LOGO_QUERY);
  const ghLogo = data?.allLogos[0];
  const globeLogo = useQuery(GLOBE_LOGO_QUERY).data?.allLogos[0];

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  return (
    <PortfolioGrid key={project.id}>
      <div>
        <h1>{project.name}</h1>
        {project.githubLink ? (
          <Link href={project.githubLink}>
            <a target="_blank">
              <SmallImageStyles
                src={ghLogo?.image?.publicUrlTransformed}
                alt={ghLogo?.alt}
              />
            </a>
          </Link>
        ) : (
          ''
        )}
        {project.liveLink ? (
          <Link href={project.liveLink}>
            <a target="_blank">
              <SmallImageStyles
                src={globeLogo?.image?.publicUrlTransformed}
                alt={globeLogo?.alt}
              />
            </a>
          </Link>
        ) : (
          ''
        )}
        <p>
          <Link href={`/project/${project.id}`}>Permalink</Link>
        </p>
        {project.description?.document ? (
          <DocumentRenderer document={project.description.document} />
        ) : (
          ''
        )}
      </div>
      <div>
        <img
          src={project.image.image.publicUrlTransformed}
          alt={project.image.alt}
          align="right"
        />
      </div>
    </PortfolioGrid>
  );
}

export default Project;

Project.propTypes = {
  project: PropTypes.object,
};
