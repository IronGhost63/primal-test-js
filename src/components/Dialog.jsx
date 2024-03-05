const Dialog = ( { title, detail, closeFn } ) => {
  return(
    <div className="fixed z-50 flex items-center justify-center w-screen h-screen backdrop-blur bg-gray-600/50">
      <div className="bg-white rounded-md">
        <h1 className="p-6 pb-0 text-center text-2xl">Earthquake Detail</h1>
        <div className="p-6">
          <p>{title}</p>
          <p>Lat: {detail.lat}, Lng: {detail.lng}</p>
        </div>
        <div className="border-t p-3 text-center">
          <button onClick={closeFn}>Dismiss</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
