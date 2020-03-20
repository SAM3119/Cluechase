import React from 'react';
import './payment.css';
import { Link } from 'react-router-dom';
const Payment = ()=> {
    return(
        <div className = "container">
            <div className = "row">
                <div className="col-md-12">
                    <div className="game-info text-center mb-3">
                        <h3>
                            <span className="text-uppercase">cart</span> 
                        </h3>
                        <p>Sunday, March &nbsp;
                            <span >1</span>
                        </p>
                        <hr/>
                    </div>
                </div>
                <div className = "col-md-7">
                    <div className="game-info h-100 mt-4 " >
                        <div className="top text-capitalize w-100">
                            <div className = "section-1 d-flex">
                                <span className = "name col-md-10 h5">The Heist ($34.99 x 1)</span>
                                <span className = "price col-md-2 h5">$34.99</span>
                            </div>
                            <div className = "section-2 ">
                                <span className = "col-md-12">12:30pm at the scape game atlante </span> 
                            </div>
                            <div className = "section-3 mb-5 mt-2">
                                <Link className=" change float-left col-md-2" 
                                    to = "/games" 
                                    role="button"> 
                                        <span className = "">Change</span>
                                </Link>
                                <Link className=" delete float-right col-md-2" 
                                    to = "/" 
                                    role="button"> 
                                        <span className = "">Delete</span>
                                </Link>
                            </div>
                        </div>
                            <hr/>
                        <div className="middle w-100">
                            <div className = "section-1 d-flex">
                            <form className="form-group w-100">
                                <input 
                                    className = "form-control  col-md-10 float-left"
                                    type="text"  
                                    name="promo-code" 
                                    placeholder = "Have a promo code ?"/>
                                <button className = "form-control col-md-2 float-right" type="submit">Apply</button>
                            </form>
                            </div>
                            <div className = "section-2 d-flex pt-1">
                                <span className = "col-md-10 h5">Order Subtotal</span>
                                <span className = "col-md-2 h5">$34.99</span>
                            </div>
                            <div className = "section-3 d-flex pt-3">
                                <span className = "col-md-10 h5">Sales Tax</span>
                                <span className = "col-md-2 h5">$2.10</span>
                            </div>
                        </div>
                            <hr/>
                        <div className="bottom">
                        <div className = "section-1 d-flex">
                                <span className = "col-md-10 h3">Total</span>
                                <span className = "col-md-2 h3">$37.09</span>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className = "col-md-5">
                        <div className="payment-section c6 h-100">
                            <div className="top text-center">
                                <span className = "h4">Payment Info:</span>   
                            </div>
                            <div className="bottom text-center">
                                <form className="form-group">
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="promo-code" 
                                        placeholder="Card Holder Name "/>
                                    <input 
                                        className="form-control " 
                                        type="text" 
                                        name="promo-code" 
                                        placeholder="Card Number "/>
                                     <input 
                                        className="form-control w-50" 
                                        type="text" 
                                        name="promo-code" 
                                        placeholder="Security Code"/>
                                    <div className = "exp-date w-50">
                                    <label htmlFor="exp">Exp:</label>
                                    <select className = "month">
                                        <option value = "Jan">Jan</option>
                                        <option value = "Feb">Feb</option>
                                        <option value = "Mar">Mar</option>
                                        <option value = "Apr">Apr</option>
                                        <option value = "May">May</option>
                                        <option value = "Jun">Jun</option>
                                        <option value = "Jul">Jul</option>
                                        <option value = "Aug">Aug</option>
                                        <option value = "Sep">Sep</option>
                                        <option value = "Oct">Oct</option>
                                        <option value = "Nov">Nov</option>
                                        <option value = "Des">Des</option>
                                    </select>  
                                    <select className = "year">
                                        <option value = "2020">2020</option>
                                        <option value = "2021">2021</option>
                                        <option value = "2022">2022</option>
                                        <option value = "2023">2023</option>
                                        <option value = "2024">2024</option>
                                        <option value = "2025">2025</option>
                                        <option value = "2026">2026</option>
                                        <option value = "2027">2027</option>
                                        <option value = "2028">2028</option>
                                        <option value = "2029">2029</option>
                                        <option value = "2030">2030</option>
                                        <option value = "2031">2031</option>
                                    </select>
                                    </div>
                                    <input 
                                        className="form-control w-50" 
                                        type="text" 
                                        name="promo-code" 
                                        placeholder="Zip Code"/>

                                    <Link 
                                        to ="/"
                                        className="form-control border-0" 
                                        type="submit">PAY $37.09</Link>
                                </form>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Payment;