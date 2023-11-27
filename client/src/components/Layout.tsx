import React from 'react';
import Header from './header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
   <div className="h-full w-full ">
      <Header margin="4rem" title="Learning Next + Typescript" />
      <main>
        <div className='flex'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
