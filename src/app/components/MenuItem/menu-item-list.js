import React from 'react';
import { FcAddImage, FcList } from 'react-icons/fc';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { AiFillDashboard, AiFillSetting } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { BsBookshelf, BsMenuDown } from 'react-icons/bs';
import { GiServerRack } from 'react-icons/gi';
import { FiMapPin } from 'react-icons/fi';
import { SiProtonmail } from 'react-icons/si';
const color = () => ({
  color: Math.floor(Math.random() * 16777215).toString(16),
});

const menu_item_list = [
  {
    title: 'Dashboard',
    pathname: '/dashboard',
    icon: <AiFillDashboard style={color()} />,
    hasSub: false,
    subMenu: [],
    toggleState: 'Dashboard',
  },
  {
    title: 'Documents',
    pathname: '/document-management',
    hasSub: true,
    icon: <HiOutlineDocumentDuplicate style={color()} />,
    toggleState: 'Documents',
    subMenu: [
      {
        title: 'Document List',
        icon: <FcList />,
        pathname: '/document-management',
      },
      {
        title: 'Add Document',
        icon: <FcAddImage />,
        pathname: '/document-management/add',
      },
    ],
  },
  {
    title: 'Users',
    pathname: '/users',
    icon: <FaUserFriends style={color()} />,
    hasSub: true,
    toggleState: 'Users',
    subMenu: [
      {
        title: 'User List',
        icon: <FcList />,
        pathname: '/users',
      },
      {
        title: 'Add Users',
        icon: <FcAddImage />,
        pathname: '/users/add',
      },
    ],
  },
  {
    title: 'Shelf',
    pathname: '/shelf',
    icon: <BsBookshelf style={color()} />,
    hasSub: true,
    toggleState: 'Shelf',
    subMenu: [
      {
        title: 'Self list',
        icon: <FcList />,
        pathname: '/shelf',
      },
      {
        title: 'Add Shelf',
        icon: <FcAddImage />,
        pathname: '/shelf/add',
      },
    ],
  },
  {
    title: 'Racks',
    pathname: '/racks',
    icon: <GiServerRack style={color()} />,
    hasSub: true,
    toggleState: 'Racks',
    subMenu: [
      {
        title: 'Rack list',
        icon: <FcList />,
        pathname: '/racks',
      },
      {
        title: 'Add Rack',
        icon: <FcAddImage />,
        pathname: '/racks/add',
      },
    ],
  },
  {
    title: 'Service',
    pathname: '/service',
    icon: <BsMenuDown style={color()} />,
    hasSub: true,
    toggleState: 'Service',
    subMenu: [
      {
        title: 'Service list',
        icon: <FcList />,
        pathname: '/service',
      },
      {
        title: 'Add Service',
        icon: <FcAddImage />,
        pathname: '/service/add',
      },
    ],
  },
  {
    title: 'Region',
    pathname: '/regions',
    icon: <FiMapPin style={color()} />,
    hasSub: true,
    toggleState: 'Region',
    subMenu: [
      {
        title: 'Region list',
        icon: <FcList />,
        pathname: '/regions',
      },
      {
        title: 'Add Region',
        icon: <FcAddImage />,
        pathname: '/regions/add',
      },
    ],
  },
  {
    title: 'Roles & Permission',
    pathname: '#',
    icon: <SiProtonmail style={color()} />,
    hasSub: true,
    toggleState: 'Roles_Permission',
    subMenu: [
      {
        title: 'Roles list',
        icon: <FcList />,
        pathname: '/users/roles',
      },
      {
        title: 'Add Roles',
        icon: <FcList />,
        pathname: '/users/roles/add',
      },
      {
        title: 'Permission',
        icon: <FcAddImage />,
        pathname: '/users/permissions',
      },
      {
        title: 'Add Permission',
        icon: <FcAddImage />,
        pathname: '/users/permissions/add',
      },
      {
        title: 'Assign Role',
        icon: <FcAddImage />,
        pathname: '/users/assign/role',
      },
      {
        title: 'Assign Permission',
        icon: <FcAddImage />,
        pathname: '/users/assign/permission',
      },
    ],
  },
  {
    title: 'Settings',
    pathname: '#',
    icon: <AiFillSetting style={color()} />,
    hasSub: true,
    toggleState: 'Settings',
    subMenu: [
      {
        title: 'General Setting',
        icon: <FcList />,
        pathname: '/settings/general',
      },
      {
        title: 'Profile Setting',
        icon: <FcList />,
        pathname: '/settings/profile',
      },
    ],
  },
];

export default menu_item_list;
