// src/pages/index.jsx
import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from '../components/Posts';
import 'minireset.css';
import SEO from '../components/SEO/SEO';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title={''} url={''} description={'Meu Blog'} article />
        <Posts data={data}/>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;