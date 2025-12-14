import React from 'react';
import Navbar from './components/Navbar';
import favicon from './logo.svg';
import './App.css';
import Aos from 'aos';


function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();

  return(
            
    <div className="container-fluid">
     <Navbar />
      <div className="row justify content center" id="embed-1">
            <div className="card-body">
                <h5 className="card-title" id='tips_title'>Enter Driver [<img id="tips_icon" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1765664437/log_actmp7.svg' class="card-img-top mx-auto" alt="Driver Logs" />]</h5>
                	<form className="flex-row justify-center mb-4" id='purpose_row'>
		                  <div className="flex-row justify-center mb-4">
                        <label for="validationDefaultUsername" class="form-label">Driver ID</label>
                          <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">ID-</span>
                            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" placeholder='Driver ID' required />
                          </div>
                      </div>
                      <div className="flex-row justify-center mb-4">
    		                <label for="validationDefault01" class="form-label">Total Gallons</label>
                        <div class="input-group">
                          <span class="input-group-text" id="inputGroupPrepend2">#</span>
    		                  <input type="text" class="form-control" id="validationDefault01" placeholder='0' required />
                        </div>
  		                </div>
  		                <div className="flex-row justify-center mb-4">
    		                <label for="validationDefault02" class="form-label">Total Cost</label>
                        <div class="input-group">
                          <span class="input-group-text" id="inputGroupPrepend2">$</span>
    		                  <input type="text" class="form-control" id="validationDefault02" aria-describedby="inputGroupPrepend2" placeholder="0.00" required />
                        </div>
  		                </div>
	                </form>
              </div>
      </div>

<footer id='footer' className=" fixed-bottom navbar navbar-expand-lg navbar-light bg-light">
  <div className='mx-auto'>
    <a id="icon-link" className="col px-5" href="https://aasports89.github.io/Costco-Roscoes-Liquor/">
      <img id="royal-icon" className='img-card-overlay' src={favicon} alt="Costco Roscoe's Liquor"></img>
    </a>
    <p className="mx-auto" id="footer-title"><b id="footer-bold">© Costco Roscoe's Liquor - {year}. All Rights Reserved.</b></p>
  </div>
</footer>


</div>
);
};

export default App;