import React from 'react';
import '../App2.css';

import {
  ContainerPosition,
  ContainerSize,
} from '../components/Newfeed/Container/Wrap';
import {
  SideNavbarPosition,
  SideNavbarContainer,
  SideNavbarSize,
  InheritWitdhNavbar,
  NavbarFontSize,
} from '../components/Newfeed/Container/SideNav/Wrap';
import SideNavUser from '../components/Newfeed/Container/SideNav/User';
import SideNavStandardChoice from '../components/Newfeed/Container/SideNav/StandardChoice';
import SideNavShortChoice from '../components/Newfeed/Container/SideNav/ShortChoice';
import SideNavExtendChoice from '../components/Newfeed/Container/SideNav/ExtendChoice';

import LeftNewfeedWrapper from '../components/Newfeed/Container/Newfeed/LeftSection/Wrap';
import HomeHeader from '../components/Newfeed/Header';

const NewFeed = (props) => {
  function LogOut() {
    localStorage.removeItem('tokens');
  }

  return (
    <>
      {/* <div>
       <div>NewFeed Page</div>
       <button type="button" onClick={LogOut}>Logout</button>
    </div> */}
      <HomeHeader />

      <ContainerPosition>
        <ContainerSize>
          <div>
            {/* sidenav */}
            <SideNavbarPosition>
              <SideNavbarSize>
                <SideNavbarContainer>
                  <InheritWitdhNavbar>
                    <NavbarFontSize>
                      <div>
                        {/* user */}

                        <SideNavUser />

                        {/* choice */}
                        <div>
                          <SideNavStandardChoice />
                          <SideNavShortChoice />
                          <SideNavExtendChoice />
                        </div>
                      </div>
                    </NavbarFontSize>
                  </InheritWitdhNavbar>
                </SideNavbarContainer>
              </SideNavbarSize>
            </SideNavbarPosition>
            {/* newfeed */}
            <LeftNewfeedWrapper />
          </div>
        </ContainerSize>
      </ContainerPosition>
      <div style={{ height: 1000, width: '100%', background: 'red' }}></div>
    </>
  );
};

export default NewFeed;
