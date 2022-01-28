import React from 'react';
import { Collapse } from 'react-bootstrap';

import { Link, useLocation } from 'react-router-dom';

const MenuItem = (props) => {
  const { hasSub, title, subMenu, path, toggleState, icon } = props;
  const [state, setState] = React.useState({});
  const { pathname } = useLocation();
  const [isExpand, setIsExpand] = React.useState(false);

  const isPathActive = (path) => {
    return pathname.startsWith(path);
  };

  const isActive = (key) => pathname.match(key);

  const expand = () => {
    setIsExpand(!isExpand);
    return setState({ [toggleState]: isExpand });
  };

  return (
    <li
      className={
        isPathActive(path)
          ? 'nav-item menu-items active'
          : 'nav-item menu-items'
      }
    >
      <div
        className={
          isPathActive(path) && state[toggleState]
            ? 'nav-link menu-expanded'
            : 'nav-link'
        }
        onClick={expand}
        data-toggle="collapse"
      >
        <Link className="nav-link" to={path}>
          <span className="menu-icon">{icon}</span>
          <span className="menu-title">{title}</span>
          {hasSub && <i className="menu-arrow"></i>}
        </Link>
      </div>
      {hasSub && (
        <Collapse in={state[toggleState]}>
          <div>
            <ul className="nav flex-column sub-menu">
              {subMenu.map((menu, index) => (
                <li key={index} className="nav-item">
                  <Link
                    className={
                      isActive(menu.pathname) ? 'nav-link active' : 'nav-link'
                    }
                    to={menu.pathname}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      )}
    </li>
  );
};
export default MenuItem;
