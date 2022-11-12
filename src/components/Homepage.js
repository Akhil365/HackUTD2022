import React from "react";
import Navbar from "./components/Navbar";
import placeholder from "./assets/placeholder.png";

const CourseCard = () => {
    return (
        <div className="bg-gray-500 rounded cursor-pointer shadow-md hover:bg-gray-400">
            <div className="p-8 text-center text-white">
                <img className="mx-auto" src={placeholder} width="100" height="100"/>
                <span className="mt-2 block font-bold">Course Name</span>
            </div>
        </div>
    );
};

const Explore = () => {
    return (
        <div className="bg-surface min-h-screen">
            <Navbar />
            <div className="bg-surface h-full pb-8">
                <div className="pt-10">
                    <h2 className="text-white text-lg font-bold pl-8">Path 1</h2>
                    <div className="mx-8 mb-8">
                        <div className="grid grid-cols-5 gap-4 p-8">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-white text-lg font-bold pl-8">Path 2</h2>
                    <div className="mx-8 mb-8">
                        <div className="grid grid-cols-5 gap-4 p-8">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-white text-lg font-bold pl-8">Path 3</h2>
                    <div className="mx-8 mb-8">
                        <div className="grid grid-cols-5 gap-4 p-8">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;