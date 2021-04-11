(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_none (func))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $none_=>_f64 (func (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "Date" "now" (func $~lib/bindings/Date/now (result f64)))
 (import "index" "log" (func $assembly/index/log (param i32)))
 (import "loop" "clear" (func $assembly/loop/clear))
 (import "loop" "addLayer" (func $assembly/loop/addLayer))
 (import "loop" "display" (func $assembly/loop/display (param i32)))
 (memory $0 1)
 (data (i32.const 1036) "\1c")
 (data (i32.const 1048) "\01\00\00\00\02\00\00\00_")
 (data (i32.const 1068) "\1c")
 (data (i32.const 1080) "\01\00\00\00\02\00\00\00|")
 (data (i32.const 1100) "\1c")
 (data (i32.const 1112) "\01\00\00\00\02\00\00\00O")
 (data (i32.const 1132) "\1c")
 (data (i32.const 1144) "\01\00\00\00\02\00\00\00E")
 (data (i32.const 1164) "\1c")
 (data (i32.const 1176) "\01\00\00\00\02\00\00\00 ")
 (data (i32.const 1196) "\1c")
 (data (i32.const 1208) "\01\00\00\00\02\00\00\00G")
 (data (i32.const 1228) "\1c")
 (data (i32.const 1240) "\01\00\00\00\02\00\00\00-")
 (data (i32.const 1260) "\1c")
 (data (i32.const 1272) "\01\00\00\00\02\00\00\00T")
 (data (i32.const 1292) "<")
 (data (i32.const 1304) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1356) "<")
 (data (i32.const 1368) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1484) "<")
 (data (i32.const 1496) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1548) ",")
 (data (i32.const 1560) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1628) "<")
 (data (i32.const 1640) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1692) ",")
 (data (i32.const 1704) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1740) "<")
 (data (i32.const 1752) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1804) "<")
 (data (i32.const 1816) "\01\00\00\00*\00\00\00Y\00o\00u\00 \00p\00a\00s\00s\00e\00d\00 \00t\00h\00e\00 \00l\00e\00v\00e\00l\00!")
 (data (i32.const 1868) "L")
 (data (i32.const 1880) "\01\00\00\00.\00\00\00C\00a\00n\00 \00y\00o\00u\00 \00d\00o\00 \00i\00t\00 \00a\00g\00a\00i\00n\00.\00.\00.\00?")
 (data (i32.const 1948) "\\")
 (data (i32.const 1960) "\01\00\00\00@\00\00\00Y\00o\00u\00 \00d\00i\00d\00n\00\'\00t\00 \00s\00a\00v\00e\00 \00e\00n\00o\00u\00g\00h\00 \00t\00h\00i\00s\00 \00t\00i\00m\00e")
 (data (i32.const 2044) "L")
 (data (i32.const 2056) "\01\00\00\008\00\00\00W\00o\00u\00l\00d\00 \00y\00o\00u\00 \00l\00i\00k\00e\00 \00t\00o\00 \00t\00r\00y\00 \00a\00g\00a\00i\00n\00?")
 (data (i32.const 2124) "\1c")
 (data (i32.const 2156) "\1c")
 (data (i32.const 2188) "\1c")
 (data (i32.const 2220) "\1c")
 (data (i32.const 2232) "\01\00\00\00\02\00\00\00C")
 (data (i32.const 2252) "\1c")
 (data (i32.const 2264) "\1a\00\00\00\08\00\00\00\01")
 (data (i32.const 2284) "\1c")
 (data (i32.const 2296) "\01")
 (data (i32.const 2316) ",")
 (data (i32.const 2328) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 2364) "\1c")
 (data (i32.const 2376) "\01\00\00\00\02\00\00\000")
 (data (i32.const 2396) ",")
 (data (i32.const 2408) "\01\00\00\00\1a\00\00\00G\00I\00F\00T\00_\00C\00O\00U\00N\00T\00E\00R\00_")
 (data (i32.const 2444) "|")
 (data (i32.const 2456) "\01\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006")
 (data (i32.const 2572) "<")
 (data (i32.const 2584) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s")
 (data (i32.const 2636) "\\")
 (data (i32.const 2648) "\01\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z")
 (data (i32.const 2732) "\1c")
 (data (i32.const 2744) "\01\00\00\00\02\00\00\00U")
 (data (i32.const 2764) "\1c")
 (data (i32.const 2776) "\1a\00\00\00\08\00\00\00\02")
 (data (i32.const 2796) "\1c")
 (data (i32.const 2808) "\01\00\00\00\02\00\00\00*")
 (data (i32.const 2828) "\1c")
 (data (i32.const 2840) "\1a\00\00\00\08\00\00\00\03")
 (data (i32.const 2860) "\1c")
 (data (i32.const 2872) "\1a\00\00\00\08\00\00\00\04")
 (data (i32.const 2892) "\1c")
 (data (i32.const 2904) "\01\00\00\00\02\00\00\00/")
 (data (i32.const 2924) "\1c")
 (data (i32.const 2936) "\1a\00\00\00\08\00\00\00\05")
 (data (i32.const 2956) "\1c")
 (data (i32.const 2968) "\01\00\00\00\02\00\00\00B")
 (data (i32.const 2988) "\1c")
 (data (i32.const 3000) "\1a\00\00\00\08\00\00\00\06")
 (data (i32.const 3020) "\1c")
 (data (i32.const 3032) "\01\00\00\00\02\00\00\00\\")
 (data (i32.const 3052) "\1c")
 (data (i32.const 3064) "\1a\00\00\00\08\00\00\00\07")
 (data (i32.const 3084) "\1c")
 (data (i32.const 3096) "\01\00\00\00\02\00\00\00D")
 (data (i32.const 3116) "\1c")
 (data (i32.const 3128) "\1a\00\00\00\08\00\00\00\08")
 (data (i32.const 3148) "\1c")
 (data (i32.const 3160) "\01\00\00\00\02\00\00\00m")
 (data (i32.const 3180) "\1c")
 (data (i32.const 3192) "\1a\00\00\00\08\00\00\00\t")
 (data (i32.const 3212) "\1c")
 (data (i32.const 3244) "\\")
 (data (i32.const 3256) "\01\00\00\00D\00\00\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_")
 (data (i32.const 3340) "\\")
 (data (i32.const 3352) "\01\00\00\00D\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00|")
 (data (i32.const 3436) "<")
 (data (i32.const 3452) " \00\00\00\c0\0c\00\00 \0d\00\00 \0d\00\00 \0d\00\00 \0d\00\00 \0d\00\00 \0d\00\00\c0\0c")
 (data (i32.const 3500) "\1c")
 (data (i32.const 3532) "|")
 (data (i32.const 3544) "\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 3660) "\1c")
 (data (i32.const 3672) "\01\00\00\00\n\00\00\00S\00t\00a\00r\00t")
 (data (i32.const 3692) "L")
 (data (i32.const 3704) "\01\00\00\008\00\00\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_\00_")
 (data (i32.const 3772) "L")
 (data (i32.const 3784) "\01\00\00\008\00\00\00|\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00|")
 (data (i32.const 3852) "L")
 (data (i32.const 3864) "\01\00\00\008\00\00\00|\00 \00 \00 \00O\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00G\00G\00 \00 \00G\00|")
 (data (i32.const 3932) "L")
 (data (i32.const 3944) "\01\00\00\008\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00G\00G\00 \00 \00G\00|")
 (data (i32.const 4012) "L")
 (data (i32.const 4024) "\01\00\00\008\00\00\00|\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00G\00 \00 \00G\00|")
 (data (i32.const 4092) "L")
 (data (i32.const 4104) "\01\00\00\008\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00G\00 \00 \00G\00|")
 (data (i32.const 4172) "L")
 (data (i32.const 4184) "\01\00\00\008\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00E\00 \00 \00G\00|")
 (data (i32.const 4252) "L")
 (data (i32.const 4264) "\01\00\00\008\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00|")
 (data (i32.const 4332) "\\")
 (data (i32.const 4348) "D\00\00\00\80\0e\00\00\d0\0e\00\00 \0f\00\00p\0f\00\00p\0f\00\00p\0f\00\00p\0f\00\00\c0\0f\00\00\10\10\00\00\10\10\00\00\10\10\00\00`\10\00\00\d0\0e\00\00\80\0e\00\00\b0\10\00\00\b0\10\00\00\80\0e")
 (data (i32.const 4428) "\1c")
 (data (i32.const 4440) "\01\00\00\00\02\00\00\00\1e\"")
 (data (i32.const 4460) "\1c")
 (data (i32.const 4472) "\1a\00\00\00\08\00\00\00\n")
 (data (i32.const 4492) "\1c")
 (data (i32.const 4524) "\1c")
 (data (i32.const 4556) "l")
 (data (i32.const 4568) "\01\00\00\00V\00\00\00i\00n\00s\00e\00r\00t\00T\00e\00x\00t\00:\00 \00l\00i\00n\00e\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00o\00u\00t\00 \00o\00f\00 \00m\00a\00p\00 \00b\00o\00u\00n\00d\00s")
 (data (i32.const 4668) "\\")
 (data (i32.const 4680) "\01\00\00\00D\00\00\00i\00n\00s\00e\00r\00t\00T\00e\00x\00t\00:\00 \00t\00e\00x\00t\00 \00o\00u\00t\00 \00o\00f\00 \00m\00a\00p\00 \00b\00o\00u\00n\00d\00s")
 (data (i32.const 4764) ",")
 (data (i32.const 4776) "\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s")
 (data (i32.const 4812) "<")
 (data (i32.const 4824) "\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t")
 (data (i32.const 4876) ",")
 (data (i32.const 4888) "\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s")
 (data (i32.const 4924) "\1c")
 (data (i32.const 4940) "\04\00\00\00\00\05")
 (data (i32.const 4956) "\1c")
 (data (i32.const 4972) "\04\00\00\00`\0b")
 (data (i32.const 4988) "\1c")
 (data (i32.const 5004) "\04\00\00\00\a0\0b")
 (data (i32.const 5020) "\1c")
 (data (i32.const 5036) "\04\00\00\00\e0\0b")
 (data (i32.const 5052) "\1c")
 (data (i32.const 5068) "\04\00\00\00 \0c")
 (data (i32.const 5084) "\1c")
 (data (i32.const 5096) "\01\00\00\00\02\00\00\00k")
 (data (i32.const 5116) "\1c")
 (data (i32.const 5132) "\04\00\00\00\f0\13")
 (data (i32.const 5148) "\1c")
 (data (i32.const 5160) "\01\00\00\00\02\00\00\00l")
 (data (i32.const 5180) "\1c")
 (data (i32.const 5196) "\04\00\00\000\14")
 (data (i32.const 5212) "\\")
 (data (i32.const 5224) "\01\00\00\00D\00\00\00|\00 \00 \00 \00A\00l\00l\00 \00l\00e\00m\00m\00i\00n\00g\00s\00 \00a\00c\00c\00o\00u\00n\00t\00e\00d\00 \00f\00o\00r\00 \00 \00 \00|")
 (data (i32.const 5308) "\\")
 (data (i32.const 5320) "\01\00\00\00D\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00Y\00o\00u\00 \00n\00e\00e\00d\00e\00d\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00|")
 (data (i32.const 5404) "\\")
 (data (i32.const 5416) "\01\00\00\00D\00\00\00|\00 \00 \00 \00 \00 \00 \00 \00 \00Y\00o\00u\00 \00r\00e\00s\00c\00u\00e\00d\00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00 \00|")
 (data (i32.const 5500) "<")
 (data (i32.const 5516) " \00\00\00\c0\0c\00\00p\14\00\00\d0\14\00\000\15\00\00 \0d\00\00 \0d\00\00 \0d\00\00\c0\0c")
 (data (i32.const 5564) ",")
 (data (i32.const 5576) "\01\00\00\00\0e\00\00\00R\00e\00s\00t\00a\00r\00t")
 (data (i32.const 5612) "\1c")
 (data (i32.const 5624) "\1a\00\00\00\08\00\00\00\0b")
 (data (i32.const 5644) ",")
 (data (i32.const 5656) "\01\00\00\00\10\00\00\00C\00o\00n\00t\00i\00n\00u\00e")
 (data (i32.const 5692) "\1c")
 (data (i32.const 5704) "\1a\00\00\00\08\00\00\00\0c")
 (data (i32.const 5724) "\1c")
 (data (i32.const 5736) "\01\00\00\00\02\00\00\00Y")
 (data (i32.const 5756) "\1c")
 (data (i32.const 5772) "\04\00\00\00p\16")
 (data (i32.const 5788) "\1c")
 (data (i32.const 5804) "\04\00\00\00\00\05")
 (data (i32.const 5820) "\1c")
 (data (i32.const 5832) "\01\00\00\00\02\00\00\005")
 (data (i32.const 5852) "\1c")
 (data (i32.const 5868) "\04\00\00\00\d0\16")
 (data (i32.const 5884) "\1c")
 (data (i32.const 5896) "\01\00\00\00\02\00\00\004")
 (data (i32.const 5916) "\1c")
 (data (i32.const 5932) "\04\00\00\00\10\17")
 (data (i32.const 5948) "\1c")
 (data (i32.const 5960) "\01\00\00\00\02\00\00\003")
 (data (i32.const 5980) "\1c")
 (data (i32.const 5996) "\04\00\00\00P\17")
 (data (i32.const 6012) "\1c")
 (data (i32.const 6024) "\01\00\00\00\02\00\00\002")
 (data (i32.const 6044) "\1c")
 (data (i32.const 6060) "\04\00\00\00\90\17")
 (data (i32.const 6076) "\1c")
 (data (i32.const 6088) "\01\00\00\00\02\00\00\001")
 (data (i32.const 6108) "\1c")
 (data (i32.const 6124) "\04\00\00\00\d0\17")
 (data (i32.const 6140) "\1c")
 (data (i32.const 6156) "\04\00\00\00P\t")
 (data (i32.const 6172) "\1c")
 (data (i32.const 6188) "\04\00\00\00\c0\n")
 (data (i32.const 6204) "\1c")
 (data (i32.const 6220) "\04\00\00\000\14")
 (data (i32.const 6236) "\1c")
 (data (i32.const 6248) "\01\00\00\00\02\00\00\00c")
 (data (i32.const 6268) "\1c")
 (data (i32.const 6284) "\04\00\00\00p\18")
 (data (i32.const 6304) "\'\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 6332) " \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\10A\02\00\00\00\00\00\02\t")
 (data (i32.const 6368) "\08")
 (data (i32.const 6380) "\02A\00\00\00\00\00\00\02A")
 (data (i32.const 6400) "\0c")
 (data (i32.const 6412) " \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\02A")
 (data (i32.const 6456) "\13\00\00\00\00\00\00\00\08")
 (data (i32.const 6492) "\02A\00\00\00\00\00\00\02A\00\00\00\00\00\00P\00\12")
 (data (i32.const 6528) "\13\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\15\00\00\00\00\00\00\00\13\00\00\00\00\00\00\00\15")
 (data (i32.const 6608) "\15\00\00\00\00\00\00\00\15")
 (table $0 13 funcref)
 (elem (i32.const 1) $assembly/levels/level/Level#constructor~anonymous|0 $assembly/levels/level/Level#constructor~anonymous|1 $assembly/levels/level/Level#constructor~anonymous|2 $assembly/levels/level/Level#constructor~anonymous|3 $assembly/levels/level/Level#constructor~anonymous|4 $assembly/levels/level/Level#constructor~anonymous|5 $assembly/levels/level/Level#constructor~anonymous|6 $assembly/levels/level/Level#constructor~anonymous|7 $assembly/levels/level/Level#constructor~anonymous|8 $assembly/levels/titleScreen/TitleScreen#constructor~anonymous|0 $assembly/levels/endSlate/EndSlate#constructor~anonymous|0 $assembly/levels/endSlate/EndSlate#constructor~anonymous|1)
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $assembly/autoplayer/test/actions (mut i32) (i32.const 0))
 (global $assembly/gameState/defaultLevel (mut i32) (i32.const 0))
 (global $assembly/index/gameState (mut i32) (i32.const 0))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 23004))
 (export "gameState" (global $assembly/index/gameState))
 (export "start" (func $assembly/index/start))
 (export "triggerEventLoop" (func $assembly/loop/triggerEventLoop))
 (export "setCharacterDimensions" (func $assembly/loop/setCharacterDimensions))
 (export "setScreenDimensions" (func $assembly/loop/setScreenDimensions))
 (export "updateMouseCoordinates" (func $assembly/loop/updateMouseCoordinates))
 (export "registerMouseClick" (func $assembly/loop/registerMouseClick))
 (export "memory" (memory $0))
 (export "log" (func $export:assembly/index/log))
 (start $~start)
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  i32.store offset=4
  local.get $0
  local.get $0
  i32.store offset=8
  local.get $0
 )
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  global.get $assembly/index/gameState
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 1504
  call $~lib/rt/itcms/__visit
  i32.const 1712
  call $~lib/rt/itcms/__visit
  i32.const 3552
  call $~lib/rt/itcms/__visit
  i32.const 4832
  call $~lib/rt/itcms/__visit
  i32.const 1312
  call $~lib/rt/itcms/__visit
  i32.const 2656
  call $~lib/rt/itcms/__visit
  global.get $assembly/autoplayer/test/actions
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $assembly/gameState/defaultLevel
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 1056
  call $~lib/rt/itcms/__visit
  i32.const 1088
  call $~lib/rt/itcms/__visit
  i32.const 1120
  call $~lib/rt/itcms/__visit
  i32.const 1152
  call $~lib/rt/itcms/__visit
  i32.const 1184
  call $~lib/rt/itcms/__visit
  i32.const 1216
  call $~lib/rt/itcms/__visit
  i32.const 1248
  call $~lib/rt/itcms/__visit
  i32.const 1280
  call $~lib/rt/itcms/__visit
  i32.const 1824
  call $~lib/rt/itcms/__visit
  i32.const 1888
  call $~lib/rt/itcms/__visit
  i32.const 1968
  call $~lib/rt/itcms/__visit
  i32.const 2064
  call $~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1376
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  i32.store offset=4
  local.get $0
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1376
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  block $__inlined_func$~lib/rt/itcms/Object#unlink
   local.get $0
   i32.load offset=4
   i32.const -4
   i32.and
   local.tee $1
   i32.eqz
   if
    i32.const 0
    local.get $0
    i32.const 23004
    i32.lt_u
    local.get $0
    i32.load offset=8
    select
    i32.eqz
    if
     i32.const 0
     i32.const 1376
     i32.const 127
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    br $__inlined_func$~lib/rt/itcms/Object#unlink
   end
   local.get $0
   i32.load offset=8
   local.tee $2
   i32.eqz
   if
    i32.const 0
    i32.const 1376
    i32.const 131
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   call $~lib/rt/itcms/Object#set:next
  end
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 6304
   i32.load
   i32.gt_u
   if
    i32.const 1504
    i32.const 1568
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 6308
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 273
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 275
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 288
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741820
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1648
    i32.const 224
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741820
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 239
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  i32.ne
  if
   i32.const 0
   i32.const 1648
   i32.const 240
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 256
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1648
   i32.const 381
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1648
    i32.const 388
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1648
    i32.const 401
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 23008
  i32.const 0
  i32.store
  i32.const 24576
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 23008
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 23008
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 23008
  i32.const 24580
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 23008
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $folding-inner0
   block $break|0
    block $case2|0
     block $case1|0
      block $case0|0
       global.get $~lib/rt/itcms/state
       br_table $case0|0 $case1|0 $case2|0 $break|0
      end
      i32.const 1
      global.set $~lib/rt/itcms/state
      i32.const 0
      global.set $~lib/rt/itcms/visitCount
      call $~lib/rt/itcms/visitRoots
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/iter
      br $folding-inner0
     end
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.set $1
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|1
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $0
       global.set $~lib/rt/itcms/iter
       local.get $1
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $1
        call $~lib/rt/itcms/Object#set:color
        i32.const 0
        global.set $~lib/rt/itcms/visitCount
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
        br $folding-inner0
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|1
      end
     end
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.set $0
      loop $while-continue|0
       local.get $0
       i32.const 23004
       i32.lt_u
       if
        local.get $0
        i32.load
        call $~lib/rt/itcms/__visit
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      global.get $~lib/rt/itcms/iter
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      loop $while-continue|2
       local.get $0
       global.get $~lib/rt/itcms/toSpace
       i32.ne
       if
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const 3
        i32.and
        i32.ne
        if
         local.get $0
         local.get $1
         call $~lib/rt/itcms/Object#set:color
         local.get $0
         i32.const 20
         i32.add
         call $~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        local.set $0
        br $while-continue|2
       end
      end
      global.get $~lib/rt/itcms/fromSpace
      local.set $0
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/fromSpace
      local.get $0
      global.set $~lib/rt/itcms/toSpace
      local.get $1
      global.set $~lib/rt/itcms/white
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      global.set $~lib/rt/itcms/iter
      i32.const 2
      global.set $~lib/rt/itcms/state
     end
     br $folding-inner0
    end
    global.get $~lib/rt/itcms/iter
    local.tee $0
    global.get $~lib/rt/itcms/toSpace
    i32.ne
    if
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1376
      i32.const 228
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     i32.const 23004
     i32.lt_u
     if
      local.get $0
      i32.const 0
      i32.store offset=4
      local.get $0
      i32.const 0
      i32.store offset=8
     else
      global.get $~lib/rt/itcms/total
      local.get $0
      i32.load
      i32.const -4
      i32.and
      i32.const 4
      i32.add
      i32.sub
      global.set $~lib/rt/itcms/total
      local.get $0
      i32.const 4
      i32.add
      local.tee $1
      i32.const 23004
      i32.ge_u
      if
       global.get $~lib/rt/tlsf/ROOT
       i32.eqz
       if
        call $~lib/rt/tlsf/initialize
       end
       global.get $~lib/rt/tlsf/ROOT
       local.get $1
       i32.const 4
       i32.sub
       local.set $0
       local.get $1
       i32.const 15
       i32.and
       i32.eqz
       i32.const 0
       local.get $1
       select
       if (result i32)
        local.get $0
        i32.load
        i32.const 1
        i32.and
        i32.eqz
       else
        i32.const 0
       end
       i32.eqz
       if
        i32.const 0
        i32.const 1648
        i32.const 565
        i32.const 3
        call $~lib/builtins/abort
        unreachable
       end
       local.get $0
       local.get $0
       i32.load
       i32.const 1
       i32.or
       i32.store
       local.get $0
       call $~lib/rt/tlsf/insertBlock
      end
     end
     i32.const 10
     return
    end
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/toSpace
    i32.store offset=4
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/toSpace
    i32.store offset=8
    i32.const 0
    global.set $~lib/rt/itcms/state
   end
   i32.const 0
   return
  end
  global.get $~lib/rt/itcms/visitCount
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1648
   i32.const 334
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1648
     i32.const 347
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.const 1073741820
  i32.ge_u
  if
   i32.const 1312
   i32.const 1648
   i32.const 462
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 12
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $1
  i32.const 12
  i32.le_u
  select
  local.tee $2
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   i32.const 4
   memory.size
   local.tee $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $0
   i32.load offset=1568
   i32.ne
   i32.shl
   local.get $2
   i32.const 1
   i32.const 27
   local.get $2
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.get $2
   local.get $2
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1648
    i32.const 500
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1648
   i32.const 502
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1648
   i32.const 361
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $2
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1312
   i32.const 1376
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-continue|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-continue|0
    end
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  local.get $0
  i32.const 16
  i32.add
  local.set $2
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  local.tee $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1376
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   local.set $4
   local.get $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $0
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    i32.const 0
    local.get $4
    i32.const 3
    i32.eq
    select
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  local.get $0
  local.get $2
  i32.const 1
  call $~lib/rt/itcms/__link
 )
 (func $~lib/util/hash/HASH<u32> (param $0 i32) (result i32)
  local.get $0
  i32.const -1028477379
  i32.mul
  i32.const 374761397
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $0
  local.get $0
  i32.const 13
  i32.shr_u
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $0
  local.get $0
  i32.const 16
  i32.shr_u
  i32.xor
 )
 (func $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    local.tee $2
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $1
     local.get $0
     i32.load
     i32.eq
    end
    if
     local.get $0
     return
    end
    local.get $2
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  i32.add
  local.tee $2
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $6
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $5
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.tee $8
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $8
   i32.ne
   if
    local.get $8
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $8
     i32.load
     local.tee $7
     i32.store
     local.get $2
     local.get $8
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $6
     local.get $7
     call $~lib/util/hash/HASH<u32>
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $7
     i32.load
     i32.store offset=8
     local.get $7
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $8
    i32.const 12
    i32.add
    local.set $8
    br $while-continue|0
   end
  end
  local.get $0
  local.get $6
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $0
  local.get $5
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/baseLevel/BaseLevel#set:map (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/levels/baseLevel/BaseLevel#set:uiControls (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/levels/baseLevel/BaseLevel#set:uiLabels (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/gameState/GameState#set:currentLevel (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=32
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/gameState/GameState#set:lastLevel (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=72
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/array/ensureSize (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  local.tee $5
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1712
    i32.const 2336
    i32.const 14
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load
   local.tee $6
   local.set $2
   block $__inlined_func$~lib/rt/itcms/__renew
    local.get $1
    i32.const 2
    i32.shl
    local.tee $7
    local.tee $3
    local.get $6
    i32.const 20
    i32.sub
    local.tee $4
    i32.load
    i32.const -4
    i32.and
    i32.const 16
    i32.sub
    i32.le_u
    if
     local.get $4
     local.get $3
     i32.store offset=16
     local.get $2
     local.set $1
     br $__inlined_func$~lib/rt/itcms/__renew
    end
    local.get $3
    local.get $4
    i32.load offset=12
    call $~lib/rt/itcms/__new
    local.tee $1
    local.get $2
    local.get $3
    local.get $4
    i32.load offset=16
    local.tee $2
    local.get $2
    local.get $3
    i32.gt_u
    select
    call $~lib/memory/memory.copy
   end
   local.get $1
   local.get $5
   i32.add
   local.get $7
   local.get $5
   i32.sub
   call $~lib/memory/memory.fill
   local.get $1
   local.get $6
   i32.ne
   if
    local.get $0
    local.get $1
    i32.store
    local.get $0
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $1
    i32.const 0
    call $~lib/rt/itcms/__link
   end
   local.get $0
   local.get $7
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<assembly/ui/uiControl/UIControl>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__link
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 10
  i32.ge_u
  i32.const 1
  i32.add
  local.get $0
  i32.const 10000
  i32.ge_u
  i32.const 3
  i32.add
  local.get $0
  i32.const 1000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 100
  i32.lt_u
  select
  local.get $0
  i32.const 1000000
  i32.ge_u
  i32.const 6
  i32.add
  local.get $0
  i32.const 1000000000
  i32.ge_u
  i32.const 8
  i32.add
  local.get $0
  i32.const 100000000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 10000000
  i32.lt_u
  select
  local.get $0
  i32.const 100000
  i32.lt_u
  select
 )
 (func $~lib/util/number/utoa_dec_simple<u32> (param $0 i32) (param $1 i32) (param $2 i32)
  loop $do-continue|0
   local.get $0
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.const 1
   i32.shl
   i32.add
   local.get $1
   i32.const 10
   i32.rem_u
   i32.const 48
   i32.add
   i32.store16
   local.get $1
   i32.const 10
   i32.div_u
   local.tee $1
   br_if $do-continue|0
  end
 )
 (func $~lib/number/I32#toString (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/util/number/itoa32
   local.get $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 2384
    local.set $0
    br $__inlined_func$~lib/util/number/itoa32
   end
   i32.const 0
   local.get $0
   i32.sub
   local.get $0
   local.get $0
   i32.const 31
   i32.shr_u
   local.tee $1
   select
   local.tee $2
   call $~lib/util/number/decimalCount32
   local.get $1
   i32.add
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $0
   local.get $2
   local.get $3
   call $~lib/util/number/utoa_dec_simple<u32>
   local.get $1
   if
    local.get $0
    i32.const 45
    i32.store16
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $0
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/string/String#concat
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $4
   local.get $0
   local.tee $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   i32.add
   local.tee $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 2304
    local.set $0
    br $__inlined_func$~lib/string/String#concat
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $0
   local.get $2
   local.get $3
   call $~lib/memory/memory.copy
   local.get $0
   local.get $3
   i32.add
   local.get $1
   local.get $4
   call $~lib/memory/memory.copy
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $0
 )
 (func $assembly/levels/level/Level#set:lemmings (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=24
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.tee $1
  i32.const 7
  i32.and
  local.get $2
  i32.const 7
  i32.and
  i32.or
  i32.eqz
  i32.const 0
  local.get $3
  i32.const 4
  i32.ge_u
  select
  if
   loop $do-continue|0
    local.get $1
    i64.load
    local.get $2
    i64.load
    i64.eq
    if
     local.get $1
     i32.const 8
     i32.add
     local.set $1
     local.get $2
     i32.const 8
     i32.add
     local.set $2
     local.get $3
     i32.const 4
     i32.sub
     local.tee $3
     i32.const 4
     i32.ge_u
     br_if $do-continue|0
    end
   end
  end
  loop $while-continue|1
   local.get $3
   local.tee $0
   i32.const 1
   i32.sub
   local.set $3
   local.get $0
   if
    local.get $1
    i32.load16_u
    local.tee $0
    local.get $2
    i32.load16_u
    local.tee $4
    i32.ne
    if
     local.get $0
     local.get $4
     i32.sub
     return
    end
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $2
    i32.const 2
    i32.add
    local.set $2
    br $while-continue|1
   end
  end
  i32.const 0
 )
 (func $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 1504
    i32.const 2336
    i32.const 108
    i32.const 22
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $3
   call $~lib/array/ensureSize
   local.get $0
   local.get $3
   i32.store offset=12
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   return
  end
  local.get $1
  i32.eqz
  i32.const 1
  local.get $0
  select
  if
   i32.const 0
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $2
  local.get $1
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.const 0
  local.get $1
  local.get $2
  call $~lib/util/string/compareImpl
  i32.eqz
 )
 (func $~lib/map/Map<i32,u8>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    local.tee $2
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $1
     local.get $0
     i32.load
     i32.eq
    end
    if
     local.get $0
     return
    end
    local.get $2
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<i32,u8>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  i32.add
  local.tee $2
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $6
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $5
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store offset=4
  local.get $0
  i32.load offset=8
  local.tee $8
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $4
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $8
   i32.ne
   if
    local.get $8
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $8
     i32.load
     local.tee $7
     i32.store
     local.get $2
     local.get $8
     i32.load8_u offset=4
     i32.store8 offset=4
     local.get $2
     local.get $6
     local.get $7
     call $~lib/util/hash/HASH<u32>
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $7
     i32.load
     i32.store offset=8
     local.get $7
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $8
    i32.const 12
    i32.add
    local.set $8
    br $while-continue|0
   end
  end
  local.get $0
  local.get $6
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $0
  local.get $5
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/gameState/GameState#loadLevel (param $0 i32) (param $1 i32)
  local.get $1
  i32.load8_u offset=20
  i32.eqz
  if
   local.get $0
   local.get $1
   call $assembly/levels/baseLevel/BaseLevel#clone@virtual
   call $assembly/gameState/GameState#set:lastLevel
  end
  local.get $0
  local.get $1
  call $assembly/gameState/GameState#set:currentLevel
  local.get $0
  i32.const 2
  i32.store offset=8
  local.get $0
  i32.const 1
  i32.store8 offset=4
 )
 (func $assembly/loop/triggerEventLoop
  call $assembly/loop/eventLoop
 )
 (func $assembly/loop/setCharacterDimensions (param $0 i32) (param $1 i32)
  global.get $assembly/index/gameState
  local.get $0
  i32.store offset=44
  global.get $assembly/index/gameState
  local.get $1
  i32.store offset=48
 )
 (func $assembly/loop/setScreenDimensions (param $0 i32) (param $1 i32)
  global.get $assembly/index/gameState
  local.get $0
  i32.store offset=36
  global.get $assembly/index/gameState
  local.get $1
  i32.store offset=40
 )
 (func $assembly/loop/updateMouseCoordinates (param $0 i32) (param $1 i32)
  global.get $assembly/index/gameState
  local.get $0
  i32.store offset=52
  global.get $assembly/index/gameState
  local.get $1
  i32.store offset=56
 )
 (func $assembly/loop/registerMouseClick
  global.get $assembly/index/gameState
  i32.const 1
  i32.store8 offset=60
 )
 (func $~lib/map/Map<i32,u8>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<i32,u8>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<i32,u8>#get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<i32,u8>#find
  local.tee $0
  i32.eqz
  if
   i32.const 4832
   i32.const 4896
   i32.const 105
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load8_u offset=4
 )
 (func $assembly/levels/baseLevel/BaseLevel#canUseSkill@virtual (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $2
    i32.const 19
    i32.eq
    local.get $2
    i32.const 18
    i32.eq
    i32.or
    local.get $2
    i32.const 27
    i32.eq
    i32.or
    i32.eqz
    if
     local.get $2
     i32.const 7
     i32.eq
     br_if $case1
     br $default
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    call $~stack_check
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    local.get $1
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=32
     local.tee $2
     i32.store
     local.get $2
     local.get $1
     call $~lib/map/Map<i32,u8>#has
     if
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=32
      local.tee $0
      i32.store
      local.get $0
      local.get $1
      call $~lib/map/Map<i32,u8>#get
      i32.const 0
      i32.ne
      local.set $0
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
     else
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.add
      global.set $~lib/memory/__stack_pointer
      i32.const 0
      local.set $0
     end
    else
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     i32.const 1
     local.set $0
    end
    local.get $0
    return
   end
   i32.const 0
   return
  end
  unreachable
 )
 (func $assembly/levels/baseLevel/BaseLevel#clone@virtual (param $0 i32) (result i32)
  (local $1 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $1
    i32.const 19
    i32.eq
    local.get $1
    i32.const 18
    i32.eq
    i32.or
    local.get $1
    i32.const 27
    i32.eq
    i32.or
    i32.eqz
    if
     local.get $1
     i32.const 7
     i32.eq
     br_if $case1
     br $default
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    call $~stack_check
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    call $assembly/levels/baseLevel/BaseLevel#cloneMap
    local.tee $1
    i32.store
    i32.const 0
    local.get $0
    i32.load8_u
    local.get $0
    i32.load8_u offset=1
    local.get $1
    local.get $0
    i32.load8_u offset=20
    local.get $0
    i32.load8_u offset=36
    call $assembly/levels/level/Level#constructor
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   call $assembly/levels/defaultLevel/DefaultLevel#constructor
   return
  end
  unreachable
 )
 (func $assembly/levels/endSlate/EndSlate#constructor~anonymous|1
  nop
 )
 (func $assembly/map/SurroundingTiles#set:right (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/map/SurroundingTiles#set:bottomCentre (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=28
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $assembly/levels/baseLevel/BaseLevel#skillUsed@virtual (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $2
    i32.const 19
    i32.eq
    local.get $2
    i32.const 18
    i32.eq
    i32.or
    local.get $2
    i32.const 27
    i32.eq
    local.get $2
    i32.const 34
    i32.eq
    i32.or
    i32.or
    i32.eqz
    if
     local.get $2
     i32.const 7
     i32.eq
     br_if $case1
     br $default
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    call $~stack_check
    global.get $~lib/memory/__stack_pointer
    i64.const 0
    i64.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=32
    local.tee $2
    i32.store
    local.get $2
    local.get $1
    call $~lib/map/Map<i32,u8>#has
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=32
     local.tee $2
     i32.store
     local.get $2
     local.get $1
     call $~lib/map/Map<i32,u8>#get
     local.tee $3
     i32.const 1
     i32.le_u
     if
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=32
      local.tee $2
      i32.store
      local.get $2
      local.get $1
      local.get $1
      call $~lib/util/hash/HASH<u32>
      call $~lib/map/Map<i32,u8>#find
      local.tee $3
      if
       local.get $3
       local.get $3
       i32.load offset=8
       i32.const 1
       i32.or
       i32.store offset=8
       local.get $2
       local.get $2
       i32.load offset=20
       i32.const 1
       i32.sub
       i32.store offset=20
       local.get $2
       i32.load offset=4
       i32.const 1
       i32.shr_u
       local.tee $4
       i32.const 1
       i32.add
       i32.const 4
       local.get $2
       i32.load offset=20
       local.tee $3
       local.get $3
       i32.const 4
       i32.lt_u
       select
       i32.ge_u
       if (result i32)
        local.get $2
        i32.load offset=20
        local.get $2
        i32.load offset=12
        i32.const 3
        i32.mul
        i32.const 4
        i32.div_s
        i32.lt_s
       else
        i32.const 0
       end
       if
        local.get $2
        local.get $4
        call $~lib/map/Map<i32,u8>#rehash
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 2384
      i32.store offset=4
      local.get $0
      local.get $1
      i32.const 2384
      call $assembly/levels/level/Level#updateLabel
     else
      local.get $3
      i32.const 255
      i32.ne
      if
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.load offset=32
       local.tee $2
       i32.store
       local.get $2
       local.get $1
       local.get $3
       i32.const 1
       i32.sub
       local.tee $2
       call $~lib/map/Map<i32,u8>#set
       local.get $2
       i32.const 255
       i32.and
       call $~lib/util/number/utoa32
       local.set $2
       global.get $~lib/memory/__stack_pointer
       local.get $2
       i32.store offset=4
       local.get $0
       local.get $1
       local.get $2
       call $assembly/levels/level/Level#updateLabel
      end
     end
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   return
  end
  unreachable
 )
 (func $assembly/actions/lemmingAction/LemmingAction#handleFalling (param $0 i32) (param $1 i32)
  local.get $1
  if
   local.get $0
   call $assembly/actions/fall/Fall#constructor
   call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  end
  local.get $0
  i32.load offset=12
  local.get $0
  i32.load offset=12
  i32.load16_s offset=2
  i32.const 1
  i32.add
  i32.store16 offset=2
 )
 (func $assembly/actions/climb/Climb#update (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load8_u
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $2
  if (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=20
   local.tee $3
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 1184
   i32.store offset=4
   local.get $3
   i32.const 1184
   call $~lib/string/String.__eq
  else
   i32.const 0
  end
  if (result i32)
   i32.const 1
  else
   local.get $2
   if (result i32)
    i32.const 0
   else
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=12
    local.tee $2
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 1184
    i32.store offset=4
    local.get $2
    i32.const 1184
    call $~lib/string/String.__eq
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  if
   local.get $0
   i32.load offset=12
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.const -1
   local.get $0
   i32.load8_u
   select
   i32.add
   i32.store16
   local.get $0
   call $assembly/actions/walk/Walk#constructor
   call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   call $~stack_check
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=4
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 1184
   i32.store offset=4
   local.get $2
   i32.const 1184
   call $~lib/string/String.__eq
   i32.eqz
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   if
    local.get $0
    local.get $0
    i32.load8_u
    i32.eqz
    i32.store8
    local.get $1
    call $assembly/actions/lemmingAction/LemmingAction#isFalling
    if
     local.get $0
     i32.const 1
     call $assembly/actions/lemmingAction/LemmingAction#handleFalling
    end
   else
    local.get $0
    i32.load offset=12
    local.get $0
    i32.load offset=12
    i32.load16_s offset=2
    i32.const 1
    i32.sub
    i32.store16 offset=2
   end
  end
 )
 (func $assembly/actions/lemmingAction/LemmingAction#update@virtual (param $0 i32) (param $1 i32) (param $2 i32)
  block $default
   block $case8
    block $case7
     block $case6
      block $case5
       block $case4
        block $case3
         block $case2
          block $case1
           block $case0
            local.get $0
            i32.const 8
            i32.sub
            i32.load
            i32.const 28
            i32.sub
            br_table $case1 $case2 $case0 $case5 $case3 $case6 $default $case4 $default $case7 $case8 $default
           end
           local.get $1
           local.get $2
           call $assembly/actions/basher/Basher#update
           return
          end
          local.get $2
          call $assembly/actions/lemmingAction/LemmingAction#isFalling
          if
           local.get $1
           call $assembly/actions/walk/Walk#constructor
           call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
          end
          return
         end
         local.get $0
         local.get $1
         local.get $2
         call $assembly/actions/builder/Builder#updateBuilder
         return
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 8
        i32.sub
        global.set $~lib/memory/__stack_pointer
        call $~stack_check
        global.get $~lib/memory/__stack_pointer
        i64.const 0
        i64.store
        local.get $2
        call $assembly/actions/lemmingAction/LemmingAction#isFalling
        if
         local.get $1
         i32.const 1
         call $assembly/actions/lemmingAction/LemmingAction#handleFalling
        else
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.load offset=28
         local.tee $0
         i32.store
         local.get $0
         call $assembly/map/terrainIndestructible
         if
          local.get $1
          call $assembly/actions/walk/Walk#constructor
          call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
         else
          global.get $~lib/memory/__stack_pointer
          global.get $assembly/index/gameState
          i32.load offset=32
          i32.load offset=4
          local.tee $2
          i32.store
          local.get $1
          i32.load offset=12
          i32.load16_s
          local.get $1
          i32.load offset=12
          i32.load16_s offset=2
          i32.const 1
          i32.add
          call $assembly/position/Vec2#constructor
          local.set $0
          global.get $~lib/memory/__stack_pointer
          local.get $0
          i32.store offset=4
          local.get $2
          local.get $0
          call $assembly/map/removeTerrain
          local.get $1
          i32.load offset=12
          local.get $1
          i32.load offset=12
          i32.load16_s offset=2
          i32.const 1
          i32.add
          i32.store16 offset=2
         end
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 8
        i32.add
        global.set $~lib/memory/__stack_pointer
        return
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.sub
       global.set $~lib/memory/__stack_pointer
       call $~stack_check
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       i32.store
       local.get $2
       call $assembly/actions/lemmingAction/LemmingAction#isFalling
       if
        local.get $1
        i32.load8_u offset=16
        if (result i32)
         local.get $0
         i32.load8_u offset=4
         i32.const 4
         i32.ge_u
        else
         i32.const 0
        end
        if
         local.get $1
         call $assembly/actions/umbrella/Umbrella#constructor
         call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
         global.get $~lib/memory/__stack_pointer
         local.get $1
         i32.load offset=8
         local.tee $0
         i32.store
         local.get $0
         local.get $1
         local.get $2
         call $assembly/actions/lemmingAction/LemmingAction#update@virtual
        else
         local.get $1
         i32.const 0
         call $assembly/actions/lemmingAction/LemmingAction#handleFalling
         local.get $0
         local.get $0
         i32.load8_u offset=4
         i32.const 1
         i32.add
         i32.store8 offset=4
        end
       else
        local.get $0
        i32.load8_u offset=4
        i32.const 16
        i32.ge_u
        if
         local.get $1
         i32.const 1
         i32.store8 offset=1
        else
         local.get $1
         call $assembly/actions/walk/Walk#constructor
         call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
        end
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.add
       global.set $~lib/memory/__stack_pointer
       return
      end
      local.get $1
      local.get $2
      call $assembly/actions/miner/Miner#update
      return
     end
     local.get $1
     local.get $2
     call $assembly/actions/walk/Walk#update
     return
    end
    local.get $2
    call $assembly/actions/lemmingAction/LemmingAction#isFalling
    if
     local.get $0
     i32.load16_u offset=4
     i32.const 2
     i32.ge_u
     if
      local.get $0
      i32.const 0
      i32.store16 offset=4
      local.get $1
      i32.const 0
      call $assembly/actions/lemmingAction/LemmingAction#handleFalling
     else
      local.get $0
      local.get $0
      i32.load16_u offset=4
      i32.const 1
      i32.add
      i32.store16 offset=4
     end
    else
     local.get $1
     call $assembly/actions/walk/Walk#constructor
     call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
    end
    return
   end
   local.get $1
   local.get $2
   call $assembly/actions/climb/Climb#update
   return
  end
  unreachable
 )
 (func $assembly/levels/baseLevel/BaseLevel~visit (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  local.tee $1
  if
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $1
  if
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $assembly/ui/uiLabel/UILabel~visit (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load
  local.tee $1
  if
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=4
  local.tee $1
  if
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=8
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $assembly/levels/level/Level~visit (param $0 i32)
  (local $1 i32)
  local.get $0
  call $assembly/levels/baseLevel/BaseLevel~visit
  local.get $0
  i32.load offset=24
  local.tee $1
  if
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=32
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner4
   block $folding-inner3
    block $folding-inner2
     block $folding-inner1
      block $folding-inner0
       block $invalid
        block $assembly/map/SurroundingTiles
         block $~lib/function/Function<%28%29=>void>
          block $~lib/map/Map<i32,u8>
           block $assembly/lemming/Lemming
            block $assembly/levels/level/Level
             block $assembly/gameState/GameState
              block $assembly/position/Vec2
               block $assembly/ui/uiLabel/UILabel
                block $assembly/ui/uiControl/UIControl
                 block $assembly/levels/baseLevel/BaseLevel
                  block $assembly/levels/defaultLevel/DefaultLevel
                   block $~lib/array/Array<i32>
                    block $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>
                     block $assembly/autoplayer/index/AutoAction
                      block $~lib/string/String
                       block $~lib/arraybuffer/ArrayBuffer
                        local.get $0
                        i32.const 8
                        i32.sub
                        i32.load
                        br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner0 $assembly/autoplayer/index/AutoAction $folding-inner1 $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>> $~lib/array/Array<i32> $assembly/levels/defaultLevel/DefaultLevel $assembly/levels/baseLevel/BaseLevel $folding-inner1 $folding-inner1 $assembly/ui/uiControl/UIControl $assembly/ui/uiLabel/UILabel $assembly/position/Vec2 $folding-inner1 $folding-inner1 $assembly/gameState/GameState $folding-inner2 $folding-inner3 $assembly/levels/level/Level $assembly/lemming/Lemming $folding-inner0 $folding-inner2 $folding-inner1 $folding-inner1 $~lib/map/Map<i32,u8> $~lib/function/Function<%28%29=>void> $folding-inner3 $folding-inner4 $folding-inner4 $folding-inner4 $folding-inner4 $folding-inner4 $folding-inner4 $folding-inner3 $folding-inner4 $assembly/map/SurroundingTiles $folding-inner4 $folding-inner4 $invalid
                       end
                       return
                      end
                      return
                     end
                     return
                    end
                    local.get $0
                    i32.load
                    call $~lib/rt/itcms/__visit
                    local.get $0
                    i32.load offset=8
                    local.tee $2
                    local.tee $1
                    local.get $0
                    i32.load offset=16
                    i32.const 12
                    i32.mul
                    i32.add
                    local.set $0
                    loop $while-continue|0
                     local.get $0
                     local.get $1
                     i32.gt_u
                     if
                      local.get $1
                      i32.load offset=8
                      i32.const 1
                      i32.and
                      i32.eqz
                      if
                       local.get $1
                       i32.load offset=4
                       call $~lib/rt/itcms/__visit
                      end
                      local.get $1
                      i32.const 12
                      i32.add
                      local.set $1
                      br $while-continue|0
                     end
                    end
                    local.get $2
                    call $~lib/rt/itcms/__visit
                    return
                   end
                   local.get $0
                   i32.load
                   call $~lib/rt/itcms/__visit
                   return
                  end
                  local.get $0
                  call $assembly/levels/baseLevel/BaseLevel~visit
                  return
                 end
                 local.get $0
                 call $assembly/levels/baseLevel/BaseLevel~visit
                 return
                end
                local.get $0
                call $assembly/ui/uiLabel/UILabel~visit
                local.get $0
                i32.load offset=12
                local.tee $0
                if
                 local.get $0
                 call $~lib/rt/itcms/__visit
                end
                return
               end
               local.get $0
               call $assembly/ui/uiLabel/UILabel~visit
               return
              end
              return
             end
             local.get $0
             i32.load
             local.tee $1
             if
              local.get $1
              call $~lib/rt/itcms/__visit
             end
             local.get $0
             i32.load offset=32
             local.tee $1
             if
              local.get $1
              call $~lib/rt/itcms/__visit
             end
             local.get $0
             i32.load offset=72
             local.tee $0
             if
              local.get $0
              call $~lib/rt/itcms/__visit
             end
             return
            end
            local.get $0
            call $assembly/levels/level/Level~visit
            return
           end
           local.get $0
           i32.load offset=8
           local.tee $1
           if
            local.get $1
            call $~lib/rt/itcms/__visit
           end
           local.get $0
           i32.load offset=12
           local.tee $1
           if
            local.get $1
            call $~lib/rt/itcms/__visit
           end
           local.get $0
           i32.load offset=24
           local.tee $0
           if
            local.get $0
            call $~lib/rt/itcms/__visit
           end
           return
          end
          local.get $0
          i32.load
          call $~lib/rt/itcms/__visit
          local.get $0
          i32.load offset=8
          call $~lib/rt/itcms/__visit
          return
         end
         local.get $0
         i32.load offset=4
         call $~lib/rt/itcms/__visit
         return
        end
        local.get $0
        i32.load
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=4
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=8
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=12
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=16
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=20
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=24
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=28
        local.tee $1
        if
         local.get $1
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=32
        local.tee $0
        if
         local.get $0
         call $~lib/rt/itcms/__visit
        end
        return
       end
       unreachable
      end
      local.get $0
      i32.load
      local.tee $0
      if
       local.get $0
       call $~lib/rt/itcms/__visit
      end
      return
     end
     local.get $0
     i32.load offset=4
     local.tee $1
     local.get $0
     i32.load offset=12
     i32.const 2
     i32.shl
     i32.add
     local.set $2
     loop $while-continue|00
      local.get $1
      local.get $2
      i32.lt_u
      if
       local.get $1
       i32.load
       local.tee $3
       if
        local.get $3
        call $~lib/rt/itcms/__visit
       end
       local.get $1
       i32.const 4
       i32.add
       local.set $1
       br $while-continue|00
      end
     end
     local.get $0
     i32.load
     call $~lib/rt/itcms/__visit
     return
    end
    local.get $0
    i32.load offset=4
    local.tee $0
    if
     local.get $0
     call $~lib/rt/itcms/__visit
    end
    return
   end
   local.get $0
   call $assembly/levels/level/Level~visit
   return
  end
  local.get $0
  i32.load
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~start
  call $start:assembly/autoplayer/test
  call $assembly/levels/defaultLevel/DefaultLevel#constructor
  global.set $assembly/gameState/defaultLevel
  call $assembly/gameState/GameState#constructor
  global.set $assembly/index/gameState
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 6620
  i32.lt_s
  if
   i32.const 23024
   i32.const 23072
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $start:assembly/autoplayer/test
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  memory.size
  i32.const 16
  i32.shl
  i32.const 23004
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1424
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1456
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 1600
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
  global.set $assembly/autoplayer/test/actions
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/autoplayer/test/actions
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 4
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.const 0
  call $assembly/autoplayer/index/AutoAction#constructor
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 10
  local.get $0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/autoplayer/test/actions
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 4
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.const 1
  call $assembly/autoplayer/index/AutoAction#constructor
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 11
  local.get $0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/defaultLevel/DefaultLevel#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 21
  i32.const 7
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 10
  i32.const 2208
  call $~lib/rt/__newArray
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.const 0
  local.get $1
  i32.const 1
  call $assembly/levels/baseLevel/BaseLevel#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/gameState/GameState#setSelectedGift (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=32
  local.tee $2
  i32.store
  local.get $2
  local.get $1
  call $assembly/levels/baseLevel/BaseLevel#canUseSkill@virtual
  if
   local.get $0
   local.get $1
   i32.store offset=80
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|0
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 1
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/ui/uiControl/UIControl#constructor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.const 11
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $3
  local.get $2
  call $assembly/levels/baseLevel/BaseLevel#set:uiControls
  global.get $~lib/memory/__stack_pointer
  i32.const 2304
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $3
  local.get $0
  local.get $1
  i32.const 2304
  call $assembly/ui/uiLabel/UILabel#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/levels/level/Level#makeButton (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=12
  local.tee $0
  i32.store
  local.get $1
  local.get $2
  call $assembly/position/Vec2#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $3
  local.get $4
  call $assembly/ui/uiControl/UIControl#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#addLabel (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=16
  local.tee $0
  i32.store
  local.get $2
  local.get $3
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 2384
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 2416
  i32.store offset=16
  local.get $1
  call $~lib/number/I32#toString
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=20
  i32.const 2416
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=16
  i32.const 0
  local.get $2
  i32.const 2384
  local.get $1
  call $assembly/ui/uiLabel/UILabel#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|1
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 2
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|2
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 3
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|3
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 4
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|4
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 5
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|5
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 6
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|6
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 7
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|7
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.const 8
  call $assembly/gameState/GameState#setSelectedGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/gameState/GameState#setNukeGift (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.load offset=80
  i32.const 9
  i32.eq
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=32
   local.tee $0
   i32.store
   block $__inlined_func$assembly/levels/baseLevel/BaseLevel#nuke@virtual
    block $default
     local.get $0
     i32.const 8
     i32.sub
     i32.load
     local.tee $1
     i32.const 19
     i32.eq
     local.get $1
     i32.const 18
     i32.eq
     i32.or
     local.get $1
     i32.const 27
     i32.eq
     i32.or
     i32.eqz
     if
      local.get $1
      i32.const 7
      i32.eq
      br_if $__inlined_func$assembly/levels/baseLevel/BaseLevel#nuke@virtual
      br $default
     end
     i32.const 0
     local.set $1
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.sub
     global.set $~lib/memory/__stack_pointer
     call $~stack_check
     global.get $~lib/memory/__stack_pointer
     i64.const 0
     i64.store
     local.get $0
     i32.const 0
     i32.store8 offset=28
     loop $for-loop|0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=24
      local.tee $2
      i32.store
      local.get $1
      local.get $2
      i32.load offset=12
      i32.lt_s
      if
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.load offset=24
       local.tee $2
       i32.store offset=4
       local.get $2
       local.get $1
       call $~lib/array/Array<~lib/string/String>#__get
       local.set $2
       global.get $~lib/memory/__stack_pointer
       local.get $2
       i32.store
       local.get $2
       i32.const 1
       i32.store8 offset=18
       local.get $1
       i32.const 1
       i32.add
       local.set $1
       br $for-loop|0
      end
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     br $__inlined_func$assembly/levels/baseLevel/BaseLevel#nuke@virtual
    end
    unreachable
   end
  else
   local.get $0
   i32.const 9
   i32.store offset=80
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor~anonymous|8
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  call $assembly/gameState/GameState#setNukeGift
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 37
   i32.const 19
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.const 24
  i32.const 3232
  call $~lib/rt/__newArray
  call $assembly/levels/level/Level#set:lemmings
  local.get $0
  i32.const 1
  i32.store8 offset=28
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.const 25
  call $~lib/rt/itcms/__new
  local.tee $6
  i32.store
  local.get $6
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $6
  i32.const 3
  i32.store offset=4
  local.get $6
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $6
  i32.const 4
  i32.store offset=12
  local.get $6
  i32.const 0
  i32.store offset=16
  local.get $6
  i32.const 0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
  local.get $6
  call $assembly/gameState/GameState#set:currentLevel
  local.get $0
  local.get $5
  i32.store8 offset=36
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  call $assembly/levels/baseLevel/BaseLevel#constructor
  local.tee $0
  i32.store
  local.get $0
  i32.load8_u offset=20
  i32.eqz
  if
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2240
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 2272
   i32.store offset=8
   local.get $0
   i32.const 1
   local.get $1
   i32.const 2240
   i32.const 2272
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 1
   i32.const 1
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2752
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 2784
   i32.store offset=8
   local.get $0
   i32.const 4
   local.get $1
   i32.const 2752
   i32.const 2784
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 2
   i32.const 4
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2816
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 2848
   i32.store offset=8
   local.get $0
   i32.const 7
   local.get $1
   i32.const 2816
   i32.const 2848
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 3
   i32.const 7
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 1280
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 2880
   i32.store offset=8
   local.get $0
   i32.const 10
   local.get $1
   i32.const 1280
   i32.const 2880
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 4
   i32.const 10
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2912
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 2944
   i32.store offset=8
   local.get $0
   i32.const 13
   local.get $1
   i32.const 2912
   i32.const 2944
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 5
   i32.const 13
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 2976
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 3008
   i32.store offset=8
   local.get $0
   i32.const 16
   local.get $1
   i32.const 2976
   i32.const 3008
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 6
   i32.const 16
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 3040
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 3072
   i32.store offset=8
   local.get $0
   i32.const 19
   local.get $1
   i32.const 3040
   i32.const 3072
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 7
   i32.const 19
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   local.get $0
   i32.load8_u offset=36
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 3104
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 3136
   i32.store offset=8
   local.get $0
   i32.const 22
   local.get $1
   i32.const 3104
   i32.const 3136
   call $assembly/levels/level/Level#makeButton
   local.get $0
   i32.const 8
   i32.const 22
   local.get $0
   i32.load8_u offset=36
   i32.const 1
   i32.add
   i32.const 255
   i32.and
   call $assembly/levels/level/Level#addLabel
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.store offset=12
   i32.const 25
   local.get $0
   i32.load8_u offset=36
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 3168
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 3200
   i32.store offset=20
   local.get $1
   i32.const 3168
   i32.const 3200
   call $assembly/ui/uiControl/UIControl#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=16
   local.get $2
   local.get $1
   call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/string/String#split (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.set $7
  block $folding-inner2
   block $folding-inner1
    block $folding-inner0
     i32.const 2300
     i32.load
     i32.const 1
     i32.shr_u
     local.tee $8
     if
      local.get $7
      i32.eqz
      if
       global.get $~lib/memory/__stack_pointer
       i32.const 1
       i32.const 9
       i32.const 0
       call $~lib/rt/__newArray
       local.tee $0
       i32.store offset=4
       local.get $0
       i32.load offset=4
       i32.const 2304
       i32.store
       br $folding-inner1
      end
     else
      local.get $7
      i32.eqz
      br_if $folding-inner0
      global.get $~lib/memory/__stack_pointer
      local.get $7
      i32.const 2147483647
      local.get $7
      i32.const 2147483647
      i32.ne
      select
      local.tee $4
      i32.const 9
      i32.const 0
      call $~lib/rt/__newArray
      local.tee $2
      i32.store
      local.get $2
      i32.load offset=4
      local.set $1
      loop $for-loop|0
       local.get $3
       local.get $4
       i32.lt_s
       if
        global.get $~lib/memory/__stack_pointer
        i32.const 2
        i32.const 1
        call $~lib/rt/itcms/__new
        local.tee $5
        i32.store offset=8
        local.get $5
        local.get $0
        local.get $3
        i32.const 1
        i32.shl
        i32.add
        i32.load16_u
        i32.store16
        local.get $1
        local.get $3
        i32.const 2
        i32.shl
        i32.add
        local.get $5
        i32.store
        local.get $2
        local.get $5
        i32.const 1
        call $~lib/rt/itcms/__link
        local.get $3
        i32.const 1
        i32.add
        local.set $3
        br $for-loop|0
       end
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 24
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $2
      return
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     i32.const 9
     i32.const 0
     call $~lib/rt/__newArray
     local.tee $6
     i32.store offset=12
     loop $while-continue|1
      block $__inlined_func$~lib/string/String#indexOf
       i32.const 2300
       i32.load
       i32.const 1
       i32.shr_u
       local.tee $3
       i32.eqz
       if
        i32.const 0
        local.set $1
        br $__inlined_func$~lib/string/String#indexOf
       end
       local.get $0
       i32.const 20
       i32.sub
       i32.load offset=16
       i32.const 1
       i32.shr_u
       local.tee $2
       i32.eqz
       if
        i32.const -1
        local.set $1
        br $__inlined_func$~lib/string/String#indexOf
       end
       local.get $4
       i32.const 0
       local.get $4
       i32.const 0
       i32.gt_s
       select
       local.tee $1
       local.get $2
       local.get $1
       local.get $2
       i32.lt_s
       select
       local.set $1
       local.get $2
       local.get $3
       i32.sub
       local.set $2
       loop $for-loop|00
        local.get $1
        local.get $2
        i32.le_s
        if
         local.get $0
         local.get $1
         i32.const 2304
         local.get $3
         call $~lib/util/string/compareImpl
         i32.eqz
         br_if $__inlined_func$~lib/string/String#indexOf
         local.get $1
         i32.const 1
         i32.add
         local.set $1
         br $for-loop|00
        end
       end
       i32.const -1
       local.set $1
      end
      local.get $1
      i32.const -1
      i32.xor
      if
       local.get $1
       local.get $4
       i32.sub
       local.tee $2
       i32.const 0
       i32.gt_s
       if
        global.get $~lib/memory/__stack_pointer
        local.get $2
        i32.const 1
        i32.shl
        local.tee $2
        i32.const 1
        call $~lib/rt/itcms/__new
        local.tee $3
        i32.store offset=16
        local.get $3
        local.get $0
        local.get $4
        i32.const 1
        i32.shl
        i32.add
        local.get $2
        call $~lib/memory/memory.copy
        local.get $6
        local.get $3
        call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
       else
        global.get $~lib/memory/__stack_pointer
        i32.const 2304
        i32.store offset=20
        local.get $6
        i32.const 2304
        call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
       end
       local.get $5
       i32.const 1
       i32.add
       local.tee $5
       i32.const 2147483647
       i32.eq
       br_if $folding-inner2
       local.get $1
       local.get $8
       i32.add
       local.set $4
       br $while-continue|1
      end
     end
     local.get $4
     i32.eqz
     if
      local.get $6
      local.get $0
      call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
      br $folding-inner2
     end
     local.get $7
     local.get $4
     i32.sub
     local.tee $1
     i32.const 0
     i32.gt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.const 1
      i32.shl
      local.tee $1
      i32.const 1
      call $~lib/rt/itcms/__new
      local.tee $5
      i32.store offset=4
      local.get $5
      local.get $0
      local.get $4
      i32.const 1
      i32.shl
      i32.add
      local.get $1
      call $~lib/memory/memory.copy
      local.get $6
      local.get $5
      call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
     else
      global.get $~lib/memory/__stack_pointer
      i32.const 2304
      i32.store offset=20
      local.get $6
      i32.const 2304
      call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 24
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $6
     return
    end
    i32.const 0
    i32.const 9
    i32.const 0
    call $~lib/rt/__newArray
    local.set $0
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/map/mapToTiles (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 10
  i32.const 3520
  call $~lib/rt/__newArray
  local.tee $3
  i32.store
  loop $for-loop|0
   local.get $2
   local.get $0
   i32.load offset=12
   i32.lt_s
   if
    local.get $0
    local.get $2
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    i32.const 2304
    i32.store offset=4
    local.get $1
    call $~lib/string/String#split
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=4
    local.get $3
    local.get $2
    local.get $1
    call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/levels/baseLevel/BaseLevel#getUIByTag (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 2304
  i32.store
  local.get $1
  i32.const 2304
  call $~lib/string/String.__eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=16
   local.tee $2
   i32.store offset=4
   local.get $3
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=16
    local.tee $2
    i32.store offset=8
    local.get $2
    local.get $3
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.load offset=8
    local.tee $2
    i32.store offset=4
    local.get $2
    local.get $1
    call $~lib/string/String.__eq
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=16
     local.tee $0
     i32.store offset=4
     local.get $0
     local.get $3
     call $~lib/array/Array<~lib/string/String>#__get
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
     return
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  i32.const 0
 )
 (func $assembly/levels/level/Level#updateLabel (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2416
  i32.store
  local.get $1
  call $~lib/number/I32#toString
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  i32.const 2416
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $0
  local.get $1
  call $assembly/levels/baseLevel/BaseLevel#getUIByTag
  local.tee $0
  i32.store offset=8
  local.get $0
  if
   local.get $0
   local.get $2
   call $assembly/levels/baseLevel/BaseLevel#set:map
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#setSkillQuantity (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $2
  i32.const 255
  i32.and
  i32.const 1
  i32.lt_u
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 2384
   i32.store
   local.get $0
   local.get $1
   i32.const 2384
   call $assembly/levels/level/Level#updateLabel
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=32
  local.tee $3
  i32.store offset=4
  local.get $3
  local.get $1
  local.get $2
  call $~lib/map/Map<i32,u8>#set
  local.get $2
  i32.const 255
  i32.and
  i32.const 255
  i32.eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4448
   i32.store
   local.get $0
   local.get $1
   i32.const 4448
   call $assembly/levels/level/Level#updateLabel
  else
   local.get $2
   i32.const 255
   i32.and
   call $~lib/util/number/utoa32
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $0
   local.get $1
   local.get $2
   call $assembly/levels/level/Level#updateLabel
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/one/Level1#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 37
  i32.const 27
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 17
  i32.const 9
  i32.const 4352
  call $~lib/rt/__newArray
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $assembly/map/mapToTiles
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 10
  i32.const 1
  local.get $1
  i32.const 0
  i32.const 14
  call $assembly/levels/level/Level#constructor
  local.tee $0
  i32.store
  local.get $0
  i32.const 8
  i32.const 255
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 4
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 3
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 5
  i32.const 255
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 1
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 6
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 7
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  local.get $0
  i32.const 2
  i32.const 10
  call $assembly/levels/level/Level#setSkillQuantity
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/levels/titleScreen/TitleScreen#constructor~anonymous|0
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $1
  i32.store
  call $assembly/levels/one/Level1#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  local.get $0
  call $assembly/gameState/GameState#loadLevel
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/titleScreen/TitleScreen#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 37
  i32.const 18
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.const 9
  i32.const 3456
  call $~lib/rt/__newArray
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/map/mapToTiles
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 0
  local.get $0
  i32.const 1
  i32.const 14
  call $assembly/levels/level/Level#constructor
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=12
  local.tee $2
  i32.store offset=12
  i32.const -1
  i32.const -1
  call $assembly/position/Vec2#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 3680
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 4480
  i32.store offset=20
  local.get $0
  i32.const 3680
  i32.const 4480
  call $assembly/ui/uiControl/UIControl#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $2
  local.get $0
  call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/levels/baseLevel/BaseLevel#cloneMap (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 10
  i32.const 4512
  call $~lib/rt/__newArray
  local.tee $5
  i32.store
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=4
   local.tee $2
   i32.store offset=4
   local.get $4
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    i32.const 0
    local.set $2
    loop $for-loop|1
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=4
     local.tee $1
     i32.store offset=8
     local.get $1
     local.get $4
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     local.get $2
     local.get $1
     i32.load offset=12
     i32.lt_s
     if
      local.get $2
      i32.eqz
      if
       i32.const 0
       i32.const 9
       i32.const 4544
       call $~lib/rt/__newArray
       local.set $1
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store offset=12
       local.get $5
       local.get $4
       local.get $1
       call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set
      end
      local.get $5
      local.get $4
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store offset=4
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=4
      local.tee $3
      i32.store offset=16
      local.get $3
      local.get $4
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=12
      local.get $3
      local.get $2
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $1
      local.get $3
      call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
      local.get $2
      i32.const 1
      i32.add
      local.set $2
      br $for-loop|1
     end
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
 )
 (func $assembly/ui/uiLabel/UILabel#getText (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 1088
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $0
  i32.store offset=12
  i32.const 1088
  local.get $0
  call $~lib/string/String.__concat
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1088
  i32.store offset=4
  local.get $0
  i32.const 1088
  call $~lib/string/String.__concat
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/text/insertText (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  block $folding-inner0
   local.get $2
   i32.load16_s offset=2
   local.get $0
   i32.load offset=12
   i32.ge_s
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4576
    i32.store
    i32.const 4576
    call $assembly/index/log
    br $folding-inner0
   end
   local.get $2
   i32.load16_s offset=2
   i32.const -1
   i32.eq
   if
    local.get $2
    local.get $0
    i32.load offset=12
    i32.const 1
    i32.sub
    i32.const 2
    i32.div_s
    f64.convert_i32_s
    f64.floor
    i32.trunc_f64_u
    i32.const 255
    i32.and
    i32.store16 offset=2
   end
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   local.get $0
   local.get $2
   i32.load16_s offset=2
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store
   local.get $3
   i32.load offset=12
   i32.const 2
   i32.sub
   i32.gt_s
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4688
    i32.store
    i32.const 4688
    call $assembly/index/log
    br $folding-inner0
   end
   local.get $2
   i32.load16_s
   i32.const -1
   i32.eq
   if
    local.get $0
    local.get $2
    i32.load16_s offset=2
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $2
    local.get $3
    i32.load offset=12
    local.get $1
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.sub
    i32.const 2
    i32.div_s
    f64.convert_i32_s
    f64.floor
    i32.trunc_f64_u
    i32.const 255
    i32.and
    i32.store16
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 2304
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $1
   call $~lib/string/String#split
   local.tee $1
   i32.store offset=8
   loop $for-loop|0
    local.get $5
    local.get $1
    i32.load offset=12
    i32.lt_s
    if
     local.get $0
     local.get $2
     i32.load16_s offset=2
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $3
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     local.get $5
     local.get $2
     i32.load16_s
     i32.add
     local.set $6
     local.get $1
     local.get $5
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $4
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store offset=12
     local.get $3
     local.get $6
     local.get $4
     call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/levels/level/Level#padRows (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $assembly/index/gameState
  i32.load offset=40
  global.get $assembly/index/gameState
  i32.load offset=48
  i32.div_s
  local.set $1
  global.get $assembly/index/gameState
  i32.const 0
  i32.store offset=64
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.lt_s
   if
    global.get $assembly/index/gameState
    global.get $assembly/index/gameState
    i32.load offset=64
    i32.const 1
    i32.add
    i32.store offset=64
    global.get $~lib/memory/__stack_pointer
    i32.const 2304
    i32.store
    i32.const 2304
    call $assembly/loop/display
    local.get $1
    i32.const 2
    i32.sub
    local.set $1
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/util/string/joinReferenceArray<~lib/string/String> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 1
  i32.sub
  local.tee $2
  i32.const 0
  i32.lt_s
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2304
   return
  end
  local.get $2
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   i32.const 2304
   local.get $0
   select
   return
  end
  i32.const 2304
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 2304
  i32.store offset=4
  i32.const 2300
  i32.load
  i32.const 1
  i32.shr_u
  local.set $5
  loop $for-loop|0
   local.get $2
   local.get $3
   i32.gt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $4
    i32.store
    local.get $4
    if
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $1
     local.get $4
     call $~lib/string/String.__concat
     local.tee $1
     i32.store offset=4
    end
    local.get $5
    if
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.const 2304
     call $~lib/string/String.__concat
     local.tee $1
     i32.store offset=4
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store
  local.get $0
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   local.get $0
   call $~lib/string/String.__concat
   local.tee $1
   i32.store offset=4
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/levels/level/Level#padColumn (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $assembly/index/gameState
  global.get $assembly/index/gameState
  i32.load offset=36
  global.get $assembly/index/gameState
  i32.load offset=44
  i32.div_s
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.sub
  i32.const 2
  i32.div_s
  f64.convert_i32_s
  f64.floor
  i32.trunc_f64_s
  local.tee $1
  i32.store offset=68
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=4
  local.get $1
  call $~lib/string/String#repeat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  local.get $0
  call $~lib/string/String.__concat
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#render (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.store
   local.get $4
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=12
    local.tee $2
    i32.store offset=12
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=8
    local.get $2
    call $assembly/ui/uiLabel/UILabel#getText
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=12
    local.tee $3
    i32.store offset=12
    local.get $3
    local.get $4
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.load
    local.tee $3
    i32.store offset=8
    local.get $1
    local.get $2
    local.get $3
    call $assembly/text/insertText
    drop
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $4
  loop $for-loop|1
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=16
   local.tee $2
   i32.store
   local.get $4
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=16
    local.tee $2
    i32.store offset=12
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=8
    local.get $2
    call $assembly/ui/uiLabel/UILabel#getText
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=16
    local.tee $3
    i32.store offset=12
    local.get $3
    local.get $4
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.load
    local.tee $3
    i32.store offset=8
    local.get $1
    local.get $2
    local.get $3
    call $assembly/text/insertText
    drop
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|1
   end
  end
  call $assembly/loop/clear
  call $assembly/loop/addLayer
  local.get $1
  i32.load offset=12
  call $assembly/levels/level/Level#padRows
  i32.const 0
  local.set $4
  i32.const 0
  local.set $0
  loop $for-loop|2
   local.get $0
   local.get $1
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    local.get $0
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    i32.const 2304
    i32.store offset=8
    local.get $2
    i32.load offset=4
    local.get $2
    i32.load offset=12
    call $~lib/util/string/joinReferenceArray<~lib/string/String>
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $2
    call $assembly/levels/level/Level#padColumn
    local.tee $2
    i32.store offset=16
    local.get $4
    f64.convert_i32_s
    local.get $2
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    f64.convert_i32_s
    f64.max
    i32.trunc_f64_s
    local.set $4
    local.get $2
    call $assembly/loop/display
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|2
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $assembly/animation/Animation#getNextFrame (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  local.get $0
  i32.load8_u
  call $~lib/array/Array<~lib/string/String>#__get
  local.tee $1
  i32.store offset=4
  local.get $0
  local.get $0
  i32.load8_u
  i32.const 1
  i32.add
  i32.store8
  local.get $0
  i32.load8_u
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $3
  i32.store
  local.get $3
  i32.load offset=12
  i32.eq
  if
   local.get $0
   i32.const 0
   i32.store8
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/lemming/Lemming#renderFrame (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.load8_u offset=18
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $0
   i32.store offset=8
   local.get $0
   call $assembly/animation/Animation#getNextFrame
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $0
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
  else
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   call $~stack_check
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   call $assembly/animation/Animation#getNextFrame
   local.tee $0
   i32.store offset=4
   local.get $0
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.const 0
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/levels/level/Level#renderLevel (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/levels/baseLevel/BaseLevel#cloneMap
  local.tee $4
  i32.store
  local.get $0
  local.get $4
  call $assembly/levels/level/Level#render
  local.get $0
  i32.load16_u offset=8
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 65535
  i32.and
  call $~lib/util/number/utoa32
  local.tee $1
  i32.store
  local.get $1
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=12
  i32.sub
  call $~lib/string/String#repeat
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  local.get $1
  call $~lib/string/String.__concat
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $assembly/loop/display
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $1
   i32.store offset=4
   local.get $5
   local.get $1
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=24
    local.tee $1
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $1
    local.get $5
    call $~lib/array/Array<~lib/string/String>#__get
    local.tee $1
    i32.store offset=8
    local.get $1
    i32.load8_u offset=1
    i32.eqz
    if
     call $assembly/loop/addLayer
     local.get $4
     i32.load offset=12
     call $assembly/levels/level/Level#padRows
     local.get $1
     i32.load offset=12
     i32.load16_s offset=2
     local.set $3
     i32.const 0
     local.set $2
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     call $~stack_check
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     i32.store
     loop $for-loop|00
      local.get $2
      local.get $3
      i32.lt_s
      if
       global.get $~lib/memory/__stack_pointer
       i32.const 2304
       i32.store
       i32.const 2304
       call $assembly/loop/display
       local.get $2
       i32.const 1
       i32.add
       local.set $2
       br $for-loop|00
      end
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=12
     i32.load16_s
     local.get $4
     i32.const 0
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $2
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store offset=4
     local.get $2
     i32.load offset=12
     local.get $1
     i32.load offset=12
     i32.load16_s
     i32.sub
     i32.const 1
     i32.sub
     local.set $6
     global.get $~lib/memory/__stack_pointer
     local.set $7
     global.get $~lib/memory/__stack_pointer
     i32.const 1184
     i32.store offset=24
     call $~lib/string/String#repeat
     local.set $2
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store offset=16
     local.get $1
     call $assembly/lemming/Lemming#renderFrame
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=20
     local.get $2
     local.get $1
     call $~lib/string/String.__concat
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 1184
     i32.store offset=16
     local.get $6
     call $~lib/string/String#repeat
     local.set $2
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store offset=12
     local.get $7
     local.get $1
     local.get $2
     call $~lib/string/String.__concat
     local.tee $1
     i32.store offset=28
     local.get $1
     call $assembly/levels/level/Level#padColumn
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     local.get $1
     call $assembly/loop/display
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 32
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/start (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  local.get $0
  i32.load offset=36
  i32.const 0
  i32.gt_s
  if (result i32)
   local.get $0
   i32.load offset=40
   i32.const 0
   i32.gt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $0
   i32.load offset=44
   i32.const 0
   i32.gt_s
  else
   i32.const 0
  end
  if (result i32)
   local.get $0
   i32.load offset=48
   i32.const 0
   i32.gt_s
  else
   i32.const 0
  end
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  global.get $~lib/memory/__stack_pointer
  call $assembly/levels/titleScreen/TitleScreen#constructor
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  call $assembly/gameState/GameState#loadLevel
  local.get $0
  call $assembly/levels/level/Level#renderLevel
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  i32.const 1
 )
 (func $assembly/loop/processInputs
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  i32.load offset=32
  local.tee $1
  i32.store
  global.get $assembly/index/gameState
  i32.load8_u offset=60
  if
   global.get $assembly/index/gameState
   i32.const 0
   i32.store8 offset=60
   global.get $assembly/index/gameState
   i32.load offset=56
   global.get $assembly/index/gameState
   i32.load offset=48
   i32.div_s
   f64.convert_i32_s
   f64.floor
   i32.trunc_f64_s
   global.get $assembly/index/gameState
   i32.load offset=64
   i32.sub
   local.tee $5
   i32.const 0
   i32.gt_s
   i32.const 0
   global.get $assembly/index/gameState
   i32.load offset=52
   global.get $assembly/index/gameState
   i32.load offset=44
   i32.div_s
   f64.convert_i32_s
   f64.floor
   i32.trunc_f64_s
   i32.const 1
   i32.add
   global.get $assembly/index/gameState
   i32.load offset=68
   i32.sub
   local.tee $3
   i32.const 0
   i32.gt_s
   select
   if (result i32)
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=4
    local.tee $0
    i32.store offset=8
    local.get $0
    i32.const 0
    call $~lib/array/Array<~lib/string/String>#__get
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=4
    local.get $3
    local.get $0
    i32.load offset=12
    i32.lt_s
   else
    i32.const 0
   end
   if (result i32)
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=4
    local.tee $0
    i32.store offset=4
    local.get $5
    local.get $0
    i32.load offset=12
    i32.lt_s
   else
    i32.const 0
   end
   if
    loop $for-loop|0
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=12
     local.tee $0
     i32.store offset=4
     local.get $2
     local.get $0
     i32.load offset=12
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.load offset=12
      local.tee $0
      i32.store offset=8
      local.get $0
      local.get $2
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=4
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.sub
      global.set $~lib/memory/__stack_pointer
      call $~stack_check
      global.get $~lib/memory/__stack_pointer
      i64.const 0
      i64.store
      local.get $0
      call $assembly/ui/uiLabel/UILabel#getText
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $4
      i32.store
      local.get $4
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.const 1
      i32.shr_u
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load
      local.tee $0
      i32.store offset=4
      local.get $5
      local.get $0
      i32.load16_s offset=2
      i32.eq
      i32.const 0
      local.get $3
      local.get $4
      local.get $0
      i32.load16_s
      local.tee $0
      i32.add
      i32.lt_s
      i32.const 0
      local.get $0
      local.get $3
      i32.lt_s
      select
      select
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      if
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.load offset=12
       local.tee $1
       i32.store offset=8
       local.get $1
       local.get $2
       call $~lib/array/Array<~lib/string/String>#__get
       local.set $1
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store offset=4
       local.get $1
       i32.load offset=12
       i32.load
       call_indirect $0 (type $none_=>_none)
       global.get $~lib/memory/__stack_pointer
       i32.const 12
       i32.add
       global.set $~lib/memory/__stack_pointer
       return
      end
      local.get $2
      i32.const 1
      i32.add
      local.set $2
      br $for-loop|0
     end
    end
    global.get $assembly/index/gameState
    i32.load offset=80
    if
     block $__inlined_func$assembly/levels/baseLevel/BaseLevel#processLemmingSelect@virtual
      block $default
       local.get $1
       i32.const 8
       i32.sub
       i32.load
       local.tee $2
       i32.const 19
       i32.eq
       local.get $2
       i32.const 18
       i32.eq
       i32.or
       local.get $2
       i32.const 27
       i32.eq
       i32.or
       i32.eqz
       if
        local.get $2
        i32.const 7
        i32.eq
        br_if $__inlined_func$assembly/levels/baseLevel/BaseLevel#processLemmingSelect@virtual
        br $default
       end
       local.get $1
       local.get $3
       local.get $5
       call $assembly/levels/level/Level#processLemmingSelect
       br $__inlined_func$assembly/levels/baseLevel/BaseLevel#processLemmingSelect@virtual
      end
      unreachable
     end
    end
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/autoplayer/index/AutoPlayer#update (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  i32.add
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  i32.load
  local.tee $2
  local.get $2
  call $~lib/util/hash/HASH<u32>
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#find
  if
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   local.tee $2
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=4
   local.tee $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $1
   local.get $0
   i32.load
   local.tee $0
   local.get $0
   call $~lib/util/hash/HASH<u32>
   call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#find
   local.tee $0
   i32.eqz
   if
    i32.const 4832
    i32.const 4896
    i32.const 105
    i32.const 17
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load offset=4
   local.tee $0
   i32.store offset=8
   loop $for-loop|0
    local.get $3
    local.get $0
    i32.load offset=12
    i32.lt_s
    if
     local.get $0
     local.get $3
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load offset=4
     i32.const 9
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/gameState
      local.tee $1
      i32.store
      local.get $1
      call $assembly/gameState/GameState#setNukeGift
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/gameState
      local.tee $1
      i32.store
      local.get $1
      call $assembly/gameState/GameState#setNukeGift
     else
      block $__inlined_func$assembly/levels/baseLevel/BaseLevel#giveGiftToLemming@virtual
       local.get $0
       local.get $3
       call $~lib/array/Array<~lib/string/String>#__get
       i32.load8_u
       local.set $4
       local.get $0
       local.get $3
       call $~lib/array/Array<~lib/string/String>#__get
       i32.load offset=4
       local.set $5
       block $default
        local.get $2
        i32.const 8
        i32.sub
        i32.load
        local.tee $1
        i32.const 19
        i32.eq
        local.get $1
        i32.const 18
        i32.eq
        i32.or
        local.get $1
        i32.const 27
        i32.eq
        i32.or
        i32.eqz
        if
         local.get $1
         i32.const 7
         i32.eq
         br_if $__inlined_func$assembly/levels/baseLevel/BaseLevel#giveGiftToLemming@virtual
         br $default
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 8
        i32.sub
        global.set $~lib/memory/__stack_pointer
        call $~stack_check
        global.get $~lib/memory/__stack_pointer
        i64.const 0
        i64.store
        global.get $~lib/memory/__stack_pointer
        local.get $2
        i32.load offset=24
        local.tee $1
        i32.store
        local.get $1
        i32.load offset=12
        i32.const 255
        i32.and
        local.get $4
        i32.const 255
        i32.and
        i32.ge_u
        if
         global.get $~lib/memory/__stack_pointer
         local.get $2
         i32.load offset=24
         local.tee $1
         i32.store offset=4
         local.get $1
         local.get $4
         i32.const 255
         i32.and
         call $~lib/array/Array<~lib/string/String>#__get
         local.set $1
         global.get $~lib/memory/__stack_pointer
         local.get $1
         i32.store
         local.get $1
         local.get $5
         call $assembly/lemming/Lemming#setGift
         drop
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 8
        i32.add
        global.set $~lib/memory/__stack_pointer
        br $__inlined_func$assembly/levels/baseLevel/BaseLevel#giveGiftToLemming@virtual
       end
       unreachable
      end
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|0
    end
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/loop/eventLoop
  (local $0 i32)
  (local $1 i32)
  (local $2 i64)
  (local $3 i64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  call $assembly/loop/processInputs
  global.get $assembly/index/gameState
  i32.load8_u offset=4
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  call $~lib/bindings/Date/now
  i64.trunc_f64_s
  local.set $2
  global.get $assembly/index/gameState
  i32.load offset=8
  i32.const 2
  i32.eq
  local.set $1
  local.get $2
  global.get $assembly/index/gameState
  i64.load offset=16
  i64.sub
  local.tee $3
  i64.const 65535
  i64.gt_s
  local.tee $0
  if (result i32)
   local.get $0
  else
   global.get $assembly/index/gameState
   i32.load16_u offset=26
   local.get $3
   i32.wrap_i64
   i32.const 65535
   i32.and
   i32.le_u
  end
  i32.const 0
  i32.const 0
  local.get $1
  global.get $assembly/index/gameState
  i32.load offset=32
  i32.load8_u offset=20
  select
  select
  if
   global.get $assembly/index/gameState
   local.get $2
   i64.store offset=16
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load
   local.tee $0
   i32.store
   local.get $0
   if
    local.get $0
    call $assembly/autoplayer/index/AutoPlayer#update
   end
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   local.tee $0
   i32.store offset=4
   block $__inlined_func$assembly/levels/baseLevel/BaseLevel#gameLoop@virtual
    block $default
     local.get $0
     i32.const 8
     i32.sub
     i32.load
     local.tee $1
     i32.const 19
     i32.eq
     local.get $1
     i32.const 18
     i32.eq
     i32.or
     local.get $1
     i32.const 27
     i32.eq
     local.get $1
     i32.const 34
     i32.eq
     i32.or
     i32.or
     i32.eqz
     if
      local.get $1
      i32.const 7
      i32.eq
      br_if $__inlined_func$assembly/levels/baseLevel/BaseLevel#gameLoop@virtual
      br $default
     end
     local.get $0
     call $assembly/levels/level/Level#gameLoop
     br $__inlined_func$assembly/levels/baseLevel/BaseLevel#gameLoop@virtual
    end
    unreachable
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/builder/Builder#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 6
  i32.const 29
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  i32.const 12
  i32.store8 offset=4
  local.get $1
  i32.const 0
  i32.store8 offset=5
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $2
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.load offset=4
  i32.store offset=24
  local.get $2
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 4976
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 0
  local.get $2
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/animation/Animation#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  local.get $0
  call $assembly/actions/lemmingAction/LemmingAction#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/actions/walk/Walk#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 33
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=24
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5136
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=20
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5200
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 1
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/animation/Animation#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $2
  local.get $0
  call $assembly/actions/lemmingAction/LemmingAction#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/levels/level/Level#processLemmingSelect (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $3
   i32.store
   local.get $4
   local.get $3
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=24
    local.tee $3
    i32.store
    local.get $1
    local.get $3
    local.get $4
    call $~lib/array/Array<~lib/string/String>#__get
    i32.load offset=12
    i32.load16_s
    i32.eq
    if (result i32)
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $3
     i32.store
     local.get $2
     local.get $3
     local.get $4
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load offset=12
     i32.load16_s offset=2
     i32.eq
    else
     i32.const 0
    end
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $3
     i32.store offset=4
     local.get $3
     local.get $4
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $3
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     local.get $3
     global.get $assembly/index/gameState
     i32.load offset=80
     call $assembly/lemming/Lemming#setGift
     if
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/gameState
      local.tee $0
      i32.store
      local.get $0
      i32.const 0
      call $assembly/gameState/GameState#setSelectedGift
      global.get $~lib/memory/__stack_pointer
      i32.const 8
      i32.add
      global.set $~lib/memory/__stack_pointer
      return
     end
    end
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/endSlate/EndSlate#constructor~anonymous|0
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=72
  local.tee $1
  i32.store
  local.get $0
  local.get $1
  call $assembly/levels/baseLevel/BaseLevel#clone@virtual
  call $assembly/gameState/GameState#set:currentLevel
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 1
  i32.store8 offset=4
  local.get $0
  call $~lib/bindings/Date/now
  i64.trunc_f64_s
  i64.store offset=16
  local.get $0
  i32.const 0
  i32.store8 offset=24
  local.get $0
  i32.const 1000
  i32.store16 offset=26
  local.get $0
  i32.const 65535
  i32.store16 offset=76
  local.get $0
  i32.const 0
  i32.store offset=80
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load
  local.tee $0
  i32.store
  local.get $0
  if
   local.get $0
   i32.const 0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/endSlate/EndSlate#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 37
  i32.const 34
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.const 9
  i32.const 5520
  call $~lib/rt/__newArray
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/map/mapToTiles
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 0
  local.get $0
  i32.const 1
  i32.const 14
  call $assembly/levels/level/Level#constructor
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=12
  local.tee $2
  i32.store offset=12
  i32.const 6
  i32.const 4
  call $assembly/position/Vec2#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 5584
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 5632
  i32.store offset=20
  local.get $0
  i32.const 5584
  i32.const 5632
  call $assembly/ui/uiControl/UIControl#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $2
  local.get $0
  call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=12
  local.tee $2
  i32.store offset=12
  i32.const 17
  i32.const 4
  call $assembly/position/Vec2#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 5664
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 5712
  i32.store offset=20
  local.get $0
  i32.const 5664
  i32.const 5712
  call $assembly/ui/uiControl/UIControl#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $2
  local.get $0
  call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/levels/endSlate/EndSlate#renderEndScreen (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $assembly/levels/baseLevel/BaseLevel#cloneMap
  local.tee $4
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 21
  i32.const 2
  call $assembly/position/Vec2#constructor
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $4
  local.get $1
  local.get $3
  call $assembly/text/insertText
  local.tee $4
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 21
  i32.const 3
  call $assembly/position/Vec2#constructor
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $4
  local.get $2
  local.get $3
  call $assembly/text/insertText
  local.tee $3
  i32.store
  block $__inlined_func$~lib/string/String.__lt (result i32)
   i32.const 0
   local.get $1
   local.get $2
   i32.eq
   br_if $__inlined_func$~lib/string/String.__lt
   drop
   i32.const 0
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   local.tee $4
   i32.eqz
   br_if $__inlined_func$~lib/string/String.__lt
   drop
   i32.const 1
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   local.tee $5
   i32.eqz
   br_if $__inlined_func$~lib/string/String.__lt
   drop
   local.get $2
   i32.const 0
   local.get $1
   local.get $5
   local.get $4
   local.get $4
   local.get $5
   i32.gt_s
   local.tee $1
   select
   call $~lib/util/string/compareImpl
   local.tee $2
   i32.const 0
   i32.lt_s
   local.get $1
   local.get $2
   select
  end
  if
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 1968
   i32.store offset=8
   i32.const -1
   i32.const 5
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $3
   i32.const 1968
   local.get $1
   call $assembly/text/insertText
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.store offset=8
   i32.const -1
   i32.const 6
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   i32.const 2064
   local.get $1
   call $assembly/text/insertText
   local.tee $1
   i32.store
  else
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 1824
   i32.store offset=8
   i32.const -1
   i32.const 5
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $3
   i32.const 1824
   local.get $1
   call $assembly/text/insertText
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 1888
   i32.store offset=8
   i32.const -1
   i32.const 6
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   i32.const 1888
   local.get $1
   call $assembly/text/insertText
   local.tee $1
   i32.store
  end
  local.get $0
  local.get $1
  call $assembly/levels/level/Level#render
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/fall/Fall#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 5
  i32.const 35
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 0
  i32.store8 offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=24
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5776
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=20
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5808
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 1
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/animation/Animation#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $2
  local.get $0
  call $assembly/actions/lemmingAction/LemmingAction#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/lemming/Lemming#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.const 20
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  i32.const 1
  i32.store8
  local.get $1
  i32.const 0
  i32.store8 offset=1
  local.get $1
  i32.const 0
  i32.store8 offset=2
  local.get $1
  i32.const 0
  i32.store16 offset=4
  local.get $1
  call $assembly/actions/fall/Fall#constructor
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $1
  i32.const 4
  i32.const 2
  call $assembly/position/Vec2#constructor
  call $assembly/levels/baseLevel/BaseLevel#set:uiControls
  local.get $1
  i32.const 0
  i32.store8 offset=16
  local.get $1
  i32.const 0
  i32.store8 offset=17
  local.get $1
  i32.const 0
  i32.store8 offset=18
  local.get $1
  i32.const 5
  i32.store16 offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 6
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.load offset=4
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=20
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5872
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 0
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 5936
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 1
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=20
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6000
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 2
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6064
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 3
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=20
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6128
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 4
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6160
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $2
  i32.const 5
  local.get $0
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $1
  local.get $2
  call $assembly/animation/Animation#constructor
  call $assembly/levels/level/Level#set:lemmings
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/map/isOutOfMapBounds (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.load16_s
  i32.const 0
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load16_s offset=2
   i32.const 0
   i32.lt_s
  end
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load16_s offset=2
   local.get $0
   i32.load offset=12
   i32.ge_s
  end
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load16_s
   local.get $0
   local.get $1
   i32.load16_s offset=2
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.load offset=12
   i32.ge_s
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/map/getSurroundingTile (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  call $assembly/map/isOutOfMapBounds
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1056
   return
  end
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  i32.load offset=32
  local.tee $2
  i32.store
  block $__inlined_func$assembly/levels/baseLevel/BaseLevel#isBlockerInLocation@virtual
   block $default
    block $case1
     local.get $2
     i32.const 8
     i32.sub
     i32.load
     local.tee $3
     i32.const 19
     i32.eq
     local.get $3
     i32.const 18
     i32.eq
     i32.or
     local.get $3
     i32.const 27
     i32.eq
     local.get $3
     i32.const 34
     i32.eq
     i32.or
     i32.or
     i32.eqz
     if
      local.get $3
      i32.const 7
      i32.eq
      br_if $case1
      br $default
     end
     local.get $2
     local.get $1
     call $assembly/levels/level/Level#isBlockerInLocation
     local.set $2
     br $__inlined_func$assembly/levels/baseLevel/BaseLevel#isBlockerInLocation@virtual
    end
    i32.const 0
    local.set $2
    br $__inlined_func$assembly/levels/baseLevel/BaseLevel#isBlockerInLocation@virtual
   end
   unreachable
  end
  local.get $2
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1280
   local.set $0
  else
   local.get $0
   local.get $1
   i32.load16_s offset=2
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $1
   i32.load16_s
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $0
 )
 (func $assembly/map/getSurroundingTiles (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 36
  i32.const 36
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $3
  i32.const 0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $3
  i32.const 0
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $3
  i32.const 0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $3
  i32.const 0
  call $assembly/levels/baseLevel/BaseLevel#set:uiControls
  local.get $3
  i32.const 0
  call $assembly/levels/baseLevel/BaseLevel#set:uiLabels
  local.get $3
  i32.const 0
  call $assembly/map/SurroundingTiles#set:right
  local.get $3
  i32.const 0
  call $assembly/levels/level/Level#set:lemmings
  local.get $3
  i32.const 0
  call $assembly/map/SurroundingTiles#set:bottomCentre
  local.get $3
  i32.const 0
  call $assembly/gameState/GameState#set:currentLevel
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $1
  i32.load16_s
  i32.const 1
  i32.sub
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.sub
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $1
  i32.load16_s
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.sub
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $1
  i32.load16_s
  i32.const 1
  i32.add
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.sub
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  local.get $1
  i32.load16_s
  i32.const 1
  i32.sub
  local.get $1
  i32.load16_s offset=2
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/levels/baseLevel/BaseLevel#set:uiControls
  local.get $1
  i32.load16_s
  local.get $1
  i32.load16_s offset=2
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/levels/baseLevel/BaseLevel#set:uiLabels
  local.get $1
  i32.load16_s
  i32.const 1
  i32.add
  local.get $1
  i32.load16_s offset=2
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/map/SurroundingTiles#set:right
  local.get $1
  i32.load16_s
  i32.const 1
  i32.sub
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.add
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/levels/level/Level#set:lemmings
  local.get $1
  i32.load16_s
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.add
  call $assembly/position/Vec2#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $2
  call $assembly/map/getSurroundingTile
  call $assembly/map/SurroundingTiles#set:bottomCentre
  local.get $1
  i32.load16_s
  i32.const 1
  i32.add
  local.get $1
  i32.load16_s offset=2
  i32.const 1
  i32.add
  call $assembly/position/Vec2#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $3
  local.get $0
  local.get $1
  call $assembly/map/getSurroundingTile
  call $assembly/gameState/GameState#set:currentLevel
  local.get $3
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/map/terrainIndestructible (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store
  local.get $0
  i32.const 1184
  call $~lib/string/String.__eq
  if (result i32)
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 1120
   i32.store
   local.get $0
   i32.const 1120
   call $~lib/string/String.__eq
  end
  if (result i32)
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 1152
   i32.store
   local.get $0
   i32.const 1152
   call $~lib/string/String.__eq
  end
  if (result i32)
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 1056
   i32.store
   local.get $0
   i32.const 1056
   call $~lib/string/String.__eq
  end
  if (result i32)
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 1088
   i32.store
   local.get $0
   i32.const 1088
   call $~lib/string/String.__eq
  end
  if (result i32)
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 1280
   i32.store
   local.get $0
   i32.const 1280
   call $~lib/string/String.__eq
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/map/removeTerrain (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  local.get $1
  call $assembly/map/isOutOfMapBounds
  if (result i32)
   i32.const 1
  else
   local.get $0
   local.get $1
   i32.load16_s offset=2
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=4
   local.get $2
   local.get $1
   i32.load16_s
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $assembly/map/terrainIndestructible
  end
  i32.eqz
  if
   local.get $0
   local.get $1
   i32.load16_s offset=2
   call $~lib/array/Array<~lib/string/String>#__get
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $1
   i32.load16_s
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 1184
   i32.store offset=8
   local.get $0
   local.get $1
   i32.const 1184
   call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/lemming/Lemming#updateExplosion (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.load16_u offset=20
  if (result i32)
   local.get $0
   local.get $0
   i32.load16_u offset=20
   i32.const 1
   i32.sub
   i32.store16 offset=20
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1
  else
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.sub
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.sub
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.sub
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.sub
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.add
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.sub
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.add
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.add
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.sub
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.add
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   i32.load offset=32
   i32.load offset=4
   local.tee $2
   i32.store
   local.get $0
   i32.load offset=12
   i32.load16_s
   i32.const 1
   i32.add
   local.get $0
   i32.load offset=12
   i32.load16_s offset=2
   i32.const 1
   i32.add
   call $assembly/position/Vec2#constructor
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $2
   local.get $1
   call $assembly/map/removeTerrain
   local.get $0
   i32.const 1
   i32.store8 offset=1
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
  end
 )
 (func $assembly/levels/level/Level#updateLemmings (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=16
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $1
   i32.store
   local.get $2
   local.get $1
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=24
    local.tee $1
    i32.store
    local.get $1
    local.get $2
    call $~lib/array/Array<~lib/string/String>#__get
    i32.load8_u offset=1
    i32.eqz
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $1
     i32.store offset=8
     local.get $1
     local.get $2
     call $~lib/array/Array<~lib/string/String>#__get
     local.set $3
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=4
     local.tee $4
     i32.store offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $1
     i32.store offset=16
     local.get $1
     local.get $2
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load offset=12
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=12
     local.get $4
     local.get $1
     call $assembly/map/getSurroundingTiles
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     call $~stack_check
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     i32.store
     local.get $3
     i32.load8_u offset=18
     i32.eqz
     local.tee $4
     if (result i32)
      local.get $4
     else
      local.get $3
      call $assembly/lemming/Lemming#updateExplosion
     end
     if
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.load offset=8
      local.tee $4
      i32.store
      local.get $4
      local.get $3
      local.get $1
      call $assembly/actions/lemmingAction/LemmingAction#update@virtual
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $1
     i32.store
     local.get $1
     local.get $2
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load8_u offset=2
     if
      local.get $0
      local.get $0
      i32.load8_u offset=10
      i32.const 1
      i32.add
      i32.store8 offset=10
     end
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $1
     i32.store
     local.get $1
     local.get $2
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load8_u offset=1
     if
      local.get $0
      local.get $0
      i32.load8_u offset=11
      i32.const 1
      i32.add
      i32.store8 offset=11
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#gameLoop (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  local.get $0
  i32.load16_u offset=8
  i32.const 1
  i32.sub
  i32.store16 offset=8
  local.get $0
  local.tee $1
  i32.load8_u offset=28
  if (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=24
   local.tee $0
   i32.store
   local.get $0
   i32.load offset=12
   local.get $1
   i32.load8_u
   i32.lt_s
  else
   i32.const 0
  end
  local.set $0
  local.get $1
  local.get $0
  i32.store8 offset=28
  local.get $1
  i32.load8_u offset=28
  i32.eqz
  local.tee $0
  if (result i32)
   local.get $1
   i32.load8_u offset=11
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=24
   local.tee $2
   i32.store
   local.get $2
   i32.load offset=12
   i32.eq
  else
   local.get $0
  end
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load16_u offset=8
   i32.eqz
  end
  if
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/index/gameState
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   call $~stack_check
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store offset=8
   local.get $0
   i32.const 0
   i32.store8 offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=32
   i32.load8_u offset=1
   call $~lib/util/number/utoa32
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=32
   i32.load8_u offset=10
   call $~lib/util/number/utoa32
   local.tee $3
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   call $assembly/levels/endSlate/EndSlate#constructor
   local.tee $1
   i32.store offset=8
   local.get $0
   local.get $1
   call $assembly/gameState/GameState#loadLevel
   local.get $1
   local.get $2
   local.get $3
   call $assembly/levels/endSlate/EndSlate#renderEndScreen
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  else
   local.get $1
   i32.load8_u offset=28
   if
    global.get $assembly/index/gameState
    i32.load16_u offset=76
    global.get $assembly/index/gameState
    i32.load16_u offset=78
    i32.ge_u
    if
     global.get $~lib/memory/__stack_pointer
     call $assembly/lemming/Lemming#constructor
     local.tee $0
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=24
     local.tee $2
     i32.store
     local.get $2
     local.get $0
     call $~lib/array/Array<assembly/ui/uiControl/UIControl>#push
     global.get $assembly/index/gameState
     i32.const 0
     i32.store16 offset=76
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/gameState
     i32.load
     local.tee $0
     i32.store offset=8
     local.get $0
     if
      local.get $0
      i32.const 8
      i32.sub
      i32.load
      drop
      unreachable
     end
    else
     global.get $assembly/index/gameState
     global.get $assembly/index/gameState
     i32.load16_u offset=76
     i32.const 1
     i32.add
     i32.store16 offset=76
    end
   end
  end
  local.get $1
  call $assembly/levels/level/Level#updateLemmings
  local.get $1
  call $assembly/levels/level/Level#renderLevel
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/level/Level#isBlockerInLocation (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  loop $for-loop|0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $2
   i32.store
   local.get $3
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=24
    local.tee $2
    i32.store offset=4
    local.get $2
    local.get $3
    call $~lib/array/Array<~lib/string/String>#__get
    i32.load offset=12
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store
    local.get $2
    i32.load16_s
    local.get $1
    i32.load16_s
    i32.eq
    if (result i32)
     local.get $2
     i32.load16_s offset=2
     local.get $1
     i32.load16_s offset=2
     i32.eq
    else
     i32.const 0
    end
    if (result i32)
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=24
     local.tee $2
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $2
     local.get $3
     call $~lib/array/Array<~lib/string/String>#__get
     i32.load offset=8
     local.tee $2
     i32.store offset=8
     local.get $2
     if (result i32)
      block $__inlined_func$~lib/rt/__instanceof (result i32)
       local.get $2
       i32.const 20
       i32.sub
       i32.load offset=12
       local.tee $2
       i32.const 6304
       i32.load
       i32.le_u
       if
        loop $do-continue|0
         i32.const 1
         local.get $2
         i32.const 28
         i32.eq
         br_if $__inlined_func$~lib/rt/__instanceof
         drop
         local.get $2
         i32.const 3
         i32.shl
         i32.const 6308
         i32.add
         i32.load offset=4
         local.tee $2
         br_if $do-continue|0
        end
       end
       i32.const 0
      end
     else
      i32.const 0
     end
    else
     i32.const 0
    end
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
     i32.const 1
     return
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  i32.const 0
 )
 (func $assembly/actions/lemmingAction/LemmingAction#isFalling (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=28
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=4
  local.get $0
  i32.const 1184
  call $~lib/string/String.__eq
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/basher/Basher#update (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  call $assembly/actions/lemmingAction/LemmingAction#isFalling
  if
   local.get $0
   i32.const 1
   call $assembly/actions/lemmingAction/LemmingAction#handleFalling
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   call $~stack_check
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load8_u
   if (result i32)
    local.get $1
    i32.load offset=20
   else
    local.get $1
    i32.load offset=12
   end
   local.tee $1
   i32.store
   local.get $1
   call $assembly/map/terrainIndestructible
   i32.eqz
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   if
    i32.const 1
    i32.const -1
    local.get $0
    i32.load8_u
    select
    local.set $1
    global.get $~lib/memory/__stack_pointer
    global.get $assembly/index/gameState
    i32.load offset=32
    i32.load offset=4
    local.tee $3
    i32.store
    local.get $1
    local.get $0
    i32.load offset=12
    i32.load16_s
    i32.add
    local.get $0
    i32.load offset=12
    i32.load16_s offset=2
    call $assembly/position/Vec2#constructor
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $3
    local.get $2
    call $assembly/map/removeTerrain
    local.get $0
    i32.load offset=12
    local.get $1
    local.get $0
    i32.load offset=12
    i32.load16_s
    i32.add
    i32.store16
   else
    local.get $0
    call $assembly/actions/walk/Walk#constructor
    call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/builder/Builder#canMoveOntoBrickTile (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load8_u
  if (result i32)
   local.get $1
   i32.load offset=8
  else
   local.get $1
   i32.load
  end
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=4
  local.get $0
  i32.const 1184
  call $~lib/string/String.__eq
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/builder/Builder#canBuildTileInOtherDirection (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load8_u
  if (result i32)
   local.get $1
   i32.load offset=12
  else
   local.get $1
   i32.load offset=20
  end
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=4
  local.get $0
  i32.const 1184
  call $~lib/string/String.__eq
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/builder/Builder#updateBuilder (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  block $folding-inner1
   local.get $2
   call $assembly/actions/lemmingAction/LemmingAction#isFalling
   if
    local.get $1
    i32.const 1
    call $assembly/actions/lemmingAction/LemmingAction#handleFalling
    br $folding-inner1
   else
    local.get $0
    i32.load8_u offset=4
    i32.eqz
    if
     local.get $1
     call $assembly/actions/walk/Walk#constructor
     call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
     br $folding-inner1
    end
   end
   i32.const 1
   i32.const -1
   local.get $1
   i32.load8_u
   select
   local.set $4
   block $folding-inner0
    local.get $0
    i32.load8_u offset=5
    if
     local.get $1
     local.get $2
     call $assembly/actions/builder/Builder#canMoveOntoBrickTile
     if
      local.get $1
      i32.load offset=12
      local.get $4
      local.get $1
      i32.load offset=12
      i32.load16_s
      i32.add
      i32.store16
      local.get $1
      i32.load offset=12
      local.get $1
      i32.load offset=12
      i32.load16_s offset=2
      i32.const 1
      i32.sub
      i32.store16 offset=2
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/gameState
      i32.load offset=32
      i32.load offset=4
      local.tee $2
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.load offset=12
      local.tee $3
      i32.store offset=4
      global.get $~lib/memory/__stack_pointer
      local.get $2
      local.get $3
      call $assembly/map/getSurroundingTiles
      local.tee $2
      i32.store offset=8
     else
      local.get $1
      local.get $2
      call $assembly/actions/builder/Builder#canBuildTileInOtherDirection
      br_if $folding-inner0
      local.get $1
      call $assembly/actions/walk/Walk#constructor
      call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
     end
    else
     local.get $0
     i32.const 1
     i32.store8 offset=5
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    call $~stack_check
    global.get $~lib/memory/__stack_pointer
    i64.const 0
    i64.store
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load8_u
    if (result i32)
     local.get $2
     i32.load offset=20
    else
     local.get $2
     i32.load offset=12
    end
    local.tee $3
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 1184
    i32.store offset=4
    local.get $3
    i32.const 1184
    call $~lib/string/String.__eq
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    if
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/gameState
     i32.load offset=32
     i32.load offset=4
     local.tee $2
     i32.store
     local.get $4
     local.get $1
     i32.load offset=12
     i32.load16_s
     i32.add
     local.get $1
     i32.load offset=12
     i32.load16_s offset=2
     call $assembly/position/Vec2#constructor
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.sub
     global.set $~lib/memory/__stack_pointer
     call $~stack_check
     global.get $~lib/memory/__stack_pointer
     i64.const 0
     i64.store
     global.get $~lib/memory/__stack_pointer
     i32.const 0
     i32.store offset=8
     local.get $2
     local.get $1
     call $assembly/map/isOutOfMapBounds
     if (result i32)
      i32.const 1
     else
      local.get $2
      local.get $1
      i32.load16_s offset=2
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=8
      local.get $3
      local.get $1
      i32.load16_s
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store
      global.get $~lib/memory/__stack_pointer
      i32.const 1184
      i32.store offset=4
      local.get $3
      i32.const 1184
      call $~lib/string/String.__eq
      i32.eqz
     end
     i32.eqz
     if
      local.get $2
      local.get $1
      i32.load16_s offset=2
      call $~lib/array/Array<~lib/string/String>#__get
      local.set $2
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.store
      local.get $1
      i32.load16_s
      local.set $1
      global.get $~lib/memory/__stack_pointer
      i32.const 1248
      i32.store offset=8
      local.get $2
      local.get $1
      i32.const 1248
      call $~lib/array/Array<~lib/array/Array<~lib/string/String>>#__set
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $0
     local.get $0
     i32.load8_u offset=4
     i32.const 1
     i32.sub
     i32.store8 offset=4
    else
     local.get $1
     local.get $2
     call $assembly/actions/builder/Builder#canBuildTileInOtherDirection
     br_if $folding-inner0
     local.get $1
     call $assembly/actions/walk/Walk#constructor
     call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   local.get $1
   local.get $1
   i32.load8_u
   i32.eqz
   i32.store8
   local.get $0
   i32.const 0
   i32.store8 offset=5
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/umbrella/Umbrella#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 6
  i32.const 37
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 0
  i32.store16 offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=24
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6192
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/animation/Animation#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $2
  local.get $0
  call $assembly/actions/lemmingAction/LemmingAction#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/actions/miner/Miner#update (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  call $assembly/actions/lemmingAction/LemmingAction#isFalling
  if
   local.get $0
   i32.const 1
   call $assembly/actions/lemmingAction/LemmingAction#handleFalling
  else
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   call $~stack_check
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load8_u
   if (result i32)
    local.get $1
    i32.load offset=32
   else
    local.get $1
    i32.load offset=24
   end
   local.tee $1
   i32.store
   local.get $1
   call $assembly/map/terrainIndestructible
   i32.eqz
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   if
    i32.const 1
    i32.const -1
    local.get $0
    i32.load8_u
    select
    local.set $1
    global.get $~lib/memory/__stack_pointer
    global.get $assembly/index/gameState
    i32.load offset=32
    i32.load offset=4
    local.tee $3
    i32.store
    local.get $0
    i32.load offset=12
    i32.load16_s
    local.get $0
    i32.load offset=12
    i32.load16_s offset=2
    i32.const 1
    i32.add
    call $assembly/position/Vec2#constructor
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $3
    local.get $2
    call $assembly/map/removeTerrain
    global.get $~lib/memory/__stack_pointer
    global.get $assembly/index/gameState
    i32.load offset=32
    i32.load offset=4
    local.tee $3
    i32.store
    local.get $1
    local.get $0
    i32.load offset=12
    i32.load16_s
    i32.add
    local.get $0
    i32.load offset=12
    i32.load16_s offset=2
    i32.const 1
    i32.add
    call $assembly/position/Vec2#constructor
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $3
    local.get $2
    call $assembly/map/removeTerrain
    local.get $0
    i32.load offset=12
    local.get $1
    local.get $0
    i32.load offset=12
    i32.load16_s
    i32.add
    i32.store16
    local.get $0
    i32.load offset=12
    local.get $0
    i32.load offset=12
    i32.load16_s offset=2
    i32.const 1
    i32.add
    i32.store16 offset=2
   else
    local.get $0
    call $assembly/actions/walk/Walk#constructor
    call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/climb/Climb#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 38
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 23
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=24
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6224
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 0
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const 10
  i32.const 0
  call $~lib/rt/__newArray
  local.tee $1
  i32.store offset=24
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load offset=4
  i32.store offset=20
  local.get $1
  i32.const 0
  i32.const 1
  i32.const 9
  i32.const 6288
  call $~lib/rt/__newArray
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  local.get $0
  i32.const 1
  local.get $1
  call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $0
  call $assembly/animation/Animation#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $2
  local.get $0
  call $assembly/actions/lemmingAction/LemmingAction#constructor
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/map/isWalkingDownStairs (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1
  i32.const -1
  local.get $0
  i32.load8_u
  select
  local.tee $1
  local.get $0
  i32.load offset=12
  i32.load16_s
  i32.add
  local.get $0
  i32.load offset=12
  i32.load16_s offset=2
  i32.const 1
  i32.add
  call $assembly/position/Vec2#constructor
  local.tee $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  local.get $0
  i32.load offset=12
  i32.load16_s
  i32.add
  local.get $0
  i32.load offset=12
  i32.load16_s offset=2
  i32.const 2
  i32.add
  call $assembly/position/Vec2#constructor
  local.tee $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  i32.load offset=32
  i32.load offset=4
  local.tee $1
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $1
  local.get $2
  call $assembly/map/getSurroundingTile
  local.tee $1
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  i32.load offset=32
  i32.load offset=4
  local.tee $2
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $2
  local.get $0
  call $assembly/map/getSurroundingTile
  local.tee $0
  i32.store offset=16
  global.get $~lib/memory/__stack_pointer
  i32.const 1184
  i32.store offset=20
  local.get $1
  i32.const 1184
  call $~lib/string/String.__eq
  if (result i32)
   global.get $~lib/memory/__stack_pointer
   i32.const 1248
   i32.store offset=20
   local.get $0
   i32.const 1248
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else
    global.get $~lib/memory/__stack_pointer
    i32.const 1216
    i32.store offset=20
    local.get $0
    i32.const 1216
    call $~lib/string/String.__eq
   end
  else
   i32.const 0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 24
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/actions/walk/Walk#update (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  call $assembly/actions/lemmingAction/LemmingAction#isFalling
  if
   local.get $0
   i32.const 1
   call $assembly/actions/lemmingAction/LemmingAction#handleFalling
  else
   local.get $0
   i32.load8_u
   if (result i32)
    i32.const 0
   else
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=12
    local.tee $2
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 1152
    i32.store offset=4
    local.get $2
    i32.const 1152
    call $~lib/string/String.__eq
   end
   if (result i32)
    i32.const 1
   else
    local.get $0
    i32.load8_u
    if (result i32)
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load offset=20
     local.tee $2
     i32.store
     global.get $~lib/memory/__stack_pointer
     i32.const 1152
     i32.store offset=4
     local.get $2
     i32.const 1152
     call $~lib/string/String.__eq
    else
     i32.const 0
    end
   end
   if
    local.get $0
    i32.const 1
    i32.store8 offset=2
    local.get $0
    i32.const 1
    i32.store8 offset=1
   else
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    call $~stack_check
    global.get $~lib/memory/__stack_pointer
    i64.const 0
    i64.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.tee $2
    i32.load8_u
    if (result i32)
     local.get $1
     i32.load offset=20
    else
     local.get $1
     i32.load offset=12
    end
    local.tee $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 1248
    i32.store offset=4
    local.get $0
    i32.const 1248
    call $~lib/string/String.__eq
    if (result i32)
     local.get $2
     local.get $1
     call $assembly/actions/builder/Builder#canMoveOntoBrickTile
    else
     global.get $~lib/memory/__stack_pointer
     i32.const 1184
     i32.store offset=4
     local.get $0
     i32.const 1184
     call $~lib/string/String.__eq
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    if
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.load8_u
     if (result i32)
      local.get $1
      i32.load offset=20
     else
      local.get $1
      i32.load offset=12
     end
     local.tee $0
     i32.store offset=8
     local.get $2
     call $assembly/map/isWalkingDownStairs
     local.set $1
     local.get $2
     i32.load offset=12
     local.get $2
     i32.load offset=12
     i32.load16_s
     i32.const 1
     i32.const -1
     local.get $2
     i32.load8_u
     select
     i32.add
     i32.store16
     global.get $~lib/memory/__stack_pointer
     i32.const 1248
     i32.store offset=4
     local.get $0
     i32.const 1248
     call $~lib/string/String.__eq
     if
      local.get $2
      i32.load offset=12
      local.get $2
      i32.load offset=12
      i32.load16_s offset=2
      i32.const 1
      i32.sub
      i32.store16 offset=2
     else
      local.get $1
      if
       local.get $2
       i32.load offset=12
       local.get $2
       i32.load offset=12
       i32.load16_s offset=2
       i32.const 1
       i32.add
       i32.store16 offset=2
      end
     end
    else
     local.get $2
     i32.load8_u offset=17
     if
      local.get $2
      call $assembly/actions/climb/Climb#constructor
      call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
     else
      local.get $2
      local.get $2
      i32.load8_u
      i32.eqz
      i32.store8
     end
    end
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1712
   i32.const 1760
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  call $~lib/memory/memory.fill
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/autoplayer/index/AutoAction#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.const 3
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  i32.store8
  local.get $1
  i32.const 8
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 2
  i32.shl
  local.tee $4
  local.set $6
  local.get $4
  i32.const 0
  call $~lib/rt/itcms/__new
  local.set $3
  local.get $2
  if
   local.get $3
   local.get $2
   local.get $6
   call $~lib/memory/memory.copy
  end
  local.get $3
  i32.store
  i32.const 16
  local.get $1
  call $~lib/rt/itcms/__new
  local.tee $1
  local.get $3
  i32.store
  local.get $1
  local.get $3
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  local.get $3
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  local.tee $4
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $3
   i32.store
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $5
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $3
   local.get $5
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $1
   i32.store
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $4
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $0
   i32.load
   i32.store offset=8
   local.get $0
   local.get $3
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/levels/baseLevel/BaseLevel#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 21
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  i32.const 0
  i32.store8 offset=1
  local.get $0
  i32.const 0
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $0
  i32.const 300
  i32.store16 offset=8
  local.get $0
  i32.const 0
  i32.store8 offset=10
  local.get $0
  i32.const 0
  i32.store8 offset=11
  local.get $0
  i32.const 0
  i32.const 14
  i32.const 2144
  call $~lib/rt/__newArray
  call $assembly/levels/baseLevel/BaseLevel#set:uiControls
  local.get $0
  i32.const 0
  i32.const 15
  i32.const 2176
  call $~lib/rt/__newArray
  call $assembly/levels/baseLevel/BaseLevel#set:uiLabels
  local.get $0
  i32.const 0
  i32.store8 offset=20
  local.get $0
  local.get $1
  i32.store8
  local.get $0
  local.get $2
  i32.store8 offset=1
  local.get $0
  local.get $3
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $0
  local.get $4
  i32.store8 offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/gameState/GameState#constructor (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 84
  i32.const 16
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  i32.const 0
  i32.store8 offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  call $~lib/bindings/Date/now
  i64.trunc_f64_s
  i64.store offset=16
  local.get $0
  i32.const 0
  i32.store8 offset=24
  local.get $0
  i32.const 1000
  i32.store16 offset=26
  local.get $0
  i32.const 50
  i32.store8 offset=28
  local.get $0
  i32.const 50
  i32.store8 offset=29
  local.get $0
  global.get $assembly/gameState/defaultLevel
  call $assembly/gameState/GameState#set:currentLevel
  local.get $0
  i32.const 0
  i32.store offset=36
  local.get $0
  i32.const 0
  i32.store offset=40
  local.get $0
  i32.const 0
  i32.store offset=44
  local.get $0
  i32.const 0
  i32.store offset=48
  local.get $0
  i32.const 0
  i32.store offset=52
  local.get $0
  i32.const 0
  i32.store offset=56
  local.get $0
  i32.const 0
  i32.store8 offset=60
  local.get $0
  i32.const 0
  i32.store offset=64
  local.get $0
  i32.const 0
  i32.store offset=68
  local.get $0
  global.get $assembly/gameState/defaultLevel
  call $assembly/gameState/GameState#set:lastLevel
  local.get $0
  i32.const 65535
  i32.store16 offset=76
  local.get $0
  i32.const 4
  i32.store16 offset=78
  local.get $0
  i32.const 0
  i32.store offset=80
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/ui/uiLabel/UILabel#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.const 12
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  local.get $2
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $0
  local.get $3
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/position/Vec2#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.const 13
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  i32.const 0
  i32.store16
  local.get $2
  i32.const 0
  i32.store16 offset=2
  local.get $2
  local.get $0
  i32.store16
  local.get $2
  local.get $1
  i32.store16 offset=2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/array/Array<~lib/string/String>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1504
   i32.const 2336
   i32.const 92
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store
  local.get $0
  i32.eqz
  if
   i32.const 3552
   i32.const 2336
   i32.const 96
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/map/Map<i32,u8>#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/HASH<u32>
  local.tee $4
  call $~lib/map/Map<i32,u8>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store8 offset=4
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<i32,u8>#rehash
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $3
   i32.store
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $5
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $3
   local.get $5
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $1
   i32.store
   local.get $3
   local.get $2
   i32.store8 offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $4
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $0
   i32.load
   i32.store offset=8
   local.get $0
   local.get $3
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/util/number/utoa32 (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2384
   return
  end
  local.get $0
  call $~lib/util/number/decimalCount32
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  local.get $1
  call $~lib/util/number/utoa_dec_simple<u32>
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/string/String#repeat (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 1
  i32.const 1180
  i32.load
  i32.const 1
  i32.shr_u
  local.tee $1
  i64.extend_i32_s
  local.get $0
  i64.extend_i32_s
  i64.mul
  i64.const 268435456
  i64.gt_u
  local.get $0
  i32.const 0
  i32.lt_s
  select
  if
   i32.const 1712
   i32.const 4784
   i32.const 330
   i32.const 7
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.eqz
  i32.const 1
  local.get $0
  select
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2304
   return
  end
  local.get $0
  i32.const 1
  i32.eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 1184
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.get $1
  i32.mul
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $3
  i32.store
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  local.tee $0
  i32.mul
  local.set $1
  loop $while-continue|0
   local.get $1
   local.get $2
   i32.gt_u
   if
    local.get $2
    local.get $3
    i32.add
    i32.const 1184
    local.get $0
    call $~lib/memory/memory.copy
    local.get $0
    local.get $2
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/actions/lemmingAction/LemmingAction#constructor (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.const 21
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  i32.const 0
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  local.get $0
  local.get $1
  call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:buckets
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/animation/Animation#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.const 22
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  i32.const 0
  i32.store8
  local.get $1
  i32.const 0
  call $assembly/levels/baseLevel/BaseLevel#set:map
  local.get $1
  local.get $0
  call $assembly/levels/baseLevel/BaseLevel#set:map
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/lemming/Lemming#setGift (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/gameState
  i32.load offset=32
  local.tee $2
  i32.store
  block $folding-inner1
   block $folding-inner0
    local.get $1
    i32.const 10
    i32.ne
    if (result i32)
     local.get $2
     local.get $1
     call $assembly/levels/baseLevel/BaseLevel#canUseSkill@virtual
     i32.eqz
    else
     i32.const 0
    end
    br_if $folding-inner0
    local.get $2
    local.get $1
    call $assembly/levels/baseLevel/BaseLevel#skillUsed@virtual
    block $break|0
     block $case9|0
      block $case8|0
       block $case7|0
        block $case6|0
         block $case5|0
          block $case4|0
           block $case3|0
            block $case2|0
             block $case1|0
              local.get $1
              br_table $folding-inner1 $case1|0 $case2|0 $case3|0 $case4|0 $case5|0 $case6|0 $case7|0 $case8|0 $folding-inner0 $case9|0 $folding-inner0
             end
             local.get $0
             i32.load8_u offset=17
             br_if $folding-inner0
             local.get $0
             i32.const 1
             i32.store8 offset=17
             br $break|0
            end
            local.get $0
            i32.load8_u offset=16
            br_if $folding-inner0
            local.get $0
            i32.const 1
            i32.store8 offset=16
            br $break|0
           end
           local.get $0
           i32.load8_u offset=18
           br_if $folding-inner0
           local.get $0
           i32.const 1
           i32.store8 offset=18
           br $break|0
          end
          global.get $~lib/memory/__stack_pointer
          i32.const 28
          i32.sub
          global.set $~lib/memory/__stack_pointer
          call $~stack_check
          global.get $~lib/memory/__stack_pointer
          i64.const 0
          i64.store
          global.get $~lib/memory/__stack_pointer
          i64.const 0
          i64.store offset=8
          global.get $~lib/memory/__stack_pointer
          i64.const 0
          i64.store offset=16
          global.get $~lib/memory/__stack_pointer
          i32.const 0
          i32.store offset=24
          global.get $~lib/memory/__stack_pointer
          i32.const 4
          i32.const 28
          call $~lib/rt/itcms/__new
          local.tee $3
          i32.store
          global.get $~lib/memory/__stack_pointer
          global.get $~lib/memory/__stack_pointer
          i32.const 1
          i32.const 23
          i32.const 0
          call $~lib/rt/__newArray
          local.tee $1
          i32.store offset=12
          global.get $~lib/memory/__stack_pointer
          local.get $1
          i32.load offset=4
          i32.store offset=16
          global.get $~lib/memory/__stack_pointer
          i32.const 1
          i32.const 10
          i32.const 0
          call $~lib/rt/__newArray
          local.tee $2
          i32.store offset=20
          global.get $~lib/memory/__stack_pointer
          local.get $2
          i32.load offset=4
          i32.store offset=24
          local.get $2
          i32.const 0
          i32.const 1
          i32.const 9
          i32.const 4944
          call $~lib/rt/__newArray
          call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
          local.get $1
          i32.const 0
          local.get $2
          call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
          global.get $~lib/memory/__stack_pointer
          local.get $1
          i32.store offset=8
          local.get $1
          call $assembly/animation/Animation#constructor
          local.set $1
          global.get $~lib/memory/__stack_pointer
          local.get $1
          i32.store offset=4
          local.get $3
          local.get $1
          call $assembly/actions/lemmingAction/LemmingAction#constructor
          local.tee $1
          i32.store
          global.get $~lib/memory/__stack_pointer
          i32.const 28
          i32.add
          global.set $~lib/memory/__stack_pointer
          local.get $0
          local.get $1
          call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
          br $break|0
         end
         local.get $0
         call $assembly/actions/builder/Builder#constructor
         call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
         br $break|0
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 28
        i32.sub
        global.set $~lib/memory/__stack_pointer
        call $~stack_check
        global.get $~lib/memory/__stack_pointer
        i64.const 0
        i64.store
        global.get $~lib/memory/__stack_pointer
        i64.const 0
        i64.store offset=8
        global.get $~lib/memory/__stack_pointer
        i64.const 0
        i64.store offset=16
        global.get $~lib/memory/__stack_pointer
        i32.const 0
        i32.store offset=24
        global.get $~lib/memory/__stack_pointer
        i32.const 4
        i32.const 30
        call $~lib/rt/itcms/__new
        local.tee $3
        i32.store
        global.get $~lib/memory/__stack_pointer
        global.get $~lib/memory/__stack_pointer
        i32.const 1
        i32.const 23
        i32.const 0
        call $~lib/rt/__newArray
        local.tee $1
        i32.store offset=12
        global.get $~lib/memory/__stack_pointer
        local.get $1
        i32.load offset=4
        i32.store offset=16
        global.get $~lib/memory/__stack_pointer
        i32.const 1
        i32.const 10
        i32.const 0
        call $~lib/rt/__newArray
        local.tee $2
        i32.store offset=20
        global.get $~lib/memory/__stack_pointer
        local.get $2
        i32.load offset=4
        i32.store offset=24
        local.get $2
        i32.const 0
        i32.const 1
        i32.const 9
        i32.const 5008
        call $~lib/rt/__newArray
        call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
        local.get $1
        i32.const 0
        local.get $2
        call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
        global.get $~lib/memory/__stack_pointer
        local.get $1
        i32.store offset=8
        local.get $1
        call $assembly/animation/Animation#constructor
        local.set $1
        global.get $~lib/memory/__stack_pointer
        local.get $1
        i32.store offset=4
        local.get $3
        local.get $1
        call $assembly/actions/lemmingAction/LemmingAction#constructor
        local.tee $1
        i32.store
        global.get $~lib/memory/__stack_pointer
        i32.const 28
        i32.add
        global.set $~lib/memory/__stack_pointer
        local.get $0
        local.get $1
        call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
        br $break|0
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 28
       i32.sub
       global.set $~lib/memory/__stack_pointer
       call $~stack_check
       global.get $~lib/memory/__stack_pointer
       i64.const 0
       i64.store
       global.get $~lib/memory/__stack_pointer
       i64.const 0
       i64.store offset=8
       global.get $~lib/memory/__stack_pointer
       i64.const 0
       i64.store offset=16
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       i32.store offset=24
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.const 31
       call $~lib/rt/itcms/__new
       local.tee $3
       i32.store
       global.get $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 1
       i32.const 23
       i32.const 0
       call $~lib/rt/__newArray
       local.tee $1
       i32.store offset=12
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.load offset=4
       i32.store offset=16
       global.get $~lib/memory/__stack_pointer
       i32.const 1
       i32.const 10
       i32.const 0
       call $~lib/rt/__newArray
       local.tee $2
       i32.store offset=20
       global.get $~lib/memory/__stack_pointer
       local.get $2
       i32.load offset=4
       i32.store offset=24
       local.get $2
       i32.const 0
       i32.const 1
       i32.const 9
       i32.const 5040
       call $~lib/rt/__newArray
       call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
       local.get $1
       i32.const 0
       local.get $2
       call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store offset=8
       local.get $1
       call $assembly/animation/Animation#constructor
       local.set $1
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store offset=4
       local.get $3
       local.get $1
       call $assembly/actions/lemmingAction/LemmingAction#constructor
       local.tee $1
       i32.store
       global.get $~lib/memory/__stack_pointer
       i32.const 28
       i32.add
       global.set $~lib/memory/__stack_pointer
       local.get $0
       local.get $1
       call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
       br $break|0
      end
      global.get $~lib/memory/__stack_pointer
      i32.const 28
      i32.sub
      global.set $~lib/memory/__stack_pointer
      call $~stack_check
      global.get $~lib/memory/__stack_pointer
      i64.const 0
      i64.store
      global.get $~lib/memory/__stack_pointer
      i64.const 0
      i64.store offset=8
      global.get $~lib/memory/__stack_pointer
      i64.const 0
      i64.store offset=16
      global.get $~lib/memory/__stack_pointer
      i32.const 0
      i32.store offset=24
      global.get $~lib/memory/__stack_pointer
      i32.const 4
      i32.const 32
      call $~lib/rt/itcms/__new
      local.tee $3
      i32.store
      global.get $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 1
      i32.const 23
      i32.const 0
      call $~lib/rt/__newArray
      local.tee $1
      i32.store offset=12
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.load offset=4
      i32.store offset=16
      global.get $~lib/memory/__stack_pointer
      i32.const 1
      i32.const 10
      i32.const 0
      call $~lib/rt/__newArray
      local.tee $2
      i32.store offset=20
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.load offset=4
      i32.store offset=24
      local.get $2
      i32.const 0
      i32.const 1
      i32.const 9
      i32.const 5072
      call $~lib/rt/__newArray
      call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
      local.get $1
      i32.const 0
      local.get $2
      call $~lib/array/Array<assembly/autoplayer/index/AutoAction>#__uset
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store offset=8
      local.get $1
      call $assembly/animation/Animation#constructor
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store offset=4
      local.get $3
      local.get $1
      call $assembly/actions/lemmingAction/LemmingAction#constructor
      local.tee $1
      i32.store
      global.get $~lib/memory/__stack_pointer
      i32.const 28
      i32.add
      global.set $~lib/memory/__stack_pointer
      local.get $0
      local.get $1
      call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
      br $break|0
     end
     local.get $0
     call $assembly/actions/walk/Walk#constructor
     call $~lib/map/Map<u32,~lib/array/Array<assembly/autoplayer/index/AutoAction>>#set:entries
    end
    br $folding-inner1
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  i32.const 1
 )
 (func $export:assembly/index/log (param $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/index/log
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
)
