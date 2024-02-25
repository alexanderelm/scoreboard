import { firstRoundGames, secondRoundGames, teams } from '../data/data.ts'
import { Badge } from 'react-daisyui'

export default function ResultsPage() {
  return (
    <div>
      <div className={'flex justify-center items-center py-10'}>
        <h1 className={'text-4xl font-bold'}>RESULTS</h1>
      </div>

      <div className={'flex justify-center mx-8 py-8'}>
        <div className={'w-full max-w-6xl overflow-auto'}>
          <div className={'grid grid-cols-9 grid-rows-9 gap-2 min-w-max'}>
            {teams.map(({ id, players }, index) => (
              <div
                key={index}
                className={'flex justify-center border-b-2 border-black font-bold p-2'}
                style={{
                  gridColumnStart: `${id + 1}`,
                }}
              >
                <div className={'flex flex-col items-center'}>
                  <p>{players[0].name}</p>
                  <p>x</p>
                  <p>{players[1].name}</p>
                </div>
              </div>
            ))}

            {teams.map(({ id, players }, index) => (
              <div
                key={index}
                className={'flex justify-center border-r-2 border-b-2 border-black font-bold p-2'}
                style={{
                  gridRowStart: `${id + 1}`,
                }}
              >
                <div className={'flex flex-col items-center'}>
                  <p>{players[0].name}</p>
                  <p>x</p>
                  <p>{players[1].name}</p>
                </div>
              </div>
            ))}

            {firstRoundGames.map(({ home, away }, index) => (
              <div
                key={index}
                className={
                  'border flex flex-col justify-center items-center font-bold text-xl shadow bg-white space-y-2'
                }
                style={{
                  gridColumnStart: `${home.id + 1}`,
                  gridRowStart: `${away.id + 1}`,
                }}
              >
                <Badge variant={'outline'}>Game 1</Badge>
                <div>
                  {home.score} - {away.score}
                </div>
              </div>
            ))}

            {secondRoundGames.map(({ home, away }, index) => (
              <div
                key={index}
                className={
                  'border flex flex-col justify-center items-center font-bold text-xl shadow bg-white space-y-2'
                }
                style={{
                  gridColumnStart: `${home.id + 1}`,
                  gridRowStart: `${away.id + 1}`,
                }}
              >
                <Badge variant={'outline'}>Game 2</Badge>
                <div>
                  {home.score} - {away.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
