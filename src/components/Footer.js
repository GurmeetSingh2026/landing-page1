import sms from "../assets/sms.png";
import vasitum from "../assets/vasitum.svg";

function Footer() {
  return (
    <>
      <section className="footer-wrapper">
        <div className="footer-contact">
          <div className="contact-left">
            <h2>Let's talk</h2>
            <p>Ask us anything or just say hi....</p>
            <div className="contact-mail">
              <img src={sms} alt="mail" />
              <span>meet@vasitum.com</span>
            </div>
          </div>

          <form className="contact-right">
            <div className="input-row">
              <label>
                <span>Your Name</span>
                <input type="text" placeholder="Type here.." />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" placeholder="Type here.." />
              </label>
            </div>

            <label className="message-row">
              <span>Your Email</span>
              <input type="text" placeholder="Type here.." />
            </label>

            <button type="submit">Send</button>
          </form>
        </div>

        <footer className="footer-main">
          <div className="footer-grid">
            <div className="brand-col">
              <img src={vasitum} alt="vasitum" />
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
            <span>meet@vasitum.com</span>
            <span>� Copyright 2024, Vasitum</span>
          </div>

          <div className="watermark">
            <span>Vasitum</span>
            </div>
        </footer>
      </section>

      <style jsx>{`
        .footer-wrapper {
          margin-top: 120px;
          position: relative;
        }

        .footer-contact {
          width: 1110px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 46px;
          padding: 50px;
          border-radius: 60px;
          border: 1px solid #fff;
          background: #fff;
          box-shadow: 0 17px 35px -8px rgba(19, 19, 19, 0.2);
          position: relative;
          z-index: 3;
          transform: translateY(96px);
        
        }

        .contact-left {
          width: 290px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-left h2 {
          font-size: 48px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: -2px;
          color: #212d39;
        }

        .contact-left p {
          font-size: 16px;
          color: #8499bc;
        }

        .contact-mail {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #335590;
          font-size: 16px;
          margin-top: 14px;
        }

        .contact-mail img {
          width: 20px;
          height: 20px;
        }

        .contact-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
         
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
              
        }

        .contact-right label {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-right span {
         color: var(--3-Primary-colour, #8499BC);
// font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 133.333% */
letter-spacing: 1.2px;
       
        }

        .contact-right input {
          color: var(--2-Primary-colour, #ADBBD3);
// font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.439px;
  border: none;               /* sab borders remove */
  border-bottom: 1px solid var(--2-Primary-colour, #ADBBD3);
    border-radius: 0;  
        }

        .contact-right button {
          display: flex;
width: 134px;
padding: 13px 10px;
justify-content: center;
align-items: center;
gap: 10px;
         border-radius: 10px;
background: var(--Orange-primary, #F4A940);
box-shadow: 0 1px 3px 0 rgba(57, 60, 70, 0.10), 0 1px 2px -1px rgba(57, 60, 70, 0.10);
color: var(--Color, #FFF);
text-align: center;
// font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: -0.15px; 
        }

        .footer-main {
          width: 100%;
          margin: 0 auto;
          border-radius: 60px 60px 0 0;
          background: linear-gradient(180deg, #26469d 0%, #1a3271 100%);
          padding: 180px 80px 70px;
          position: relative;
          overflow: hidden;
          color: #fff;
            // border: 2px solid red;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
          gap: 70px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          padding-bottom: 44px;
          position: relative;
          z-index: 2;
        }

       .brand-col img{
  width:120px;
  height:32px;
  filter: brightness(0) invert(1);
}

        .footer-grid h4 {
       align-self: stretch;
       color: #FFF;
// font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 22.4px */
      
        }

        .footer-grid ul {
          display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
           
        }

        .footer-grid li {
        align-self: stretch;
        color: rgba(255, 255, 255, 0.75);
// font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
          
        }

        .footer-bottom {
          display: flex;
align-items: center;
gap: 179px;
        justify-content: space-between; /* left aur right push karega */
          padding: 0 70px;   /* left aur right dono side se andar push */
    
        }

.footer-bottom span{
width: 172px;
color: #FFF;
// font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 16.8px */

  margin-right: 40px; 
}

        .watermark{
  width:100%;
  height:159px;
  overflow:hidden;
  position:relative;
}

.watermark span{
  position:absolute;
  bottom:-150px;          /* niche se cut effect */
  // left:-40px;

  font-size:350px;
  font-weight:700;
  letter-spacing:8px;

  color:transparent;
  -webkit-text-stroke:4px #073984;

  opacity:1;

  // filter: drop-shadow(3px 4px 4px rgba(2,14,35,0.30));
  stroke-width: 3px;
stroke: var(--8-base-colour, #073984);
// opacity: 0.6;
filter: drop-shadow(3px 4px 4px rgba(2, 14, 35, 0.30));
}

        @media (max-width: 1320px) {
          .footer-main,
          .footer-contact {
            width: calc(100% - 40px);
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
