export function getCharacterRender(character: string): string[] {
  character = character.toUpperCase()
  const renderedCharacter: string[] = []

  if (characterLocationMap.has(character)) {
    const characterStartIndex = characterLocationMap.get(character)
    const characterWidth = exceptionalCharacterWidths.has(character) ? exceptionalCharacterWidths.get(character) : 7
    for (let characterRow = 0; characterRow < font.length; characterRow++) {
      renderedCharacter.push(font[characterRow].substr(characterStartIndex, characterWidth))
    }
  }

  return renderedCharacter
}

const exceptionalCharacterWidths = new Map<string, u8>()
exceptionalCharacterWidths.set('Q', 8)
exceptionalCharacterWidths.set('∞', 11)
const font: string[] = [ //                                                                                                                                                                                                                                                                                            Apost-        Question
//                                                                                                                                                                                                                                                              SPACE  COLON Percent FSlash BSlash  Infinity    Period rophie        Mark   Bang   Dash   Carat  Hash   Pipe   U'Score Equal RAngle LAngle | 
  '  A    BB       CCC  DDD    EEEEE  FFFFF   GGGG  H   H  IIIII  JJJJJ  K   K  L      M   M  N   N   OOO   PPPP     Q     RRRR    SSS   TTTTT  U   U  V   V  W   W  X   X  Y   Y  ZZZZZ   000     1     222   3333      4   55555   666   77777   888    999           :::   %%  %      /  \\\\                        \'\'    ' + '???     !!             ^     # #     |                      <  >      ',
  ' AAA   B B     C     D  D   E      F      G      H   H    I      J    K KK   L      MM MM  NN  N  O   O  P   P  Q   Q   R   R  S        T    U   U  V   V  W   W   X X    Y Y      Z   0   0   11    2   2      3    44   5      6         7   8   8  9   9          :::      %      //   \\\\     ∞∞∞ ∞∞∞           \'\'    ' + '   ?    !!     ---    ^ ^   #####    |           =====    <      >    ',
  'A   A  BBBB   C      D   D  EEEEE  FFFFF  G  GG  HHHHH    I      J    KK     L      M M M  N N N  O   O  PPPP   Q Q Q   RRRR    SS      T    U   U   V V   W W W    X      Y      Z    0 0 0    1       2    333    4 4    555   6666     7     888    9999                  %      //     \\\\   ∞   ∞   ∞                ' +   ' ??     !!     ---           # #     |                  <<        >>  ',
  'AAAAA  B   B   C     D  D   E      F      G   G  H   H    I      J    K KK   L      M   M  N  NN  O   O  P      Q  QQ   R R       S     T    UU UU   V V   WW WW   X X     Y     Z     0   0    1     22        3  44444      5  6   6   7     8   8      9          :::    %      //       \\\\   ∞∞∞ ∞∞∞   ..            ' +   ' ?                          #####    |    _____  =====    <      >    ',
  'A   A  BBBB     CCC  DDD    EEEEE  F       GGGG  H   H  IIIII  JJ     K   K  LLLLL  M   M  N   N   OOO   P        Q  Q  R   R  SSS      T     UUU     V    W   W  X   X    Y    ZZZZZ   000   11111  22222  3333      4   5555    666   7       888    999           :::   %  %%  //         \\\\            ..            ' +   '???     !!                   # #     |    _____             <  >      ',
]

const characterLocationMap = new Map<string, u16>()
characterLocationMap.set('A',0)
characterLocationMap.set('B',7)
characterLocationMap.set('C',14)
characterLocationMap.set('D',21)
characterLocationMap.set('E',28)
characterLocationMap.set('F',35)
characterLocationMap.set('G',42)
characterLocationMap.set('H',49)
characterLocationMap.set('I',56)
characterLocationMap.set('J',63)
characterLocationMap.set('K',70)
characterLocationMap.set('L',77)
characterLocationMap.set('M',84)
characterLocationMap.set('N',91)
characterLocationMap.set('O',98)
characterLocationMap.set('P',105)
characterLocationMap.set('Q',112)
characterLocationMap.set('R',120)
characterLocationMap.set('S',127)
characterLocationMap.set('T',134)
characterLocationMap.set('U',141)
characterLocationMap.set('V',148)
characterLocationMap.set('W',155)
characterLocationMap.set('X',162)
characterLocationMap.set('Y',169)
characterLocationMap.set('Z',176)
characterLocationMap.set('0',183)
characterLocationMap.set('1',190)
characterLocationMap.set('2',197)
characterLocationMap.set('3',204)
characterLocationMap.set('4',211)
characterLocationMap.set('5',218)
characterLocationMap.set('6',225)
characterLocationMap.set('7',232)
characterLocationMap.set('8',239)
characterLocationMap.set('9',246)
characterLocationMap.set(' ',253)
characterLocationMap.set(':',260)
characterLocationMap.set('%',267)
characterLocationMap.set('/',274)
characterLocationMap.set('\\',281)
characterLocationMap.set('∞',288)
characterLocationMap.set('.',299)
characterLocationMap.set('\'',306)
characterLocationMap.set('?',313)
characterLocationMap.set('!',320)
characterLocationMap.set('-',327)
characterLocationMap.set('^',334)
characterLocationMap.set('#',341)
characterLocationMap.set('|',348)
characterLocationMap.set('_',355)
characterLocationMap.set('=',362)
characterLocationMap.set('<',369)
characterLocationMap.set('>',376)
