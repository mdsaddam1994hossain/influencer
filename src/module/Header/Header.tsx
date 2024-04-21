
import React from 'react'

import NavBar from './NavBar';
import ResponsiveHeader from './ResponsiveHeader';


const Header = ({data,user}:any) => {

    return (
        <div className='bg-white lg:bg-transparent'>
            <ResponsiveHeader data={data} user={user} />
            {/* <NavBar  data={data}/>  */}
        </div>

    )
}

export default Header
