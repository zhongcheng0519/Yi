// 易经8个基本卦象
export interface BaseHexagram {
  id: number;
  name: string;
  symbol: string;
  binary: string; // 二进制表示，1为阳爻，0为阴爻
  description: string;
}

export const BASE_HEXAGRAMS: BaseHexagram[] = [
  { id: 1, name: "乾", symbol: "☰", binary: "111", description: "天" },
  { id: 2, name: "坤", symbol: "☷", binary: "000", description: "地" },
  { id: 3, name: "震", symbol: "☳", binary: "001", description: "雷" },
  { id: 4, name: "巽", symbol: "☴", binary: "110", description: "风" },
  { id: 5, name: "坎", symbol: "☵", binary: "010", description: "水" },
  { id: 6, name: "离", symbol: "☲", binary: "101", description: "火" },
  { id: 7, name: "艮", symbol: "☶", binary: "100", description: "山" },
  { id: 8, name: "兑", symbol: "☱", binary: "011", description: "泽" },
];

// 易经64卦完整信息
export interface Hexagram {
  id: number;
  upperTrigram: number; // 上卦
  lowerTrigram: number; // 下卦
  name: string;
  chineseName: string;
  binary: string; // 6位二进制表示
  symbol: string;
  judgment: string; // 卦辞
  meaning: string; // 卦象含义
}

// 64卦完整数据
export const HEXAGRAMS: Hexagram[] = [
  // 乾宫八卦（上卦为乾）
  { id: 1, upperTrigram: 1, lowerTrigram: 1, name: "Qian", chineseName: "乾为天", binary: "111111", symbol: "☰☰", judgment: "乾：元，亨，利，贞。", meaning: "刚健中正，龙德之象，象征纯阳之气，主刚健进取。" },
  { id: 12, upperTrigram: 1, lowerTrigram: 2, name: "Pi", chineseName: "天地否", binary: "111000", symbol: "☰☷", judgment: "否：否之匪人，不利君子贞，大往小来。", meaning: "天地不交，闭塞不通，君子需守正待时。" },
  { id: 25, upperTrigram: 1, lowerTrigram: 3, name: "WuWang", chineseName: "天雷无妄", binary: "111001", symbol: "☰☳", judgment: "无妄：元亨利贞。其匪正有眚，不利有攸往。", meaning: "真实无妄，循正而行，顺应自然之道。" },
  { id: 44, upperTrigram: 1, lowerTrigram: 4, name: "Gou", chineseName: "天风姤", binary: "111110", symbol: "☰☴", judgment: "姤：女壮，勿用取女。", meaning: "相遇相合，阴气始生，天下大行。" },
  { id: 6, upperTrigram: 1, lowerTrigram: 5, name: "Song", chineseName: "天水讼", binary: "111010", symbol: "☰☵", judgment: "讼：有孚，窒惕，中吉，终凶。利见大人，不利涉大川。", meaning: "争讼之道，需要中正诚信，适可而止。" },
  { id: 13, upperTrigram: 1, lowerTrigram: 6, name: "TongRen", chineseName: "天火同人", binary: "111101", symbol: "☰☲", judgment: "同人：同人于野，亨。利涉大川，利君子贞。", meaning: "会同诸人，团结一致，共同前进。" },
  { id: 33, upperTrigram: 1, lowerTrigram: 7, name: "Dun", chineseName: "天山遁", binary: "111100", symbol: "☰☶", judgment: "遁：亨，小利贞。", meaning: "退避隐遁，保全自身，待时而动。" },
  { id: 10, upperTrigram: 1, lowerTrigram: 8, name: "Lv", chineseName: "天泽履", binary: "111011", symbol: "☰☱", judgment: "履：履虎尾，不咥人，亨。", meaning: "行走于虎尾之后，小心谨慎，化险为夷。" },

  // 巽宫八卦（上卦为巽）
  { id: 9, upperTrigram: 4, lowerTrigram: 1, name: "Xiaochu", chineseName: "风天小畜", binary: "110111", symbol: "☴☰", judgment: "小畜：亨。密云不雨，自我西郊。", meaning: "小有畜聚，暂时停顿，等待时机。" },
  { id: 20, upperTrigram: 4, lowerTrigram: 2, name: "Guan", chineseName: "风地观", binary: "110000", symbol: "☴☷", judgment: "观：盥而不荐，有孚顒若。", meaning: "观仰之道，恭敬诚信，以德化人。" },
  { id: 42, upperTrigram: 4, lowerTrigram: 3, name: "Yi", chineseName: "风雷益", binary: "110001", symbol: "☴☳", judgment: "益：利有攸往，利涉大川。", meaning: "增益之道损上益下，民悦无疆。" },
  { id: 57, upperTrigram: 4, lowerTrigram: 4, name: "Xun", chineseName: "巽为风", binary: "110110", symbol: "☴☴", judgment: "巽：小亨，利有攸往，利见大人。", meaning: "巽顺而入，谦逊柔和，通达无阻。" },
  { id: 59, upperTrigram: 4, lowerTrigram: 5, name: "Huan", chineseName: "风水涣", binary: "110010", symbol: "☴☵", judgment: "涣：亨。王假有庙，利涉大川，利贞。", meaning: "涣散风行，离析聚合，去旧布新。" },
  { id: 37, upperTrigram: 4, lowerTrigram: 6, name: "JiaRen", chineseName: "风火家人", binary: "110101", symbol: "☴☲", judgment: "家人：利女贞。", meaning: "家庭之道，女正位乎内，男正位乎外。" },
  { id: 53, upperTrigram: 4, lowerTrigram: 7, name: "Jian", chineseName: "风山渐", binary: "110100", symbol: "☴☶", judgment: "渐：女归吉，利贞。", meaning: "渐进有序，如女子之归，循序渐进。" },
  { id: 61, upperTrigram: 4, lowerTrigram: 8, name: "ZhongFu", chineseName: "风泽中孚", binary: "110011", symbol: "☴☱", judgment: "中孚：豚鱼吉，利涉大川，利贞。", meaning: "中正诚信，诚实守信，感化人心。" },

  // 离宫八卦（上卦为离）
  { id: 14, upperTrigram: 6, lowerTrigram: 1, name: "DaYou", chineseName: "火天大有", binary: "101111", symbol: "☲☰", judgment: "大有：元亨。", meaning: "火在天上，光照四方，盛大丰有。" },
  { id: 35, upperTrigram: 6, lowerTrigram: 2, name: "Jin", chineseName: "火地晋", binary: "101000", symbol: "☲☷", judgment: "晋：康侯用锡马蕃庶，昼日三接。", meaning: "火出地上，光明日进，晋升向上。" },
  { id: 21, upperTrigram: 6, lowerTrigram: 3, name: "ShiKe", chineseName: "火雷噬嗑", binary: "101001", symbol: "☲☳", judgment: "噬嗑：亨，利用狱。", meaning: "火雷相交，刚柔并济，噬嗑通达。" },
  { id: 50, upperTrigram: 6, lowerTrigram: 4, name: "Ding", chineseName: "火风鼎", binary: "101110", symbol: "☲☴", judgment: "鼎：元吉，亨。", meaning: "火风相济，鼎新革故，烹饪化育。" },
  { id: 64, upperTrigram: 6, lowerTrigram: 5, name: "WeiJi", chineseName: "火水未济", binary: "101010", symbol: "☲☵", judgment: "未济：亨，小狐汔济，濡其尾，无攸利。", meaning: "火水相违，事未完成，初难后亨。" },
  { id: 30, upperTrigram: 6, lowerTrigram: 6, name: "Li", chineseName: "离为火", binary: "101101", symbol: "☲☲", judgment: "离：利贞，亨。畜牝牛，吉。", meaning: "重明继照，光明不息，柔顺中正。" },
  { id: 56, upperTrigram: 6, lowerTrigram: 7, name: "Lv", chineseName: "火山旅", binary: "101100", symbol: "☲☶", judgment: "旅：小亨，旅贞吉。", meaning: "火在山上，行旅在外，小事亨通。" },
  { id: 38, upperTrigram: 6, lowerTrigram: 8, name: "Kui", chineseName: "火泽睽", binary: "101011", symbol: "☲☱", judgment: "睽：小事吉。", meaning: "火泽相违，刚柔异位，乖离矛盾。" },

  // 震宫八卦（上卦为震）
  { id: 34, upperTrigram: 3, lowerTrigram: 1, name: "DaZhuang", chineseName: "雷天大壮", binary: "001111", symbol: "☳☰", judgment: "大壮：利贞。", meaning: "雷动天上，阳刚强盛，盛大壮健。" },
  { id: 16, upperTrigram: 3, lowerTrigram: 2, name: "Yu", chineseName: "雷地豫", binary: "001000", symbol: "☳☷", judgment: "豫：利建侯行师。", meaning: "雷出地上，顺应民心，和乐安逸。" },
  { id: 51, upperTrigram: 3, lowerTrigram: 3, name: "Zhen", chineseName: "震为雷", binary: "001001", symbol: "☳☳", judgment: "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", meaning: "雷声震动，威慑四方，恐惧修省。" },
  { id: 32, upperTrigram: 3, lowerTrigram: 4, name: "Heng", chineseName: "雷风恒", binary: "001110", symbol: "☳☴", judgment: "恒：亨，无咎，利贞，利有攸往。", meaning: "雷风相薄，震动巽顺，恒久不变。" },
  { id: 40, upperTrigram: 3, lowerTrigram: 5, name: "Jie", chineseName: "雷水解", binary: "001010", symbol: "☳☵", judgment: "解：利西南，无所往，其来复吉。有攸往，夙吉。", meaning: "雷雨作解，险难消散，解除困境。" },
  { id: 55, upperTrigram: 3, lowerTrigram: 6, name: "Feng", chineseName: "雷火丰", binary: "001101", symbol: "☳☲", judgment: "丰：亨。王假之，勿忧，宜日中。", meaning: "雷火交辉，光明盛大，事业兴旺。" },
  { id: 62, upperTrigram: 3, lowerTrigram: 7, name: "XiaoGuo", chineseName: "雷山小过", binary: "001100", symbol: "☳☶", judgment: "小过：亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。", meaning: "雷动山上，稍有过越，小事可为。" },
  { id: 54, upperTrigram: 3, lowerTrigram: 8, name: "GuiMei", chineseName: "雷泽归妹", binary: "001011", symbol: "☳☱", judgment: "归妹：征凶，无攸利。", meaning: "雷动泽上，少女归嫁，征凶无利。" },

  // 坎宫八卦（上卦为坎）
  { id: 5, upperTrigram: 5, lowerTrigram: 1, name: "Xu", chineseName: "水天需", binary: "010111", symbol: "☵☰", judgment: "需：有孚，光亨，贞吉。利涉大川。", meaning: "等待时机，有诚信则光亨，坚守正道。" },
  { id: 8, upperTrigram: 5, lowerTrigram: 2, name: "Bi", chineseName: "水地比", binary: "010000", symbol: "☵☷", judgment: "比：吉。原筮，元永贞，无咎。不宁方来，后夫凶。", meaning: "亲比辅助，相互依附，团结一致。" },
  { id: 3, upperTrigram: 5, lowerTrigram: 3, name: "Zhun", chineseName: "水雷屯", binary: "010001", symbol: "☵☳", judgment: "屯：元亨利贞，勿用有攸往，利建侯。", meaning: "万物始生，艰难困顿，需待时而动。" },
  { id: 48, upperTrigram: 5, lowerTrigram: 4, name: "Jing", chineseName: "水风井", binary: "010110", symbol: "☵☴", judgment: "井：改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。", meaning: "井养不穷，施惠于人，养而不穷。" },
  { id: 29, upperTrigram: 5, lowerTrigram: 5, name: "Kan", chineseName: "坎为水", binary: "010010", symbol: "☵☵", judgment: "坎：习坎，有孚，维心亨，行有尚。", meaning: "重险相叠，险中求通，信心亨通。" },
  { id: 63, upperTrigram: 5, lowerTrigram: 6, name: "JiJi", chineseName: "水火既济", binary: "010101", symbol: "☵☲", judgment: "既济：亨小，利贞，初吉终乱。", meaning: "事已成功，需防物极必反，保持警惕。" },
  { id: 39, upperTrigram: 5, lowerTrigram: 7, name: "Jian", chineseName: "水山蹇", binary: "010100", symbol: "☵☶", judgment: "蹇：利西南，不利东北；利见大人，贞吉。", meaning: "艰难险阻，进退维谷，需待贵人。" },
  { id: 47, upperTrigram: 5, lowerTrigram: 8, name: "Kun", chineseName: "水泽困", binary: "010011", symbol: "☵☱", judgment: "困：亨，贞，大人吉，无咎，有言不信。", meaning: "困顿穷厄，坚守正道，终获亨通。" },

  // 艮宫八卦（上卦为艮）
  { id: 26, upperTrigram: 7, lowerTrigram: 1, name: "DaXu", chineseName: "山天大畜", binary: "100111", symbol: "☶☰", judgment: "大畜：利贞，不家食吉，利涉大川。", meaning: "大为积蓄，止健不动，积小成大。" },
  { id: 23, upperTrigram: 7, lowerTrigram: 2, name: "Bo", chineseName: "山地剥", binary: "100000", symbol: "☶☷", judgment: "剥：不利有攸往。", meaning: "剥落衰败，阴盛阳衰，不宜有所作为。" },
  { id: 27, upperTrigram: 7, lowerTrigram: 3, name: "Yi", chineseName: "山雷颐", binary: "100001", symbol: "☶☳", judgment: "颐：贞吉。观颐，自求口实。", meaning: "颐养之道，修身养性，自求口实。" },
  { id: 18, upperTrigram: 7, lowerTrigram: 4, name: "Gu", chineseName: "山风蛊", binary: "100110", symbol: "☶☴", judgment: "蛊：元亨，利涉大川。先甲三日，后甲三日。", meaning: "整治腐败，拨乱反正，振兴事业。" },
  { id: 4, upperTrigram: 7, lowerTrigram: 5, name: "Meng", chineseName: "山水蒙", binary: "100010", symbol: "☶☵", judgment: "蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。", meaning: "启蒙教育，童蒙求师，诚心求教。" },
  { id: 22, upperTrigram: 7, lowerTrigram: 6, name: "Bi", chineseName: "山火贲", binary: "100101", symbol: "☶☲", judgment: "贲：亨。小利有攸往。", meaning: "文饰美化，刚柔相济，质文并重。" },
  { id: 52, upperTrigram: 7, lowerTrigram: 7, name: "Gen", chineseName: "艮为山", binary: "100100", symbol: "☶☶", judgment: "艮：艮其背，不获其身，行其庭，不见其人，无咎。", meaning: "止于所当止，静止不动，守正待时。" },
  { id: 41, upperTrigram: 7, lowerTrigram: 8, name: "Sun", chineseName: "山泽损", binary: "100011", symbol: "☶☱", judgment: "损：有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。", meaning: "减损抑止，损下益上，损己利人。" },

  // 坤宫八卦（上卦为坤）
  { id: 11, upperTrigram: 2, lowerTrigram: 1, name: "Tai", chineseName: "地天泰", binary: "000111", symbol: "☷☰", judgment: "泰：小往大来，吉亨。", meaning: "天地交泰，阴阳和合，通达顺畅。" },
  { id: 2, upperTrigram: 2, lowerTrigram: 2, name: "Kun", chineseName: "坤为地", binary: "000000", symbol: "☷☷", judgment: "坤：元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。", meaning: "柔顺承载，厚德载物，以柔克刚。" },
  { id: 24, upperTrigram: 2, lowerTrigram: 3, name: "Fu", chineseName: "地雷复", binary: "000001", symbol: "☷☳", judgment: "复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。", meaning: "阳气复生，循环往复，万象更新。" },
  { id: 19, upperTrigram: 2, lowerTrigram: 4, name: "Lin", chineseName: "地风升", binary: "000110", symbol: "☷☴", judgment: "升：元亨，用见大人，勿恤，南征吉。", meaning: "上升进取，顺势而为，步步高升。" },
  { id: 7, upperTrigram: 2, lowerTrigram: 5, name: "Shi", chineseName: "地水师", binary: "000010", symbol: "☷☵", judgment: "师：贞，丈人，吉无咎。", meaning: "兴师动众，以正治国，统帅之道。" },
  { id: 36, upperTrigram: 2, lowerTrigram: 6, name: "MingYi", chineseName: "地火明夷", binary: "000101", symbol: "☷☲", judgment: "明夷：利艰贞。", meaning: "光明受伤，韬光养晦，坚守正道。" },
  { id: 15, upperTrigram: 2, lowerTrigram: 7, name: "Qian", chineseName: "地山谦", binary: "000100", symbol: "☷☶", judgment: "谦：亨，君子有终。", meaning: "谦虚谨慎，有终有始，吉祥亨通。" },
  { id: 46, upperTrigram: 2, lowerTrigram: 8, name: "Cui", chineseName: "地泽临", binary: "000011", symbol: "☷☱", judgment: "临：元，亨，利，贞。至于八月有凶。", meaning: "居高临下，刚浸而长，泽润大地。" },

  // 兑宫八卦（上卦为兑）
  { id: 43, upperTrigram: 8, lowerTrigram: 1, name: "Guai", chineseName: "泽天夬", binary: "011111", symbol: "☱☰", judgment: "夬：扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。", meaning: "决断果敢，刚决柔，除旧布新。" },
  { id: 45, upperTrigram: 8, lowerTrigram: 2, name: "Cui", chineseName: "泽地萃", binary: "011000", symbol: "☱☷", judgment: "萃：亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。", meaning: "聚合荟萃，万物聚集，共享太平。" },
  { id: 17, upperTrigram: 8, lowerTrigram: 3, name: "Sui", chineseName: "泽雷随", binary: "011001", symbol: "☱☳", judgment: "随：元亨利贞，无咎。", meaning: "随从应和，顺时而动，泰然处之。" },
  { id: 28, upperTrigram: 8, lowerTrigram: 4, name: "DaGuo", chineseName: "泽风大过", binary: "011110", symbol: "☱☴", judgment: "大过：栋桡，利有攸往，亨。", meaning: "大为过度，非常之时，需要变通。" },
  { id: 60, upperTrigram: 8, lowerTrigram: 5, name: "Jie", chineseName: "泽水困", binary: "011010", symbol: "☱☵", judgment: "节：亨。苦节不可贞。", meaning: "节制有度，适可而止，过犹不及。" },
  { id: 49, upperTrigram: 8, lowerTrigram: 6, name: "Ge", chineseName: "泽火革", binary: "011101", symbol: "☱☲", judgment: "革：巳日乃孚，元亨利贞，悔亡。", meaning: "变革更新，革故鼎新，顺天应人。" },
  { id: 31, upperTrigram: 8, lowerTrigram: 7, name: "Xian", chineseName: "泽山咸", binary: "011100", symbol: "☱☶", judgment: "咸：亨，利贞，取女吉。", meaning: "感应相通，男女相感，和谐交往。" },
  { id: 58, upperTrigram: 8, lowerTrigram: 8, name: "Dui", chineseName: "兑为泽", binary: "011011", symbol: "☱☱", judgment: "兑：亨，利贞。", meaning: "喜悦和合，朋友讲习，和颜悦色。" },
];

// 根据上卦和下卦查找对应卦象
export function findHexagram(upperTrigram: number, lowerTrigram: number): Hexagram | null {
  return HEXAGRAMS.find(hexagram => 
    hexagram.upperTrigram === upperTrigram && hexagram.lowerTrigram === lowerTrigram
  ) || null;
}

// 生成爻的符号表示
export function generateYaoLines(binary: string): string[] {
  return binary.split('').map(bit => bit === '1' ? '———' : '— —');
}

// 获取基本卦象信息
export function getBaseHexagram(id: number): BaseHexagram | null {
  return BASE_HEXAGRAMS.find(hexagram => hexagram.id === id) || null;
}