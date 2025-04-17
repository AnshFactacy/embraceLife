import React from "react";
import whyEmbrace1 from "../assets/SVG/whyEmbrace1.svg";
import whyEmbrace2 from "../assets/SVG/whyEmbrace2.svg";
import whyEmbrace3 from "../assets/SVG/whyEmbrace3.svg";
import Ipad from "../assets/SVG/Ipad.svg";
import Video from "../assets/SVG/VideoPlayer.svg";

const WhyEmbrace = () => {

    const Heading = {
        title: "Why eMbrace",
        subtitle: "Global expertise, gold-standard assessments, and internationally aligned care—delivered to you online or offline, with warmth and precision.",
    }

    const cards = {
        card1: {
            heading: "Standardized & Evidence-Based Care",
            text: "NICE Protocols, Pearson Accredited, I-CAN Approved",
        },
        card2: {
            heading: "Highly Qualified Therapists",
            text: "RCI-certified, MPhil & PhD professionals providing expert care",
        },
        card3: {
            heading: "Lifespan Care Model",
            text: "Comprehensive, end-to-end support under one roof for all age groups",
        }
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-30 py-[1rem]">
            <div className="w-[5rem] h-[5rem] bg-[#C499F6] rounded-full xl:translate-y-[14rem] lg:translate-y-[11rem] md:translate-y-[11rem] translate-y-[7rem] translate-x-[-3.5rem] md:translate-x-0"></div>
            <div className="flex flex-col items-center justify-center py-12 xl:py-24">
                <h1 className="text-center text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">{Heading.title}</h1>
                <p className="text-center items-center text-xl md:text-xl lg:text-xl xl:text-3xl mt-7 md:w-2/3 w-full italic">{Heading.subtitle}</p>

                {/* {3 cards} */}
                <div className="flex flex-col md:flex-row gap-10 mt-20">
                    <div className="bg-white border border-[#ADADAD] rounded-4xl p-6 flex flex-col items-center xl:w-[50%] h-auto">
                        <img src={whyEmbrace1} alt="Why Embrace 1" className="w-full mb-4" />
                        <div className="text-start">
                            <h2 className="lg:text-xl xl:text-2xl font-semibold mb-2">{cards.card1.heading}</h2>
                            <p className="lg:text-xl xl:text-2xl text-gray-600">
                                {cards.card1.text}
                            </p>
                        </div>

                    </div>

                    <div className="bg-white border border-[#ADADAD] rounded-4xl p-6 flex flex-col items-center xl:w-[50%] h-auto">
                        <img src={whyEmbrace2} alt="Why Embrace 2" className="w-full mb-4" />
                        <div className="text-start">
                            <h2 className="lg:text-xl xl:text-2xl font-semibold mb-2">{cards.card2.heading}</h2>
                            <p className="lg:text-xl xl:text-2xl text-gray-600">
                                {cards.card2.text}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-[#ADADAD] rounded-4xl p-6 flex flex-col items-center xl:w-[50%] h-auto">
                        <img src={whyEmbrace3} alt="Why Embrace 3" className="w-full mb-4" />
                        <div className="text-start">
                            <h2 className="lg:text-xl xl:text-2xl font-semibold mb-2">{cards.card3.heading}</h2>
                            <p className="lg:text-xl xl:text-2xl text-gray-600">
                                {cards.card3.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[5rem] h-[5rem] bg-[#7AE6B9] rounded-full absolute xl:right-[5rem] lg:right-[3rem] md:right-[1rem] right-0 xl:-translate-y-10 translate-y-[-8rem] md:translate-y-0 z-[-1]"></div>
            <div className="justify-center items-center hidden md:flex relative">
                <img src={Ipad} alt="ipad" className="z-[-2]" />
                <div className="xl:w-20 xl:h-20 w-16 h-16 bg-[#EB1176] rounded-full absolute top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
                    <img src={Video} alt="video icon" className="xl:w-10 xl:h-10 w-8 h-8 object-contain" />
                </div>
            </div>

        </div>
    );
}

export default WhyEmbrace;