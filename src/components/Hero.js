import heroimage from "../assets/heroimage.png";
import Subtract from "../assets/Subtract.svg";
// import Vector from "../assets/Vector.svg";


function Hero() {
  return (
    <>
      <section className="hero">

        <div className="hero-inner">
          <div className="boxHero">

          <div className="hero-tag">
            <span className="dot"></span>
            <span>AI-Powered Hiring</span>
          </div>

          <div className="hero-heading">
            Automation hiring & <span>cut time-to-hire</span> in half
          </div>

          <p className="hero-sub">
            One smart platform that helps recruiters hire faster and
            job seekers find the right job—without the hassle.
          </p>

          <button className="hero-btn">Book Demo</button>
          
</div>
          <div className="ai-card">
            <div className="hii">Hi,</div>
            <div className="hii">I’m VASI</div>
            <p className="an">
              An AI recruiter built by Vasitum. I help recruiters
              screen candidates faster and more fairly,
            </p>
            <p className="and">and help candidates find roles that truly fit their skills</p>

            <div className="avatar">
              <img src={heroimage} alt="VASI" />
            </div>
          </div>

        </div>

        <div className="bottom-shape"></div>

      </section>

     <style jsx>{`
  .hero {
    position: relative;
    width: 100%;
    min-height: 780px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-140px;
    padding-top: 0px;
    padding-bottom: 160px;
    overflow: hidden;
  }
    .boxHero{
  display: flex;
width: 584px;
flex-direction: column;
align-items: center;
}

.Vector{
width: 1250.5px;
height: 336.5px;
fill: linear-gradient(179deg, #FFF 80.6%, #2F4477 200.21%);
stroke-width: 0.5px;
stroke: #FFF;
}

  .hero-inner {
    max-width: 820px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    // margin-bottom: 32px;
    font-size: 14px;
    color: #6b7280;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #3bb273;
    border-radius: 50%;
  }

  
  .hero-heading {
   color: var(--primary-accent, var(--primary-accent, #212D39));
text-align: center;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 68px; /* 141.667% */
    // margin-bottom: 24px;
    padding-top:1px;
    
  }

  .hero-heading span {
    color: var(--primary-accent, var(--Orange-primary, #F4A940));
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 68px;
  }

  .hero-sub {
    color: var(--grey-accent, var(--grey-accent, #727B86));
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 360px;

  }

  .hero-btn {
    padding: 16px 42px;
    border-radius: 16px;
    background: #f4a940;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s ease;
    margin-top: 35px;

  }

  .hero-btn:hover {
    background: #e59932;
    transform: translateY(-3px);
  }

  /* Floating AI Card */
  .ai-card {
    position: absolute;
    right: -370px;
    top: 270px;
    width: 171px;
height: 143px;
padding: 10px 15px 16px 15px;
    // padding: 28px;
    // background: white;
    border-radius: 28px;
    // box-shadow: 0 30px 70px rgba(0, 0, 0, 0.08);
    text-align: left;
    background-image: url(${Subtract});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
// border: 2px solid red;
  }

  .hii{
 width: 86.55px;
 color: var(--primary-accent, var(--primary-accent, #212D39));
// font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}


.an{
align-self: stretch;
color: var(--grey-accent, var(--grey-accent, #727B86));
font-family: Poppins;
font-size: 8px;
font-style: italic;
font-weight: 500;
line-height: 12px; /* 150% */
}

.and{
width: 88px;
color: var(--grey-accent, var(--grey-accent, #727B86));
// font-family: Poppins;
font-size: 8px;
font-style: italic;
font-weight: 500;
line-height: 12px; /* 150% */
}


  .ai-card p {
    color: var(--grey-accent, var(--grey-accent, #727B86));
font-family: Poppins;
font-size: 8px;
font-style: italic;
font-weight: 500;
line-height: 12px; /* 150% */
  }

  .avatar {
  position: absolute;
  bottom: -42px;
  left: 107px;
  // border: 2px solid red;

   }

  .avatar img {
    width: 100px;
    height: 100px;
    // bottom: 50px;
    // left: 50px;
    object-fit: cover;
  }

  /* Bottom White Curve */
  .bottom-shape {
    position: absolute;
    bottom: -90px;
    width: 130%;
    height: 220px;
    background: white;
    border-top-left-radius: 140px;
    border-top-right-radius: 140px;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    .ai-card {
      position: relative;
      right: auto;
      top: 70px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .hero-heading {
      font-size: 40px;
    }
  }
`}</style>
    </>
  );
}

export default Hero;