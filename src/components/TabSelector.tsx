"use client";

import React from "react";

type Props = {};

const TabSelector = ({ tabs, selectedTab, setSelectedTab }: any) => {
  return (
    <div className="fixed top-24 justify-center items-center min-h-16 w-full border-r-[10px] border-l-[10px] border-b-[10px] border-black bg-[#D9D9D9] z-10">
      <div className="flex justify-between items-center h-16 divide-x-8 divide-black">
        {tabs.map((tab: any, index: number) => (
          <div
            key={index}
            className={`${
              selectedTab === index ? "bg-white flex-1" : "flex-none"
            } flex justify-center items-center text-2xl h-full font-black  min-w-[20%] pointer`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
