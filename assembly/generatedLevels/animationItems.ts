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
export const animationItems = new Map<string, AnimationListItem>()
const exit = new StandardAnimation(exitAnimation, "#000000")
animationItems.set("exit", exit)
const grass = new SingleCharacterAnimation("'", "#00FF00")
animationItems.set("grass", grass)
const ground = new SingleCharacterAnimation("G", "#825116")
animationItems.set("ground", ground)
