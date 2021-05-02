import './App.css';
import logo from './img/logo.png'
import bg from './img/background.png'
import bg1 from './img/background2.png'
import bg2 from './img/background3.png'
import desk from './img/desk.png'
import panda from './img/gif/panda.gif'
import poo from './img/gif/poo.gif'
import unicorn from './img/gif/unicorn.gif'
import chicken from './img/gif/chicken.gif'
import team1 from './img/team1.png'
import team2 from './img/team2.png'
import team3 from './img/team3.png'
import bootstrap2 from './img/bootstrap2.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars)
function App() {
  return (
    <div className="App">

      {/* Navigation */}
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a href="/" className="navbar-brand"><img src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
            <FontAwesomeIcon icon={'bars'} />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link">About</a>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link">Services</a>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link">Team</a>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link">Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Image Slider */}

      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1" ></li>
          <li data-target="#slides" data-slide-to="2" ></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} alt="bg" />
            <div className="carousel-caption">
              <h1 className="display-2">Bootsrap</h1>
              <h3>Complete Website Layout</h3>
              <button type="button" className="btn btn-outline-light btn-lg">VIEW DEMO</button>
              <button type="button" className="btn btn-primary btn-lg">Get Started</button>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={bg1} alt="bg1" />
          </div>
          <div className="carousel-item ">
            <img src={bg2} alt="bg2" />
          </div>
        </div>

      </div>

      {/* Jumbotron  */}
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">A web hosting service allows individuals and organizations to make their website accessible via the world wide web.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="/"><button className="btn btn-outline-secondary btn-lg" type="button">Web Hosting</button></a>
          </div>
        </div>
      </div>

      {/*  Welcome Section  */}
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Built with ease.</h1>
          </div>
          <hr />
          <div className="col-12">
            <p className="lead">Welcome to my Bootstrap 4 tutorial! Bootstrap is a free and open-source front-end library
            with HTML and CSS based designs.</p>
          </div>
        </div>
      </div>

      {/*  Three Column Section */}
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-code"></i>
            <h3>HTML5</h3>
            <p>Built with the latest version of HMTL, HTML5.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-bold"></i>
            <h3>BOOTSTRAP</h3>
            <p>Built with the latest version of Bootstrap, Bootstrap 4.</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <i className="fab fa-css3"></i>
            <h3>CSS3</h3>
            <p>Built with the latest version of CSS, CSS3.</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>

      {/* Two Column Section */}
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>If you build it...</h2>
            <p>The column will automatically stack on top of each other when the screen size is less than 576px wide.</p>
            <p>The column will automatically stack on top of each other when the screen size is less than 576px wide.
            The column will automatically stack on top of each other when the screen size is less than 576px wide.</p>
            <p>The column will automatically stack on top of each other when the screen size is less than 576px wide.</p>
            <br />
            <a href="/" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6">
            <img src={desk} alt="desk" className="img-fluid" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      {/*  Fixed background  */}
      <figure>
        <div className="fixed-wrap">
          <div className="fixed">

          </div>
        </div>
      </figure>

      {/* Emoji Section  */}
      <button className="fun" data-toggle="collapse" data-target="#emoji" >Click for fun</button>
      <div className="collapse" id="emoji">
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <img src={panda} alt="panda" className="gif" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <img src={poo} alt="poo" className="gif" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <img src={unicorn} alt="unicorn" className="gif" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <img src={chicken} alt="chicken" className="gif" />
            </div>
          </div>
        </div>
      </div>
      {/* Meet the team  */}
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Team</h1>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container-fluid padding">
        <div className="row padding">

          <div className="col-md-4">
            <div className="card">
              <img src={team1} alt="team1" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">John is an entrepreneur with almost 20 years of experience.</p>
                <a href="/" className="btn btn-outline-secondary"> See Profile</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={team2} alt="team2" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Mary Jo</h4>
                <p className="card-text">Marry is a designer with almost 10 years of experience.</p>
                <a href="/" className="btn btn-outline-secondary"> See Profile</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={team3} alt="team3" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Phil Ho</h4>
                <p className="card-text">Phil is a developer with almost 5 years of experience.</p>
                <a href="/" className="btn btn-outline-secondary"> See Profile</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Two Column Section */}
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>Our Philosophy</h2>
            <p>The column will automatically stack on top of each other when the screen size is less than 576px wide.</p>
            <p>The column will automatically stack on top of each other when the screen size is less than 576px wide.
            The column will automatically stack on top of each other when the screen size is less than 576px wide.</p>
            <br />
          </div>
          <div className="col-lg-6">
            <img src={bootstrap2} alt="bootstrap2" className="img-fluid" />
          </div>
        </div>
        <hr className="my-4"/>
      </div>

      {/*  Connect */}
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h2>Connect</h2>
          </div>
          <div className="col-12 social padding">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-google-plus-g"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/*  Footer */}
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            
            <div className="col-md-4">
              <img src={logo} alt="logo"/>
              <hr className="light"/>
              <p>555-555-5555</p>
              <p>email@myemail.com</p>
              <p>100 streat Name</p>
              <p>City, State, 00000</p>
            </div>

            <div className="col-md-4">
              <hr className="light"/>
              <h4>Our hours</h4>
              <hr className="light"/>
              <p>Moday: 9am - 5pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: closed</p>
            </div>

            <div className="col-md-4">
              <hr className="light"/>
              <h4>Service Area</h4>
              <hr className="light"/>
              <p>City, State, 00000</p>
              <p>City, State, 00000</p>
              <p>City, State, 00000</p>
              <p>City, State, 00000</p>
            </div>

            <div className="col-12">
              <hr className="light"/>
              <h5>©: w3newbie.com</h5>
            </div>

          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
