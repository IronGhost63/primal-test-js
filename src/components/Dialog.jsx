import { useEffect, useState } from "react";

const Dialog = ( { title, detail, closeFn } ) => {
  const [eventDate, setEventDate] = useState();
  const [eventTime, setEventTime] = useState();

  useEffect( () => {
    setEventDate( new Date(detail.date).toLocaleDateString("en-US") );
    setEventTime( new Date(detail.date).toLocaleTimeString("en-US") );
  }, [detail]);

  return(
    <div className="fixed z-50 flex items-center justify-center w-screen h-screen backdrop-blur bg-gray-600/50">
      <div className="bg-white rounded-md">
        <h1 className="p-6 pb-0 text-center text-2xl mb-3">Earthquake Detail</h1>
        <div className="p-6 mb-3">
          <p className="mb-2">{title}</p>
          <p className="mb-2">Date: {eventDate} , {eventTime}</p>
          <p className="mb-2">Lat: {detail.lat}, Lng: {detail.lng}</p>
        </div>
        <div className="border-t p-3 text-center">
          <button onClick={closeFn}>Dismiss</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
