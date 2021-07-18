import { LevelMap } from '../../types'
import { LevelMapDetail, SingleCharacterAnimation } from '../types'

const lm: LevelMap = [
  //EDITORHINT::MAP_START
  '__________________________________________________________________________________________________',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGG                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGG                            GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGG                               GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGG                                    GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGGGGGG GGGG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGGG  GGGGGGGGGGGGGGGGGGGGGG  GGG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGGGGGG    GGGGGGGGGGGGGGGGGGGG    GG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGG GGG    GGGGGGGGGGGGGGGG GGG    GG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GGGGGGGGGGGGGGGG        GG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GGGGGGGGGGGGGGGG        GG|',
  '|GGGGGGGGG                                       GGGGGGGGGGGGGG        GGGGGGGGGGGGGGGG        GG|',
  '|GGGGGGGGG                                      GGGGGGGGGGGGGGGG       GGGGGGGGGGGGGGGGG       GG|',
  '|GGGGGGGGG                                     GGGGGGGGGGGGGGGGGG      GGGGGGGGGGGGGGGGGG      GG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGG     GG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGG     GG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGG     GGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGG     GGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG    GGGGGGGGGGGGGGGGGGGG    GGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      GGGGGGGGGGGGGGGGGG      GGG|',
  '|GGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       GGGGGGGGGGGGGGGGG       GGG|',
  '|GGGGGG               GGGGGGGGG    GGGGGGGGG                         GGGG                    GGGG|',
  '|GGGGG                                                               GGGG                    GGGG|',
  '|GGGGG                                                               GGGG                    GGGG|',
  '|GGGGG                                                              GGGGG                   GGGGG|',
  '|GGGGG                                                             GGGGGG                  GGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGG                              E        GGGGGGG        E        GGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      GGGGGGGGGGGGGGGGGG      GGG|',
  '|GGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       GGGGGGGGGGGGGGGGG       GGG|',
  '|GGGGGG               GGGGGGGGG    GGGGGGGGG                         GGGG                    GGGG|',
  '|GGGGG                                                               GGGG                    GGGG|',
  '|GGGGG                                                               GGGG                    GGGG|',
  '|GGGGG                                                              GGGGG                   GGGGG|',
  '|GGGGG                                                             GGGGGG                  GGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGG                              E        GGGGGGG        E        GGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|',
  '|GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG|'
  //EDITORHINT::MAP_END
]

export function load(): LevelMapDetail {
  const lmd = new LevelMapDetail(lm)
    //EDITORHINT::DEFAULT_ANIMATIONS::G,ground
    lmd.defaultAnimations.set('G', 'ground')

    //EDITORHINT::CUSTOM_ANIMATIONS::10,17,grass
    lmd.customAnimations.set('10,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::11,17,grass
    lmd.customAnimations.set('11,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::12,17,grass
    lmd.customAnimations.set('12,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::13,17,grass
    lmd.customAnimations.set('13,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::14,17,grass
    lmd.customAnimations.set('14,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::15,17,grass
    lmd.customAnimations.set('15,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::16,17,grass
    lmd.customAnimations.set('16,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::17,17,grass
    lmd.customAnimations.set('17,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::18,17,grass
    lmd.customAnimations.set('18,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::19,17,grass
    lmd.customAnimations.set('19,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::20,17,grass
    lmd.customAnimations.set('20,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::21,17,grass
    lmd.customAnimations.set('21,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::22,17,grass
    lmd.customAnimations.set('22,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::23,17,grass
    lmd.customAnimations.set('23,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::24,17,grass
    lmd.customAnimations.set('24,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::25,17,grass
    lmd.customAnimations.set('25,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::26,17,grass
    lmd.customAnimations.set('26,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::27,17,grass
    lmd.customAnimations.set('27,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::28,17,grass
    lmd.customAnimations.set('28,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::29,17,grass
    lmd.customAnimations.set('29,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::30,17,grass
    lmd.customAnimations.set('30,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::31,17,grass
    lmd.customAnimations.set('31,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::32,17,grass
    lmd.customAnimations.set('32,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::33,17,grass
    lmd.customAnimations.set('33,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::34,17,grass
    lmd.customAnimations.set('34,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::35,17,grass
    lmd.customAnimations.set('35,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::36,17,grass
    lmd.customAnimations.set('36,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::37,17,grass
    lmd.customAnimations.set('37,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::38,17,grass
    lmd.customAnimations.set('38,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::39,17,grass
    lmd.customAnimations.set('39,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::40,17,grass
    lmd.customAnimations.set('40,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::41,17,grass
    lmd.customAnimations.set('41,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::42,17,grass
    lmd.customAnimations.set('42,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::43,17,grass
    lmd.customAnimations.set('43,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::44,17,grass
    lmd.customAnimations.set('44,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::45,17,grass
    lmd.customAnimations.set('45,17', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::46,17,grass
    lmd.customAnimations.set('46,17', 'grass')

    //EDITORHINT::CUSTOM_ANIMATIONS::6,29,grass
    lmd.customAnimations.set('6,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::7,29,grass
    lmd.customAnimations.set('7,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::8,29,grass
    lmd.customAnimations.set('8,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::9,29,grass
    lmd.customAnimations.set('9,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::0,29,grass
    lmd.customAnimations.set('0,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::10,29,grass
    lmd.customAnimations.set('10,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::11,29,grass
    lmd.customAnimations.set('11,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::12,29,grass
    lmd.customAnimations.set('12,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::13,29,grass
    lmd.customAnimations.set('13,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::14,29,grass
    lmd.customAnimations.set('14,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::15,29,grass
    lmd.customAnimations.set('15,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::16,29,grass
    lmd.customAnimations.set('16,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::17,29,grass
    lmd.customAnimations.set('17,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::18,29,grass
    lmd.customAnimations.set('18,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::19,29,grass
    lmd.customAnimations.set('19,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::20,29,grass
    lmd.customAnimations.set('20,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::21,29,grass
    lmd.customAnimations.set('21,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::22,29,grass
    lmd.customAnimations.set('22,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::23,29,grass
    lmd.customAnimations.set('23,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::24,29,grass
    lmd.customAnimations.set('24,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::25,29,grass
    lmd.customAnimations.set('25,29', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::26,29,grass
    lmd.customAnimations.set('26,29', 'grass')

    //EDITORHINT::CUSTOM_ANIMATIONS::27,30,grass
    lmd.customAnimations.set('27,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::28,30,grass
    lmd.customAnimations.set('28,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::29,30,grass
    lmd.customAnimations.set('29,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::30,30,grass
    lmd.customAnimations.set('30,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::31,30,grass
    lmd.customAnimations.set('31,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::32,30,grass
    lmd.customAnimations.set('32,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::33,30,grass
    lmd.customAnimations.set('33,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::34,30,grass
    lmd.customAnimations.set('34,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::35,30,grass
    lmd.customAnimations.set('35,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::36,30,grass
    lmd.customAnimations.set('36,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::37,30,grass
    lmd.customAnimations.set('37,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::38,30,grass
    lmd.customAnimations.set('38,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::39,30,grass
    lmd.customAnimations.set('39,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::40,30,grass
    lmd.customAnimations.set('40,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::41,30,grass
    lmd.customAnimations.set('41,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::42,30,grass
    lmd.customAnimations.set('42,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::43,30,grass
    lmd.customAnimations.set('43,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::44,30,grass
    lmd.customAnimations.set('44,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::45,30,grass
    lmd.customAnimations.set('45,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::46,30,grass
    lmd.customAnimations.set('46,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::47,30,grass
    lmd.customAnimations.set('47,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::48,30,grass
    lmd.customAnimations.set('48,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::49,30,grass
    lmd.customAnimations.set('49,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::50,30,grass
    lmd.customAnimations.set('50,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::51,30,grass
    lmd.customAnimations.set('51,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::52,30,grass
    lmd.customAnimations.set('52,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::53,30,grass
    lmd.customAnimations.set('53,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::54,30,grass
    lmd.customAnimations.set('54,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::55,30,grass
    lmd.customAnimations.set('55,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::56,30,grass
    lmd.customAnimations.set('56,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::57,30,grass
    lmd.customAnimations.set('57,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::58,30,grass
    lmd.customAnimations.set('58,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::59,30,grass
    lmd.customAnimations.set('59,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::60,30,grass
    lmd.customAnimations.set('60,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::61,30,grass
    lmd.customAnimations.set('61,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::62,30,grass
    lmd.customAnimations.set('62,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::63,30,grass
    lmd.customAnimations.set('63,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::64,30,grass
    lmd.customAnimations.set('64,30', 'grass')
    //EDITORHINT::CUSTOM_ANIMATIONS::65,30,grass
    lmd.customAnimations.set('65,30', 'grass')

    return lmd
  }
