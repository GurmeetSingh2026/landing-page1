import QuoteIcon from "../assets/Icon.png";
import Image1 from "../assets/Guy.png";
import Image2 from "../assets/Karla.png";
import Image3 from "../assets/jani.png";

function Testimonials() {
  return (
    <>
      <section className="testimonials">

        {/* Header */}
        <div className="testimonials-header">
          <h2>
            Client <br /> Testimonial
          </h2>

          <p>
            We partner with forward-thinking companies to build
            products that are not just functional, but delightful.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonial-grid">

          <div className="cardbox">
            <div className="quote">
  <img src={QuoteIcon} alt="quote-icon" />
</div>
            <p className="text">
              Impressed by the professionalism and attention to detail.
            </p>

            <div className="user">
             
              <img src={Image1} alt="" />
              <div>
                <h4>Guy Hawkins</h4>
                <span>@guyhawkins</span>
              </div>
            </div>
          </div>

          <div className="cardbox">
                     <div className="quote">
  <img src={QuoteIcon} alt="quote-icon" />
</div>
            <p className="text">
              A seamless experience from start to finish.
              Highly recommend!
            </p>

            <div className="user">
              <img src={Image2} alt="" />
              <div>
                <h4>Karla Lynn</h4>
                <span>@karlalynn98</span>
              </div>
            </div>
          </div>

          <div className="cardbox">
                    <div className="quote">
  <img src={QuoteIcon} alt="quote-icon" />
</div>
            <p className="text">
              Reliable and trustworthy. Made my life so much easier!
            </p>

            <div className="user">
              <img src={Image3} alt="" />
              <div>
                <h4>Jane Cooper</h4>
                <span>@janecooper</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dots */}
        <div className="dots">
          <span className="active"></span>
          
          
        </div>

      </section>

      <style jsx>{`
        .testimonials {
  background: #fff;
  color: black;
  padding: 120px 0;
  margin: -190px 0;   /* 🔥 clean spacing top & bottom */
  //  border: 2px solid red;
   margin-left:65px;
}

        .testimonials-header {
          max-width: 1200px;
          margin: 0 auto 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 20px;
          
        }

        .testimonials-header h2 {
         width: 292.754px;
         color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 42.842px;
font-style: normal;
font-weight: 400;
line-height: 48.962px; /* 114.286% */
letter-spacing: -3.413px;
text-align: left;
  margin: 0;
  

         
        }

        .testimonials-header p {
          width: 265px;
          color: var(--3-Primary-colour, #8499BC);
font-family: Poppins;
font-size: 16.321px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: left;
  margin-right: 80px;
  margin-top: 40px;
  
        }

        .testimonial-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 0 20px;
          
        }

        .cardbox {
width: 305.497px;
height: 242.693px;
border-radius: 30.148px;
background: var(--background-PT1, #F1F2F5);
          position: relative;
         
          
         
        }

        .quote {
  margin-bottom: 20px;
  position: absolute;
  top: 25px;     /* upar se distance */
  left: 20px;    /* left se distance */

}

.quote img {

height: 36.178px;
flex-shrink: 0;
align-self: stretch;
opacity: 0.5;


}

        .text {
          width: 205px;
flex-shrink: 0;
color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Inter;
font-size: 18.089px;
font-style: normal;
font-weight: 500;
line-height: 22.611px; /* 125% */
letter-spacing: 0.053px;
text-align: left;
  margin-top: 70px;
  margin-left: 20px;    /* left se distance */
          padding-top:10px;
           
        }

        .user {
         display: flex;
width: 180.889px;
height: 72.356px;
padding-left: 24.119px;
align-items: center;
gap: 12.059px;
border-radius: 0 30.148px;
background: var(--Color, #FFF);
margin-top:22px;
        
        }

        .user img {
         height: 36.178px;
flex-shrink: 0;
// align-self: stretch;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
margin-left:-2px;
margin-top:20px;
border-radius: 50%;
        
        }

        .user h4 {
          color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Inter;
font-size: 10.552px;
font-style: normal;
font-weight: 700;
line-height: 15.074px; /* 142.857% */
letter-spacing: -0.113px;
        }

        .user span {
        color: var(--3-Primary-colour, #8499BC);
font-family: Inter;
font-size: 10.552px;
font-style: normal;
font-weight: 400;
line-height: 15.074px; /* 142.857% */
letter-spacing: -0.113px;
          

        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 50px;
          
          
        }

        .dots span {
         width: 24.119px;
height: 4.522px;
          border-radius: 12645038px;
background: var(--primary-accent, #212D39);
          
        }

       

        @media (max-width: 992px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-header {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Testimonials;