import React from "react";
import Ipad from "../assets/SVG/Ipad.svg";

const IpadDisplay = () => {

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-30 py-[1rem] relative h-full">
            {/* Left Text */}
            <div className="absolute xl:top-[12%] lg:top-[12%] md:top-[12%] xl:left-[12%] lg:left-[10%] md:left-[10%] w-[17%]">
                <p className="xl:text-3xl lg:text-xl text-right">
                    eMbrace is dedicated to supporting neurodivergent individuals of all ages with accessible, evidence-based resources and a supportive community.
                </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center xl:w-[70%] lg:w-[70%] md:w-[60%] mx-auto h-full">
                <img src={Ipad} alt="Ipad Image" className="w-full h-full object-contain" />
            </div>

            {/* Right Text */}
            <div className="absolute xl:top-[12%] lg:top-[12%] md:top-[12%] xl:right-[10%] lg:right-[9%] md:right-[9%] w-[17%]">
                <p className="xl:text-3xl lg:text-xl text-left">
                    eMbrace is dedicated to supporting neurodivergent individuals of all ages with accessible, evidence-based resources and a supportive community.
                </p>
            </div>
        </div>

    );

}

export default IpadDisplay;