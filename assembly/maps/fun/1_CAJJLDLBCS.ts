import { LevelMapDetail, SingleCharacterAnimation } from '../types'

export function load(): LevelMapDetail {
  const lmd = new LevelMapDetail([
    '__________________________________________________________________________',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGG                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGG                            GGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGG                               GGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGG                                    GGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG GGGG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG  GGG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGG    GG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGG GGG    GG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
    '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GG|',
    '|GGGGGGGGG                                      GGGGGGGGGGGGGGGG       GG|',
    '|GGGGGGGGG                                     GGGGGGGGGGGGGGGGGG      GG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG    GGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      GGG|',
    '|GGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       GGG|',
    '|GGGGGG               GGGGGGGGG    GGGGGGGGG                         GGGG|',
    '|GGGGG                                                               GGGG|',
    '|GGGGG                                                               GGGG|',
    '|GGGGG                                                              GGGGG|',
    '|GGGGG                                                             GGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGG                              E        GGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
    '__________________________________________________________________________'
  ])

    lmd.animationList.set('ground', new SingleCharacterAnimation('G', '#825116'))
    lmd.animationList.set('grass', new SingleCharacterAnimation('\'', '#00FF00'))
    lmd.defaultAnimations.set('G', 'ground')
    lmd.customAnimations.set('10,17', 'grass')
    lmd.customAnimations.set('11,17', 'grass')
    lmd.customAnimations.set('12,17', 'grass')
    lmd.customAnimations.set('13,17', 'grass')
    lmd.customAnimations.set('14,17', 'grass')
    lmd.customAnimations.set('15,17', 'grass')
    lmd.customAnimations.set('16,17', 'grass')
    lmd.customAnimations.set('17,17', 'grass')
    lmd.customAnimations.set('18,17', 'grass')
    lmd.customAnimations.set('19,17', 'grass')
    lmd.customAnimations.set('20,17', 'grass')
    lmd.customAnimations.set('21,17', 'grass')
    lmd.customAnimations.set('22,17', 'grass')
    lmd.customAnimations.set('23,17', 'grass')
    lmd.customAnimations.set('24,17', 'grass')
    lmd.customAnimations.set('25,17', 'grass')
    lmd.customAnimations.set('26,17', 'grass')
    lmd.customAnimations.set('27,17', 'grass')
    lmd.customAnimations.set('28,17', 'grass')
    lmd.customAnimations.set('29,17', 'grass')
    lmd.customAnimations.set('30,17', 'grass')
    lmd.customAnimations.set('31,17', 'grass')
    lmd.customAnimations.set('32,17', 'grass')
    lmd.customAnimations.set('33,17', 'grass')
    lmd.customAnimations.set('34,17', 'grass')
    lmd.customAnimations.set('35,17', 'grass')
    lmd.customAnimations.set('36,17', 'grass')
    lmd.customAnimations.set('37,17', 'grass')
    lmd.customAnimations.set('38,17', 'grass')
    lmd.customAnimations.set('39,17', 'grass')
    lmd.customAnimations.set('40,17', 'grass')
    lmd.customAnimations.set('41,17', 'grass')
    lmd.customAnimations.set('42,17', 'grass')
    lmd.customAnimations.set('43,17', 'grass')
    lmd.customAnimations.set('44,17', 'grass')
    lmd.customAnimations.set('45,17', 'grass')
    lmd.customAnimations.set('46,17', 'grass')

    lmd.customAnimations.set('6,29', 'grass')
    lmd.customAnimations.set('7,29', 'grass')
    lmd.customAnimations.set('8,29', 'grass')
    lmd.customAnimations.set('9,29', 'grass')
    lmd.customAnimations.set('0,29', 'grass')
    lmd.customAnimations.set('10,29', 'grass')
    lmd.customAnimations.set('11,29', 'grass')
    lmd.customAnimations.set('12,29', 'grass')
    lmd.customAnimations.set('13,29', 'grass')
    lmd.customAnimations.set('14,29', 'grass')
    lmd.customAnimations.set('15,29', 'grass')
    lmd.customAnimations.set('16,29', 'grass')
    lmd.customAnimations.set('17,29', 'grass')
    lmd.customAnimations.set('18,29', 'grass')
    lmd.customAnimations.set('19,29', 'grass')
    lmd.customAnimations.set('20,29', 'grass')
    lmd.customAnimations.set('21,29', 'grass')
    lmd.customAnimations.set('22,29', 'grass')
    lmd.customAnimations.set('23,29', 'grass')
    lmd.customAnimations.set('24,29', 'grass')
    lmd.customAnimations.set('25,29', 'grass')
    lmd.customAnimations.set('26,29', 'grass')

    lmd.customAnimations.set('27,30', 'grass')
    lmd.customAnimations.set('28,30', 'grass')
    lmd.customAnimations.set('29,30', 'grass')
    lmd.customAnimations.set('30,30', 'grass')
    lmd.customAnimations.set('31,30', 'grass')
    lmd.customAnimations.set('32,30', 'grass')
    lmd.customAnimations.set('33,30', 'grass')
    lmd.customAnimations.set('34,30', 'grass')
    lmd.customAnimations.set('35,30', 'grass')
    lmd.customAnimations.set('36,30', 'grass')
    lmd.customAnimations.set('37,30', 'grass')
    lmd.customAnimations.set('38,30', 'grass')
    lmd.customAnimations.set('39,30', 'grass')
    lmd.customAnimations.set('40,30', 'grass')
    lmd.customAnimations.set('41,30', 'grass')
    lmd.customAnimations.set('42,30', 'grass')
    lmd.customAnimations.set('43,30', 'grass')
    lmd.customAnimations.set('44,30', 'grass')
    lmd.customAnimations.set('45,30', 'grass')
    lmd.customAnimations.set('46,30', 'grass')
    lmd.customAnimations.set('47,30', 'grass')
    lmd.customAnimations.set('48,30', 'grass')
    lmd.customAnimations.set('49,30', 'grass')
    lmd.customAnimations.set('50,30', 'grass')
    lmd.customAnimations.set('51,30', 'grass')
    lmd.customAnimations.set('52,30', 'grass')
    lmd.customAnimations.set('53,30', 'grass')
    lmd.customAnimations.set('54,30', 'grass')
    lmd.customAnimations.set('55,30', 'grass')
    lmd.customAnimations.set('56,30', 'grass')
    lmd.customAnimations.set('57,30', 'grass')
    lmd.customAnimations.set('58,30', 'grass')
    lmd.customAnimations.set('59,30', 'grass')
    lmd.customAnimations.set('60,30', 'grass')
    lmd.customAnimations.set('61,30', 'grass')
    lmd.customAnimations.set('62,30', 'grass')
    lmd.customAnimations.set('63,30', 'grass')
    lmd.customAnimations.set('64,30', 'grass')
    lmd.customAnimations.set('65,30', 'grass')
    return lmd
  }
