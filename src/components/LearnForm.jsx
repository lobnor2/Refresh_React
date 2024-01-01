import React, { useState } from "react";

const LearnForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const handleLastName = (e) => {
  //     setLastName(e.target.value);
  //   };
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const handleDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          onChange={handleDetails}
          value={details.firstName}
        />
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={details.lastName}
          onChange={handleDetails}
        />
        <button type="submit">submit</button>
        <br />
        <br />
        First name - {details.firstName}
        <br />
        Last name - {details.lastName}
      </form>
    </>
  );
};

export default LearnForm;
