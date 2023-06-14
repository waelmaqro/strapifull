import React from "react";
import Markdown from "marked-react";
const LeftRight = ({ blockData }: any) => {
  return (
    <div className="text-lg text-[#292F36] text-[200px] mt-[300px] flex  gap-[75px] items-center">
      <div className="flex flex-col gap-[45px] font-Jost">
        {/* Heading & Body */}
        <div className="flex flex-col gap-[33px]">
          <div className="heading text-[50px] leading-[125%] max-w-[420px] font-DM">
            <Markdown>{blockData.heading}</Markdown>
          </div>
          <div className="body max-w-[472px] leading-[150%]">
            {blockData.body}
          </div>
        </div>

        {/* Call us */}
        <div className="flex gap-[15px] items-center">
          <div className="flex justify-center items-center bg-[#F4F0EC] rounded-full h-[93px] w-[93px]">
            <img
              src={`http://127.0.0.1:1337${blockData.phoneIcon.data.attributes.url}`}
              className="w-[32px]"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-[24px] font-bold">{blockData.phoneNumber}</div>
            <div className="text-[22px]">{blockData.phonePhrase}</div>
          </div>
        </div>

        {/* button */}
        <div
          className={`w-[240.14px] flex bg-[#292F36] py-[26px] px-[31px] text-white rounded-[18px] text-[18px] items-center gap-[10px]`}
        >
          <div>{blockData.button[0].buttonLabel}</div>
          <img
            src={`http://127.0.0.1:1337${blockData.button[0].arrowIcon.data.attributes.url}`}
            className="w-[18.14px] h-[16.18px] "
          />
        </div>
      </div>

      <div>
        {/* Featured Image */}
        <img
          src={`http://127.0.0.1:1337${blockData.featureIMG.data.attributes.url}`}
          alt={blockData.featureIMG.data.attributes.alternativeText}
          className="w-[700px] h-[635px]  rounded-bl-[123px] rounded-tr-[326.5px]"
        />
      </div>
    </div>
  );
};

export default LeftRight;
