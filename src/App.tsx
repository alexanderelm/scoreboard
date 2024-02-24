import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TeamsPage from './pages/teams.tsx'
import LeaderboardPage from './pages/leaderboard.tsx'
import { Link } from 'react-daisyui'

function App() {
  return (
    <Router>
      <div className={'w-full flex justify-center gap-12 p-6'}>
        <Link href={'/'}>Leaderboard</Link>
        <Link href={'/teams'}>Teams</Link>
      </div>

      <Routes>
        <Route path={'/'} element={<LeaderboardPage />} />
        <Route path={'/teams'} element={<TeamsPage />} />
      </Routes>
    </Router>
  )
}

export default App
