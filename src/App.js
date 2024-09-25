import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginPage from './admindashboard/pages/loginPage';
import HomePage from './admindashboard/pages/homePage';
import AdminDashboard from './admindashboard/index';
import AdduserPage from './admindashboard/pages/adduserPage';
import SettingPage from './admindashboard/pages/settingPage';
import AgenciesPage from './admindashboard/pages/agenciespage';
import SingleAgencyPage from './admindashboard/pages/singleagencypage';
import AgencyProjectPage from './admindashboard/pages/agencyprojectpage';
import AgencyTemplatePage from './admindashboard/pages/agencytemplatepage';
import PersonalProjectsPage from './admindashboard/pages/personalprojectspage';
import PersonalSingleProject from './admindashboard/pages/personalsingleproject';
import PersonalTemplatePage from './admindashboard/pages/personaltemplatepage';
import NotFoundPage from './admindashboard/pages/notFoundPage';

import "./App.css"








function App() {

  const router = createBrowserRouter([
    {path: '/',element: <LoginPage />},
    {path: '*',element: <NotFoundPage />},
    {
      path: '/dashboard',
      element: <AdminDashboard />,
      children:[
        { path: '', element: <HomePage /> },
        { path: 'adduser', element: <AdduserPage /> },
        { path: 'settings', element: <SettingPage /> },
        { path: 'projects/agency', element: <AgenciesPage /> },
        { path: 'projects/agency/:agencyName', element: <SingleAgencyPage /> },
        { path: 'projects/agency/:agencyName/:projectName', element: <AgencyProjectPage /> },
        { path: 'projects/agency/:agencyName/:projectName/:templateName', element: <AgencyTemplatePage /> },
        { path: 'projects/personal', element: <PersonalProjectsPage /> },
        { path: 'projects/personal/:projectName', element: <PersonalSingleProject /> },
        { path: 'projects/personal/:projectName/:templateName', element: <PersonalTemplatePage /> },
      ]
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;