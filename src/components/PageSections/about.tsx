"use client";

import { motion, useScroll } from "motion/react";
import React from "react";
import ScrollLinked from "../TEST";

type Props = {};

const About = (props: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="flex justify-center items-center w-full h-[600px]">
        <div className="flex flex-col justify-evenly items-center h-full w-full">
          <div className="border rounded-2xl p-16 w-full h-[600px] space-y-10 overflow-y-scroll snap-y snap-mandatory shadow-xl shadow-[#f8c41976]">
            <div className="noScroll flex flex-col justify-center text-5xl font-extrabold w-full h-[550px] snap-center text-left">
              <div>
                <div className="">
                  The Foundation of{" "}
                  <span className="italic font-black">Awkwardness</span>
                </div>
              </div>
              <div className="text-2xl mt-4 font-normal w-full">
                Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
                suspendisse neque. Auctor et dignissim elementum sed aliquam
                porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
                diam eget quis risus mattis turpis mauris. Volutpat egestas enim
                vulputate cursus scelerisque. Nunc mauris congue sagittis
                maecenas massa mauris curabitur pharetra vulputate. Elementum id
                egestas justo at montes. Mattis hac elit id at porta mi aliquet
                enim. Lectus neque tempor semper rhoncus viverra vulputate. Est
                velit vitae in imperdiet lacus turpis nunc non adipiscing.
                Pretium venenatis viverra id imperdiet nibh massa fringilla.
              </div>
            </div>
            <div className="noScroll flex flex-col justify-center text-5xl font-extrabold w-full h-[550px] snap-center text-left">
              <div>
                <div>Core Values</div>
              </div>
              <div className="text-2xl mt-4 font-normal w-full">
                Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
                suspendisse neque. Auctor et dignissim elementum sed aliquam
                porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
                diam eget quis risus mattis turpis mauris. Volutpat egestas enim
                vulputate cursus scelerisque. Nunc mauris congue sagittis
                maecenas massa mauris curabitur pharetra vulputate. Elementum id
                egestas justo at montes. Mattis hac elit id at porta mi aliquet
                enim. Lectus neque tempor semper rhoncus viverra vulputate. Est
                velit vitae in imperdiet lacus turpis nunc non adipiscing.
                Pretium venenatis viverra id imperdiet nibh massa fringilla.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
