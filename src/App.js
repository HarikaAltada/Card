import React, { useEffect, useState } from "react";
import "./App.css"; // Import CSS file

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="main-container">
      <div className="card">
        <div className="left-section">
          <div className="profile-circle">
            <img src={user.picture.large} alt="Profile" />
          </div>
        </div>
        <div className="right-section">
          <h2 className="name">{`${user.name.first} ${user.name.last}`}</h2>
          
          <div className="contact-info">
            <p>
              <span className="icon">📞</span> {user.phone}
            </p>
            <p>
              <span className="icon">📧</span> {user.email}
            </p>
            <p>
              <span className="icon">📍</span> {`${user.location.street.name}, ${user.location.city}`}
            </p>
            <p>
              <span className="icon">👤</span> Gender: {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
