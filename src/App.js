import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RxAvatar } from "react-icons/rx";
import { IoMdClose} from "react-icons/io";
import { CiGrid42 } from "react-icons/ci";

import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('');
  const [activeBoardItem, setActiveBoardItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isPara, setPara] = useState(true)
  const [isPara2, setPara2] = useState(false)
  const [isPara3, setPara3] = useState(false)
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const handleBoardItemClick = (itemName) => {
    setActiveBoardItem(itemName);
};

const onClickOpenContainer = () => {
  setPara(!isPara)
}
const onClickOpenContainer2 = () => {
  setPara2(!isPara2)
}
const onClickOpenContainer3 = () => {
  setPara3(!isPara3)
}

  return (
    <div className="App">
      <nav className="app-nav-bar">
  
      
      <ul className='nav-header'>
        <li>Bid</li>
        <li>POD</li>
        <li>Vendor</li>
        <li>User</li>
        <li><RxAvatar  className="App-logo"/> </li>
        </ul> 
      
      
      </nav>
      <div className='App-main-container'>
     
      <header className="App-header">
      <div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className='logo-container'></div>
                    <p>LOGO</p>
                </div>
                
                <ul className={`dashboard-container ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={() => handleBoardItemClick('Bid')} className={activeBoardItem === 'Bid' ? 'active' : ''}>
                        <p className='para-icons'><CiGrid42 className='icons'/>Bid </p>
                    </li>
                    <li onClick={() => handleBoardItemClick('POD')} className={activeBoardItem === 'POD' ? 'active' : ''}>
                    <p className='para-icons'> <CiGrid42 className='icons'/> POD</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Vendor')} className={activeBoardItem === 'Vendor' ? 'active' : ''}>
                    <p className='para-icons'><CiGrid42 className='icons'/> Vendor</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('User')} className={activeBoardItem === 'User' ? 'active' : ''}>
                    <p className='para-icons'> <CiGrid42 className='icons'/> User</p>
                    </li>
                    
                </ul>
                </div>
                <ul className={`dashboard-container ${isMenuOpen ? 'active' : ''}`} >
                <li onClick={() => handleBoardItemClick('Setting')} className={activeBoardItem === 'Setting' ? 'active' : ''}>
                <p className='para-icons'>  <CiGrid42 className='icons'/> Setting</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Profile')} className={activeBoardItem === 'Profile' ? 'active' : ''}>
                    <p className='para-icons'> <CiGrid42 className='icons'/> Profile</p>
                    </li>
                    <li onClick={() => handleBoardItemClick('Contact Us')} className={activeBoardItem === 'Contact Us' ? 'active' : ''}>
                    <p className='para-icons'> <CiGrid42 className='icons'/> Contact Us</p>
                    </li>
                </ul>
                
      </header>

      <div className='main-card-table-container'>
      <div>
                {activeBoardItem && 
                    <button className='close-button'>
                        {activeBoardItem} <IoMdClose onClick={() => setActiveBoardItem('')} />
                    </button>
                }
            </div>
      <div className='list-items-container-2'>
        <div className='list-item-container'>
            <p className={`list-items1 ${activeItem === 'Live' ? 'active' : ''}`} onClick={() => setActiveItem('Live')}>Live</p>
            <p className={`list-items1 ${activeItem === 'Accepted' ? 'active' : ''}`} onClick={() => setActiveItem('Accepted')}>Results</p>
            <p className={`list-items1 ${activeItem === 'AWB Created' ? 'active' : ''}`} onClick={() => setActiveItem('AWB Created')}>History</p>
            <input type="text" placeholder='Search'/>
        </div>
        <div>
          <p>Create </p>
        </div>
            {/* <p className={`list-items1 ${activeItem === 'Ready to Ship' ? 'active' : ''}`} onClick={() => setActiveItem('Ready to Ship')}>Ready to Ship</p>
            <p className={`list-items1 ${activeItem === 'Shipped' ? 'active' : ''}`} onClick={() => setActiveItem('Shipped')}>Shipped</p>
            <p className={`list-items1 ${activeItem === 'Completed' ? 'active' : ''}`} onClick={() => setActiveItem('Completed')}>Completed</p>
            <p className={`list-items1 ${activeItem === 'Cancelled' ? 'active' : ''}`} onClick={() => setActiveItem('Cancelled')}>Cancelled</p> */}
        </div>
        <div  className='main-container-card'>
          <div className='card-buttons-container'>
          <div className='card-elements'>
            <p className='button-cards'> Live (30)</p>
            <p className='button-cards2'>Responsed(30)</p>
            <p className='button-cards3'>Unresponded(30)</p>
            </div>
            {/* <button><LuRefreshCw className='refresh-button'/>Refresh</button> */}
            <p>Bid Created</p>
            <p>Today</p>
            <p>Yesterday</p>
            <div>
      <button onClick={toggleCalendar}>Open Calendar</button>
      {showCalendar && (
        <div>
          <Calendar/>
        </div>
      )}
    </div>
            </div>
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    
                    <th>S No. </th>
                    <th>Bid Number Created By</th>
                    <th>Start Date & Time</th>
                    <th>Bid Time Remaining</th>
                    <th>From city To city</th>
                    <th>Vehicle Type, Size Body, No.of Vechicle </th>
                    <th>Material Weight (in Kg)</th>
                    <th>Response</th>
                    <th>Assigned Staff</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='no-border-bottom'>
                    <td> 1</td>
                    <td>#122345678123 <br/> <span>Sunder Yadav</span></td>
                    <td>14/02/2024<br/> <span>05:40 Pm</span></td>
                    <td>7hr 20min</td>
                    <td>Gurdaon <br/> <span>Mumbai</span></td>
                    <td>Truck, 20ft Close body, 1</td>
                    <td>4000kg</td>
                    <td>4 View results</td>
                    <td>Mohit <span>5215001161264</span></td>
                    <td>
                      
                      <button type='button' onClick={onClickOpenContainer}>
                      View Details
                      </button> 
                    </td>
                    </tr>
                  
                    {isPara && 
                    <tr>
                      <td colSpan="10">
                      <div className='view-details-container' style={{ width: '100%' }}>
                          
                          <div className='location-main-container-first'>
                            <p>Bid No: 16515120650125<span>(Sunder Yadav)</span></p>
                            <div className='location-main-container'>
                            <svg width="120" height="250" className='svg'>
                                
                                <circle cx="100" cy="100" r="5" fill="red" />

                                
                                <circle cx="100" cy="200" r="10" fill="blue" />

            
                                <line x1="100" y1="100" x2="100" y2="200" className="line" />
                              </svg>
                          <div>
                              <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              
                              <p><span>Unloading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            
                            
                            </div>
                          </div>
                          </div>
                          </div>

                          
                          <div>
                            <p>Vehicle Loading date: 17/02/2024</p>
                            
                            <p>Vehicle Type: <span>20 ft Truck (Close Body)</span></p> 
                            <p>Material:<span>Agricultural Products</span></p>
                            

                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            </div>
                          </div>

                          <div>
                               
                            
                              <p>Assigned Staff: <span>Rahul Pandey</span> </p>
                              <p>Phone number: <span>+91 332423442442 </span></p>
                              <p>Target Price: <span>Rs 5000</span></p>
                              <p>Number of Bider for this Bid: <span>54 </span></p>
                              <p>View Details</p>
                              <button type='button' onClick={onClickOpenContainer}>View Less</button>

                            </div>

                          
                        </div>
                      </td>
                      </tr>
                    } 
                  
                  <tr className='no-border-bottom'>
                    <td> 1</td>
                    <td>#122345678123 <br/> <span>Sunder Yadav</span></td>
                    <td>14/02/2024<br/> <span>05:40 Pm</span></td>
                    <td>7hr 20min</td>
                    <td>Gurdaon <br/> <span>Mumbai</span></td>
                    <td>Truck, 20ft Close body, 1</td>
                    <td>4000kg</td>
                    <td>4 View results</td>
                    <td>Mohit <span>5215001161264</span></td>
                    <td>
                      
                      <button type='button' onClick={onClickOpenContainer2}>
                      View Details
                      </button> 
                    </td>
                    </tr>
                  
                    {isPara2 && 
                    <tr>
                      <td colSpan="10">
                      <div className='view-details-container' style={{ width: '100%' }}>
                          
                          <div className='location-main-container-first'>
                            <p>Bid No: 16515120650125<span>(Sunder Yadav)</span></p>
                            <div className='location-main-container'>
                            <svg width="120" height="250" className='svg'>
                                
                                <circle cx="100" cy="100" r="5" fill="red" />

                                
                                <circle cx="100" cy="200" r="10" fill="blue" />

            
                                <line x1="100" y1="100" x2="100" y2="200" className="line" />
                              </svg>
                          <div>
                              <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              
                              <p><span>Unloading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            
                            
                            </div>
                          </div>
                          </div>
                          </div>

                          
                          <div>
                            <p>Vehicle Loading date: 17/02/2024</p>
                            
                            <p>Vehicle Type: <span>20 ft Truck (Close Body)</span></p> 
                            <p>Material:<span>Agricultural Products</span></p>
                            

                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            </div>
                          </div>

                          <div>
                               
                            
                              <p>Assigned Staff: <span>Rahul Pandey</span> </p>
                              <p>Phone number: <span>+91 332423442442 </span></p>
                              <p>Target Price: <span>Rs 5000</span></p>
                              <p>Number of Bider for this Bid: <span>54 </span></p>
                              <p>View Details</p>
                              <button type='button' onClick={onClickOpenContainer2}>View Less</button>

                            </div>

                          
                        </div>
                      </td>
                      </tr>
                    }

            <tr className='no-border-bottom'>
                    <td> 1</td>
                    <td>#122345678123 <br/> <span>Sunder Yadav</span></td>
                    <td>14/02/2024<br/> <span>05:40 Pm</span></td>
                    <td>7hr 20min</td>
                    <td>Gurdaon <br/> <span>Mumbai</span></td>
                    <td>Truck, 20ft Close body, 1</td>
                    <td>4000kg</td>
                    <td>4 View results</td>
                    <td>Mohit <span>5215001161264</span></td>
                    <td>
                      
                      <button type='button' onClick={onClickOpenContainer3}>
                      View Details
                      </button> 
                    </td>
                    </tr>
                  
                    {isPara3 && 
                    <tr>
                      <td colSpan="10">
                      <div className='view-details-container' style={{ width: '100%' }}>
                          
                          <div className='location-main-container-first'>
                            <p>Bid No: 16515120650125<span>(Sunder Yadav)</span></p>
                            <div className='location-main-container'>
                            <svg width="120" height="250" className='svg'>
                                
                                <circle cx="100" cy="100" r="5" fill="red" />

                                
                                <circle cx="100" cy="200" r="10" fill="blue" />

            
                                <line x1="100" y1="100" x2="100" y2="200" className="line" />
                              </svg>
                          <div>
                              <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              
                              <p><span>Unloading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            
                            
                            </div>
                          </div>
                          </div>
                          </div>

                          
                          <div>
                            <p>Vehicle Loading date: 17/02/2024</p>
                            
                            <p>Vehicle Type: <span>20 ft Truck (Close Body)</span></p> 
                            <p>Material:<span>Agricultural Products</span></p>
                            

                            <div>
                              Kotputli, <span>Rajasthan</span>
                            <div>
                              <p>Manesar, Gurugram, <span>Haryana</span> <br/> 
                              <span>Loading Point:</span>Ramchandra Ramniwas oil mill,Alwar, Rajasthan </p>
                            </div>
                            </div>
                          </div>

                          <div>
                               
                            
                              <p>Assigned Staff: <span>Rahul Pandey</span> </p>
                              <p>Phone number: <span>+91 332423442442 </span></p>
                              <p>Target Price: <span>Rs 5000</span></p>
                              <p>Number of Bider for this Bid: <span>54 </span></p>
                              <p>View Details</p>
                              <button type='button' onClick={onClickOpenContainer3}>View Less</button>

                            </div>

                          
                        </div>
                      </td>
                      </tr>
                    }
                  
                 
                </tbody>
              </table>
            </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;