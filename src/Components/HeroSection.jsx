import { FaArrowRightLong, FaHandBackFist, FaLaptopCode } from "react-icons/fa6";
import Button from "./Button";
import { CiFileOn } from "react-icons/ci";

export default function HeroSection() {
    return (

        <div id="hero" className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">

            <div id="hero-container" className="max-w-4xl  mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center ">

                <div id="version-text" className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group sm:mt-10">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600"></div>
                    <p className="font-display font-medium text-yellow-600">v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes </span></p>

                    <FaArrowRightLong className="text-yellow-600 transition group-hover:translate-x-1 duration-400" />
                </div>

                <div id="hero-features" className="hidden sm:flex gap-8">
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <CiFileOn className="text-sm" />
                        <p>Code Optional</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <FaHandBackFist />
                        <p>Drag & drop builder</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                        <FaLaptopCode />

                        <p>Windows, Mac, Linux</p>
                    </div>
                </div>
                <h1 className="text-5xl font-semibold leading-tight mt-4 sm:text-7xl">Web app to desktop app in minutes</h1>
                <p className="text-xl mt-6 mx-1 sm:text-2xl sm:mx-14 ">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

                <div id="buttons-container" className="mt-12 flex gap-4 flex-col sm:flex-row ">
                    <Button text="Download now" cname='px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90' />
                    <Button text="Reads Docs" cname='px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800' />
                </div>


            </div>


        </div>
    )
}
