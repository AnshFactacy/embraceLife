import React from "react";
import Child from "../assets/SVG/Child.svg";
import Adult from "../assets/SVG/Adult.svg";

const Hero = () => {
    return (
        <>
            <style>
                {`
@keyframes slideGradient {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
}

.animate-gradient-slide {
    background-size: 200% 200%;
    animation: slideGradient 1.5s linear infinite;
}
`}
            </style>


            <div className="min-h-screen px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-b from-[#FFF8E0] via-[#FFFFFF99] to-[#ECECFFCC]">
                <div className="flex flex-col items-center justify-center py-12 xl:py-24">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
                        Everything your mind needs to{" "}
                        <span className="bg-gradient-to-l  from-[#A674DF] via-[#EC936A] to-[#A674DF] text-transparent bg-clip-text animate-gradient-slide">
                            thrive
                        </span>
                        !
                    </h1>
                    <p className="text-center items-center text-xl md:text-xl lg:text-xl xl:text-3xl mt-7">
                        Empowering you with accessible, high-quality, evidence-based care - Because every mind deserves to thrive</p>
                    <div className="flex flex-col md:flex-row gap-12 mt-20">
                        <div className="bg-white shadow-2xl rounded-4xl p-6 lg:w-[20rem] xl:w-[30rem] flex flex-col items-center">
                            <img src={Child} alt="Child" className="xl:w-[18rem] xl:h-[18rem] lg:w-[14rem] lg:h-[14rem] lg:-mt-10 xl:-mt-10" />
                            <h1 className="text-xl lg:text-2xl xl:text-2xl font-bold mb-2">Child & Adolescent</h1>
                            <p className="text-black text-center w-[70%] italic mb-4">
                                Early intervention, assessments, and therapy for children, teens, and families—nurturing growth through expert, developmentally aligned care.
                            </p>
                            <button className="mt-auto bg-[#F2DC68] text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                Child Services
                            </button>
                        </div>

                        <div className="bg-white shadow-2xl rounded-4xl p-6 lg:w-[20rem] xl:w-[30rem] flex flex-col items-center">
                            <img src={Adult} alt="Adult" className="xl:w-[18rem] xl:h-[18rem] lg:w-[14rem] lg:h-[14rem] lg:-mt-10 xl:-mt-10" />
                            <h1 className="text-xl lg:text-2xl xl:text-2xl font-bold mb-2">Adult</h1>
                            <p className="text-black text-center w-[70%] italic mb-4">
                                Confidential, evidence-based therapy and assessments for individuals and couples—designed to support your personal and professional well-being.
                            </p>
                            <button className="mt-auto bg-[#6BCAED] text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                Adult Services
                            </button>
                        </div>
                    </div>




                </div>
            </div>
        </>
    );
};

export default Hero;
