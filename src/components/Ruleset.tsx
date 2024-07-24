import { useState } from "react";
import { ruleOptions, /*getRuleOptionById */ } from "../data/rule-options";

type RuleArrayType = {
  ruleOptionId: string;
  qualifiers: [];
}[] | [];

function Ruleset() {
  const [rules, setRules] = useState<RuleArrayType>([]);

  const onChooseRuleOption = (ruleIndex: number, optionId: string) => {
    const newRules : RuleArrayType = [...rules] || [];
    newRules[ruleIndex] = {
      ruleOptionId: optionId,
      qualifiers: []
    }
    setRules(newRules);

    console.log(rules);
  }

  const onAddRule = () => {
    setRules([
      ...rules,
      {
        ruleOptionId: '',
        qualifiers: [],
      }
    ])
  };

  return (
    <div>
      <h1 className="text-5xl">Password Rules</h1>
      <p className="mt-8">Please create rules for the password.</p>

      {rules.map((rule, index) => {
        return (
          <div key={index} className="mt-4 flex gap-4">
            <select onChange={(e) => { onChooseRuleOption(index, e.target.value) }} value={rule.ruleOptionId}>
              <option value="">Choose a rule</option>
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
        onClick={onAddRule}
      >Add Rule</button>
    </div>
  );
}

export default Ruleset;