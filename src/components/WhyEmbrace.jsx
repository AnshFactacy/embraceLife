import React from "react";
import whyEmbrace1 from "../assets/SVG/whyEmbrace1.svg";
import whyEmbrace2 from "../assets/SVG/whyEmbrace2.svg";
import whyEmbrace3 from "../assets/SVG/whyEmbrace3.svg";

const WhyEmbrace = () => {

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 py-[12rem]">
            <div className="flex flex-col items-center justify-center py-12 xl:py-24">
                <h1 className="text-center text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">Why eMbrace</h1>
                <p className="text-center items-center text-xl md:text-xl lg:text-xl xl:text-3xl mt-7 w-2/3 italic"> Global expertise, gold-standard assessments, and internationally aligned care—delivered to you online or offline, with warmth and precision.</p>
                <div className="flex flex-col md:flex-row gap-12 mt-20">
                    <div className="bg-white border border-[#ADADAD] rounded-xl p-6 flex flex-col items-center w-full md:w-1/3">
                        <img src={whyEmbrace1} alt="Why Embrace 1" className="xl:w-[24rem] xl:h-[24rem] lg:w-[14rem] lg:h-[14rem] lg:-mt-12 xl:-mt-16" />
                        <h2 className="text-xl font-semibold mb-2">Standardized & Evidence-Based Care</h2>
                        <p className="text-center text-gray-600">
                            NICE Protocols, Pearson Accredited, I-CAN Approved
                        </p>
                    </div>

                    <div className="bg-white border border-[#ADADAD] rounded-xl p-6 flex flex-col items-center w-full md:w-1/3">
                        <img src={whyEmbrace2} alt="Why Embrace 2" className="xl:w-[24rem] xl:h-[24rem] lg:w-[14rem] lg:h-[14rem] lg:-mt-12 xl:-mt-16" />
                        <h2 className="text-xl font-semibold mb-2">Highly Qualified Therapists</h2>
                        <p className="text-center text-gray-600">
                            RCI-certified, MPhil & PhD professionals providing expert care
                        </p>
                    </div>

                    <div className="bg-white border border-[#ADADAD] rounded-xl p-6 flex flex-col items-center w-full md:w-1/3">
                        <img src={whyEmbrace3} alt="Why Embrace 3" className="xl:w-[24rem] xl:h-[24rem] lg:w-[14rem] lg:h-[14rem] lg:-mt-12 xl:-mt-16" />
                        <h2 className="text-xl font-semibold mb-2">Lifespan Care Model</h2>
                        <p className="text-center text-gray-600">
                            Comprehensive, end-to-end support under one roof for all age groups
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyEmbrace;