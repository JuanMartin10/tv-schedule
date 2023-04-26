import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomeView from '../views/HomeView/HomeView';
import ProgramView from '../views/HomeView/ProgramView/ProgramView';

export const HOME_PATH = '/';

export const routesConfig = [
  {
    path: `${HOME_PATH}`,
    element: (
      <>
        <Layout>
          <Outlet />
        </Layout>
      </>
    ),
    children: [
      { path: `${HOME_PATH}`, element: <HomeView /> },
      { path: ':channelId/:programId', element: <ProgramView /> },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
