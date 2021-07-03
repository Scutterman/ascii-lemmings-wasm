import { Animation } from "../animation";
import { AnimationListItem, SingleCharacterAnimation, StandardAnimation } from "./types";

const exitAnimation = new Animation([
  [
    '^  ^'.split(''),
    '#/\\#'.split(''),
    '/  \\'.split(''),
    '|  |'.split('')
  ],
  [
    'w  w'.split(''),
    '#/\\#'.split(''),
    '/  \\'.split(''),
    '|  |'.split('')
  ]
])

const grass = new SingleCharacterAnimation('\'', '#00FF00')
const ground = new SingleCharacterAnimation('G', '#825116')
const exit = new StandardAnimation(exitAnimation, '#000000')

export const animationItems = new Map<string, AnimationListItem>()

animationItems.set('grass', grass)
animationItems.set('ground', ground)
animationItems.set('exit', exit)
