import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';
import MenuItem from '../components/MenuItem';
import menu_item_list from '../components/MenuItem/menu-item-list';

class Sidebar extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a
            className="sidebar-brand brand-logo text-decoration-none "
            href="index.html"
          >
            JIBON BIMA
          </a>
          <a
            className="sidebar-brand brand-logo-mini text-decoration-none"
            href="index.html"
          >
            JB
          </a>
        </div>
        <ul className="nav">
          {/* start admin */}
          <SidebarUser />
          {/* end admin */}

          {/* start side menu */}

          {menu_item_list.map((menu, index) => {
            console.log(console.log(menu));
            return (
              <MenuItem
                key={index}
                toggleState={menu.toggleState}
                icon={menu.icon}
                title={menu.title}
                path={menu.pathname}
                hasSub={menu.hasSub}
                subMenu={menu.subMenu}
              />
            );
          })}
          {/* end side menu */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }
}

export default withRouter(Sidebar);
