import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function List() {
  const [contacts, setContacts] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    getContactsBySearch();
  }, [input]);

  async function getContacts() {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteContact(contact) {
    try {
      const res = await fetch(`/api/contacts/${contact.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("there was an error");
      const results = await res.json();
      getContacts();
    } catch (err) {
      console.log(err);
    }
  }
  // async function seeDetails(contact) {
  //   try {
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  const editDetails = (cont) => {
    // try {
    //   const res = await fetch(`/api/contacts/${cont.id}`);
    //   const data = await res.json();
    //   setContact(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    // const name = e.target.name;
    setInput(value);
  };
  async function getContactsBySearch(e) {
    // const value = e.target.value;
    try {
      const res = await fetch(`/api/contacts/search/${input}`);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="row">
      <form onSubmit={(e) => handleSubmitSearch(e)} className="d-flex mb-3">
        <input
          className="form-control rounded-pill"
          placeholder="Search contact"
          onChange={(e) => handleChangeSearch(e)}
          value={input}
        ></input>
        <button type="submit" className="btn bg-fact text-white mx-2">
          search
        </button>
      </form>
      <div className="">
        {contacts &&
          contacts.map((cont) => (
            <div
              key={cont.id}
              className="d-flex roundedbig bg-light p-2 mb-3 align-items-center justify-content-between"
            >
              <div className="col-9 d-flex align-items-center justify-content-start">
                <div className="col-1 mx-3 d-flex">
                  <div className="btn circulo bg-fact fw-bold">
                    <p className="my-2">
                      {cont.firstName[0].toUpperCase()}
                      {cont.lastName[0].toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="col-7 flex mx-2">
                  <h3>
                    {cont.firstName} {cont.lastName}
                  </h3>
                  <h6>{cont.email}</h6>
                  <h6>{cont.phoneNumber}</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <button
                  className="btn bg-fact-out mx-2 rounded-circle fw-bolder"
                  onClick={() => deleteContact(cont)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="col-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
