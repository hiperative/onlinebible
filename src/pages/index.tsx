import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import IndexContainer from '../components/containers';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <IndexContainer />
    </Layout>
  );
};

export default IndexPage;
