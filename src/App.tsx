import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ResultsPage from './pages/results.tsx'
import LeaderboardPage from './pages/leaderboard.tsx'

import { Nav } from './components/nav'

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path={'/'} element={<LeaderboardPage />} />
        <Route path={'/results'} element={<ResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App
