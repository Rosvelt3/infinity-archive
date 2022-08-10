import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Never 7",
    image: "https://dggwv1n7k10fk.cloudfront.net/assets/never7.jpg",
    description: <>The first entry in the infinity series.</>,
    archiveRoute: "never-7",
  },
  {
    title: "Ever 17",
    image: "https://dggwv1n7k10fk.cloudfront.net/assets/ever17.jpg",
    description: <>The second entry in the infinity series.</>,
    archiveRoute: "ever-17",
  },
  {
    title: "Remember 11",
    image: "https://dggwv1n7k10fk.cloudfront.net/assets/remember11.jpg",
    description: <>The third entry in the infinity series.</>,
    archiveRoute: "remember-11",
  },
  {
    title: "12 Riven",
    image: "https://dggwv1n7k10fk.cloudfront.net/assets/12riven.webp",
    description: <>The fourth and last entry in the infinity series.</>,
    archiveRoute: "12-riven",
  },
];

function Feature({ image, title, description, archiveRoute }) {
  return (
    <div className={clsx(styles.feature, "col col--3 margin-bottom--xl")}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} />
      </div>
      <div className={"text--center padding-horiz--md"}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link
        className="button button--primary"
        to={`/docs/category/${archiveRoute}`}
      >
        Open the {title} archive
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
