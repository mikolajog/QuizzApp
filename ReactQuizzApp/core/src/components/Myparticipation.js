import React from 'react'
import Header from './framework/Header';
import Footer from './framework/Footer';
import { Redirect } from 'react-router-dom';

function Myparticipation() {
  if (!localStorage.getItem('access_token')) {
    return <Redirect to={'/login'} />;
}
  return (
      <React.Fragment>
      <Header></Header>
      Myparticipation
      <Footer></Footer>
      </React.Fragment>  
  );
}

export default Myparticipation;