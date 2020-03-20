import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar , faPlus , faMinus ,faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './selected_game.css';
import { Link } from 'react-router-dom';
const SelectedGame = ()=> {
    return(
        <div className = "container">
            <div className = "row">
                <div className="col-md-12">
                    <div className="game-info text-center">
                        <h3>
                            <span>The Heist --- $ 35.99 per person</span> 
                        </h3>
                        <p className="text-uppercase">at the escape game &nbsp;
                            <span >Chicago</span>
                        </p>
                    </div>
                </div>
                <div className = "col-md-7">
                    <div className="final-booking-time h-100" >
                        <div className="top text-center text-capitalize">
                            <h3 className="datepicker-icon">
                                <span >Tuesday, Mar 17</span> 
                                <i> <FontAwesomeIcon className="zmdi zmdi-calendar " icon = {faCalendar}/></i>
                            </h3>
                            <div className="input-group input-append datepicker-inner date" id="bookingDate">
                                <input 
                                    type="text" 
                                    id="Booking_booking_date" 
                                    name="Booking[booking_date]" 
                                    className="form-control bg-white" />
                                <span className="input-group-addon add-on">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center">
                                        <span  className="badge badge-pill badge-danger"></span>
                                        <h3>3:00pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center active">
                                        <span className="badge badge-pill badge-danger"></span>
                                        <h3>4:30pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center">
                                        <span className="badge badge-pill badge-danger"></span>
                                        <h3>7:30pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center">
                                        <span className="badge badge-pill badge-danger"></span>
                                        <h3>9:00pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center">
                                        <span className="badge badge-pill badge-danger"></span>
                                        <h3>10:30pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-4">
                                    <div className="tile-time text-center">
                                        <span className="badge badge-pill badge-danger"></span>
                                        <h3>11:55pm</h3>
                                        <p><span>8</span>&nbsp;available</p>
                                    </div>
                                </div>
                                {/* <p className="no-times">Sorry! No games are available for the selected date.</p> */}
                            </div>
                                <p className="text-danger noti-text mt-5" >
                                    <img src="https://booking.theescapegame.com/public/front/images/Asset1.png"/>&nbsp;
                                        <strong>   
                                            <span>Only 48 The Heist tickets remaining</span>
                                        </strong> for 
                                        <span>Tuesday, Mar 17</span>.
                                </p>
                            </div>
                        </div>
                    </div> 
                <div className = "col-md-5">
                        <div className="person-count c6 h-100">
                            <div className="top text-center">
                                <h3>
                                    <span>How many spots would</span> 
                                    <span>you like to purchase?</span>
                                </h3>
                            </div>
                            <div className="bottom text-center">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button 
                                            type="button" 
                                            className="btn btn-default btn-number" >
                                                <i> <FontAwesomeIcon className="zmdi zmdi-calendar " icon = {faMinus}/></i>
                                        </button>
                                    </span>
                                    <input type="text" 
                                        className="form-control input-number" 
                                        readOnly="" 
                                        min="1" 
                                        max="10" />
                                    <span className="input-group-btn">
                                        <button 
                                            type="button" 
                                            className="btn btn-default btn-number plus zmdi zmdi-plus">
                                                <i> <FontAwesomeIcon className="zmdi zmdi-calendar " icon = {faPlus}/></i>
                                        </button>
                                    </span>
                                </div>
                                <p>For groups larger than 
                                    <span>8</span>,
                                     please  contact us at <br />
                                     <span>312-515-8972</span> or 
                                     <span  
                                        className="text-lowercase">chicago@theescapegame.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="col-md-12 my-4">
                    <hr />
                    <h2 className="info-h text-center">Contact Information</h2>
                </div>
            </div>
            <div className="site-forms w-100 mt-4">
                <form>  
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="Billing_billing_firstname" 
                                    placeholder="First Name" 
                                    title="First Name cannot be blank." 
                                    required/>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="Billing_billing_lastname" 
                                    placeholder="Last Name" 
                                    title="Last Name cannot be blank." 
                                    required />
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="billing_email" 
                                    placeholder="Email Address" 
                                   title="Email Address cannot be blank." 
                                   required />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="billing_phone" 
                                    placeholder="Phone Number" 
                                    maxLength="10" 
                                    title="Phone Number cannot be blank." 
                                    required />
                            </div>
                        </div>
                    </div>  
                    <div className="custom-control form-group custom-checkbox">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            name="email_subscribe" 
                            id="email_subscribe" 
                            value="true" 
                            required />      
                        <label 
                            className="custom-control-label"              
                            htmlFor="email_subscribe" >
                                <span>
                                    Sign me up to receive email updates from The Escape Game, including new games and locations.
                                </span>
                        </label>
                    </div>  
                </form>        
            </div>
            <div className="row mt-5"> 
                <Link 
                    className="btn previous custom-rounded-btn col-md-2"  
                    role="button"
                    to = "/">
                        <FontAwesomeIcon className = "icon i-lf" icon = {faCaretLeft} />
                        <span className = "ml-2">Back</span>

                </Link>
               
                <div className="text-center col-md-8 mt-2">
                    <b>Powered By</b> 
                    <img src="https://booking.theescapegame.com/media//xola-fotter-logo.jpg" height="24px" />
                </div>
                <Link 
                    className="btn continue custom-rounded-btn btn-green float-right col-md-2" 
                    to = "/payment" 
                    role="button"> 
                        <span className = "mr-2">Continue</span>
                        <FontAwesomeIcon className = "icon i-lf" icon = {faCaretRight} />
                </Link>
            </div>
        </div>
    )
}
export default SelectedGame;
