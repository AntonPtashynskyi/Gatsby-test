import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <p>{pageTitle}</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog post</Link>
          </li>
          <li>
            <Link to="/users">Users page</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
