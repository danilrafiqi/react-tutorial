import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import Nav from '../../../components/nav';
const Contact = () => {
  const [isBlock, setIsBlock] = useState<boolean>(false)
  return (
    <div>
      <div>Contacts</div>;
      <form onSubmit={e=>{
        e.preventDefault()
        setIsBlock(false)
      }}>
        <Prompt 
          when={isBlock}
          message="apa benar kamu mau meninggalkan form?"        
        />

        <input 
          type="text"
          placeholder='masukkan nama'
          onChange={(e)=> setIsBlock( e.target.value.length>0)}
        />
        <button type='submit'>kirim</button>
      </form>
      <Nav />
    </div>
  );
};

export default Contact;
