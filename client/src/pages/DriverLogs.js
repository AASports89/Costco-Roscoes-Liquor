import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_DRIVER_LOGS } from '../utils/queries';

var date = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.write(date);

const DriverLogs = () => {

  const { loading, data } = useQuery(QUERY_DRIVER_LOGS);
  const driverLogs = data?.driverLogs || [];
  if (!driverLogs.length) {
    return <h3>Driver [<img id="tips_icon" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1765664437/log_actmp7.svg' class="card-img-top mx-auto" alt="Driver Logs" />]</h3>;
  }
    console.log(driverLogs);

      return (
        <div>
        {loading ? ( 
          <div>Loading...💸...</div> 
        ) : (
      //************************* PARLAY-INFO: NAME & WIN_CHOICE ******************//
      
      <div className="flex-row justify-center" id="parlaying">
        <div className="flex-row justify-center">
          <h5 id="par-title">
            Driver Logs for: {date} [<img id="tips_icon" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1765664437/log_actmp7.svg' class="card-img-top mx-auto" alt="Driver Logs" />]
          </h5>
          </div>
            {driverLogs && driverLogs.map((driverLog) => (
                <div key={driverLog._id} className="card mb-3" id="game-cardss">
                    <p className="card-body">{driverLog.user}</p>
                    <p className="card-body"> Total Fill: {driverLog.total_fill}</p>
                    <p className="card-body">Total Cost: {driverLog.total_cost} </p>
                </div>
            ))}
        </div>
  )};
    </div>
  );
          };  
  export default DriverLogs;