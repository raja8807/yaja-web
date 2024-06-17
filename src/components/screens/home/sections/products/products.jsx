import React, { useEffect, useState } from "react";
import styles from "./products.module.scss";
import { Col, Image, Row } from "react-bootstrap";

import CustomContainer from "@/components/ui/custom_container/custom_container";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Product = ({
  currentProduct,
  setCurrentProductIndex,
  maxLength,
  currentProductIndex,
}) => {
  return (
    <div className={styles.left}>
      <ArrowLeft
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={() => {
          if (currentProductIndex === 0) {
            setCurrentProductIndex(maxLength - 1);
          } else {
            setCurrentProductIndex((prev) => prev - 1);
          }
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        key={currentProduct.id}
      >
        <div className={styles.image}>
          <Image
            src={`/assets/flavours/${currentProduct.id}.png`}
            alt={currentProduct.id}
            fluid
          />
          <Image
            src={`/assets/mascots/${currentProduct.mascot}.png`}
            alt={currentProduct.mascot}
            fluid
            className={styles.mascot}
          />
        </div>
      </motion.div>
      <ArrowRight
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={() => {
          if (currentProductIndex === maxLength - 1) {
            setCurrentProductIndex(0);
          } else {
            setCurrentProductIndex((prev) => prev + 1);
          }
        }}
      />
    </div>
  );
};

const ProductsSection = () => {
  const PRODUCTS = [
    {
      id: "MANGO",
      name: "MANGO",
      mascot: "cheetah",
    },
    {
      id: "LYCHEE",
      name: "LYCHEE",
      mascot: "wolf",
    },
    {
      id: "STRAWBERRY",
      name: "STRAWBERRY",
      mascot: "tiger",
    },
  ];

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     if (e.key === "ArrowRight") {
  //       if (currentProductIndex === PRODUCTS.length - 1) {
  //         setCurrentProductIndex(0);
  //       } else {
  //         setCurrentProductIndex((prev) => prev + 1);
  //       }
  //     }
  //   });
  // });

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const currentProduct = PRODUCTS[currentProductIndex];

  return (
    <section className={styles.productsSection} onKey>
      <CustomContainer>
        <SectionHeading heading="Explore Flavours" />
        <Row>
          <Col xs={12} lg={6}>
            <Product
              currentProduct={currentProduct}
              setCurrentProductIndex={setCurrentProductIndex}
              maxLength={PRODUCTS.length}
              currentProductIndex={currentProductIndex}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.right}>
              <div className={styles.desc}>
                <h1>{currentProduct.name}</h1>
                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta error id nisi saepe sequi dignissimos ipsam voluptate.
                  Assumenda nesciunt at quisquam, ipsum ipsa dolore provident?
                  Nihil ullam dolorum praesentium. Aspernatur ullam distinctio
                  velit sint illo optio voluptatibus, amet ipsum nam nostrum
                  commodi cumque voluptates fuga quisquam rem minima voluptate
                  voluptatum? Unde velit voluptatem hic sapiente quae iste. Sit
                  veniam quaerat nesciunt rem molestias officiis expedita
                  molestiae illum sapiente ex, porro voluptatum quam nulla
                  assumenda amet neque necessitatibus commodi vel placeat iure
                  reprehenderit ducimus veritatis eligendi magnam? Placeat,
                  quidem perferendis exercitationem provident, earum ea, numquam
                  ut dolorem voluptas et ad mollitia?
                </p>
              </div>
              <div className={styles.allProducts}>
                <h4>More Exciting Flavours</h4>
                <br />
                <div className={styles.wrap}>
                  {PRODUCTS.map((p, i) => {
                    return (
                      <div
                        key={p.id}
                        className={`${styles.small} ${
                          currentProductIndex == i ? styles.active : ""
                        }`}
                        onClick={() => {
                          setCurrentProductIndex(i);
                        }}
                      >
                        <Image
                          src={`/assets/flavours/${p.id}.png`}
                          alt={currentProduct.id}
                          width={90}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default ProductsSection;
