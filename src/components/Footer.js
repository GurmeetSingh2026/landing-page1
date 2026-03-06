import sms from "../assets/sms.png";
import vasitum from "../assets/vasitum.svg";
function Footer() {
  return (
    <>
      <section className="footer-wrapper">

        {/* Contact Card */}
        <div className="footer-contact">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <h2>Let’s talk</h2>

            <p>
              Ask us anything or just say hi....
            </p>
<div className="contact-left-p1">
              <div className="sms">
                <img src={sms} alt="sms" />
              </div>
              <p className="meet">meet@vasitum.com</p>
            </div>
            {/* 🔥 FIXED: Now inside contact-left */}
            
          </div>

          {/* RIGHT SIDE */}
          <div className="contact">
            <div className="contact-right">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Message"></textarea>
              <button>Send</button>
            </div>
          </div>

        </div>

        {/* Main Footer */}
        <footer className="footer-main">
          <div className="footer-grid">
            <div className="va">
                 <div className="vasitum">
                <img src={vasitum} alt="vasitum" />
              </div>
</div>
            <div>
              <h4>Vasitum</h4>
              <ul>
                <li>About us</li>
                <li>Our clients</li>
                <li>Get in touch</li>
                <li>E-Book</li>
              </ul>
            </div>

            <div>
              <h4>Quick links</h4>
              <ul>
                <li>Blogs</li>
                <li>Solutions</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>

            <div>
              <h4>Jobs by industry</h4>
              <ul>
                <li>Information Technology</li>
                <li>Marketing</li>
                <li>Sales</li>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© Copyright 2024, Vasitum</span>
          </div>
        </footer>

      </section>

      <style jsx>{`

        /* Wrapper */
        .footer-wrapper {
          margin-top: 120px;
          position: relative;
        }

        /* Contact Card */
        .footer-contact {
          display: flex;
          width: 1103.58px;
          height: 351px;
          padding: 50px;
          justify-content: center;
          align-items: center;
          gap: 46px;
          border-radius: 60px;
          border: 0.704px solid var(--Color, #FFF);
          background: var(--Color, #FFF);
          box-shadow: 0 17.589px 35.179px -8.443px rgba(19, 19, 19, 0.20);
        }

        .contact-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* 🔥 pure left align */
  gap: 20px;                 /* 🔥 vertical spacing */
}

      .contact-left h2 {
  width: 287px;
  font-size: 42px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -3.346px;
  margin: 0;
}

.contact-left p {
  width: 336px;
  font-size: 16px;
  margin: 0;
}
.contact-left-p1 {
  display: flex;
  align-items: center;
  gap: 12px;              /* 🔥 thoda zyada gap */
  margin-top: 5px;        /* paragraph se halka distance */
}

.sms {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sms img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.meet {
  font-size: 16px;
  font-weight: 500;       /* 🔥 thoda bold */
  color: #335590;
  line-height: 24px;
  margin: 0;
}

.va{
display: flex;
padding: 8px 16px;
flex-direction: column;
align-items: center;
gap: 10px;
}


.vasitum{

width: 8.493px;
height: 14.265px;
fill: #FFF;
width: 80.716px;
height: 17.276px;
// text-color: white;
}

        .contact-left-p1{
  display: flex;
  align-items: center;    /* 🔥 vertical center */
  gap: 9px;
 
        .contact-right {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 350px;
        }

        .contact-right input,
        .contact-right textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
        }

        .contact-right button {
          padding: 12px;
          background: #f4a940;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
        }

        .footer-main {
display: flex;
width: 1112px;
flex-direction: column;
align-items: flex-start;
gap: 18px;
        }

        .footer-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 50px;
          font-size: 13px;
          opacity: 0.7;
        }

      `}</style>
    </>
  );
}

export default Footer;