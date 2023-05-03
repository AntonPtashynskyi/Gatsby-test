import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";

const BlogPost = (props) => {
  const { data, children } = props;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD.MMMM.YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
