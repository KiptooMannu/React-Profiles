import React from 'react';
import './profileCard.css'; // Importing the external CSS file for styling
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ProfileCard = ({ name, age, profilePicture, bio }) => {
    return (
      <div className="profile-card">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <h2>{name}</h2>
        <p className="age">Age: {age}</p>
        <p className="bio">{bio}</p>
        <div className="social-icons">
          <a href={`https://facebook.com/${name}`}><FaFacebook /></a>
          <a href={`https://twitter.com/${name}`}><FaTwitter /></a>
          <a href={`https://linkedin.com/in/${name}`}><FaLinkedin /></a>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
