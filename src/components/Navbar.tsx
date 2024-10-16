export default function Navbar() {
  return (
    <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 shadow">
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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skils</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contacts</a>
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
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <li>
              <a className="dropdown-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-primary" target="_blank" href="https://forms.gle/JEMkxySNDsjrsKsb8">
          <span className="">Hire me</span>
          <span className="icon-[tabler--arrow-right]"></span>
        </a>
      </div>
    </nav>
  );
}
