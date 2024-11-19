import { spot } from "../assets";
import styles from "../style";
import Button from "./Button";
const Hero = () => (
  <section id="home" className={`${styles.paddingY} flex sm:flex-row flex-col`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
    >
      <h1 className="flex-1 font-poppins font-bold md:text-[64px] text-[52px] md:leading-[90px] leading-[75px]">
        Convert <br className="sm:block hidden" /> Anything{" "}
        <br className="sm:block hidden" />{" "}
        <span className="text-black-gradient">Instantly</span>
      </h1>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
        <span className="font-semibold">
          Effortless Currency Conversion, Anytime, Anywhere. <br />
        </span>
        Convertly simplifies currency exchange for travelers, businesses, and
        everyone in between. With real-time rates, intuitive design, and instant
        calculations, managing your money across borders has never been easier.
      </p>
      <a href="#converter">
        <Button text="Let's Convert" action={() => {}} />
      </a>
    </div>
    <div className={`${styles.flexCenter} md:my-0 my-10 flex-1`}>
      <img
        src={spot}
        alt=""
        className="xl:w-[30%] md:w-[60%] w-[50%] h-[60%] z-[5]"
      />
    </div>
  </section>
);

export default Hero;
