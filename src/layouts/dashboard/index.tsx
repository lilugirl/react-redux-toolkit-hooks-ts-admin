import Header  from './header';
import Footer from './footer';
import RouterView from '../../router';

import React from 'react';
const Layout=({routes}:any)=>{
    return (
        <div>
            <Header />
              <RouterView routes={routes}></RouterView>
           <Footer />
        </div>
    )
}

export default Layout;