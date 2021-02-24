import Header  from './header';
import Footer from './footer';
import RouterView from 'core/router';

import React from 'react';
const Layout=(props:any)=>{
    console.log('dashboard props',props)
    return (
        <div>
            <Header />
              <RouterView routes={props.routes}></RouterView>
           <Footer />
        </div>
    )
}

export default Layout;