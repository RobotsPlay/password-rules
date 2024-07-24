import { useContext, useState } from "react";
import { RulesetContext } from "../store/ruleset";
import { ruleOptions, getRuleOptionById } from "../data/rule-options";

function Ruleset() {
  const [rules, setRules] = useState([]);
  const {ruleset, setRuleset} = useContext(RulesetContext);

  const onChooseRuleOption = (ruleIndex, optionId) => {
    const newRules = [...rules];
    newRules[ruleIndex] = {
      ruleOptionId: optionId,
      qualifiers: []
    }
    setRules(newRules);

    console.log(rules);
  }

  return (
    <div>
      <h1 className="text-5xl">Password Rules</h1>
      <p className="mt-8">Please create rules for the password.</p>

      {rules.map((rule, index) => {
        return (
          <div key={index} className="mt-4">
            <select onChange={(e) => { onChooseRuleOption(index, e.target.value) }}>
              {ruleOptions.map((option) => {
                return (
                  <option key={option.id} value={option.id}>{option.label}</option>
                )
              })}
            </select>

            {rule.ruleOptionId}
          </div>
        )
      })}
      
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => setRules([
          ...rules,
          {
            ruleOptionId: null,
            qualifiers: [],
          }
        ])}
      >Add Rule</button>
    </div>
  );
}

export default Ruleset;