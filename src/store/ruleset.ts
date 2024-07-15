import { createContext, Dispatch, SetStateAction } from 'react';

interface RulesetContextType {
    ruleset: number
    setRuleset: Dispatch<SetStateAction<number>>
  }

export const RulesetContext = createContext<RulesetContextType>({
    ruleset: 0,
    setRuleset: (prevState: SetStateAction<number>) => prevState
});
