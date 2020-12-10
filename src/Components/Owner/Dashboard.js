import React from "react";
import "./dashboard.css";
import Profile from "./Profile";
import Booking from "./Booking";
import Cart from "./Cart";
import History from "./History";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const mapStateToProps = (state) => {
  let { firstname, lastname, bio, mobile, image, pin, city, address } = state.updateProfile;
  return {
    firstname,
    lastname,
    bio,
    mobile,
    image,
    pin,
    city,
    address,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
function Dashboard(props) {
  let history = useHistory();
  let { firstname, lastname, mobile} = props;
  if(!firstname) firstname="newuser";  
  if(!mobile) mobile="mobile no";  
  const { component } = props;
  let route = <Booking />;
  if (component === "profile") {
    route = <Profile />;
  } else if (component === "booking") {
    route = <Booking />;
  } else if (component === "cart") {
    route = <Cart />;
  } else if (component === "history") {
    route = <History />;
  }
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              R
            </div>
            <div className="ml-2 font-bold text-2xl">ROJGAR</div>
          </div>
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold mt-2">{firstname}&nbsp;{lastname}</div>
            <div className="text-xs text-gray-500">{mobile}</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-xs">Active</div>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Explore</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                2
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-54 overflow-y-auto">
              <button
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                onClick={() => history.push("/home/profile")}
              >
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  P
                </div>
                <div className="ml-2 text-sm font-semibold">Profile</div>
              </button>
              <button
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                onClick={() => history.push("/home/booking")}
              >
                <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  B
                </div>
                <div className="ml-2 text-sm font-semibold">Booking</div>
              </button>
              <button
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                onClick={() => history.push("/home/cart")}
              >
                <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                  C
                </div>
                <div className="ml-2 text-sm font-semibold">Cart</div>
                <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div>
              </button>
              <button
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                onClick={() => history.push("/home/history")}
              >
                <div className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold">History</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                  O
                </div>
                <div className="ml-2 text-sm font-semibold">
                  Our Intitiatives
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center justify-between text-xs mt-6">
              <span className="font-bold">Other</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  L
                </div>
                <div className="ml-2 text-sm font-semibold">Logout</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">{route}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
