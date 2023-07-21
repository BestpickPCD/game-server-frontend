import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as BreadcrumbsComponent, Typography } from '@mui/material';
import { Breadcrumbs as BreadcrumbsType } from './type';
import { Link, useLocation } from 'react-router-dom';
interface BreadcrumbsProps {
  links: BreadcrumbsType[];
}
const Breadcrumbs = ({ links = [] }: BreadcrumbsProps): JSX.Element => {
  const location = useLocation();
  return (
    <BreadcrumbsComponent
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {links.map((item, index) => {
        if (index === links.length - 1) {
          return (
            <Typography color="text-primary" fontWeight="600" key={index}>
              {item.name}
            </Typography>
          );
        }
        return (
          <Link
            key={index}
            to={item?.link || location.pathname}
            onClick={item?.onClick && item.onClick}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: '400',
              cursor: 'pointer'
            }}
          >
            <Typography color="inherit">{item.name}</Typography>
          </Link>
        );
      })}
    </BreadcrumbsComponent>
  );
};

export default Breadcrumbs;
