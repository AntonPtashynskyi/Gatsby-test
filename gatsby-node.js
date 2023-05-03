const path = require("path");

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;

  //   if (page.path.match(/^\/users/)) {
  const result = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const users = result.map((user) => ({
    path: `/users/${user.username}`,
    component: path.resolve("./src/components/UserTemplate.js"),
    context: {
      user,
    },
  }));

  users.forEach((user) => createPage(user));
  //   }

  //   if (result.errors) {
  //     reporter.panicOnBuild(`Error while running GraphQL query.`);
  //     return;
  //   }

  //   const userTemplate = path.resolve(`src/components/UserTemplate.jsx`);
  //   result.forEach((user) => {
  //     const path = user.username;
  //     createPage({
  //       path: `/users/${path}`,
  //       component: userTemplate,
  //       context: {
  //         user,
  //       },
  //     });
  //   });
};
