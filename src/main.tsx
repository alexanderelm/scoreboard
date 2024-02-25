import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LeaderboardPage from './pages/leaderboard.tsx'
import ResultsPage from './pages/results.tsx'
import { Nav } from './components/nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LeaderboardPage />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
