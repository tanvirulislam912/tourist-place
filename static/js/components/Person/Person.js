import "./Person.css";
import React from "react";

const Person = () => {
    return (
        <div className="personal-info">
            <div
                style={{
                    display: "flex",
                    margin: "0 10px",
                    justifyContent: "center",
                }}
            >
                <img src="person.webp" alt="" />
                <div className="basic-info">
                    <h4>Tanvir Islam</h4>
                    <p>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className="person-tour-profile">
                <div>
                    <h3>22</h3>
                    <small>
                        Years
                        <br />
                        Age
                    </small>
                </div>
                <div>
                    <h3>45</h3>
                    <small>
                        District
                        <br />
                        Visited in BD
                    </small>
                </div>
                <div>
                    <h3>17</h3>
                    <small>
                        Countries
                        <br />
                        Visited Globally
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Person;
