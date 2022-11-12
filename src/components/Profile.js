import React from "react";
import Navbar from "./components/Navbar";
import pfp from "./assets/pfp.jpg";
import badge from "./assets/badge.jpg";
import settings from "./assets/settings.jpg";

const ProfileMetrics = () => {
    const courseComplete = 2;
    const courseInProgress = 1;
    return (
        <>
            <p className="text-center">{courseComplete} Courses Complete</p> 
            <p className="text-center">{courseInProgress} Courses In Progress</p>
        </>
    );
};

const Badges = () => {
    return (
        <>
            <h2 className="text-center pb-2 underline">Badges</h2>
            <div className="">
                <div className="flex items-center justify-center">
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                </div>
                <br/>
                <div className="flex items-center justify-center">
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                    <img className="rounded-full" src={badge} width="60" height="30"/>
                </div>
            </div>
        </>
    );
};

const CurrentPath = () => {
    const learningPath = "Education";
    return (
        <div className="pb-5">
            <h2>Current Path: {learningPath}</h2>
        </div>
    );
};

const InProgress = () => {
    const courseName = ["How to use Apply Texas"];
    const link = ["https://youtu.be/xZoZpiWzKtg"];
    const numProgress = courseName.length;
    return (
        <details className="pb-5 ">
            <summary>Courses In Progress ({numProgress})</summary>
            <CourseCard link={link[0]} courseName={courseName[0]}/>
        </details>
    );
};

const Incomplete = () => {
    const courseName = ["How to apply for FAFSA"];
    const link = ["https://youtu.be/9apxxQrx-WY"];
    const numIncomplete = courseName.length;
    return (
        <details className="pb-5">
            <summary>Incomplete Courses ({numIncomplete})</summary>
            <CourseCard link={link[0]} courseName={courseName[0]}/>
        </details>
    );
};

const CompletedCourses = () => {
    const courseName = ["How to apply for FAFSA", "How to build a resume"];
    const link = ["https://youtu.be/9apxxQrx-WY", "https://youtu.be/r_Wf532f5X4"];
    const numCompleted = courseName.length;
    return (
        <details className="left-0">
            <summary>Completed Courses ({numCompleted})</summary>
            <CourseCard link={link[0]} courseName={courseName[0]}/>
            <CourseCard link={link[1]} courseName={courseName[1]}/>
        </details>
    );
};

const CourseCard = (props) => {
    return (   
        <div className="pb-1">
            <a href={props.link} className="block p-6 max-w-sm bg-gray-500 rounded-lg shadow-md hover:bg-gray-400 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{props.courseName}</h5>
                    <p className="text-black">Click me to go to course</p>
                </a>
        </div>
    );
};

const Settings = () => {
    return (
        <>
            <h5>
                <img className="align-text-bottom left-0 invert inline pr-1 cursor-pointer" src={settings} width="23" height="30"/>Settings
            </h5>
        </>
    );
};

const AccountSide = () => {
    const name = "Jamie Dimon";
    return (
        <>
            <h2 className="text-center">{name}</h2>
            <img className="mx-auto rounded-full pt-3 pb-3" src={pfp} width="140" height="140"/>
            <p className=""></p>
            <ProfileMetrics/>
            <div className="pt-10">
                <Badges/>
            </div>
        </>
    );
};

const CourseSide = () => {
    return (
        <>
            <CurrentPath/>
            <InProgress/>
            <Incomplete/>
            <CompletedCourses/>
        </>
    );
};

const Profile = () => {
    return (
        <div className="bg-surface text-white h-screen">
            <Navbar/>
            <div className="flex pt-5">
                <div className="w-1/2 pl-5">
                    <AccountSide/>
                </div>
                <div className="w-1/2">
                    <CourseSide/>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 pb-2">
                <Settings/>
            </div>
        </div>
    );
};

export default Profile;