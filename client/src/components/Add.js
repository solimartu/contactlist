import React, { useState } from "react";

export default function Add() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    initials: "",
  });

  function handleInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
    setContact((state) => ({ ...state, [name]: value, initials: initials }));
  }

  async function addNewContact() {
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error("There was an error");
      const data = await res.json();
      console.log("el contact", data);
    } catch (err) {
      console.log(err);
    }
  }

  // const { firstName, lastName, email, phoneNumber } = contact;

  return (
    <form
      onSubmit={(e) => addNewContact(e)}
      className="row d-flex flex-column items-center justify-content-center rounded-3 bg-back shadow mb-4 p-3 text-black"
    >
      <h5 className="col-3">First Name</h5>
      <input
        className="form-control mb-3"
        name="firstName"
        value={contact.firstName}
        onChange={(e) => handleInputChange(e)}
        required
      ></input>

      <h5 className="col-3">Last Name</h5>
      <input
        className="form-control mb-3"
        name="lastName"
        value={contact.lastName}
        onChange={(e) => handleInputChange(e)}
        required
      ></input>

      <h5 className="col-3">Email</h5>
      <input
        className="form-control mb-3"
        name="email"
        value={contact.email}
        onChange={(e) => handleInputChange(e)}
        required
      ></input>
      <h5 className="col-4">Phone Number</h5>
      <input
        className="form-control mb-3"
        name="phoneNumber"
        value={contact.phoneNumber}
        onChange={(e) => handleInputChange(e)}
        required
      ></input>
      <button type="submit" className="btn bg-fact mt-3 m-auto">
        Add
      </button>
    </form>
  );
}
