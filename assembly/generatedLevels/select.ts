import { Level_fun_1_CAJJLDLBCS } from "./fun_1_CAJJLDLBCS"
import { BaseLevel } from "../levels/baseLevel"
export function getLevelByCode(code: string): BaseLevel | null {
 if (false) { return null }
else if (code == "CAJJLDLBCS") { return new Level_fun_1_CAJJLDLBCS() }
else { return null }}
