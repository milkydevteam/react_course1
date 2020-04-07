import React, { memo, useCallback, useState, useEffect } from 'react';
import { HeaderPosition, CenterElements } from './Wrap';
import SearchWrapper from './SearchField/Wrap';
import SearchLogo from './SearchField/Logo';
import SearchForm from './SearchField/Form';
import NavbarWrapper from './Nav/Wrap';
import NavbarTextButton from './Nav/TextButton';
import NavbarIconButton from './Nav/IconButton';
import NavbarHelpButton from './Nav/HelpButton';

const HomeHeader = memo(function (props: { title?: string }) {
  useEffect(() => {
    console.log('didmount');
    return () => {
      console.log('unmount');
    };
  }, []);
  useEffect(() => {
    console.log('will receive props', props.title);
  }, [props.title]);

  return (
    <HeaderPosition>
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
    </HeaderPosition>
  );
});

export default HomeHeader;
