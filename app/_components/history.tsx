import React from "react";

const History = () => {
  const historyList = [
    {
      year: "2024",
      title: "DeepFi Technology",
      description:
        "We are developing an updated version of Dimtech Technology, which initially focused on electronic and automated trading strategies. It has now evolved into a full-fledged fintech platform, offering a broader range of financial technology solutions. In cooperation with Averyx, we are scaling our technology by developing advanced AI algorithms capable of handling a wide range of tasks. These tasks include portfolio management decisions, equity research analysis, financial reporting, firm valuation, discounted cash flow analysis, and more. This cutting-edge technology aims to access deeper and more complex data than any single financial institution can handle and to leverage AI to perform tasks faster and with higher accuracy tasks than financial analysts or portfolio managers typically achieve.",
    },
    {
      year: "2023",
      title: "We Open Share Capital for Growth",
      description:
        "We opened our share capital to the Institutional Group - Telcel to support us in the development of our IT infrastructure. This strategic partnership enables us to invest in more advanced cloud infrastructure and expand our computational capacity with the latest GPUs. This enhancement is essential for supporting our Research & Development efforts, particularly in meeting the growing demands of AI algorithm",
    },
    {
      year: "2020 - 2022",
      title: "Dimtech Electronic Trading Platform",
      description:
        "We developed the Dimtech Electronic Trading Platform, a technology that enables us to quickly integrate and automate trading strategies on the market. Initially, the platform was designed to serve internal strategies, with a primary focus on optimizing order execution and minimizing slippage risk. By refining our systems, we ensured precise and efficient trade execution, which is critical in high-frequency and algorithmic trading environments.",
    },
    {
      year: "2019",
      title: "Expand Our Footprint in Asia",
      description:
        "Our branch office in Tianjin, China was opened to better serve our clients in the Chinese market and provide specialized consulting services on quantitative trading strategies for the Chinese derivatives market. Additionally, we developed a local R&D team in collaboration with high-standard university laboratories, including the School of Economics and Management of Tsinghua University, with whom we actively cooperate on academic research initiatives.",
    },
    {
      year: "2018",
      title: "Algorithmic Trading Services",
      description:
        "Dimtech is expanding its service scope by integrating algorithmic trading services tailored for Commodity Trading Advisors (CTAs). This strategic move aims to leverage advanced quantitative techniques and cutting-edge technology to deliver superior trading strategies and optimize performance for our clients.The Research & Development team were enlarged by employing PhD candidates to conduct their thesis programs within the firm, bringing fresh perspectives and innovative ideas to our projects, but also strong cooperation with top universities.",
    },
    {
      year: "2016",
      title: "Dimtech Journey Started",
      description:
        'Dimtech was established in 2016 and is headquartered in Paris by Daniel Melhem. Initially providing consulting services focused on hedging strategies, the company worked on building a solid foundation to become a leading and independent firm in Research & Development. This was achieved by acquiring essential labels such as the French "Young Innovative Company" and "Research Tax Credit" designations.',
    },
  ];

  return (
    <div className="container">
      <h3 className="text-size40 relative inline-block  after:content-[''] after:absolute after:left-0  after:bottom-[-10px] after:w-24 after:h-[3px] after:bg-white">
        History
      </h3>

      <div className="container bg-gray-200 mx-auto w-full h-full py-16">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {historyList.map((history, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "right-timeline"
                  : "flex-row-reverse left-timeline"
              }`}
            >
              <div
                className={`order-1 w-5/12 text-size24 font-bold flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                {history.year}
              </div>

              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto font-semibold text-lg text-white">
                  <div className="w-6 h-6 bg-[#002d9c] border-2 border-white rounded-full"></div>
                </div>
              </div>

              <div
                className="custom-card order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 
        border border-opacity-20 border-[#001141]
       "
              >
                <h3 className="mb-3 font-bold text-xl text-gray-800">
                  {history.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900">
                  {history.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
