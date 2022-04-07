import React from 'react'

export default function Fullpage() {
    return (
        <div id="container">
            <header>
                <div className="headbar">
                    <span id="logo">Memory Game</span>
                    <span className="ltext">Are you retentive enough?</span>
                </div>
            </header>
            
            <aside>
                <section className="controlR">
                    <div className="header"><span className="Htext">game settings</span></div>
    
                    <div className="restart">
                        Reset Game  <br/><br/><i className="fa fa-repeat"> </i>
                    </div>
                </section>
    
                <section className="controlL">
                    <div className="header">
                    <span className="Htext">scores</span>
                    </div>
                    <div>
                        <span>Stars </span>
                        <ul className="stars">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
    
                        <span className="moves">0</span> Move(s)
                        <div className="timer">
                            0 mins 0 secs
                        </div>
                      </div>
    
                </section>
            </aside>
    
            <div className="forPhones">
                
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
    
                    <span className="moves">0</span> Move(s)
                     &nbsp;
    
                    <div className="timer">
                        0 mins 0 secs
                    </div>
    
                    <div className="restart">
                        &nbsp;
                        <i className="fa fa-repeat"> </i>
                    </div>
            </div>
                    
            <div className="cad">
                
                <ul className="allCards" >
                    
                </ul>
            </div>
    
            <div className="final removed">
                <span className="close">X</span>
                
                    <h2>Congratulations 🎉</h2>
                    <div className="congrats">
                         Congratulations you're a winner 🎉🎉
                    </div>
    
                    <div className="words">
                            <p>You made &nbsp;
                                <span id="finalMove"> </span> 
                                moves 
                            </p>
                            <p>in &nbsp;
                                <span id="totalTime"> </span>
                            </p>
                            <p className='starz'>Star Rating: &nbsp; 
                                <span id="starRating"></span>
                            </p>
                    </div>

                    <button className="restart" id="now">
                        Play again 😄
                    </button>
                
                
    
            </div>
    
        </div>
    )
}

