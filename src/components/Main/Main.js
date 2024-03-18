import React from 'react';
import userIcon from '../../assets/user-icon.png';
import gptImgLogo from '../../assets/chatgptLogo.svg';
import sendBtn from '../../assets/send.svg';
import ProductSlider from '../ProductSlider/ProductSlider';
import LoginForm from '../Login/Login';
import RegisterForm from '../Register/Register';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const Main = () => {
  return (
    <div className='main'>
      <div className='chats'>
        <div className='chat'>
          <img className='chatImg' src={userIcon} alt='userphoto' />
          <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <ShoppingCart/>
        <LoginForm/>
        <RegisterForm/>
        <ProductSlider/>
        <div className='chat bot'>
          <img className='chatImg' src={gptImgLogo} alt="gpt Logo" />
          <p className='txt'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.!</p>
        </div>
      </div>
      
      <div className='chatFooter'>
        <div className='inp'>
          <input type='text' name='' id='' placeholder='Message to Wise ...' />
          <button className='send'><img src={sendBtn} alt="Send Button" /></button>
        </div>
      </div>
      
    </div>

    

  );
};

export default Main;
