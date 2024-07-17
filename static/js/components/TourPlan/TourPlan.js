import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Places from "../Places/Places";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import TourSummary from "../TourSummary/TourSummary";
import "./TourPlan.css";

const TourPlan = () => {
    const [visitDays, setVisitDays] = useState(0);
    const btnOnClickHandler = id => {
        console.log(id);
        setVisitDays(visitDays + parseInt(id));
    };
    console.log(visitDays);
    return (
        <div>
            <div className="tour-plan">
                <div>
                    <Navbar></Navbar>
                    <h3>Select Place and Make Tour Plan</h3>
                    <Places btnOnClickHandler={btnOnClickHandler}></Places>
                    <QuestionAnswer></QuestionAnswer>
                </div>
                <div className="tour-summary">
                    <TourSummary visitDays={visitDays}></TourSummary>
                </div>
            </div>
        </div>
    );
};

export default TourPlan;
