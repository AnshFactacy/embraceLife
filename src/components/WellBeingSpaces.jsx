import React from "react";
import Child from "../assets/SVG/wellBeingChild.svg";

const WellBeingSpaces = () => {
    return (
        <div className="flex items-center flex-col h-fit bg-gradient-to-b from-[#FCEEF3] via-[#F2FBFF] to-[#F8F2FF] px-4 md:px-8 lg:px-10 xl:px-18">
            <h1 className="xl:text-4xl text-3xl font-bold text-center mt-12">🏡 Wellbeing Spaces<br /> Support for every stage of life </h1>
            <p className="xl:text-3xl lg:text-2xl text-lg text-center italic mt-6 lg:w-[70%]">Expert-led therapy, assessments, and workshops in a safe, welcoming space.</p>
            <p className="xl:text-2xl lg:text-xl text-md text-center mt-6 text-[#234394] font-semibold">🌿 Why choose our wellbeing spaces?</p>
            <div className="flex md:flex-row flex-col w-full gap-4 mt-6 justify-center">
                <div className="md:w-[25%] w-full h-auto bg-white rounded-[38px] p-5 space-y-4">
                    <div className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 w-10 h-10 bg-[#F0C2D7] rounded-full "></div>
                    <h1 className="xl:text-xl text-lg font-semibold">Child & Adolescent Support</h1>
                    <p>Safe spaces for developmental therapy, assessments, and social skills training</p>
                </div>
                <div className="md:w-[25%] w-full h-auto bg-white rounded-[38px] p-5 space-y-4">
                    <div className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 w-10 h-10 bg-[#BEF9E0] rounded-full "></div>
                    <h1 className="xl:text-xl text-lg font-semibold">Adult Individual & Couple Therapy</h1>
                    <p>Evidence-based therapy, confidential and professional spaces for assessments for individuals and couples</p>
                </div>
                <div className="md:w-[25%] w-full h-auto bg-white rounded-[38px] p-5 space-y-4">
                    <div className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 w-10 h-10 bg-[#CDB2EC] rounded-full "></div>
                    <h1 className="xl:text-xl text-lg font-semibold">Corporate & Community Engagement</h1>
                    <p>Workshops, leadership coaching, and workplace well-being sessions.</p>
                </div>
                <div className="md:w-[25%] w-full h-auto bg-white rounded-[38px] p-5 space-y-4">
                    <div className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 w-10 h-10 bg-[#FDECC0] rounded-full "></div>
                    <h1 className="xl:text-xl text-lg font-semibold">Inclusive & Sensory-Friendly Spaces</h1>
                    <p>Designed for neurodivergent and neurotypical individuals alike.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-6 justify-center">
                <div className="relative w-full">
                    <img
                        src={Child}
                        alt="Child Image"
                        className="md:w-full md:h-auto object-cover h-[40rem] rounded-4xl brightness-75"
                    />
                    <div className="absolute text-white left-5 md:left-[2rem] top-5 md:top-auto md:bottom-8">
                        <h1 className="md:text-4xl text-3xl font-bold">Come Visit Our Spaces!</h1>
                        <p className="md:text-xl text-lg font-semibold mt-2 md:w-full w-[60%]">
                            See our amazing spaces designed just for you!
                        </p>
                        {/* Mobile button inside image text */}
                        <button className="mt-4 px-6 py-2 rounded-full bg-[#4562AD] text-white text-lg font-semibold block md:hidden">
                            Take a Tour
                        </button>
                    </div>
                    <h1 className="text-[#234394] text-xl font-semibold md:hidden text-start p-5">
                        📍 <span className="font-bold">Find Us</span><br /> <strong>Online</strong> or <strong>Offline</strong> – <br />Visit Our Centers for Personalized Care.
                    </h1>
                </div>
                {/* Desktop button and text outside image */}
                <div className="hidden md:flex flex-row items-center gap-4">
                    <button className="px-8 py-3 rounded-full bg-[#4562AD] text-white text-xl font-semibold">
                        Take a Tour
                    </button>
                    <h1 className="text-[#234394] text-xl font-semibold ">
                        📍 Find Us <strong>Online</strong> or <strong>Offline</strong> – Visit Our Centers for Personalized Care.
                    </h1>
                </div>

            </div>

        </div>

    );
}

export default WellBeingSpaces;