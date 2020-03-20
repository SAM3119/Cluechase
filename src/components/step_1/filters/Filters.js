import React ,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft , faChevronRight , faCalendar } from '@fortawesome/free-solid-svg-icons';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import './Filters.css';
// import Calendar from './calendar/calendar';

const Filters = () => {
    
        const [startDate, setStartDate] = useState(new Date());
       

    return (
        <div className = "filters">
            <div className = "container">
                <div className = "all-filters">
                    <div className = "row"> 
                        <div className = "col-md-4 col-12 ">
                            <div className ="lo align-items-center justify-content-center">
                                <form  className="form-control">
                                    <select  className = "form-group"
                                        id="Booking_location" >
                                            <option value="15">Atlanta</option>
                                            <option value="7" data-select2-id="2">Austin</option>
                                            <option value="8">Chicago</option>
                                            <option value="13">Cincinnati</option>
                                            <option value="1">Dallas</option>
                                            <option value="10">Houston</option>
                                            <option value="14">Jacksonville</option>
                                            <option value="19">King Of Prussia</option>
                                            <option value="20">Las Vegas</option>
                                            <option value="9">Minneapolis</option>
                                            <option value="3">Nashville: Berry Hill</option>
                                            <option value="5">Nashville: Downtown</option>
                                            <option value="11">Nashville: Opry Mills</option>
                                            <option value="16">New Orleans</option>
                                            <option value="18">New York City</option>
                                            <option value="6">Orlando</option>
                                            <option value="2">Pigeon Forge</option>
                                            <option value="17">San Francisco</option>
                                    </select>     
                                </form>
                            </div>
                        </div>
                    
                        <div className="col-md-4 col-12 ">
                            <div className="date-slide d-flex align-items-center justify-content-center">
                                <span 
                                    data-bind="click:prevDate " 
                                    className="date-navigation">
                                        <FontAwesomeIcon className = "icon i-lf" icon = {faChevronLeft} />
                                </span>
                                <div 
                                    className="date-slide-txt w-100 text-center" 
                                    data-bind="text:formatDate($root.dataModel.booking_date())">Monday, March 9
                                </div>
                                <span 
                                    data-bind="click: nextDate" 
                                    className="date-navigation">
                                            <FontAwesomeIcon className = "icon" icon = {faChevronRight} />
                                </span>
                            </div>
                        </div>
                   
                        <div className="col-md-4 col-12">
                        <div className="date-picker">
                            <div className="form-group">
                                   <DatePicker 
                                        className = "calender-datepicker"
                                        placeholderText = "SELECT A DATE"
                                        minDate={new Date()} 
                                        onChange={date => setStartDate(date)}
                                        onKeyDown = {e=>e.preventDefault()} />
                                   <i> <FontAwesomeIcon className="calendar ml-2" icon = {faCalendar}/></i>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              
            </div>
        </div>
    )

}
export default Filters;
