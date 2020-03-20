import React,{ Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import './Header_step_3.css';

class HeaderStep_3 extends Component{
    render(){
        return(
            <header className = "header">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-2">
                            <div className="back">
                                <span className="d-flex align-items-center">
                                    <FontAwesomeIcon className = "icon i-lf" icon = {faCaretLeft} />
                                    <Link className="link" to="/games">Back</Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-10"> {/*-md-4 col-sm-6 col-7*/}
                            <div className="steps w-50">
                            <div className="numbers">
                                <div className="num-line active-line">
                                    <div className="number completed">1</div>
                                </div>
                                <div className="num-line active-line">
                                    <div className="number completed">2</div>
                                </div>
                                <div className="num-line">
                                    <div className="number active">3</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderStep_3;
