import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";

const BlogPage = (props) => {
  const { nodes: posts } = props.data.allMdx;
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {posts.map(({ frontmatter, id }) => (
          <li key={id}>
            <h3>
              <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </h3>
            <p>Posted: {frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "DD MMMM YYYY")
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
