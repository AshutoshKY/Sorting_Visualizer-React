import React, { 
    // useState, 
    useEffect } from "react";
import GenArr, { deleteArr, defaultCard } from "./main";
import "../styles/header.css";
// import React from "react";
import "../styles/GeneralStyle.css";
import SelectionSort from "../algos/SelectionSort";
import BubbleSort from "../algos/BubbleSort";
import InsertionSort from "../algos/InsertionSort";
import ShowMergeSort from "../algos/MgSort";
import QuickSort from "../algos/QuickSort";
// import { displayTimer } from "./main";

function Navbar() {

    function componentDidMount() {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if (reloadCount <= 1) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        }
    }

    useEffect(() => {
        GenArr();
        defaultCard();
        componentDidMount();

    });

    const NewArr = () => {
        deleteArr();
        GenArr(document.getElementById("arr_size").value);
    };

    const NewSize = () => {
        deleteArr();
        GenArr(document.getElementById("arr_size").value);
    };

    // const [time, setTime] = useState(0);
    // const [running, setRunning] = useState(false);
    // useEffect(() => {
    //     let interval;
    //     if (running) {
    //         interval = setInterval(() => {
    //             setTime((prevTime) => prevTime + 10);
    //         }, 10);
    //     } else if (!running) {
    //         clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // }, [running]);

    let url = "https://github.com/AshutoshKY";

    return (
        <>
            <div className="title">
                <h1>Sorting Visualizer</h1>
                <p style={{ fontSize: "1vw", marginLeft: "1vw", fontStyle: "italic", marginTop: "0.4vw" }}>BY</p>
                <a href={url} style={{ fontSize: "1.5vw", marginLeft: "1vw", fontStyle: "italic", marginTop: "2px", backgroundColor: "black", border: "none", textDecoration: 'none' }}>Ashutosh Kumar</a>
            </div>

            <div className="maindiv_nav">

                <div className="buttBars">

                    <div className="rangesliders">

                        {/* <div className="numbers" style={{ color: "white" }}>
                            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div> */}

                        <div className="sizeslider">
                            <div className="sliderinput slider">
                                <p id="size">SIZE</p>
                                <input type="range" id="arr_size" onChange={NewSize} defaultValue={130} min="20" max="230" step={1} />
                            </div>
                        </div>

                        <div className="newarrbtn">
                            <button type="submit" className="app-butt" onClick={NewArr} id="newarr">Gen New Arr</button>
                        </div>

                        <div className="speedslider ">
                            <div className="slidertext slider">
                                <p id="speed">SPEED</p>
                                <input type="range" id="arr_speed" defaultValue={60} min="2" max="120" step={1} />
                            </div>
                        </div>

                    </div>

                    <div id="yoyoarrays"></div>

                    <div id="card">

                    </div>


                </div>

            </div>
            <div className="app-footer">
                <div>
                    <button className="app-button" id="mer_srt" onClick={ShowMergeSort}>
                        Merge sort
                    </button>
                </div>
                <div>
                    <button className="app-button" id="ins_srt" onClick={InsertionSort}>
                        Insertion sort
                    </button>
                </div>
                <div>
                    <button className="app-button" id="qui_srt" onClick={QuickSort}>
                        Quick sort
                    </button>
                </div>
                <div>
                    <button className="app-button" id="sel_srt" onClick={SelectionSort}>
                        Selection sort
                    </button>
                </div>
                <div>
                    <button className="app-button" id="bub_srt" onClick={BubbleSort}>
                        Bubble sort
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;