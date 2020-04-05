import React from "react";
import "../App2.css"

import { HeaderPosition, HeaderSize, HeaderBackground, HeaderContainer, CenterElements } from "../components/Newfeed/Header/Wrap"
import SearchWrapper from "../components/Newfeed/Header/SearchField/Wrap"
import SearchLogo from "../components/Newfeed/Header/SearchField/Logo"
import SearchForm from "../components/Newfeed/Header/SearchField/Form"
import NavbarWrapper from "../components/Newfeed/Header/Nav/Wrap"
import NavbarTextButton from "../components/Newfeed/Header/Nav/TextButton"
import NavbarIconButton from "../components/Newfeed/Header/Nav/IconButton"
import NavbarHelpButton from "../components/Newfeed/Header/Nav/HelpButton"

import { ContainerPosition, ContainerSize } from "../components/Newfeed/Container/Wrap"
import { SideNavbarPosition, SideNavbarContainer, SideNavbarSize, InheritWitdhNavbar, NavbarFontSize } from "../components/Newfeed/Container/SideNav/Wrap"
import SideNavUser from "../components/Newfeed/Container/SideNav/User"
import SideNavStandardChoice from "../components/Newfeed/Container/SideNav/StandardChoice"
import SideNavShortChoice from "../components/Newfeed/Container/SideNav/ShortChoice"
import SideNavExtendChoice from "../components/Newfeed/Container/SideNav/ExtendChoice"

import LeftNewfeedWrapper from "../components/Newfeed/Container/Newfeed/LeftSection/Wrap"



const NewFeed = (props) => {

  function LogOut() {
    localStorage.removeItem("tokens");
  }

  return (
    <>
      {/* <div>
       <div>NewFeed Page</div>
       <button type="button" onClick={LogOut}>Logout</button>
    </div> */}
      <div>
        <HeaderPosition>
          <HeaderSize>
            <HeaderBackground>
              <HeaderContainer>
                <CenterElements>
                  {/* search */}
                  <SearchWrapper>
                    <SearchLogo />
                    <SearchForm />
                  </SearchWrapper>
                  {/* navbar */}
                  <NavbarWrapper>
                    <NavbarTextButton />
                    <NavbarIconButton />
                    <NavbarHelpButton />
                  </NavbarWrapper>
                </CenterElements>
              </HeaderContainer>
            </HeaderBackground>
          </HeaderSize>
        </HeaderPosition>

      </div>

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
                          <SideNavShortChoice  />
                          <SideNavExtendChoice  />
                        </div>
                      </div>
                    </NavbarFontSize>
                  </InheritWitdhNavbar>
                </SideNavbarContainer>
              </SideNavbarSize>
            </SideNavbarPosition>
            {/* newfeed */}
            <LeftNewfeedWrapper/>
          </div>
        </ContainerSize>
      </ContainerPosition>
    </>
  )
}

export default NewFeed;