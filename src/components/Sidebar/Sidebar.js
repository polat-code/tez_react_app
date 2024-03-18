import React from 'react';
import wiseLogo from '../../assets/logo_resized.jpg';
import addBtn from '../../assets/add-30.png';
import msgIcon from '../../assets/message.svg';
import homeProfile from '../../assets/home.svg';

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className='upperSide'>
        <div className='upperSideTop'>
          <img src={wiseLogo} className='logo' alt='wiseLogo' />
          <span className='brand'>Wise</span>
        </div>
        <button className='midBtn'><img className='addBtn' alt="" src={addBtn} />New Chat</button>
        <div className='upperSideBottom'>
          <button className='query'><img src={msgIcon} alt='message' />What is Programming ?</button>
          <button className='query'><img src={msgIcon} alt='message' />What is Programming ?</button>
        </div>
      </div>
      <div className='lowerSide'>
        <div className='listItems'><img className='listItemImg' src={homeProfile} alt="Profile" />Profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
