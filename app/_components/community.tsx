"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
const Community = () => {
  return (
    <div className="container py-16">
      <h3 className="text-size40 relative inline-block  after:content-[''] after:absolute after:left-0  after:bottom-[-10px] after:w-24 after:h-[3px] after:bg-white">
        Our Community
      </h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-16">
        <div className=""></div>
        <div className="">
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
              classNames={{
                cursor: "w-full bg-white text-white",
                base: "text-white",
                tabList: "flex justify-between w-full",
                tab: "h-[50px]",
                tabContent: "text-white lg:text-size18 text-size14",
                panel: "w-full",
              }}
            >
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
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
