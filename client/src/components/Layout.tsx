import React from 'react';
import Header from './header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header margin="4rem" />
      <main>
        <div className="flex">{children}</div>
      </main>
    </>
  );
};

export default Layout;
