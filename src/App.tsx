import { useState } from 'react'
import './App.css'
import Ruleset from './components/Ruleset'
import { RulesetContext } from './store/ruleset'

function App() {
  const [ruleset, setRuleset] = useState(0)
  return (
    <>
      <RulesetContext.Provider value={{ruleset, setRuleset}}>
        <Ruleset />
      </RulesetContext.Provider>
    </>
  )
}

export default App
