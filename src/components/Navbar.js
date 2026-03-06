import NavbarImage from "../assets/vasitum.svg";

function Navbar() {
  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-container">

          <div className="logo">
            <img src={NavbarImage} alt="Vasitum Logo" />
          </div>

          <ul className="nav-links">
            <li>About</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="job-link">Looking for Job</li>
          </ul>

          <button className="signin-btn">Sign In</button>
        </div>
      </header>

      <style jsx>{`
        .navbar-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 30px 20px;
        }

        .navbar-container {
          display: flex;
          width: 980px;
          height: 56px;
          padding: 15px 45px;
          align-items: center;
          justify-content: space-between;
          border-radius: 20px;
          border: 1px solid #fff;
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(5px);
        }

        .logo img {
          height: 23px;
        }

        .nav-links {
          display: flex;
          gap: 38px;
          list-style: none;
        }

        .nav-links li {
          color: #2B2E34;
          font-size: 12px;
          font-weight: 450;
          cursor: pointer;
        }

        .nav-links li:hover {
          color: #F4A940;
        }

        .signin-btn {
          padding: 10px 30px;
          border-radius: 10px;
          background: #fff;
          border: none;
          color: #F4A940;
          font-size: 14px;
          cursor: pointer;
        }

        .signin-btn:hover {
          background: #f9fafb;
        }
      `}</style>
    </>
  );
}

export default Navbar;