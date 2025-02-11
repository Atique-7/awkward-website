import React from "react";
import Image from "next/image";
import placeHolder1 from "../../../public/placeholder1.png";
import { Button } from "../ui/button";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-[600px]">
      <div className="flex justify-evenly items-center h-full w-full">
        <div className="text-5xl font-extrabold w-[60%]">
          <div>
            <div>The Process of creation</div>
            <div>
              is <span className="italic font-black">Awkward</span>
            </div>
          </div>
          <div className="text-2xl mt-4 font-normal w-[60%]">
            Innovation begins outside the comfort zone. Ready to write the next
            chapter in your brand story, awkwardly?
          </div>
          <div className="flex justify-start space-x-10 items-center w-full mt-10">
            <Button className="text-2xl font-bold p-5" variant={"awkward"}>
              Get Started
            </Button>
            <Button
              className="text-2xl font-normal p-5 bg-white"
              variant={"awkward"}
            >
              Not Just Yet!
            </Button>
          </div>
        </div>
        <div>
          <Image src={placeHolder1} width={450} height={400} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
