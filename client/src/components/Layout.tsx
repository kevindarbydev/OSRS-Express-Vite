import React from 'react';
import Header from './header/Header';
import { Grid } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Grid className="flex" >{children}</Grid>
      </main>
    </>
  );
};

export default Layout;
