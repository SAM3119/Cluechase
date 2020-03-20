import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import './style.css';

const Games = () => {
    return (
        <div className = "all-games">
            <div className = "container">
                <div className = "row">
                    <div className="col-md-6">
                        <div className = "game-tile">
                            <div className="imgbox img-container position-relative">
                                <img 
                                    className="featured-image" 
                                    src="https://booking.theescapegame.com/slir/h500/https://booking.theescapegame.com/media/experiences/5a6b61f6cf8b9c41298b4617.jpg" />

                                <div className="name-holder">
                                    <h1 className = "text-uppercase">The Heist</h1>
                                    <p>
                                        <span >Chicago - $35.99 per person </span>
                                    </p>
                                </div>
                            </div>
                            <div className="tile-body">
                                <div className="basic-info text-uppercase">
                                    <p className = "text-center">8/10 DIFFICULTY | 2-8 PLAYERS</p>
                                    <a className="" href="#">
                                        <span className="visible-sm">CLICK TO</span> LEARN MORE ABOUT THIS GAME</a>
                                </div>
                                <div className="timming-tile"> 
                                    <div className="times-wrapper">
                                        <div className="row no-gutters">
                                            {/* -------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>04:30pm</h3>
                                                    <p><span>2</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>6:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>07:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>09:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>10:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>11:55pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>12:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                        </div>
                                    </div>
                                    <div className="more-time-btn">
                                        <button 
                                            type="button" 
                                            className="btn text-uppercase show-all-times">show all times
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = "game-tile">
                            <div className="imgbox img-container position-relative">
                                <img 
                                    className="featured-image" 
                                    src="https://booking.theescapegame.com/slir/h500/https://booking.theescapegame.com/media/experiences/5a6b61f6cf8b9c41298b4617.jpg" />
                                <div className="name-holder">
                                    <h1 className = "text-uppercase">The Heist</h1>
                                    <p>
                                        <span >Chicago - $35.99 per person </span>
                                    </p>
                                </div>
                            </div>
                            <div className="tile-body">
                                <div className="basic-info text-uppercase">
                                    <p className = "text-center">8/10 DIFFICULTY | 2-8 PLAYERS</p>
                                    <a className="" href="#">
                                        <span className="visible-sm">CLICK TO</span> LEARN MORE ABOUT THIS GAME</a>
                                </div>
                                <div className="timming-tile"> 
                                    <div className="times-wrapper height-fix remove-height">
                                        <div className="row no-gutters">
                                            {/* -------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>04:30pm</h3>
                                                    <p><span>2</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>6:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>07:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>09:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>10:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>11:55pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>12:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                        </div>
                                    </div>
                                    <div className="more-time-btn">
                                        <button 
                                            type="button" 
                                            className="btn text-uppercase show-all-times">show all times
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = "game-tile">
                            <div className="imgbox img-container position-relative">
                                <img 
                                    className="featured-image" 
                                    src="https://booking.theescapegame.com/slir/h500/https://booking.theescapegame.com/media/experiences/5a6b61f6cf8b9c41298b4617.jpg" />

                                <div className="name-holder">
                                    <h1 className = "text-uppercase">The Heist</h1>
                                    <p>
                                        <span >Chicago - $35.99 per person </span>
                                    </p>
                                </div>
                            </div>
                            <div className="tile-body">
                                <div className="basic-info text-uppercase">
                                    <p className = "text-center">8/10 DIFFICULTY | 2-8 PLAYERS</p>
                                    <a className="" href="#">
                                        <span className="visible-sm">CLICK TO</span> LEARN MORE ABOUT THIS GAME</a>
                                </div>
                                <div className="timming-tile"> 
                                    <div className="times-wrapper height-fix remove-height">
                                        <div className="row no-gutters">
                                            {/* -------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>04:30pm</h3>
                                                    <p><span>2</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>6:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>07:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>09:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>10:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>11:55pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>12:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                        </div>
                                    </div>
                                    <div className="more-time-btn">
                                        <button 
                                            type="button" 
                                            className="btn text-uppercase show-all-times">show all times
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = "game-tile">
                            <div className="imgbox img-container position-relative">
                                <img 
                                    className="featured-image" 
                                    src="https://booking.theescapegame.com/slir/h500/https://booking.theescapegame.com/media/experiences/5a6b61f6cf8b9c41298b4617.jpg" />

                                <div className="name-holder">
                                    <h1 className = "text-uppercase">The Heist</h1>
                                    <p>
                                        <span >Chicago - $35.99 per person </span>
                                    </p>
                                </div>
                            </div>
                            <div className="tile-body">
                                <div className="basic-info text-uppercase">
                                    <p className = "text-center">8/10 DIFFICULTY | 2-8 PLAYERS</p>
                                    <a className="" href="#">
                                        <span className="visible-sm">CLICK TO</span> LEARN MORE ABOUT THIS GAME</a>
                                </div>
                                <div className="timming-tile"> 
                                    <div className="times-wrapper height-fix remove-height">
                                        <div className="row no-gutters">
                                            {/* -------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>04:30pm</h3>
                                                    <p><span>2</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>6:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>07:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>09:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>10:30pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>11:55pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                            <Link to = "/games" className="col-lg-3 col-md-4 col-sm-3 col-4">                                  
                                                <div className="tile-time text-center" > 
                                                    <h3>12:00pm</h3>
                                                    <p><span>8</span>&nbsp;available</p>
                                                </div>
                                            </Link>
                                            {/* ------------- */}
                                        </div>
                                    </div>
                                    <div className="more-time-btn">
                                        <button 
                                            type="button" 
                                            className="btn text-uppercase show-all-times">show all times
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Games;