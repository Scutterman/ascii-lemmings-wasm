import { Animation } from "../animation"
import { AnimationListItem, SingleCharacterAnimation, StandardAnimation } from "../maps/types"
const exitAnimation = new Animation([
[
["^"," "," ","^"],
["#","/","\\","#"],
["/"," "," ","\\"],
["|"," "," ","|"],
],
[
["w"," "," ","w"],
["#","/","\\","#"],
["/"," "," ","\\"],
["|"," "," ","|"],
],
])
const digRightAnimation = new Animation([
[
[" "," "," ","/"],
[" "," ","/"," "],
[" "," ","\\"," "],
[" "," "," ","\\"],
],
[
[" "," ","/"," "],
[" ","/"," "," "],
[" ","\\"," "," "],
[" "," ","\\"," "],
],
[
[" ","/"," "," "],
["/"," "," "," "],
["\\"," "," "," "],
[" ","\\"," "," "],
],
])
const DIGLEFTAnimation = new Animation([
[
["\\"," "," "," "],
[" ","\\"," "," "],
[" ","/"," "," "],
["/"," "," "," "],
],
[
[" ","\\"," "," "],
[" "," ","\\"," "],
[" "," ","/"," "],
[" ","/"," "," "],
],
[
[" "," ","\\"," "],
[" "," "," ","\\"],
[" "," "," ","/"],
[" "," ","/"," "],
],
])
const TRAP_PISTONAnimation = new Animation([
[
[" "," "," "," "],
[" "," "," "," "],
[" "," "," "," "],
["_","_","_","_"],
],
[
[" "," "," "," "],
[" "," "," "," "],
["_","_","_","_"],
["_","_","_","_"],
],
[
[" "," "," "," "],
["_","_","_","_"],
["_","_","_","_"],
[" ","|","|"," "],
],
[
["_","_","_","_"],
["_","_","_","_"],
[" ","|","|"," "],
[" ","|","|"," "],
],
[
[" "," "," "," "],
["_","_","_","_"],
["_","_","_","_"],
[" ","|","|"," "],
],
[
[" "," "," "," "],
[" "," "," "," "],
["_","_","_","_"],
["_","_","_","_"],
],
[
[" "," "," "," "],
[" "," "," "," "],
[" "," "," "," "],
["_","_","_","_"],
],
])
export const animationItems = new Map<string, AnimationListItem>()
const exit = new StandardAnimation(exitAnimation, "#000000", 0)
animationItems.set("exit", exit)
const digRight = new StandardAnimation(digRightAnimation, "#000000", 2)
animationItems.set("digRight", digRight)
const grassland_grass = new SingleCharacterAnimation("'", "#00FF00", 15)
animationItems.set("grassland_grass", grassland_grass)
const grassland_ground = new SingleCharacterAnimation("G", "#825116", 15)
animationItems.set("grassland_ground", grassland_ground)
const DIGLEFT = new StandardAnimation(DIGLEFTAnimation, "#FF0080", 8)
animationItems.set("DIGLEFT", DIGLEFT)
const TRAP_PISTON = new StandardAnimation(TRAP_PISTONAnimation, "#000000", 0)
animationItems.set("TRAP_PISTON", TRAP_PISTON)
