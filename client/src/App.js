import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    initials: "",
  });
  const [contacts, setContacts] = useState([
    {
      firstName: "Pere",
      lastName: "Serrat",
      email: "pereserrat@gmail.com",
      phoneNumber: "+34622151515",
      initials: "PS",
    },
    {
      firstName: "Jordi",
      lastName: "Puig",
      email: "jordipuig@gmail.com",
      phoneNumber: "+34622161616",
      initials: "JP",
    },
  ]);

  useEffect(() => {
    getContacts();
  }, []);

  async function getContacts() {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

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
      // if (!res.ok) throw new Error("There was an error");
      const data = await res.json();
      console.log("el contact", data);
      // setContact();
    } catch (err) {
      console.log(err);
    }
  }
  // const { firstName, lastName, email, phoneNumber } = contact;

  return (
    <div className="container mx-auto">
      <form
        onSubmit={(e) => addNewContact(e)}
        className="row d-flex flex-column items-center justify-content-center rounded bg-dark shadow mb-4 p-3"
      >
        <div className="row d-flex">
          <label className="col-3">First Name</label>
          <input
            className="rounded m-auto text-center col-9 border-0 bg-light"
            name="firstName"
            value={contact.firstName}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
        </div>
        <div className="row d-flex">
          <label>Last Name</label>
          <input
            name="lastName"
            value={contact.lastName}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
        </div>
        <label>Email</label>
        <input
          name="email"
          value={contact.email}
          onChange={(e) => handleInputChange(e)}
          required
        ></input>
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={(e) => handleInputChange(e)}
          required
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>{contacts && contacts.map((cont) => <Contact></Contact>)}</div>
    </div>
  );
}

export default App;
