import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../App.css';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <h1 className="heading">Quack Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
