import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex d-flex row mt-2 mb-3 align-items-center">
        <div className="flex d-flex col-6">
          <h1 className="text-left">ContactList</h1>
        </div>
        <div className="flex col-6 d-flex justify-content-end p-0">
          <div className="d-flex btn pl-2 pt-2 bg-dark">
            <Link to="/list" className="btn btn-md btn-dark me-2">
              List
            </Link>
            <Link to="/add" className="btn btn-md btn-dark">
              Add
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
