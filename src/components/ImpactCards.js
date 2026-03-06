import clockimage from "../assets/Clock.png";
import arrowimage from "../assets/Arrow.png";
import arrowdownimage from "../assets/Arrow-down.png";

function ImpactCards() {
  return (
    <>
      <section className="impact">

        {/* Background Huge Text */}
        <div className="impact-bg-text">
          <span>IMPACT</span>
          <span>GROWTH</span>
        </div>

        {/* Header */}
        <div className="impact-header">
          <h2>
            Real world <br /> impact
          </h2>

          <p>
            Automate your hiring from source to offer.
            Eliminate manual screening and hire top
            talent 30% faster with our intelligent AI co-pilot.
          </p>
        </div>

        {/* Cards */}
        <div className="impact-cards">

          <div className="card dark">
              <div className="clockimage"><img src={clockimage} alt="clock" /></div> 
            <div className="percent">30
               <span className="symbol">%</span>
               </div>
            <h4>FASTER TIME-TO-HIRE</h4>
            <p className="paragraph1">
              Reduce the time spent on screening and scheduling.
            </p>
          </div>

          <div className="card blue">
            <div className="arrowimage"><img src={arrowimage} alt="arrow" /></div> 
            <div className="percent">75
              <span className="symbol">%</span>
            </div>
            <h4>PRODUCTIVITY BOOST</h4>
            <p className="paragraph2">
              Empower your recruiters to focus on what matters: people.
            </p>
          </div>

          <div className="card light">
            <div className="arrowdownimage"><img src={arrowdownimage} alt="arrow" /></div> 
            <div className="percent40">40
              <span className="symbol1">%</span>
            </div>
            
            <h3 className="cost">COST REDUCTION</h3>
            <p className="paragraph3">
              Lower your cost-per-hire with automated efficiency.
            </p>
          </div>

        </div>

        {/* Logo Grid */}
        <div className="logoSection">
          <div className="logoGrid">
            <div className="river">riverland</div>
            <div className="liva">liva</div>
            <div className="pure">pure</div>
            <div className="aven">aven.</div>

            <div className="copixel">copixel</div>
            <div className="fashioncontainer"> <div className="fashion">
              fashion</div> 
              <span className="live">live</span> 
              </div>
            <div className="alpha">ALPHA</div>
            <div className="hand">Hand Crafted</div>
          </div>
        </div>

      </section>

      <style jsx>{`
  .impact {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  margin: 170px 0;   /* 🔥 top & bottom spacing */

  // border: 2px solid red;
}

.impact-bg-text {
  position: absolute;
  top: -100px;   /* 🔥 niche aayega */
  width: 100%;
  font-size: 220px;
  font-weight: 800;
  opacity: 0.04;
  line-height: 0.8;
  pointer-events: none;
  z-index: 0;
}

.impact-bg-text span {
  display: block;
}

/* 🔥 IMPACT ko left karo */
.impact-bg-text span:first-child {
  text-align: left;
  padding-left: 10px;   /* adjust left distance */
}

/* GROWTH ko center rakho */
.impact-bg-text span:last-child {
  text-align: center;
  padding-top:350px;
}
        .impact-header h2 {
          width: 287px;
          color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: 48px; /* 114.286% */
letter-spacing: -3.346px;
margin-left:-15px;


        }

        .impact-header p {
          width: 290px;
          color: var(--3-Primary-colour, #8499BC);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left:680px;
margin-top: -80px;
        }

        /* Cards */
        .impact-cards {
          display: flex;
padding-right: 20.617px;
align-items: center;
align-self: stretch;
justify-content: space-evenly;
margin-left:220px;
margin-top: -50px;
width:1100px;

        }

        .card {
          padding: 50px 40px;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          position: relative;
  overflow: hidden;
        }

        .dark {
         width: 310.457px;
height: 287.571px;
border-radius: 27.886px;
background: var(--7-Primary-colour, #072251);
box-shadow: 0 17.429px 34.857px -8.366px rgba(0, 0, 0, 0.25);
        }

.clockimage{
display: flex;
width: 44.617px;
height: 44.617px;
justify-content: center;
align-items: center;
border-radius: 11.154px;
background: rgba(255, 255, 255, 0.10);
margin-top:-15px;

}

        .blue {
width: 310.463px;
height: 287.571px;
border-radius: 27.886px;
background: var(--base-colour, #0B5CD5);
box-shadow: 0 17.429px 34.857px -8.366px rgba(0, 0, 0, 0.25);
        }

.arrowimage{
display: flex;
width: 44.617px;
height: 44.617px;
justify-content: center;
align-items: center;
border-radius: 11.154px;
background: rgba(255, 255, 255, 0.10);
margin-top:-15px;
}

        .light {
          width: 310.463px;
height: 287.571px;
border-radius: 27.886px;
border: 0.697px solid var(--Color, #FFF);
background: var(--Color, #FFF);
box-shadow: 0 13.943px 17.429px -3.486px rgba(0, 0, 0, 0.10), 0 5.577px 6.971px -4.183px rgba(0, 0, 0, 0.10);
        }

.arrowdownimage{
display: flex;
width: 44.617px;
height: 44.617px;
justify-content: center;
align-items: center;
border-radius: 11.154px;
background: var(--Color, #FFF);
margin-top:-15px;
}

        .percent {
          margin-top: 15px;
          padding-top: 8px;
          // border: 2px solid red;
          display: inline-flex;
padding-right: 148.807px;
align-items: center;
color: var(--Color, #FFF);
// font-family: Poppins;
font-size: 66.926px;
font-style: normal;
font-weight: 600;
line-height: 66.926px; /* 100% */
letter-spacing: -3.346px;
        }

.percent40{
// width: 182px;
// height: 182px;
// border-radius: 11696106px;
// opacity: 0.2;
// background: var(--base-colour, #0B5CD5);
// filter: blur(34.85714340209961px);
          margin-top: 15px;
          padding-top: 8px;
          // border: 2px solid red;
          color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 66.926px;
font-style: normal;
font-weight: 600;
line-height: 66.926px; /* 100% */
letter-spacing: -3.346px;

}

.symbol{
color: var(--Color, #FFF);
font-family: Inter;
font-size: 33.463px;
font-style: normal;
font-weight: 700;
line-height: 33.463px; /* 100% */
letter-spacing: -3.101px;
}

.symbol1{
color: var(--2-Primary-colour, #ADBBD3);
font-family: Inter;
font-size: 33.463px;
font-style: normal;
font-weight: 700;
line-height: 33.463px; /* 100% */
letter-spacing: -3.101px;
}

        .card h4 {
          color: var(--Color, #FFF);
// font-family: Poppins;
font-size: 13.943px;
font-style: normal;
font-weight: 700;
line-height: 19.52px; /* 140% */
letter-spacing: 0.035px;
text-transform: uppercase;
padding-top:15px;
// border: 2px solid green;

          
        }
.cost{
color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 13.943px;
font-style: normal;
font-weight: 700;
line-height: 19.52px; /* 140% */
letter-spacing: 0.035px;
text-transform: uppercase;
padding-top:15px;
}
      

.paragraph1{
width: 205px;
color: var(--Color, #FFF);
// font-family: Poppins;
font-size: 12.549px;
font-style: normal;
font-weight: 400;
line-height: 20.391px; /* 162.5% */
letter-spacing: -0.306px;
 padding-top:10px;

}

.paragraph2{
width: 205px;
color: var(--Color, #FFF);
// font-family: Poppins;
font-size: 12.549px;
font-style: normal;
font-weight: 400;
line-height: 20.391px; /* 162.5% */
letter-spacing: -0.306px;
 padding-top:10px;
 
}

.paragraph3{
width: 205px;
color: var(--2-Primary-colour, #ADBBD3);
// font-family: Poppins;
font-size: 12.549px;
font-style: normal;
font-weight: 400;
line-height: 20.391px; /* 162.5% */
letter-spacing: -0.306px;
 padding-top:10px;
 
}

.logoSection {
  width: 100%;
  height: 256px;
  align-self: stretch;
  border: 1px solid var(--Color, #FFF);

  margin-top: 200px;   /* 🔥 push niche */
}


.river{
width: 319.594px;
height: 128px;
border-top: 1px solid var(--grey-background, #EAF0FB);
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Tinos;
font-size: 24px;
font-style: italic;
font-weight: 400;
line-height: 32px; /* 133.333% */
}

.liva{
width: 319.602px;
height: 128px;
border-top: 1px solid var(--grey-background, #EAF0FB);
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 140% */
letter-spacing: -0.449px;
}

.pure{
width: 319.602px;
height: 128px;
border-top: 1px solid var(--grey-background, #EAF0FB);
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Tinos;
font-size: 30px;
font-style: italic;
font-weight: 400;
line-height: 36px; /* 120% */
letter-spacing: -0.75px;
}

.aven{
width: 319.602px;
height: 128px;
border-top: 1px solid var(--grey-background, #EAF0FB);
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 140% */
letter-spacing: -1.449px;
}

.copixel{
width: 319.594px;
height: 128px;
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: -0.312px;
}

.fashioncontainer {
  width: 100%;
  height: 128px;
  border-right: 1px solid #EAF0FB;
  border-bottom: none;   /* remove line */
  background: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.fashion {
  color: #212D39;
  text-align: center;
  font-family: Tinos;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  border: none;
  // border: 2px solid red;
  
}

.live {
  color: #212D39;
  text-align: center;
  font-family: Inter;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  border: none;      /* 👈 ensure no border */
  outline: none;
  border: 2px solid green;
  border: 1px solid var(--Color, #FFF);
}

.alpha{
width: 319.602px;
height: 128px;
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 1.288px;
}

.hand{
width: 319.602px;
height: 128px;
border-right: 1px solid var(--grey-background, #EAF0FB);
border-bottom: 1px solid var(--grey-background, #EAF0FB);
background: var(--Color, #FFF);
color: var(--primary-accent, var(--primary-accent, #212D39));
font-family: Tinos;
font-size: 11px;
font-style: italic;
font-weight: 400;
line-height: 16.5px; /* 150% */
}

        @media (max-width: 992px) {
          .impact-cards {
            grid-template-columns: 1fr;
          }

          .impact-header {
            flex-direction: column;
            gap: 30px;
          }

          .logoGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-bg-text {
            font-size: 120px;
          }
        }
      `}</style>
    </>
  );
}

export default ImpactCards;