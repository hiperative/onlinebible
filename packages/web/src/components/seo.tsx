import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
}

// tslint:disable: object-literal-sort-keys
const SEO: React.FunctionComponent<SEOProps> = ({ description, lang, meta, keywords, title }) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const pageTitle = title || data.site.siteMetadata.title;
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          bodyAttributes={{
            class: 'lp-pom-body',
          }}
          title={pageTitle}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'es-ES',
  keywords: [],
  meta: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
