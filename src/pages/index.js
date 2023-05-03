import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle={"Index page"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src="../images/gig-image.jpg" alt="main photo" />
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
