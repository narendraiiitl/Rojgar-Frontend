import React from "react";
import useInput from "../../Hooks/useInput";
import { useHistory } from "react-router-dom";
import Cookie from "universal-cookie";
import axios from "axios";
import { connect } from "react-redux";
import { setProfile} from "./Redux/Actions/Actions";
const cookie = new Cookie();

const mapStateToProps = (state) => {
  return {
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onProfileUpdate: (text) => dispatch(setProfile(text)),
  };
};

function updateProfile(
  firstname,
  lastname,
  bio,
  mobile,
  image,
  pin,
  city,
  address,
  history
) {
  let url = "http://localhost:3001/api/user/update";
  const token = cookie.get("accessToken");
  axios
    .post(
      url,
      { firstname, lastname, bio, mobile, image, pin, city, address },
      {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      },
   
    )
    .then((res) => {
      console.log(res.data);
      history.push("/home");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      }
      console.log(error);
    });
}
function Profile(props) {
  let history = useHistory();
  const [firstname, setFirstname] = useInput("");
  const [lastname, setLastname] = useInput("");
  const [bio, setBio] = useInput("");
  const [image, setImage] = useInput("");
  const [mobile, setMobile] = useInput("");
  const [address, setAddress] = useInput("");
  const [city, setCity] = useInput("");
  const [pin, setPin] = useInput("");
  return (
    <div className="container">
      <h1 className="title">Profile</h1>

      <div className="grid">
        <div className="form-group a">
          <label htmlFor="name">First name</label>
          <input
            id="name"
            type="text"
            onChange={setFirstname}
            value={firstname}
          />
        </div>

        <div className="form-group b">
          <label htmlFor="first-name">Last name</label>
          <input
            id="first-name"
            type="text"
            onChange={setLastname}
            value={lastname}
          />
        </div>
        <div className="form-group phone-group">
          <label htmlFor="phone">Mobile no.</label>
          <input id="phone" type="text" onChange={setMobile} value={mobile} />
        </div>

        <div className="form-group email-group">
          <label htmlFor="email">Image Url</label>
          <input id="email" type="text" onChange={setImage} value={image} />
        </div>

        <div className="textarea-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" onChange={setBio} value={bio}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            onChange={setAddress}
            value={address}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={setCity} value={city} />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Postal Address</label>
          <input id="zip" type="text" onChange={setPin} value={pin} />
        </div>
      </div>
      <div className="button-container">
        <button
          class="button"
          onClick={() =>
            updateProfile(
              firstname,
              lastname,
              bio,
              mobile,
              image,
              pin,
              city,
              address,
              history
            )
          }
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
