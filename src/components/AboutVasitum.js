import AboutVasitumImage from "../assets/image.svg";
import vectorImage from "../assets/Vector 79.png";

function AboutVasitum() {
  return (
    <>
      <section className="boxxx">
        <div className="about">

          {/* LEFT SIDE */}
          <div className="rectangle">
            <div className="vector">
              <img src={vectorImage} alt="vector" />
            </div>

            <div className="box1">
              <div className="a">About Vasitum</div>

              <div className="rec">
                Recruitment Reimagined
              </div>

              <div className="bu">
                Built by Recruiters, Powered by AI
              </div>

              <div className="cor">
                Automate your hiring from source to offer. Eliminate manual screening
                and hire top talent 30% faster with our intelligent AI co-pilot
              </div>

              <div className="button">
                <button className="see">See AI in Action</button>
                <button className="know">Know More →</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="image-blue">
            <img src={AboutVasitumImage} alt="About Vasitum" />
          </div>

        </div>
      </section>

      <style jsx>{`
      
.boxxx {
  // width: 100%;
  height: 713px;

  margin: 50px auto;   /* 🔥 top & bottom spacing */
  position: relative;
  margin-left:60px;
  // border: 2px solid red;
}

.about {
  // width: 100%;
  height: 500px;
  margin-top: 50px;
  margin-left: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LEFT CARD */
.rectangle {
  position: relative;
  width: 644px;
  height: 654px;
  border-radius: 60px;
  padding: 60px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  z-index: 1;
}

.vector {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 0;
}

.vector img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.box1 {
  position: relative;
  z-index: 2;
  width: 486px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.a {
  color: #5C77A6;
  font-size: 18px;
  font-weight: 400;
}

.rec {
  font-size: 42px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: -1.677px;
}

.bu {
  color: #F4A940;
  font-size: 42px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: -1.677px;
  width: 400px;
}

.cor {
  width: 300px;
  color: #5C77A6;
  font-size: 16px;
}

.button {
  display: flex;
  align-items: center;
  gap: 14px;
}

.see {
  width: 138px;
  padding: 13px 10px;
  border-radius: 10px;
  background: #F4A940;
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
  border: none;
}

.know {
  width: 138px;
  padding: 13px 12px;
  border-radius: 10px;
  border: 1px solid #FFF;
  background: #FFF;
  color: #335590;
  font-size: 14px;
  font-weight: 500;
}

/* RIGHT IMAGE */
.image-blue {
  width: 636px;
  height: 550px;
}

.image-blue img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  // margin-right:-800px;
}

/* Responsive */
@media (max-width: 992px) {
  .about {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  .box1 {
    align-items: center;
  }

  .cor {
    width: 100%;
  }

  .image-blue img {
    width: 100%;
    max-width: 400px;
  }
}

      `}</style>
    </>
  );
}

export default AboutVasitum;