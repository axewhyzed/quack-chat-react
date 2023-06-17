import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Duck from './assets/home-duck.gif';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center App`,
  sectionContainer: `flex flex-col h-[90vh] mt-5 shadow-xl rounded relative section-container`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />

        {user ? (
          <Chat />
        ) : (
          <div className="home-container d-flex flex-column align-items-center justify-content-center mt-4">
            <img className="home-duck" src={Duck} alt="running duck" />
            <h2 className="home-heading">Welcome to Quack Chat!</h2>
            <p className="home-description text-center">
              Connect with friends and start chatting. Sign in to join the
              conversation!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;