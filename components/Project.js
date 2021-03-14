import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Head from 'next/head';
import { PORTFOLIO_LOGOS_QUERY } from '../graphql/logoQueries';
import { PortfolioGrid, SmallImageStyles } from '../styles/PageStyles';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';
import ParseHtml from '../lib/parseHtml';

function Project({ project }) {
  const { data, loading, error } = useQuery(PORTFOLIO_LOGOS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const [ghLogo] = data.ghLogo;
  const [globeLogo] = data.globeLogo;

  return (
    <PortfolioGrid key={project.id}>
      <Head>
        <title>EthanG | {project.name}</title>
        <meta name="description" content={`Project ${project.name}`} />
      </Head>
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
        <ParseHtml documentObject={project.description.document} />
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
