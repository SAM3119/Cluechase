import React,{ Component } from "react";

import './HeaderStep_1.css';
class HeaderStep_1 extends Component{
    render(){
        return(
            <header className = "header">
                <div className="container">
                    <div className="row justify-content-center mb-5 ">
                        <div className="col-8"> {/*-md-4 col-sm-6 col-7*/}
                            <div className="steps-1">
                            <div className="numbers">
                                <div className="num-line">
                                    <div className="number active">1</div>
                                </div>
                                <div className="num-line">
                                    <div className="number waite">2</div>
                                </div>
                                <div className="num-line">
                                    <div className="number waite">3</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                            <div className="group-btn viewtimeline  ">
                                <div className="btn-g">
                                    <a className="btn active" href="#">view by game</a>
                                    <a className="btn" href="#">view by time</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderStep_1;
