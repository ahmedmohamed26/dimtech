"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
const Community = () => {
  return (
    <div className="container py-16">
      <h3 className="text-size40 relative inline-block  after:content-[''] after:absolute after:left-0  after:bottom-[-10px] after:w-24 after:h-[3px] after:bg-white">
        Our Community
      </h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 mt-16">
        <div className="grid grid-cols-2 gap-8">
          <img
            loading="lazy"
            src="assets/images/logo1.webp"
            alt=""
            className="bg-white p-4 rounded-lg shadow-xs  w-full h-32 object-contain"
          />
          <img
            loading="lazy"
            src="assets/images/logo2.webp"
            alt=""
            className="bg-white p-4 rounded-lg shadow-xs  w-full h-32 object-contain"
          />
          <img
            loading="lazy"
            src="assets/images/logo3.webp"
            alt=""
            className="bg-white p-4 rounded-lg shadow-xs  w-full h-32 object-contain"
          />
          <img
            loading="lazy"
            src="assets/images/logo4.webp"
            alt=""
            className="bg-white p-4 rounded-lg shadow-xs  w-full h-32 object-contain"
          />
          <img
            loading="lazy"
            src="assets/images/logo5.webp"
            alt=""
            className="bg-white p-4 rounded-lg shadow-xs  w-full h-32 object-contain"
          />
        </div>
        <div>
          <h3 className="text-size22">Our Community</h3>
          <p className="text-size16 mt-4">
            We bridge the gap between academia and practice by fostering
            fundamental research through academic partnerships and Dimtech. Our
            mission is to deepen the understanding of financial markets, develop
            cutting-edge analytical technologies, and apply these insights to
            the investment industry. Discover how we collaborate with leading
            minds to push the boundaries of academic research and drive
            innovation.
          </p>
          <div className="flex w-full flex-col mt-5">
            <Tabs
              aria-label="Options"
              variant="underlined"
              color="primary"
              size="md"
              classNames={{
                cursor: "w-full bg-primary text-white",
                base: "text-white",
                tabList: "flex justify-between w-full ",
                tab: "h-[50px] ",
                tabContent: "text-white lg:text-size18 text-size14",
                panel: "w-full ",
              }}
            >
              <Tab key="Academic" title="Academic">
                <Card className="default-card text-white">
                  <CardBody>
                    Since 2018, our partnership with Tsinghua University,
                    University of Montpellier, École des Mines d'Alès, and ESLIV
                    has united researchers from diverse fields through PhD
                    students and CIFRE contracts. This collaboration fosters a
                    cross-disciplinary approach to developing advanced
                    algorithms for applications in sectors such as Algo Trading,
                    Market Making, Fintech, and Asset Management Industry.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Government" title="Government">
                <Card className="default-card text-white">
                  <CardBody>
                    Since 2016, Dimtech has been recognized as a "Jeune
                    Entreprise Innovante" (Innovative Company). Additionally,
                    through partnerships with the ANRT, Dimtech collaborates
                    with several research institutions, benefiting from European
                    funding and French state research grants..
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
