// src/pages/404.js
import React from "react";
import Layout from "../components/Layout";
import SEO from '../components/SEO/SEO';

export default () => (
  <Layout>
    <SEO title={'404'} url={'404'} description={'Infelizmente a página desejada não pode ser encontrada!'} article />
    <p>
      Infelizmente a página desejada não pode ser encontrada!
    </p>
  </Layout>
);