import React from 'react';

export default function Nav({ title, navs }) {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light rounded"
        ariaLabel="Eleventh navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="/images/kaluma-logo.png" width="32" alt="" />
          </a>
          <div className="fw-bold">{title}</div>
          <button
            className="navbar-toggler collapsed border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-items"
            aria-controls="navbar-items"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewbox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbar-items"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {navs.map((nav) => (
                <li className="nav-item">
                  {nav.blank ? (
                    <a
                      className="nav-link"
                      href={nav.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {nav.name}
                    </a>
                  ) : (
                    <a className="nav-link" href={nav.url}>
                      {nav.name}
                    </a>
                  )}
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/kaluma-project/kaluma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-github"
                    viewbox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
