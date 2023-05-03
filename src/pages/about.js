import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const About = () => {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => setUser(data))
  //   .catch((error) => console.log(error));
  // }, []);

  return (
    <Layout pageTitle={"About"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage src="../images/avatar.jpg" alt="avatar" />
    </Layout>
  );
};

export default About;

export const Head = () => <Seo title="About Page" />;
