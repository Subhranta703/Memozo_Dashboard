import React from "react";

const BookingRequests = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-primary">Booking Requests</h2>
      <div className="flex items-center justify-between mt-2 p-2 bg-gray-200 rounded-md">
        <div>
          <p className="text-gray-700">Package Name</p>
          <p className="font-bold">$100,000</p>
          <p className="text-gray-500">04 Feb</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">Accept</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default BookingRequests;
