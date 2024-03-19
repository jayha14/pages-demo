import React from 'react';
import Header from './Header';

Layout.propTypes = {
  children: React.ReactNode,
};

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
