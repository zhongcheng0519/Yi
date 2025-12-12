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
  { id: 6, upperTrigram: 1, lowerTrigram: 4, name: "Song", chineseName: "天水讼", binary: "111010", symbol: "☰☵", judgment: "讼：有孚，窒惕，中吉，终凶。利见大人，不利涉大川。", meaning: "争讼之道，需要中正诚信，适可而止。" },
  { id: 13, upperTrigram: 1, lowerTrigram: 6, name: "TongRen", chineseName: "天火同人", binary: "111101", symbol: "☰☲", judgment: "同人：同人于野，亨。利涉大川，利君子贞。", meaning: "会同诸人，团结一致，共同前进。" },
  { id: 33, upperTrigram: 1, lowerTrigram: 7, name: "Dun", chineseName: "天山遁", binary: "111100", symbol: "☰☶", judgment: "遁：亨，小利贞。", meaning: "退避隐遁，保全自身，待时而动。" },
  { id: 10, upperTrigram: 1, lowerTrigram: 8, name: "Lv", chineseName: "天泽履", binary: "111011", symbol: "☰☱", judgment: "履：履虎尾，不咥人，亨。", meaning: "行走于虎尾之后，小心谨慎，化险为夷。" },
  { id: 44, upperTrigram: 1, lowerTrigram: 4, name: "Gou", chineseName: "天风姤", binary: "111110", symbol: "☰☴", judgment: "姤：女壮，勿用取女。", meaning: "相遇相合，阴气始生，天下大行。" },

  // 第9-16卦：兑宫八卦  
  { id: 9, upperTrigram: 8, lowerTrigram: 1, name: "Xiaochu", chineseName: "风天小畜", binary: "110111", symbol: "☴☰", judgment: "小畜：亨。密云不雨，自我西郊。", meaning: "小有畜聚，暂时停顿，等待时机。" },
  { id: 10, upperTrigram: 8, lowerTrigram: 2, name: "Lü", chineseName: "风地观", binary: "110000", symbol: "☴☷", judgment: "观：盥而不荐，有孚顒若。", meaning: "观仰之道，恭敬诚信，以德化人。" },
  { id: 11, upperTrigram: 8, lowerTrigram: 3, name: "Bi", chineseName: "风雷益", binary: "110001", symbol: "☴☳", judgment: "益：利有攸往，利涉大川。", meaning: "增益之道损上益下，民悦无疆。" },
  { id: 12, upperTrigram: 8, lowerTrigram: 4, name: "Zhongfu", chineseName: "风风巽", binary: "110110", symbol: "☴☴", judgment: "巽：小亨，利有攸往，利见大人。", meaning: "巽顺而入，谦逊柔和，通达无阻。" },
  { id: 13, upperTrigram: 8, lowerTrigram: 5, name: "Sun", chineseName: "风水涣", binary: "110010", symbol: "☴☵", judgment: "涣：亨。王假有庙，利涉大川，利贞。", meaning: "涣散风行，离析聚合，去旧布新。" },
  { id: 14, upperTrigram: 8, lowerTrigram: 6, name: "Jie", chineseName: "风火家人", binary: "110101", symbol: "☴☲", judgment: "家人：利女贞。", meaning: "家庭之道，女正位乎内，男正位乎外。" },
  { id: 15, upperTrigram: 8, lowerTrigram: 7, name: "Guan", chineseName: "风山渐", binary: "110100", symbol: "☴☶", judgment: "渐：女归吉，利贞。", meaning: "渐进有序，如女子之归，循序渐进。" },
  { id: 16, upperTrigram: 8, lowerTrigram: 8, name: "GuiMei", chineseName: "风泽中孚", binary: "110011", symbol: "☴☱", judgment: "中孚：豚鱼吉，利涉大川，利贞。", meaning: "中正诚信，诚实守信，感化人心。" },

  // 第17-24卦：离宫八卦
  { id: 17, upperTrigram: 6, lowerTrigram: 1, name: "Zhong", chineseName: "火天大有", binary: "101111", symbol: "☲☰", judgment: "大有：元亨。", meaning: "盛大富有，包容万有，德行天下。" },
  { id: 18, upperTrigram: 6, lowerTrigram: 2, name: "Gou", chineseName: "火地晋", binary: "101000", symbol: "☲☷", judgment: "晋：康侯用锡马蕃庶，昼日三接。", meaning: "晋升进步，日出大地，光明普照。" },
  { id: 19, upperTrigram: 6, lowerTrigram: 3, name: "Lin", chineseName: "火雷噬嗑", binary: "101001", symbol: "☲☳", judgment: "噬嗑：亨，利用狱。", meaning: "咬合咀嚼，除去间隔，公正执法。" },
  { id: 20, upperTrigram: 6, lowerTrigram: 4, name: "Guan", chineseName: "火风鼎", binary: "101110", symbol: "☲☴", judgment: "鼎：元吉，亨。", meaning: "鼎立天下，革新除旧，容载万物。" },
  { id: 21, upperTrigram: 6, lowerTrigram: 5, name: "WeiJi", chineseName: "火水未济", binary: "101010", symbol: "☲☵", judgment: "未济：亨，小狐汔济，濡其尾，无攸利。", meaning: "事未成全，需要耐心等待，坚持不懈。" },
  { id: 22, upperTrigram: 6, lowerTrigram: 6, name: "Li", chineseName: "火火离", binary: "101101", symbol: "☲☲", judgment: "离：利贞，亨。畜牝牛，吉。", meaning: "光明附丽，日升于天，照耀四方。" },
  { id: 23, upperTrigram: 6, lowerTrigram: 7, name: "Bo", chineseName: "火山旅", binary: "101100", symbol: "☲☶", judgment: "旅：小亨，旅贞吉。", meaning: "行旅在外，柔顺居贞，谨慎行事。" },
  { id: 24, upperTrigram: 6, lowerTrigram: 8, name: "Jin", chineseName: "火泽睽", binary: "101011", symbol: "☲☱", judgment: "睽：小事吉。", meaning: "乖违离散，求同存异，和而不同。" },

  // 第25-32卦：震宫八卦
  { id: 25, upperTrigram: 3, lowerTrigram: 1, name: "WuWang", chineseName: "雷天大壮", binary: "001111", symbol: "☳☰", judgment: "大壮：利贞。", meaning: "雷声隆隆，阳气旺盛，正大而壮。" },
  { id: 26, upperTrigram: 3, lowerTrigram: 2, name: "DaXu", chineseName: "雷地豫", binary: "001000", symbol: "☳☷", judgment: "豫：利建侯，行师。", meaning: "雷出地奋，先王以作乐崇德。" },
  { id: 27, upperTrigram: 3, lowerTrigram: 3, name: "Yi", chineseName: "雷雷震", binary: "001001", symbol: "☳☳", judgment: "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", meaning: "雷声震动，惊恐之后，笑语声声，镇定自若。" },
  { id: 28, upperTrigram: 3, lowerTrigram: 4, name: "Yu", chineseName: "雷风恒", binary: "001110", symbol: "☳☴", judgment: "恒：亨，无咎，利贞，利有攸往。", meaning: "雷风相与，持久永恒，恒久不变。" },
  { id: 29, upperTrigram: 3, lowerTrigram: 5, name: "Kan", chineseName: "雷水解", binary: "001010", symbol: "☳☵", judgment: "解：利西南，无咎，有孚。", meaning: "雷雨兴起，天地开解，万物生长。" },
  { id: 30, upperTrigram: 3, lowerTrigram: 6, name: "Fu", chineseName: "雷火丰", binary: "001101", symbol: "☳☲", judgment: "丰：亨，王假之，勿忧，宜日中。", meaning: "雷电皆至，声势浩大，光明盛大。" },
  { id: 31, upperTrigram: 3, lowerTrigram: 7, name: "Xian", chineseName: "雷山小过", binary: "001100", symbol: "☳☶", judgment: "小过：亨，利贞，可小事，不可大事。", meaning: "轻微过失，小事可为，大事谨慎。" },
  { id: 32, upperTrigram: 3, lowerTrigram: 8, name: "Gui", chineseName: "雷泽归妹", binary: "001011", symbol: "☳☱", judgment: "归妹：征凶，无攸利。", meaning: "女子归嫁，有终无始，阴阳失调。" },

  // 第33-40卦：巽宫八卦
  { id: 33, upperTrigram: 4, lowerTrigram: 1, name: "Dun", chineseName: "风天遁", binary: "110111", symbol: "☴☰", judgment: "遁：亨，小利贞。", meaning: "退避隐遁，保全自身，待时而动。" },
  { id: 34, upperTrigram: 4, lowerTrigram: 2, name: "DaZhuang", chineseName: "风地观", binary: "110000", symbol: "☴☷", judgment: "观：盥而不荐，有孚顒若。", meaning: "风行地上，观察民情，以德化人。" },
  { id: 35, upperTrigram: 4, lowerTrigram: 3, name: "Pi", chineseName: "风雷益", binary: "110001", symbol: "☴☳", judgment: "益：利有攸往，利涉大川。", meaning: "风行雷动，损上益下，民悦无疆。" },
  { id: 36, upperTrigram: 4, lowerTrigram: 4, name: "MingYi", chineseName: "风风巽", binary: "110110", symbol: "☴☴", judgment: "巽：小亨，利有攸往，利见大人。", meaning: "风行草偃，巽顺而入，柔克刚强。" },
  { id: 37, upperTrigram: 4, lowerTrigram: 5, name: "Huan", chineseName: "风水涣", binary: "110010", symbol: "☴☵", judgment: "涣：亨。王假有庙，利涉大川，利贞。", meaning: "风行水上，离散聚合，拯救危难。" },
  { id: 38, upperTrigram: 4, lowerTrigram: 6, name: "JiaRen", chineseName: "风火家人", binary: "110101", symbol: "☴☲", judgment: "家人：利女贞。", meaning: "风行火上，家道端正，内外和顺。" },
  { id: 39, upperTrigram: 4, lowerTrigram: 7, name: "Jian", chineseName: "风山渐", binary: "110100", symbol: "☴☶", judgment: "渐：女归吉，利贞。", meaning: "风行山上，循序渐进，女子归嫁。" },
  { id: 40, upperTrigram: 4, lowerTrigram: 8, name: "ZhongFu", chineseName: "风泽中孚", binary: "110011", symbol: "☴☱", judgment: "中孚：豚鱼吉，利涉大川，利贞。", meaning: "风行泽上，诚信感化，中正诚信。" },

  // 第41-48卦：坎宫八卦
  { id: 41, upperTrigram: 5, lowerTrigram: 1, name: "Xun", chineseName: "水天需", binary: "010111", symbol: "☵☰", judgment: "需：有孚，光亨，贞吉。利涉大川。", meaning: "等待时机，有诚信则光亨，坚守正道。" },
  { id: 42, upperTrigram: 5, lowerTrigram: 2, name: "Song", chineseName: "水地比", binary: "010000", symbol: "☵☷", judgment: "比：吉。原筮元永贞，无咎。不宁方来，后夫凶。", meaning: "水在地，亲比和谐，择善而从。" },
  { id: 43, upperTrigram: 5, lowerTrigram: 3, name: "Yu", chineseName: "水雷屯", binary: "010001", symbol: "☵☳", judgment: "屯：元亨利贞，勿用，有攸往，利建侯。", meaning: "水雷屯积，万物初生，艰难创始。" },
  { id: 44, upperTrigram: 5, lowerTrigram: 4, name: "Gou", chineseName: "水风井", binary: "010110", symbol: "☵☴", judgment: "井：改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。", meaning: "水风润下，井养不竭，供应无穷。" },
  { id: 45, upperTrigram: 5, lowerTrigram: 5, name: "Kan", chineseName: "水水坎", binary: "010010", symbol: "☵☵", judgment: "坎：有险。习坎，重险也。水流而不盈。", meaning: "重重险阻，水流不盈，险难重重。" },
  { id: 46, upperTrigram: 5, lowerTrigram: 6, name: "Jie", chineseName: "水火既济", binary: "010101", symbol: "☵☲", judgment: "既济：亨小，利贞，初吉终乱。", meaning: "水火相济，阴阳调和，事业成功。" },
  { id: 47, upperTrigram: 5, lowerTrigram: 7, name: "Gu", chineseName: "水山蹇", binary: "010100", symbol: "☵☶", judgment: "蹇：利西南，不利东北，利见大人。贞吉。", meaning: "水山阻隔，行路艰难，需要帮助。" },
  { id: 48, upperTrigram: 5, lowerTrigram: 8, name: "Zhong", chineseName: "水泽节", binary: "010011", symbol: "☵☱", judgment: "节：亨。苦节不可贞。", meaning: "水泽有度，节制适度，有益治理。" },

  // 第49-56卦：离宫八卦
  { id: 49, upperTrigram: 6, lowerTrigram: 1, name: "Ge", chineseName: "革", binary: "101111", symbol: "☲☰", judgment: "革：巳日乃孚，元亨利贞，悔亡。", meaning: "火天光明，变革革新，改旧立新。" },
  { id: 50, upperTrigram: 6, lowerTrigram: 2, name: "Ding", chineseName: "鼎", binary: "101000", symbol: "☲☷", judgment: "鼎：元吉，亨。", meaning: "火地光明，鼎立天下，承载新器。" },
  { id: 51, upperTrigram: 6, lowerTrigram: 3, name: "Zhen", chineseName: "震", binary: "101001", symbol: "☲☳", judgment: "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", meaning: "火雷齐鸣，光明震动，威震四方。" },
  { id: 52, upperTrigram: 6, lowerTrigram: 4, name: "Xun", chineseName: "巽", binary: "101110", symbol: "☲☴", judgment: "巽：小亨，利有攸往，利见大人。", meaning: "火风相生，光明随顺，德行天下。" },
  { id: 53, upperTrigram: 6, lowerTrigram: 5, name: "Kan", chineseName: "未济", binary: "101010", symbol: "☲☵", judgment: "未济：亨，小狐汔济，濡其尾，无攸利。", meaning: "火水未济，光明受阻，事未完成。" },
  { id: 54, upperTrigram: 6, lowerTrigram: 6, name: "Li", chineseName: "离", binary: "101101", symbol: "☲☲", judgment: "离：利贞，亨。畜牝牛，吉。", meaning: "火火相重，光明倍增，照耀天地。" },
  { id: 55, upperTrigram: 6, lowerTrigram: 7, name: "Lv", chineseName: "旅", binary: "101100", symbol: "☲☶", judgment: "旅：小亨，旅贞吉。", meaning: "火山旅次，光明在外，行旅求安。" },
  { id: 56, upperTrigram: 6, lowerTrigram: 8, name: "Kui", chineseName: "睽", binary: "101011", symbol: "☲☱", judgment: "睽：小事吉。", meaning: "火泽相违，光明乖离，求同存异。" },

  // 第57-64卦：艮宫八卦
  { id: 57, upperTrigram: 7, lowerTrigram: 1, name: "Xun", chineseName: "艮为山", binary: "100111", symbol: "☶☰", judgment: "艮：艮其背，不获其身，行其庭，不见其人，无咎。", meaning: "山岳静止，止于当止，不获其身，静以修身。" },
  { id: 58, upperTrigram: 7, lowerTrigram: 2, name: "Wen", chineseName: "山地剥", binary: "100000", symbol: "☶☷", judgment: "剥：不利有攸往。", meaning: "山地剥落，高山剥蚀，不宜前进。" },
  { id: 59, upperTrigram: 7, lowerTrigram: 3, name: "Jun", chineseName: "山雷颐", binary: "100001", symbol: "☶☳", judgment: "颐：贞吉。观颐，自求口实。", meaning: "山下雷动，养育万物，自求口食。" },
  { id: 60, upperTrigram: 7, lowerTrigram: 4, name: "Jian", chineseName: "山风蛊", binary: "100110", symbol: "☶☴", judgment: "蛊：元亨，利涉大川。先甲三日，后甲三日。", meaning: "山下有风，蛊惑败坏，需要整治。" },
  { id: 61, upperTrigram: 7, lowerTrigram: 5, name: "Jie", chineseName: "水山蹇", binary: "100010", symbol: "☶☵", judgment: "蹇：利西南，不利东北，利见大人。贞吉。", meaning: "水山相阻，险难重重，需要援助。" },
  { id: 62, upperTrigram: 7, lowerTrigram: 6, name: "Guo", chineseName: "火山旅", binary: "100101", symbol: "☶☲", judgment: "旅：小亨，旅贞吉。", meaning: "山上火光，行旅在外，暂得安息。" },
  { id: 63, upperTrigram: 7, lowerTrigram: 7, name: "Gen", chineseName: "山山艮", binary: "100100", symbol: "☶☶", judgment: "艮：艮其背，不获其身，行其庭，不见其人，无咎。", meaning: "重山相叠，止而又止，静观自守。" },
  { id: 64, upperTrigram: 7, lowerTrigram: 8, name: "Gui", chineseName: "山泽损", binary: "100011", symbol: "☶☱", judgment: "损：有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。", meaning: "山泽通气，损下益上，减损有度。" },
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