import React from 'react';
import { Trans } from 'react-i18next';

const SidebarUser = () => {
  return (
    <li className="nav-item profile">
      <div className="profile-desc">
        <div className="profile-pic">
          <div className="count-indicator">
            <img
              className="img-xs rounded-circle "
              src={require('../../assets/images/jibonbima-logo.jpeg')}
              alt="profile"
            />
            <span className="count bg-success"></span>
          </div>
          <div className="profile-name">
            <h5 className="mb-0 font-weight-normal">
              <Trans>MD. Alam</Trans>
            </h5>
            <span>
              <Trans>Admin</Trans>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default SidebarUser;
