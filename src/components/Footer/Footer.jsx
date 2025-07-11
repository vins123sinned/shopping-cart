import styles from "./Footer.module.css";
import { Attribution } from "../Attribution/Attribution.jsx";

const Footer = () => {
  return (
    <>
      <div className={styles.footerGradient}></div>
      <section className={styles.footer}>
        <h3 className={styles.logo}>VInSION</h3>
        <div className={styles.footerContent}>
          <div className={styles.statement}>
            <h4>An exploration of form, fabric, and future.</h4>
            <p>
              Every garment is an expression of restraint, precision, and
              elevated craftsmanship. Designed to endure beyond seasons, VInSION
              is where vision becomes form.
            </p>
          </div>
          <aside className={styles.attributions}>
            <h4 className={styles.attributionsHeading}>Image Attributions</h4>
            <ul>
              <Attribution
                photo={"Paris Hero"}
                name={"Elina Sazonova"}
                link={
                  "https://www.pexels.com/photo/eiffel-tower-behind-buildings-1850619/"
                }
              />
              <Attribution
                photo={"Shoes Category"}
                name={"Andre Moura"}
                link={
                  "https://www.pexels.com/photo/pair-of-brown-leather-shoes-2562992/"
                }
              />
              <Attribution
                photo={"Men's Clothing Category"}
                name={"Siarhei Nester"}
                link={
                  "https://www.pexels.com/photo/man-in-yellow-vest-standing-with-hands-in-pockets-18695788/"
                }
              />
              <Attribution
                photo={"Women's Clothing Category"}
                name={"Dion Martins"}
                link={
                  "https://www.pexels.com/photo/elegant-woman-posing-in-bohemian-dress-by-blue-door-32919378/"
                }
              />
              <Attribution
                photo={"Jewelry Category"}
                name={"Melikaa Tg"}
                link={
                  "https://www.pexels.com/photo/a-woman-wearing-silver-necklace-5475580/"
                }
              />
            </ul>
          </aside>
        </div>
        <p className={styles.tagline}>
          © 2025 VInSION. All rights reserved. (maybe)
        </p>
      </section>
    </>
  );
};

export { Footer };
