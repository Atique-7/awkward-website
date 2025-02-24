import React from "react";
import ScrollTriggered from "../TEST";

const Team = () => {
  return (
    <div className="flex justify-center items-center w-[70%] mt-10">
      <div className="flex flex-col justify-evenly items-center h-full w-full">
        <div className="flex flex-col justify-center text-5xl font-extrabold w-full text-left">
          <div>
            <div>The Team</div>
          </div>
          <div className="text-2xl mt-4 font-normal w-full">
            Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
            suspendisse neque. Auctor et dignissim elementum sed aliquam
            porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
            diam eget quis risus mattis turpis mauris. Volutpat egestas enim
            vulputate cursus scelerisque. Nunc mauris congue sagittis maecenas
            massa mauris curabitur pharetra vulputate. Elementum id egestas
            justo at montes. Mattis hac elit id at pota mi aliquet enim. Lectus
            neque tempor semper rhoncus viverra vulputate. Est velit vitae in
            imperdiet lacus turpis nunc non adipiscing. Pretium venenatis
            viverra id imperdiet nibh massa fringilla.
          </div>
        </div>
        <div className="elementScroll w-full h-[450px] overflow-y-scroll snap-y snap-mandatory mt-8 pr-5">
          <ScrollTriggered />
        </div>
      </div>
    </div>
  );
};

export default Team;
