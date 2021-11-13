import { Level_fun_1_CAJJLDLBCS } from "./fun_1_CAJJLDLBCS"
import { Level_AUTO_1_SOON } from "./AUTO_1_SOON"
import { BaseLevel } from "../levels/baseLevel"
export function getLevelByCode(code: string): BaseLevel | null {
 if (false) { return null }
else if (code == "CAJJLDLBCS") { return new Level_fun_1_CAJJLDLBCS() }
else if (code == "SOON") { return new Level_AUTO_1_SOON() }
else { return null }}
