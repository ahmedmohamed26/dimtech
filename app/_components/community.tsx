"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
const Community = () => {
  return (
    <div className=" ">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('assets/images/bg-community.png')" }}
      >
        <div className="container py-24">
          <h3 className="text-size40">Our Community</h3>
          <p className="text-size20 opacity-[.75] text-white max-w-[65%] mt-4">
            We bridge the gap between academia and industry through strategic
            collaborations with top universities and research institutions. Our
            commitment to innovation drives partnerships that advance financial
            technology and quantitative research.
          </p>

          <div className="flex items-center justify-between mt-20">
            <img
              loading="lazy"
              src="assets/images/logo1.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo2.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo3.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo4.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo5.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo6.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
            <img
              loading="lazy"
              src="assets/images/logo7.webp"
              alt=""
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        {/* <div className="flex w-full flex-col mt-5">
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
          </div> */}
      </div>
    </div>
  );
};

export default Community;
