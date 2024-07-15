import { useContext } from "react";
import { RulesetContext } from "../store/ruleset";


function Ruleset() {
  const {ruleset, setRuleset} = useContext(RulesetContext);  
  return (
    <div>
      <h2>Ruleset</h2>
      <p>Ruleset content {ruleset}</p>
      <div className="mt-8">
        <button onClick={() => setRuleset(ruleset + 1)}>Change ruleset</button>
      </div>
    </div>
  );
}

export default Ruleset;