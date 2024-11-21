import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <div className="bg-color">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{
          width: "240px",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          overflowY: "auto",
        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={"images/summarizer.png"}
            width="80px"
            height="50px"
            alt="Summarizer"
          />
          <strong className="fs-4">Summarizer</strong>
        </a>
        <hr />
        <strong className="fs-4">Library</strong>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link link-body-emphasis"
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <MdOutlineLibraryBooks />
              &nbsp; My Library
            </a>
          </li>
        </ul>
        <strong className="fs-4">Account</strong>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link link-body-emphasis"
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <IoMdContact />
              &nbsp; My Profile
            </a>
          </li>
        </ul>
        <hr />

        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IoMdSettings />
            &nbsp;
            <strong>Settings</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
