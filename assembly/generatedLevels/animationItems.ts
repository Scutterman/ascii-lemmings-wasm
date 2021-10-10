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
const LEMMING_WALKAnimation = new Animation([
[
[" "," ","w","w","w","w"," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" ","W","w","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
],
[
[" "," ","w","w","w"," "," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," ","w","w","w"," ","w"," "],
[" "," "," ","w","w"," ","w"," "],
[" "," ","w","w"," ","w"," "," "],
],
[
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," ","w","w","w"," "," "," "],
[" ","w","w","w","w","w"," "," "],
[" "," ","w","w","w","w"," "," "],
[" ","w","w"," "," ","w","w"," "],
],
[
[" "," "," "," ","W","w"," "," "],
[" "," "," ","w","w","w","w"," "],
[" "," "," ","w","w","w","w"," "],
[" "," "," "," ","w","w"," "," "],
[" "," "," ","W","w","W"," "," "],
[" "," "," "," ","W","W"," "," "],
[" "," ","W","w","w","W","W"," "],
[" "," ","w"," "," ","W","W"," "],
],
])
const LEMMING_WALK_FLIPPEDAnimation = new Animation([
[
[" "," ","w","w","w","w"," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w","w","W"," "],
[" "," "," ","w","w"," "," "," "],
],
[
[" "," "," ","w","w","w"," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," "," ","w","w","w"," "," "],
[" ","w"," ","w","w","w"," "," "],
[" ","w"," ","w","w"," "," "," "],
[" "," ","w"," ","w","w"," "," "],
],
[
[" "," "," ","w","w","w"," "," "],
[" "," "," ","w","w"," "," "," "],
[" "," ","w","w","w"," "," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," "," ","w","w","w"," "," "],
[" "," ","w","w","w","w","w"," "],
[" "," ","w","w","w","w"," "," "],
[" ","w","w"," "," ","w","w"," "],
],
[
[" "," ","w","W"," "," "," "," "],
[" ","w","w","w","w"," "," "," "],
[" ","w","w","w","w"," "," "," "],
[" "," ","w","w"," "," "," "," "],
[" "," ","W","w","W"," "," "," "],
[" "," ","W","W"," "," "," "," "],
[" ","W","W","w","w","W"," "," "],
[" ","W","W"," "," ","w"," "," "],
],
])
const LEMMING_FALLAnimation = new Animation([
[
[" "," "," ","f","F"," "," "," "],
[" "," ","f","f","F"," "," "," "],
[" "," ","f","f","f","f"," "," "],
[" ","F"," ","f","f"," ","F"," "],
[" "," ","F","f","f","F"," "," "],
[" "," "," ","F","F"," "," "," "],
[" ","F"," ","F","f","F"," "," "],
[" "," ","F","F"," "," ","F"," "],
],
[
[" "," ","F"," ","f"," "," "," "],
[" "," ","f","f","f"," "," "," "],
[" "," "," ","f","f","F"," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","f","F","F","f","f","F"," "],
[" "," "," ","f","f"," "," "," "],
[" "," "," ","F","f","f","F"," "],
[" ","f","f","F"," "," "," "," "],
],
[
[" "," ","f","f","f"," "," "," "],
[" "," ","f","f","F","F"," "," "],
[" "," "," ","f","f"," "," "," "],
[" "," ","F","f","F","F"," "," "],
[" ","F"," ","F","F"," ","F"," "],
[" "," "," ","f","f","F"," "," "],
[" "," ","F","F"," "," "," "," "],
[" ","f"," "," "," "," "," "," "],
],
[
[" "," ","f"," ","F"," "," "," "],
[" "," ","F","F","f"," "," "," "],
[" "," ","f","f","f","f"," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","f","f","f","f","f","F"," "],
[" "," "," ","f","f"," "," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","f","f","F","f","f","f"," "],
],
])
const LEMMING_FALL_FLIPPEDAnimation = new Animation([
[
[" "," "," ","F","f"," "," "," "],
[" "," "," ","F","f","f"," "," "],
[" "," ","f","f","f","f"," "," "],
[" ","F"," ","f","f"," ","F"," "],
[" "," ","F","f","f","F"," "," "],
[" "," "," ","F","F"," "," "," "],
[" "," ","F","f","F"," ","F"," "],
[" ","F"," "," ","F","F"," "," "],
],
[
[" "," "," ","f"," ","F"," "," "],
[" "," "," ","f","f","f"," "," "],
[" "," ","F","f","f"," "," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","F","f","f","F","F","f"," "],
[" "," "," ","f","f"," "," "," "],
[" ","F","f","f","F"," "," "," "],
[" "," "," "," ","F","f","f"," "],
],
[
[" "," "," ","f","f","f"," "," "],
[" "," ","F","F","f","f"," "," "],
[" "," "," ","f","f"," "," "," "],
[" "," ","F","F","f","F"," "," "],
[" ","F"," ","F","F"," ","F"," "],
[" "," ","F","f","f"," "," "," "],
[" "," "," "," ","F","F"," "," "],
[" "," "," "," "," "," ","f"," "],
],
[
[" "," "," ","F"," ","f"," "," "],
[" "," "," ","f","F","F"," "," "],
[" "," ","f","f","f","f"," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","F","f","f","f","f","f"," "],
[" "," "," ","f","f"," "," "," "],
[" "," "," ","f","f"," "," "," "],
[" ","f","f","f","F","f","f"," "],
],
])
export const animationItems = new Map<string, AnimationListItem>()
const exit = new StandardAnimation(exitAnimation, "#00FF00", 0)
animationItems.set("exit", exit)
const digRight = new StandardAnimation(digRightAnimation, "#0ccf11", 2)
animationItems.set("digRight", digRight)
const grassland_grass = new SingleCharacterAnimation("'", "#00FF00", 15)
animationItems.set("grassland_grass", grassland_grass)
const grassland_ground = new SingleCharacterAnimation("G", "#825116", 15)
animationItems.set("grassland_ground", grassland_ground)
const DIGLEFT = new StandardAnimation(DIGLEFTAnimation, "#FF0080", 8)
animationItems.set("DIGLEFT", DIGLEFT)
const TRAP_PISTON = new StandardAnimation(TRAP_PISTONAnimation, "#0ccf11", 0)
animationItems.set("TRAP_PISTON", TRAP_PISTON)
const LEMMING_WALK = new StandardAnimation(LEMMING_WALKAnimation, "#2866d7", 0)
animationItems.set("LEMMING_WALK", LEMMING_WALK)
const LEMMING_WALK_FLIPPED = new StandardAnimation(LEMMING_WALK_FLIPPEDAnimation, "#2866d7", 0)
animationItems.set("LEMMING_WALK_FLIPPED", LEMMING_WALK_FLIPPED)
const LEMMING_FALL = new StandardAnimation(LEMMING_FALLAnimation, "#2866d7", 0)
animationItems.set("LEMMING_FALL", LEMMING_FALL)
const LEMMING_FALL_FLIPPED = new StandardAnimation(LEMMING_FALL_FLIPPEDAnimation, "#2866d7", 0)
animationItems.set("LEMMING_FALL_FLIPPED", LEMMING_FALL_FLIPPED)
