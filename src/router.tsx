import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import BaseLayout from 'src/layouts/BaseLayout';
import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

// eslint-disable-next-line react/display-name
const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const GamesManagement = Loader(
  lazy(() => import('src/modules/managements/Games'))
);
const UsersManagement = Loader(
  lazy(() => import('src/modules/managements/Users'))
);
const CurrencyManagement = Loader(
  lazy(() => import('src/modules/managements/Currency'))
);
const AgentsManagement = Loader(
  lazy(() => import('src/modules/managements/Agents'))
);
const TransactionsManagements = Loader(
  lazy(() => import('src/modules/managements/Transactions'))
);
const VendorsManagements = Loader(
  lazy(() => import('src/modules/managements/Vendor'))
);
const UserTransactionsManagements = Loader(
  lazy(() => import('src/modules/managements/Transactions/UserTransaction'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);
const Table = Loader(lazy(() => import('src/modules/managements/Table')));
//Auth
const Login = Loader(lazy(() => import('src/modules/Auth/Login')));
const Register = Loader(lazy(() => import('src/modules/Auth/Register')));

const PrivateRoute = ({
  element: Element
}: {
  element: React.ComponentType;
}) => {
  const isLoggedIn = Boolean(JSON.parse(localStorage.getItem('tokens')));
  return isLoggedIn ? <Element /> : <Navigate to="/login" replace />;
};

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="games" replace />
      },
      {
        path: 'games',
        element: <PrivateRoute element={GamesManagement} />
      },
      {
        path: 'users',
        element: <PrivateRoute element={UsersManagement} />
      },
      {
        path: 'currencies',
        element: <PrivateRoute element={CurrencyManagement} />
      },
      {
        path: 'agents',
        element: <PrivateRoute element={AgentsManagement} />
      },
      {
        path: 'transactions/',
        children: [
          {
            path: '',
            element: <PrivateRoute element={TransactionsManagements} />
          },
          {
            path: ':slug',
            element: <PrivateRoute element={UserTransactionsManagements} />
          }
        ]
      },
      {
        path: 'vendors',
        element: <PrivateRoute element={VendorsManagements} />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      },
      {
        path: 'tables',
        element: <PrivateRoute element={Table} />
      }
    ]
  }
];

export default routes;
