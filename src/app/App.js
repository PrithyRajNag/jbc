import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import { withTranslation } from 'react-i18next';
import './App.scss';
import route_list_full_layout from './route-list';

class App extends Component {
  state = {};
  componentDidMount() {
    this.onRouteChanged();
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
    return (
      <div className="container-scroller">
        {sidebarComponent}
        <div className="container-fluid page-body-wrapper">
          {navbarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
            </div>
            {footerComponent}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log('ROUTE CHANGED');
    const { i18n } = this.props;
    const body = document.querySelector('body');
    if (this.props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    } else {
      body.classList.remove('rtl');
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);

    for (let i = 0; i < route_list_full_layout.length; i++) {
      if (this.props.location.pathname === route_list_full_layout[i].pathname) {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.remove('full-page-wrapper');
      }
    }
  }
}

export default withTranslation()(withRouter(App));
