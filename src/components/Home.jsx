import React from 'react';
/* import HomeForm from './HomeForm'; */
import LoginForm from './LoginForm';
import HomeMain from './HomeMain';
import '../assets/styles/home.scss';


const Home = () => {
    return (
        <div className="home row g-0">
            {/* <HomeForm></HomeForm> */}
            <LoginForm></LoginForm>
            <HomeMain></HomeMain>
        </div>
    )
}

export default Home
