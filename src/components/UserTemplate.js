import React from "react";

const UserTemplate = ({ pageContext }) => {
  console.log(pageContext);
  const { name, email, phone, website, id } = pageContext.user;
  return (
    <div>
      USER
      <h2>
        {name} | id: {id}
      </h2>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserTemplate;
