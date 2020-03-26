import React, { PureComponent } from 'react';
import styled from 'styled-components';

const DrawerContainer = styled.div``;

const DrawerMenu = styled.div``;

const DrawerMenuItem = styled.a``;

const DrawerContent = styled.div``;

class Drawer extends PureComponent<> {
  render() {
    return (
      <DrawerContainer style={{ display: 'flex' }}>
        <DrawerMenu
          style={{ background: 'red', height: '100rem', width: '300px' }}
        >
          <DrawerMenuItem href="link1">Link 1</DrawerMenuItem>
          <DrawerMenuItem href="link2">Link 2</DrawerMenuItem>
          <DrawerMenuItem href="link3">Link 3</DrawerMenuItem>
        </DrawerMenu>

        <DrawerContent style={{ flex: 1 }}>{this.props.children}</DrawerContent>
      </DrawerContainer>
    );
  }
}

export default Drawer;
