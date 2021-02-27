import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import {
  GITHUB_LOGO_QUERY,
  GLOBE_LOGO_QUERY,
  PORTFOLIO_QUERY,
} from '../graphql/queries';
import { PortfolioGrid, SmallImageStyles } from '../styles/PageStyles';
import { ContentVisibility } from '../styles/GlobalStyles.css';

function Portfolio() {
  const { data, error, loading } = useQuery(PORTFOLIO_QUERY);
  const ghLogo = useQuery(GITHUB_LOGO_QUERY).data?.allLogos[0];
  const globeLogo = useQuery(GLOBE_LOGO_QUERY).data?.allLogos[0];

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { allProjects } = data;

  return (
    <ContentVisibility>
      {allProjects.map((project) => (
        <PortfolioGrid key={project.id}>
          <div>
            <h1>{project.name}</h1>
            {project.githubLink ? (
              <Link href={project.githubLink}>
                <a target="_blank">
                  <SmallImageStyles
                    src={ghLogo.image?.publicUrlTransformed}
                    alt={ghLogo.alt}
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
                    src={globeLogo.image?.publicUrlTransformed}
                    alt={globeLogo.alt}
                  />
                </a>
              </Link>
            ) : (
              ''
            )}
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
      ))}
    </ContentVisibility>
  );
}

export default Portfolio;
