import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("https://server-yw48.onrender.com/profile", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        navigate("/login");
      });
  }, []);
  return (
    <div>
      <h1>Welcome To Profile Page</h1>
    </div>
  );
};

export default Profile;
