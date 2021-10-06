import React, { Component } from 'react';


export default class UserHome extends Component {
    render() {
        return (
          <div>  
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>

              <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop:"-20px"}}>

                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="/images/busImg12.jpg" alt="New York" style={{width:"100%", height:"550px"}}/>
                    <div className="carousel-caption">
                    </div>      
                </div>

                <div className="item">
                    <img src="/images/scan.jpg" alt="Chicago" style={{width:"100%", height:"550px"}}/>
                    <div className="carousel-caption">
                    </div>      
                </div>

                <div className="item">
                    <img src="/images/bus12.jpg" alt="Los Angeles" style={{width:"100%", height:"550px"}}/>
                    <div className="carousel-caption">
                    </div>      
                </div>
                </div>


                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
                </div>

                <div style={{backgroundColor:"white"}}>
                <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
                <h3>Traveling Express</h3>
                <p><em>We have created a user friendly traveling website for our customers convenience!</em></p>
                <p>Here are some valubale benefits...</p>
                <br/>
                <div className="row">
                <div className="col-sm-4">
                    <p className="text-center"><strong>Bus Tracking</strong></p><br/>
                    <a href="#demo" data-toggle="collapse">
                        <img src="/images/trackBus.jpg" className="img-circle person" alt="Random Name" width="200" height="200"/>
                    </a>
                    <div id="demo" className="collapse">
                        <p>Track your bus.</p>
                        <p>See where it is now.</p>
                        <p>No need to loiter.</p>
                    </div><br/><br/><br/>
                </div>
                <div className="col-sm-4">
                    <p className="text-center"><strong>Special Services</strong></p><br/>
                    <a href="#demo2" data-toggle="collapse">
                        <img src="/images/tripBus.jpg" className="img-circle person" alt="Random Name" width="200" height="200"/>
                    </a>
                    <div id="demo2" className="collapse">
                        <p>For any occasions.</p>
                        <p>Select bus fastly.</p>
                        <p>Save your time.</p>
                    </div><br/><br/><br/>
                </div>
                <div className="col-sm-4">
                    <p className="text-center"><strong>Season Card</strong></p><br/>
                    <a href="#demo3" data-toggle="collapse">
                        <img src="/images/cardBus.jpg" className="img-circle person" alt="Random Name" width="200" height="200"/>
                    </a>
                    <div id="demo3" className="collapse">
                        <p>Just recharge the Card.</p>
                        <p>More siutable for daily users.</p>
                        <p>No need to carry money.</p>
                    </div><br/><br/><br/>
                </div>
                </div>
                </div></div>

                <div style={{backgroundColor:"#080523", marginTop:"0px"}}>

                <div id="contact" className="container" style={{backgroundColor:"#080523", color:"white"}}>
                <h3 className="text-center">Contact</h3>
                <p className="text-center"><em>We love your comments!</em></p>

                <div className="row">
                <div className="col-md-4" style={{marginLeft:"0px"}}>
                    <p>Drop a note.</p>
                    <p><span className="glyphicon glyphicon-map-marker"></span>Colombo, Sri Lanka</p>
                    <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
                    <p><span className="glyphicon glyphicon-envelope"></span>Email: travelingexpress@mail.com</p>
                </div>
                <div className="col-md-8">
                <div className="row">
                    <div className="col-sm-6 form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                    </div>
                    <div className="col-sm-6 form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                    </div>
                </div>
                <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                <br/>
                <div className="row">
                    <div className="col-md-12 form-group">
                    <button className="btn pull-right" type="submit" style={{backgroundColor:"white"}}>Send</button>
                    </div>
                </div>
                </div>
                </div>
                <br/>
                <h3 className="text-center">Developers</h3>  
                <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Anodya</a></li>
                <li><a data-toggle="tab" href="#menu1">Ramona</a></li>
                <li><a data-toggle="tab" href="#menu2">Disni</a></li>
                <li><a data-toggle="tab" href="#menu3">Azmie</a></li>
                <li><a data-toggle="tab" href="#menu4">Nisura</a></li>
                <li><a data-toggle="tab" href="#menu5">Pasindu</a></li>
                <li><a data-toggle="tab" href="#menu6">Savinu</a></li>
                <li><a data-toggle="tab" href="#menu7">Dineth</a></li>
                </ul>

                <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <h2>Anodya Fernando, Leader</h2>
                    <p>anodya@gmail.com</p>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <h2>Ramona Vanhoff</h2>
                    <p>ramona@gmail.com</p>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <h2>Disni Jayawickrama</h2>
                    <p>disni@gmail.com</p>
                </div>
                <div id="menu3" className="tab-pane fade">
                    <h2>Azmie Izmie</h2>
                    <p>azmie@gmail.com</p>
                </div>
                <div id="menu4" className="tab-pane fade">
                    <h2>Nisura Weearsekara</h2>
                    <p>nisura@gmail.com</p>
                </div>
                <div id="menu5" className="tab-pane fade">
                    <h2>Pasindu Udara</h2>
                    <p>pasindu@gmail.com</p>
                </div>
                <div id="menu6" className="tab-pane fade">
                    <h2>Savinu Dissanayake</h2>
                    <p>savinu@gmail.com</p>
                </div>
                <div id="menu7" className="tab-pane fade">
                    <h2>Dineth Wijayasena</h2>
                    <p>dineth@gmail.com</p>
                </div>

                </div><br/><br/>
                </div></div>


                





        
</div>


            
        )
    }
}
