import icon from "../assets/1.png";
import messege from "../assets/messege.png";
import chatavtar from "../assets/chat-avtar.png";
import arrow from "../assets/arrow2.png";
import bell from "../assets/5.png";

function Features() {
  return (
    <>
      <section className="featuresAA">

        {/* Header */}
         {/* Header */}
        <div className="features-headerAA">
          <div>
            <h2>
              Everything you need to hire <br />
              <span>faster and smarter.</span>
            </h2>

            <p>
              Replace manual tasks with intelligent automation. Vasitum
              handles the busy work so you can focus on building your team.
            </p>
          </div>

          
        </div>
<button className="see-btnAA">See all →</button>
        {/* Main Card Grid */}
        <div className="features-gridAA">

          {/* Left Tall Card */}
          <div className="cardAA tallAA">

            <div className="top-labelAA">
              <span>TOP CANDIDATES</span>
              {/* <span className="dotsAA">•••</span> */}
            </div>

            <div className="candidate-listAA">

              <div className="candidateAA">
                <div className="leftAA">
                  <div className="avatarAA blueAA">S</div>
                  <div>
                    <h5 className="sarah">Sarah Miller</h5>
                    <span className="product">Product Designer</span>
                  </div>
                </div>
                <div className="rightAA">
                  <span className="percentAA">98%</span>
                  <span className="statusAA"></span>
                </div>
              </div>

              <div className="candidateAA">
                <div className="leftAA">
                  <div className="avatarAA orangeAA">A</div>
                  <div>
                    <h5 className="sarah">Alex Chen</h5>
                    <span className="product">UX Researcher</span>
                  </div>
                </div>
                <div className="rightAA">
                  <span className="percentAA">94%</span>
                  <span className="statusAA"></span>
                </div>
              </div>

              <div className="candidateAA">
                <div className="leftAA">
                  <div className="avatarAA pinkAA">J</div>
                  <div>
                    <h5 className="sarah">Jordan Smith</h5>
                    <span className="product">UI Developer</span>
                  </div>
                </div>
                <div className="rightAA">
                  <span className="percentAA">89%</span>
                  <span className="statusAA"></span>
                </div>
              </div>

              <div className="candidateAA fadedAA">
                <div className="leftAA">
                  <div className="avatarAA greyAA">M</div>
                  <div>
                    <h5 className="sarah">Mike Ross</h5>
                    <span className="product">Frontend Dev</span>
                  </div>
                </div>
                <div className="rightAA">
                  <span className="percentAA">76%</span>
                </div>
              </div>

            </div>
<div>
            <div className="bottom-contentAA">
            <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>

              <h4 className="bottom-contentAA-h4">Automated Screening</h4>
              <p className="bottom-contentAA-p">
                Instantly rank thousands of resumes based on your
                specific job criteria and historical data.
              </p>
            </div>
</div>
          </div>
<div className="both">
          {/* Wide Card */}
          <div className="cardAA wideAA">

            <div className="wide-leftAA">

              <div className="messege">
                          <img src={messege} alt="messege" />
                        </div>

              <h4 className="wide-leftAA-h4">Ask Vasitum AI</h4>

              <p className="wide-leftAA-p">
                "Find me candidates with React experience in New York." </p>
                <p className="wide-leftAA-p1">
                Interact with your talent pool using natural language.
             
</p>
              <button className="demo-btnAA">Try Demo</button>

            </div>

            <div className="chat-uiAA">

              <div className="chat-headerAA">
                
                 <div className="chat-avtar">
                          <img src={chatavtar} alt="avtar" />
                        </div>
                <div>
                  <h5 className="chat-header-h5">Vasitum AI</h5>
                  <span className="onlineAA">
                    <span className="dotAA"></span> Online
                  </span>
                </div>
              </div>

              <div className="chat-messageAA">
                <div>
                Found 5 candidates matching
                <strong> "Senior Designer"</strong>
                </div>
              </div>

              <div className="chat-skeletonAA">
                <div></div>
                <div></div>
              </div>

            </div>

          </div>
<div className="bottom-rowAA">
          {/* Insights */}
          <div className="cardAA insightsAA">

            <div className="barsAA">
              <div className="barAA b1AA"></div>
              <div className="barAA b2AA"></div>
              <div className="barAA b3AA"></div>
              <div className="barAA b4AA"></div>
              <div className="barAA b5AA"></div>
              <div className="barAA b6AA"></div>
            </div>

            <div className="insight-contentAA">
             <div className="arrow-icon">
                          <img src={arrow} alt="arrow" />    
                             </div>
                
              <div>
                <h4 className="real">Real-Time Insights</h4>
                <p className="track">Track pipeline health and hiring velocity.</p>
              </div>
            </div>

          </div>

          {/* Schedule */}
          <div className="cardAA scheduleAA">
<div className="schedule">
            <div className="schedule-topAA">
              <div>
                <span className="todayAA">TODAY</span>
                <div className="progress-barAA">
                  {/* <div className="progress-fillAA"></div> */}
                </div>
                <div className="progress-lightAA"></div>
              </div>

              <div className="jd-avatarAA">JD</div>
            </div>
</div>
            <div className="schedule-contentAA">
             <div className="bell-div">
              <div className="bell">
                          <img src={bell} alt="bell" />
                        </div>

              <div>
                
                </div>
               <h4 className="smart">Smart Scheduling</h4>
              </div>
               <p className="auto">Automated interview coordination.</p>
            </div>

          </div>
</div>

        </div>
</div>
      </section>

      <style jsx>{`
      .featuresAA {
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 44px;
align-self: stretch;
width: 100%;
// border: 2px solid black;
  margin: 30px auto;   /* 🔥 top & bottom spacing */
  position: relative;
}

.features-headerAA {
  width: 984px;
height: 196px;
  
}

.features-headerAA h2 {
  color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 42px;
font-style: normal;
font-weight: 400;
line-height: 68px; /* 161.905% */
letter-spacing: -1.677px;
margin-left: 230px;

}

.features-headerAA span {
color: var(--Orange-primary, #F4A940);
// font-family: Poppins;
font-size: 42px;
font-style: normal;
font-weight: 500;
line-height: 68px; /* 161.905% */
letter-spacing: -1.677px;
}

.features-headerAA p {
  width: 454px;
flex-shrink: 0;
color: #ADADAD;
// font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 230px;
padding-top:20px;
}

.see-btnAA {
  display: inline-flex;
  padding: 13.5px 25px 12.5px 25px;
  justify-content: center;
  align-items: flex-end;
  gap: 8.43px;
  border-radius: 10px;
  border: 1px solid #E5E7EB;
  background: #FFF;
  box-shadow: 0 1px 3px 0 rgba(57, 60, 70, 0.10),
              0 1px 2px -1px rgba(57, 60, 70, 0.10);

  margin-left: 1100px;

  position: relative;
  top: -110px;   /* 🔥 move up */
}

/* GRID */
.features-gridAA {
  max-width: 1200px;
  margin: 0 auto;           /* center whole grid */
  display: grid;
  grid-template-columns: 1fr 1.5fr;  /* left small, right big */
  gap: 35px;
  padding: 0 20px;
}

/* CARD BASE */
.cardAA {
  background: #111827;
  border-radius: 32px;
  padding: 40px;
  position: relative;
  // border:2px solid black;
}

.tallAA {
display: flex;
width: 314px;
height: 478px;
padding: 0.807px 0.719px 0 0.807px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 25.816px;
border: 0.807px solid #F3F4F6;
background: #FFF;
box-shadow: 0 6.454px 24.202px 0 rgba(0, 0, 0, 0.04);
 grid-row: 1 / 3;   /* Left card full height */
  grid-column: 1 / 2;
  // border: solid red 2px;
      }
.both{
 display: flex;
  flex-direction: column;   /* vertical stacking */
  gap: 35px;
}


.top-labelAA {
  color: #99A1AF;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 600;
line-height: 12.908px; /* 133.333% */
letter-spacing: 0.484px;
text-transform: uppercase;
margin-left: -150px;
margin-top: 10px;
//  border: 2px solid red;

}

.dotsAA {
  letter-spacing: 2px;
}


.candidateAA {
  width: 260.843px;
height: 46.791px;
border-radius: 11.294px;
border: 0.807px solid #F3F4F6;
background: #FFF;
box-shadow: 0 0.807px 2.42px 0 rgba(0, 0, 0, 0.10), 0 0.807px 1.613px -0.807px rgba(0, 0, 0, 0.10);
margin-top: 10px;
 
 display: flex;              /* 🔥 ADD THIS */
  align-items: center;        /* vertical center */
  // justify-content: flex-end;  /* 🔥 push to right */
  justify-content: space-between; 
  padding-right: 30px;
}

.fadedAA {
  opacity: 0.5;
}

.leftAA {
  display: flex;
  align-items: center;
  gap: 12px;
//  border: 2px solid red;
}

.avatarAA {
 display: flex;
width: 25.817px;
height: 25.817px;
justify-content: center;
align-items: center;
flex-shrink: 0;
margin-left: 10px;
margin-top: 10px;
 
}

.blueAA { border-radius: 13534897px;
background: #7ABFFF;
color: #FFF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */ }
.orangeAA { border-radius: 13534897px;
background: var(--Orange-primary, #F4A940);
color: #FFF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
}
.pinkAA {border-radius: 13534897px;
background: #F6339A;
color: #FFF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
 }
.greyAA { border-radius: 13534897px;
background: #90A1B9;
color: #FFF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
 }

.sarah{
color: #101828;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 600;
line-height: 12.908px; /* 133.333% */
margin-top:15px;
//  border: 2px solid red;
}

.product{
color: #6A7282;
// font-family: Poppins;
font-size: 8.067px;
font-style: normal;
font-weight: 400;
line-height: 12.101px; /* 150% */
letter-spacing: 0.095px;
// border: 2px solid yellow;
position: relative;
  top: -5px; 
}


.rightAA {
  width: 23.396px;
flex-shrink: 0;
  //  border: 2px solid red;
}

.percentAA {
  width: 23.396px;
flex-shrink: 0;
color: #00A63E;
font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
  
}

.statusAA {
  width: 6.454px;
height: 6.454px;
border-radius: 13534897px;
opacity: 0.9927;
background: #00C950;
  //  border: 2px solid yellow;
}

.bottom-contentAA {
width: 312px;
// height: 180px;
background: #FFF;
  
  padding-top:15px;
   
}

.icon {
  display: flex;
width: 32.271px;
height: 32.271px;
justify-content: center;
align-items: center;
border-radius: 11.294px;
background: #E0E7FF;
  margin-left: 25px;
  
//  border: 2px solid red;
}
  .bottom-contentAA-h4{
  color: #101828;
// font-family: Poppins;
font-size: 16.135px;
font-style: normal;
font-weight: 600;
line-height: 22.589px; /* 140% */
letter-spacing: -0.362px;
margin-left: 25px;
// border: 2px solid red;
  }

.bottom-contentAA-p{
width: 220px;
color: #6A7282;
// font-family: Poppins;
font-size: 11.294px;
font-style: normal;
font-weight: 400;
line-height: 18.353px; /* 162.5% */
letter-spacing: -0.121px;
margin-left: 25px;
margin-top: 10px;

}


/* WIDE CARD */
.wideAA {
  width: 647.55px;
  height: 227.703px;
  background: #fff;
  border-top: 2px solid white;
 border-right: 1px solid orange ;
 border-bottom: 2px solid orange;
 border-left: 2px solid white;

  display: flex;              /* 🔥 Row layout */
  justify-content: space-between;
  align-items: center;
  padding: 15px;              /* inner spacing */
  box-sizing: border-box;
  margin-left:-50px;
   grid-row: 1 / 2;   /* Top right */
  grid-column:
 
}

.wide-leftAA {
  width: 316.514px;
  height: 100%;
  // border: 2px solid green;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.messege{
display: flex;
width: 32.271px;
height: 32.271px;
justify-content: center;
align-items: center;
border-radius: 11.294px;
background: #FFF3E2;
margin-top: 20px;
}

.wide-leftAA-h4{
color: #101828;
// font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 22.589px; /* 141.18% */
letter-spacing: -0.362px;
margin-top: 15px;
margin-left:10px;
}

.wide-leftAA-p{
width: 225px;
color: #6A7282;
// font-family: Poppins;
font-size: 11.294px;
font-style: normal;
font-weight: 400;
line-height: 18.353px; /* 162.5% */
letter-spacing: -0.121px;
margin-top: 10px;
margin-left:10px;
}


.wide-leftAA-p1{
color: #6A7282;
// font-family: Poppins;
font-size: 11.294px;
font-style: normal;
font-weight: 400;
line-height: 18.353px; /* 162.5% */
letter-spacing: -0.121px;
margin-left:10px;
}


.demo-btnAA {
   display: inline-flex;
  align-self: flex-start; 
padding: 7.261px 23.204px 6.111px 24.614px;
justify-content: center;
align-items: center;
border-radius: 8.067px;
background: #1B2A4E;
box-shadow: 0 8.067px 12.101px -2.42px rgba(97, 95, 255, 0.20), 0 3.227px 4.84px -3.227px rgba(97, 95, 255, 0.20);
color: #FFF;
text-align: center;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
margin-top: 15px;
margin-left:10px;
}

.bottom-rowAA {
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  display: flex;
  gap: 35px;
  justify-content:start-left;
  margin-left: -105px;
  // border: 2px solid yellow;
}

/* CHAT UI */
.chat-uiAA {
  width: 319.974px;
  height: 100%;
  background: rgba(249, 250, 251, 0.50);
 

  display: flex;
  flex-direction: column;
  justify-content: center;
//  border: 2px solid green;
}

.chat-headerAA {
  display: flex;
height: 45.984px;
padding-left: 9.681px;
align-items: center;
gap: 9.681px;
flex-shrink: 0;
align-self: stretch;
border-bottom: 0.807px solid #F9FAFB;
margin-bottom: -25px;
  
}

.chat-avtar{
  width: 40.921px;
height: 50.868px;
aspect-ratio: 29/36;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  width: 27.137px;
height: 27.137px;
stroke-width: 0.24px;
stroke: var(--white, #FFF);
backdrop-filter: blur(2.3985815048217773px);
margin-left:10px;

border-radius: 50%;
margin-top: -70px;

}

.chat-header-h5{
color: #101828;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
margin-top: -47px;
}


.onlineAA {
  color: var(--positive-action, var(--green-accent, #43A047));
// font-family: Poppins;
font-size: 8.067px;
font-style: normal;
font-weight: 400;
line-height: 12.101px; /* 150% */
letter-spacing: 0.095px;
// padding-top: -25px;


}

.dotAA {
 width: 4.841px;
height: 4.841px;
border-radius: 13534897px;
background: var(--green-accent, #43A047);
}

.chat-messageAA {
// width: 135.533px;
flex-shrink: 0;
color: #312C85;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 400;
line-height: 12.908px; /* 133.333% */
border-radius: 0 12.908px 12.908px 12.908px;
background: #EEF2FF;
box-shadow: 0 0.807px 2.42px 0 rgba(0, 0, 0, 0.10), 0 0.807px 1.613px -0.807px rgba(0, 0, 0, 0.10);
display: flex;
width: 174.257px;
height: 38.724px;
padding: 7.261px 25.816px 5.463px 12.907px;
align-items: center;
margin-left:20px;
margin-top: 10px;
    // border: 2px solid red;
}

.chat-skeletonAA {
  display: flex;
height: 19.362px;
align-items: flex-start;
gap: 6.454px;
}

.chat-skeletonAA div {
 width: 51.632px;
height: 19.362px;
border-radius: 13534897px;
opacity: 0.9927;
background: #F3F4F6;
margin-left:20px;
margin-top: 30px;

}

/* INSIGHTS */
.insightsAA {
  width: 314.094px;
height: 208.14px;
background: #F9FAFB;
  // border: 2px solid red;
 margin-left:  50px;
grid-row: 2 / 3;   /* Bottom right left */
  grid-column: 2 / 3;
  //  border: solid green 2px;
}

.barsAA {
  display: flex;
width: 312.481px;
height: 77.447px;
padding: 0 12.914px 0 12.908px;
align-items: flex-end;
gap: 6.454px;
margin-left: -40px;
  // border: 2px solid yellow;
}

.barAA {
  width: 38px;
  border-radius: 10px;
  background: linear-gradient(to top,#2563eb,#93c5fd);
//  border: 2px solid yellow;

}

.b1AA {
 height: 25.817px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);
}
.b2AA { 
height: 45.18px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);
}
.b3AA { 
height: 32.271px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);
 }
.b4AA { 
height: 58.086px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);

}
.b5AA {
 height: 38.725px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);
 }
.b6AA { 
height: 51.632px;
flex: 1 0 0;
border-radius: 6.454px 6.454px 0 0;
opacity: 0.8;
background: linear-gradient(0deg, #2B7FFF 0%, #A8CBFE 100%);
}

.insight-contentAA {
display: flex;
width: 312.481px;
padding: 12.908px 19.362px 0 19.362px;
flex-direction: column;
align-items: flex-start;
gap: 6.454px;
    // border: 2px solid yellow;
}
.arrow-icon {
display: flex;
width: 25.817px;
height: 25.817px;
padding: 6.454px 6.454px 0 6.454px;
flex-direction: column;
align-items: flex-start;
border-radius: 8.067px;
background: #DBEAFE;
margin-left: -35px;
margin-top:10px
}

.arrow-icon img {
 height: 15.908px;
flex-shrink: 0;
align-self: stretch;
colour:red;
}

.real{
color: #101828;
// font-family: Poppins;
font-size: 14.521px;
font-style: normal;
font-weight: 600;
line-height: 22.589px; /* 155.556% */
letter-spacing: -0.355px;
margin-top: -30px;
}

.track{
color: #6A7282;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 400;
line-height: 12.908px; /* 133.333% */
margin-top:10px;
margin-left:-30px;
//  border: 2px solid yellow;

}

/* SCHEDULE */
.scheduleAA {

width: 314.094px;
padding: 0.807px;
position: relative;   
align-items: flex-start;
border-radius: 25.816px;
border: 0.807px solid #F3F4F6;
background: #FFF;
box-shadow: 0 6.454px 24.202px 0 rgba(0, 0, 0, 0.04);
  //  border: 2px solid yellow;
   display: flex;              /* 🔥 ADD THIS */
  flex-direction: column;     /* 🔥 ADD THIS */
  justify-content: space-between; 
//  border: solid red 2px;
}

.schedule{
width: 312.481px;
height: 129.079px;
background: rgba(255, 247, 237, 0.50);

}

.schedule-topAA {
display: flex;
width: 273.757px;
height: 69.38px;
// padding: 13.715px 13.715px 0.807px 13.715px;
flex-direction: column;
align-items: flex-start;
gap: 9.681px;
border-radius: 11.294px;
border: 0.807px solid #F3F4F6;
background: #FFF;
box-shadow: 0 0.807px 2.42px 0 rgba(0, 0, 0, 0.10), 0 0.807px 1.613px -0.807px rgba(0, 0, 0, 0.10);
margin-top: 50px;
margin-left: 18px;
}

.todayAA {
  color: #99A1AF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 700;
line-height: 12.908px; /* 133.333% */
   margin-left:10px;
   margin-bottom: 100px;
  //  border: 2px solid pink;
}

.progress-barAA {
 width: 164.216px;
height: 6.454px;
flex-shrink: 0;
border-radius: 13534897px;
background: #FFEDD4;
margin-top: 15px;
margin-left: 10px;
  // border: 2px solid green;
}

.progress-lightAA {
 width: 123.163px;
height: 6.454px;
flex-shrink: 0;
border-radius: 13534897px;
background: #F3F4F6;
margin-top: 10px;
margin-left: 11px;
 
}



.jd-avatarAA {
  display: flex;
width: 25.817px;
height: 25.817px;
justify-content: center;
align-items: center;
border-radius: 13534897px;
border: 1.613px solid #FFF;
background: #FF6900;
box-shadow: 0 3.227px 4.84px -0.807px rgba(0, 0, 0, 0.10), 0 1.613px 3.227px -1.613px rgba(0, 0, 0, 0.10);
color: #FFF;
font-family: Inter;
font-size: 9.681px;
font-style: normal;
font-weight: 400;
line-height: 12.908px; /* 133.333% */

margin-left: 230px;
margin-top: -70px;
}

.schedule-contentAA {
 display: flex;
width: 312.481px;
padding: 12.908px 19.362px 0 19.362px;
flex-direction: column;
align-items: flex-start;
gap: 6.454px;

}

.bell-div{
display: flex;
height: 25.816px;
align-items: center;
gap: 9.681px;
align-self: stretch;
padding-bottom: 10px;
    // border: 2px solid red;
}

.smart {
color: #101828;
// font-family: Poppins;
font-size: 14.521px;
font-style: normal;
font-weight: 600;
line-height: 22.589px; /* 155.556% */
letter-spacing: -0.355px;
margin-left:-10px;
margin-top: -5px;
}

.auto{
color: #6A7282;
// font-family: Poppins;
font-size: 9.681px;
font-style: normal;
font-weight: 400;
line-height: 12.908px; /* 133.333% */
margin-bottom:10px;
margin-left:3px;
}

/* Responsive */
@media (max-width: 992px) {
  .features-gridAA {
    grid-template-columns: 1fr;
  }

  .tallAA {
    grid-row: auto;
  }

  .wideAA {
    flex-direction: column;
    gap: 20px;
  }

  .features-headerAA {
    flex-direction: column;
    gap: 20px;
  }
}

`}</style>
    </>
  );
}

export default Features;