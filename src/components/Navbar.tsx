import { useState } from "react";

export default function Navbar() {
  const [pathname, setPathname] = useState("home");

  const changePathname = (path: string) => (_event: any) => {
    setPathname(path);
  };

  return (
    <nav className="navbar flex w-full items-center justify-between gap-2 h-16 shadow">
      <div className="navbar-start max-sm:w-1/4">
        <a
          className="link text-nowrap text-base-content/90 link-primary text-primary text-xl font-semibold no-underline"
          href="#"
        >
          GIDEON SIMIYU
        </a>
      </div>
      <div className="navbar-center max-sm:hidden">
        <ul className="menu menu-horizontal p-0 font-medium">
          <li className="active">
            <a
              href="#home"
              onClick={changePathname("home")}
              className={`scrollspy-active:active ${
                pathname == "home" && "active"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={changePathname("skills")}
              className={`scrollspy-active:active ${
                pathname == "skills" && "active"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={changePathname("projects")}
              className={`scrollspy-active:active ${
                pathname == "projects" && "active"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={changePathname("experience")}
              className={`scrollspy-active:active ${
                pathname == "experience" && "active"
              }`}
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={changePathname("education")}
              className={`scrollspy-active:active ${
                pathname == "education" && "active"
              }`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={changePathname("contacts")}
              className={`scrollspy-active:active ${
                pathname == "contacts" && "active"
              }`}
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end items-center gap-4">
        <div className="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <div
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
            data-scrollspy="#scrollspy-1"
            data-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
          >
            <ul className="menu">
              <li className="active">
                <a
                  href="#home"
                  onClick={changePathname("home")}
                  className={`scrollspy-active:active ${
                    pathname == "home" && "active"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={changePathname("skills")}
                  className={`scrollspy-active:active ${
                    pathname == "skills" && "active"
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={changePathname("projects")}
                  className={`scrollspy-active:active ${
                    pathname == "projects" && "active"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={changePathname("experience")}
                  className={`scrollspy-active:active ${
                    pathname == "experience" && "active"
                  }`}
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={changePathname("education")}
                  className={`scrollspy-active:active ${
                    pathname == "education" && "active"
                  }`}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  onClick={changePathname("contacts")}
                  className={`scrollspy-active:active ${
                    pathname == "contacts" && "active"
                  }`}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className="btn btn-primary"
          target="_blank"
          href="https://forms.gle/JEMkxySNDsjrsKsb8"
        >
          <span className="">Hire me</span>
          <span className="icon-[tabler--arrow-right]"></span>
        </a>
      </div>
    </nav>
  );
}
