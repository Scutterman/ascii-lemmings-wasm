import { Animation, BlockSide } from "../animation"
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
digRightAnimation.setCanDestroySides(BlockSide.Right)
export const animationItems = new Map<string, AnimationListItem>()
const exit = new StandardAnimation(exitAnimation, "#000000")
animationItems.set("exit", exit)
const digRight = new StandardAnimation(digRightAnimation, "#000000")
animationItems.set("digRight", digRight)
const grassland_grass = new SingleCharacterAnimation("'", "#00FF00", BlockSide.All)
animationItems.set("grassland_grass", grassland_grass)
const grassland_ground = new SingleCharacterAnimation("G", "#825116", BlockSide.All)
animationItems.set("grassland_ground", grassland_ground)
