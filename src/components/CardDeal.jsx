import styles, {layout} from "../style.js";
import Button from "./Button.jsx";
import {card} from "../assets/index.js";

const CardDeal = () => (
    <section className={`${layout.section} mx-20`}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
                eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button styles="m-10" />
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%] h-[100%]" />
        </div>

    </section>
);

export default CardDeal;