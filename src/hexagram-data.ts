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

// 爻辞信息
export interface YaoLine {
  position: number; // 爻位，从下到上为1-6
  text: string; // 爻辞
  interpretation: string; // 爻辞解释
}

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
  yaoLines: YaoLine[]; // 六爻辞
}

// 64卦完整数据
export const HEXAGRAMS: Hexagram[] = [
  // 乾宫八卦（上卦为乾）
  { 
    id: 1, 
    upperTrigram: 1, 
    lowerTrigram: 1, 
    name: "Qian", 
    chineseName: "乾为天", 
    binary: "111111", 
    symbol: "☰☰", 
    judgment: "乾：元，亨，利，贞。", 
    meaning: "刚健中正，龙德之象，象征纯阳之气，主刚健进取。",
    yaoLines: [
      { position: 1, text: "初九：潜龙勿用。" },
      { position: 2, text: "九二：见龙在田，利见大人。" },
      { position: 3, text: "九三：君子终日乾乾，夕惕若厉，无咎。" },
      { position: 4, text: "九四：或跃在渊，无咎。" },
      { position: 5, text: "九五：飞龙在天，利见大人。" },
      { position: 6, text: "上九：亢龙有悔。" }
    ]
  },
  { 
    id: 12, 
    upperTrigram: 1, 
    lowerTrigram: 2, 
    name: "Pi", 
    chineseName: "天地否", 
    binary: "111000", 
    symbol: "☰☷", 
    judgment: "否：否之匪人，不利君子贞，大往小来。", 
    meaning: "天地不交，闭塞不通，君子需守正待时。",
    yaoLines: [
      { position: 1, text: "初六：拔茅茹，以其汇，贞吉，亨。" },
      { position: 2, text: "六二：包承，小人吉，大人否，亨。" },
      { position: 3, text: "六三：包羞。" },
      { position: 4, text: "九四：有命无咎，畴离祉。" },
      { position: 5, text: "九五：休否，大人吉。其亡其亡，系于苞桑。" },
      { position: 6, text: "上九：倾否，先否后喜。" }
    ]
  },
  { 
    id: 25, 
    upperTrigram: 1, 
    lowerTrigram: 3, 
    name: "WuWang", 
    chineseName: "天雷无妄", 
    binary: "111001", 
    symbol: "☰☳", 
    judgment: "无妄：元亨利贞。其匪正有眚，不利有攸往。", 
    meaning: "真实无妄，循正而行，顺应自然之道。",
    yaoLines: [
      { position: 1, text: "初九：无妄，往吉。" },
      { position: 2, text: "六二：不耕获，不菑畲，则利有攸往。" },
      { position: 3, text: "六三：无妄之灾，或系之牛，行人之得，邑人之灾。" },
      { position: 4, text: "九四：可贞，无咎。" },
      { position: 5, text: "九五：无妄之疾，勿药有喜。" },
      { position: 6, text: "上九：无妄，行有眚，无攸利。" }
    ]
  },
  { 
    id: 44, 
    upperTrigram: 1, 
    lowerTrigram: 4, 
    name: "Gou", 
    chineseName: "天风姤", 
    binary: "111110", 
    symbol: "☰☴", 
    judgment: "姤：女壮，勿用取女。", 
    meaning: "相遇相合，阴气始生，天下大行。",
    yaoLines: [
      { position: 1, text: "初六：系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。" },
      { position: 2, text: "九二：包有鱼，无咎，不利宾。" },
      { position: 3, text: "九三：臀无肤，其行次且，厉，无大咎。" },
      { position: 4, text: "九四：包无鱼，起凶。" },
      { position: 5, text: "九五：以杞包瓜，含章，有陨自天。" },
      { position: 6, text: "上九：姤其角，吝，无咎。" }
    ]
  },
  { 
    id: 6, 
    upperTrigram: 1, 
    lowerTrigram: 5, 
    name: "Song", 
    chineseName: "天水讼", 
    binary: "111010", 
    symbol: "☰☵", 
    judgment: "讼：有孚，窒惕，中吉，终凶。利见大人，不利涉大川。", 
    meaning: "争讼之道，需要中正诚信，适可而止。",
    yaoLines: [
      { position: 1, text: "初六：不永所事，小有言，终吉。", interpretation: "不长久从事争讼，小有言语争执，最终吉祥。" },
      { position: 2, text: "九二：不克讼，归而逋，其邑人三百户，无眚。", interpretation: "不能胜诉，归来逃避，其封地三百户人家，没有灾祸。" },
      { position: 3, text: "六三：食旧德，贞厉，终吉。或从王事，无成。", interpretation: "享用旧日恩德，坚守正道有危险，最终吉祥。或从事王事，没有成就。" },
      { position: 4, text: "九四：不克讼，复即命，渝安贞，吉。", interpretation: "不能胜诉，复归顺从命运，改变态度安于正道，吉祥。" },
      { position: 5, text: "九五：讼，元吉。", interpretation: "争讼，开始吉祥。" },
      { position: 6, text: "上九：或锡之鞶带，终朝三褫之。", interpretation: "或许赐给腰带，但一天之内三次被剥夺。" }
    ]
  },
  { 
    id: 13, 
    upperTrigram: 1, 
    lowerTrigram: 6, 
    name: "TongRen", 
    chineseName: "天火同人", 
    binary: "111101", 
    symbol: "☰☲", 
    judgment: "同人：同人于野，亨。利涉大川，利君子贞。", 
    meaning: "会同诸人，团结一致，共同前进。",
    yaoLines: [
      { position: 1, text: "初九：同人于门，无咎。", interpretation: "在门前会同众人，没有灾祸。" },
      { position: 2, text: "六二：同人于宗，吝。", interpretation: "在宗庙会同众人，有羞辱。" },
      { position: 3, text: "九三：伏戎于莽，升其高陵，三岁不兴。", interpretation: "在草莽中埋伏军队，登上高陵，三年不能兴起。" },
      { position: 4, text: "九四：乘其墉，弗克攻，吉。", interpretation: "登上城墙，不能攻克，吉祥。" },
      { position: 5, text: "九五：同人，先号啕而后笑，大师克相遇。", interpretation: "会同众人，先号啕大哭后欢笑，大军战胜后相遇。" },
      { position: 6, text: "上九：同人于郊，无悔。", interpretation: "在郊外会同众人，没有悔恨。" }
    ]
  },
  { 
    id: 33, 
    upperTrigram: 1, 
    lowerTrigram: 7, 
    name: "Dun", 
    chineseName: "天山遁", 
    binary: "111100", 
    symbol: "☰☶", 
    judgment: "遁：亨，小利贞。", 
    meaning: "退避隐遁，保全自身，待时而动。",
    yaoLines: [
      { position: 1, text: "初六：遁尾，厉，勿用有攸往。", interpretation: "退避在末尾，有危险，不宜有所前往。" },
      { position: 2, text: "六二：执之用黄牛之革，莫之胜说。", interpretation: "用黄牛皮制成的革带捆执，没有人能够解脱。" },
      { position: 3, text: "九三：系遁，有疾厉，畜臣妾吉。", interpretation: "系恋退避，有疾病危险，畜养臣妾吉祥。" },
      { position: 4, text: "九四：好遁，君子吉，小人否。", interpretation: "喜好退避，君子吉祥，小人不吉。" },
      { position: 5, text: "九五：嘉遁，贞吉。", interpretation: "美好地退避，坚守正道吉祥。" },
      { position: 6, text: "上九：肥遁，无不利。", interpretation: "宽裕地退避，没有不利。" }
    ]
  },
  { 
    id: 10, 
    upperTrigram: 1, 
    lowerTrigram: 8, 
    name: "Lv", 
    chineseName: "天泽履", 
    binary: "111011", 
    symbol: "☰☱", 
    judgment: "履：履虎尾，不咥人，亨。", 
    meaning: "行走于虎尾之后，小心谨慎，化险为夷。",
    yaoLines: [
      { position: 1, text: "初九：素履，往无咎。", interpretation: "朴素地履行，前往没有灾祸。" },
      { position: 2, text: "九二：履道坦坦，幽人贞吉。", interpretation: "行走在平坦的道路上，幽隐之人坚守正道吉祥。" },
      { position: 3, text: "六三：眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。", interpretation: "独眼能看，跛脚能行，踩虎尾被咬，凶险。武人效力于大君。" },
      { position: 4, text: "九四：履虎尾，愬愬终吉。", interpretation: "踩虎尾而恐惧，最终吉祥。" },
      { position: 5, text: "九五：夬履，贞厉。", interpretation: "决断地履行，坚守正道有危险。" },
      { position: 6, text: "上九：视履考祥，其旋元吉。", interpretation: "审视履行考察吉祥，其返归开始吉祥。" }
    ]
  },

  // 巽宫八卦（上卦为巽）
  { 
    id: 9, 
    upperTrigram: 4, 
    lowerTrigram: 1, 
    name: "Xiaochu", 
    chineseName: "风天小畜", 
    binary: "110111", 
    symbol: "☴☰", 
    judgment: "小畜：亨。密云不雨，自我西郊。", 
    meaning: "小有畜聚，暂时停顿，等待时机。",
    yaoLines: [
      { position: 1, text: "初九：复自道，何其咎，吉。", interpretation: "返回自己的道路，有什么灾祸，吉祥。" },
      { position: 2, text: "九二：牵复，吉。", interpretation: "牵引而回，吉祥。" },
      { position: 3, text: "九三：舆说辐，夫妻反目。", interpretation: "车轮辐条脱落，夫妻反目成仇。" },
      { position: 4, text: "六四：有孚，血去惕出，无咎。", interpretation: "有诚信，消除血光之灾和恐惧，没有灾祸。" },
      { position: 5, text: "九五：有孚挛如，富以其邻。", interpretation: "有诚信相互牵连，与邻居一起富裕。" },
      { position: 6, text: "上九：既雨既处，尚德载，妇贞厉。月几望，君子征凶。", interpretation: "已经下雨又停止，崇尚德行承载，妇人坚守正道有危险。月亮接近圆满，君子出征凶险。" }
    ]
  },
  { 
    id: 20, 
    upperTrigram: 4, 
    lowerTrigram: 2, 
    name: "Guan", 
    chineseName: "风地观", 
    binary: "110000", 
    symbol: "☴☷", 
    judgment: "观：盥而不荐，有孚顒若。", 
    meaning: "观仰之道，恭敬诚信，以德化人。",
    yaoLines: [
      { position: 1, text: "初六：童观，小人无咎，君子吝。", interpretation: "像儿童一样观察，小人没有灾祸，君子有羞辱。" },
      { position: 2, text: "六二：窥观，利女贞。", interpretation: "从门缝窥视，有利于女子坚守正道。" },
      { position: 3, text: "六三：观我生，进退。", interpretation: "观察我的生计，决定进退。" },
      { position: 4, text: "六四：观国之光，利用宾于王。", interpretation: "观察国家的光辉，有利于做国王的宾客。" },
      { position: 5, text: "九五：观我生，君子无咎。", interpretation: "观察我的生计，君子没有灾祸。" },
      { position: 6, text: "上九：观其生，君子无咎。", interpretation: "观察他人的生计，君子没有灾祸。" }
    ]
  },
  { 
    id: 42, 
    upperTrigram: 4, 
    lowerTrigram: 3, 
    name: "Yi", 
    chineseName: "风雷益", 
    binary: "110001", 
    symbol: "☴☳", 
    judgment: "益：利有攸往，利涉大川。", 
    meaning: "增益之道损上益下，民悦无疆。",
    yaoLines: [
      { position: 1, text: "初九：利用为大作，元吉，无咎。", interpretation: "有利于做大事，开始吉祥，没有灾祸。" },
      { position: 2, text: "六二：或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。", interpretation: "有人增益他，价值十朋的宝龟不能拒绝，永远坚守正道吉祥。国王用来祭祀天帝，吉祥。" },
      { position: 3, text: "六三：益之用凶事，无咎。有孚中行，告公用圭。", interpretation: "用增益来做凶事，没有灾祸。有诚信走中道，用圭玉告知公侯。" },
      { position: 4, text: "六四：中行，告公从。利用为依迁国。", interpretation: "走中道，告知公侯跟从。有利于依靠来迁移国都。" },
      { position: 5, text: "九五：有孚惠心，勿问元吉。有孚惠我德。", interpretation: "有诚信惠爱之心，不用问开始吉祥。有诚信惠爱我的德行。" },
      { position: 6, text: "上九：莫益之，或击之，立心勿恒，凶。", interpretation: "没有人增益他，有人攻击他，立心不恒，凶险。" }
    ]
  },
  { 
    id: 57, 
    upperTrigram: 4, 
    lowerTrigram: 4, 
    name: "Xun", 
    chineseName: "巽为风", 
    binary: "110110", 
    symbol: "☴☴", 
    judgment: "巽：小亨，利有攸往，利见大人。", 
    meaning: "巽顺而入，谦逊柔和，通达无阻。",
    yaoLines: [
      { position: 1, text: "初六：进退，利武人之贞。", interpretation: "进退不决，有利于武人坚守正道。" },
      { position: 2, text: "九二：巽在床下，用史巫纷若，吉，无咎。", interpretation: "谦逊到床下，用祝史巫觋纷多，吉祥，没有灾祸。" },
      { position: 3, text: "九三：频巽，吝。", interpretation: "频繁谦逊，有羞辱。" },
      { position: 4, text: "六四：悔亡，田获三品。", interpretation: "悔恨消失，田猎获得三品猎物。" },
      { position: 5, text: "九五：贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。", interpretation: "坚守正道吉祥悔恨消失，没有不利。没有开始有终结，庚日前三天，庚日后三天，吉祥。" },
      { position: 6, text: "上九：巽在床下，丧其资斧，贞凶。", interpretation: "谦逊到床下，丧失资财，坚守正道凶险。" }
    ]
  },
  { 
    id: 59, 
    upperTrigram: 4, 
    lowerTrigram: 5, 
    name: "Huan", 
    chineseName: "风水涣", 
    binary: "110010", 
    symbol: "☴☵", 
    judgment: "涣：亨。王假有庙，利涉大川，利贞。", 
    meaning: "涣散风行，离析聚合，去旧布新。",
    yaoLines: [
      { position: 1, text: "初六：用拯马壮，吉。", interpretation: "用强壮的马拯救，吉祥。" },
      { position: 2, text: "九二：涣奔其机，悔亡。", interpretation: "涣散时奔向几案，悔恨消失。" },
      { position: 3, text: "六三：涣其躬，无悔。", interpretation: "涣散自身，没有悔恨。" },
      { position: 4, text: "六四：涣其群，元吉。涣有丘，匪夷所思。", interpretation: "涣散其群体，开始吉祥。涣散如丘山，不是平常所能想象的。" },
      { position: 5, text: "九五：涣汗其大号，涣王居，无咎。", interpretation: "涣散如出汗般大声号呼，涣散王者的居处，没有灾祸。" },
      { position: 6, text: "上九：涣其血去逖出，无咎。", interpretation: "涣散血光之灾和远离，没有灾祸。" }
    ]
  },
  { 
    id: 37, 
    upperTrigram: 4, 
    lowerTrigram: 6, 
    name: "JiaRen", 
    chineseName: "风火家人", 
    binary: "110101", 
    symbol: "☴☲", 
    judgment: "家人：利女贞。", 
    meaning: "家庭之道，女正位乎内，男正位乎外。",
    yaoLines: [
      { position: 1, text: "初九：闲有家，悔亡。" },
      { position: 2, text: "六二：无攸遂，在中馈，贞吉。" },
      { position: 3, text: "九三：家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。" },
      { position: 4, text: "六四：富家，大吉。" },
      { position: 5, text: "九五：王假有家，勿恤吉。" },
      { position: 6, text: "上九：有孚威如，终吉。" }
    ]
  },
  { 
    id: 53, 
    upperTrigram: 4, 
    lowerTrigram: 7, 
    name: "Jian", 
    chineseName: "风山渐", 
    binary: "110100", 
    symbol: "☴☶", 
    judgment: "渐：女归吉，利贞。", 
    meaning: "渐进有序，如女子之归，循序渐进。",
    yaoLines: [
      { position: 1, text: "初六：鸿渐于干，小子厉，有言，无咎。" },
      { position: 2, text: "六二：鸿渐于磐，饮食衎衎，吉。" },
      { position: 3, text: "九三：鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。" },
      { position: 4, text: "六四：鸿渐于木，或得其桷，无咎。" },
      { position: 5, text: "九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉。" },
      { position: 6, text: "上九：鸿渐于逵，其羽可用为仪，吉。" }
    ]
  },
  { 
    id: 61, 
    upperTrigram: 4, 
    lowerTrigram: 8, 
    name: "ZhongFu", 
    chineseName: "风泽中孚", 
    binary: "110011", 
    symbol: "☴☱", 
    judgment: "中孚：豚鱼吉，利涉大川，利贞。", 
    meaning: "中正诚信，诚实守信，感化人心。",
    yaoLines: [
      { position: 1, text: "初九：虞吉，有他不燕。" },
      { position: 2, text: "九二：鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。" },
      { position: 3, text: "六三：得敌，或鼓或罢，或泣或歌。" },
      { position: 4, text: "六四：月几望，马匹亡，无咎。" },
      { position: 5, text: "九五：有孚挛如，无咎。" },
      { position: 6, text: "上九：翰音登于天，贞凶。" }
    ]
  },

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
  { 
    id: 5, 
    upperTrigram: 5, 
    lowerTrigram: 1, 
    name: "Xu", 
    chineseName: "水天需", 
    binary: "010111", 
    symbol: "☵☰", 
    judgment: "需：有孚，光亨，贞吉。利涉大川。", 
    meaning: "等待之道，有诚信，光明通达，坚守正道吉祥。",
    yaoLines: [
      { position: 1, text: "初九：需于郊。利用恒，无咎。" },
      { position: 2, text: "九二：需于沙。小有言，终吉。" },
      { position: 3, text: "九三：需于泥，致寇至。" },
      { position: 4, text: "六四：需于血，出自穴。" },
      { position: 5, text: "九五：需于酒食，贞吉。" },
      { position: 6, text: "上六：入于穴，有不速之客三人来，敬之终吉。" }
    ]
  },
  { 
    id: 8, 
    upperTrigram: 5, 
    lowerTrigram: 2, 
    name: "Bi", 
    chineseName: "水地比", 
    binary: "010000", 
    symbol: "☵☷", 
    judgment: "比：吉。原筮元永贞，无咎。不宁方来，后夫凶。", 
    meaning: "亲比之道，吉祥。原筮开始永远坚守正道，没有灾祸。",
    yaoLines: [
      { position: 1, text: "初六：有孚比之，无咎。有孚盈缶，终来有它，吉。" },
      { position: 2, text: "六二：比之自内，贞吉。" },
      { position: 3, text: "六三：比之匪人。" },
      { position: 4, text: "六四：外比之，贞吉。" },
      { position: 5, text: "九五：显比，王用三驱，失前禽。邑人不诫，吉。" },
      { position: 6, text: "上六：比之无首，凶。" }
    ]
  },
  { 
    id: 3, 
    upperTrigram: 5, 
    lowerTrigram: 3, 
    name: "Zhun", 
    chineseName: "水雷屯", 
    binary: "010001", 
    symbol: "☵☳", 
    judgment: "屯：元亨利贞，勿用有攸往，利建侯。", 
    meaning: "初生艰难，开始亨通，利于坚守正道。",
    yaoLines: [
      { position: 1, text: "初九：磐桓，利居贞，利建侯。" },
      { position: 2, text: "六二：屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。" },
      { position: 3, text: "六三：既鹿无虞，惟入于林中，君子几不如舍，往吝。" },
      { position: 4, text: "六四：乘马班如，求婚媾，无不利。" },
      { position: 5, text: "九五：屯其膏，小贞吉，大贞凶。" },
      { position: 6, text: "上六：乘马班如，泣血涟如。" }
    ]
  },
  { 
    id: 48, 
    upperTrigram: 5, 
    lowerTrigram: 4, 
    name: "Jing", 
    chineseName: "水风井", 
    binary: "010110", 
    symbol: "☵☴", 
    judgment: "井：改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。", 
    meaning: "井养不穷，施惠于人，养而不穷。",
    yaoLines: [
      { position: 1, text: "初六：井泥不食，旧井无禽。" },
      { position: 2, text: "九二：井谷射鲋，瓮敝漏。" },
      { position: 3, text: "九三：井渫不食，为我心恻，可用汲，王明，并受其福。" },
      { position: 4, text: "六四：井甃，无咎。" },
      { position: 5, text: "九五：井冽，寒泉食。" },
      { position: 6, text: "上六：井收勿幕，有孚元吉。" }
    ]
  },
  { 
    id: 29, 
    upperTrigram: 5, 
    lowerTrigram: 5, 
    name: "Kan", 
    chineseName: "坎为水", 
    binary: "010010", 
    symbol: "☵☵", 
    judgment: "习坎：有孚，维心亨，行有尚。", 
    meaning: "重重险陷，有诚信，维系内心通达，行动有赏。",
    yaoLines: [
      { position: 1, text: "初六：习坎，入于坎窞，凶。" },
      { position: 2, text: "九二：坎有险，求小得。" },
      { position: 3, text: "六三：来之坎坎，险且枕，入于坎窞，勿用。" },
      { position: 4, text: "六四：樽酒簋贰，用缶，纳约自牖，终无咎。" },
      { position: 5, text: "九五：坎不盈，祗既平，无咎。" },
      { position: 6, text: "上六：系用徽纆，置于丛棘，三岁不得，凶。" }
    ]
  },
  { 
    id: 63, 
    upperTrigram: 5, 
    lowerTrigram: 6, 
    name: "JiJi", 
    chineseName: "水火既济", 
    binary: "010101", 
    symbol: "☵☲", 
    judgment: "既济：亨小，利贞，初吉终乱。", 
    meaning: "事已成功，需防物极必反，保持警惕。",
    yaoLines: [
      { position: 1, text: "初九：曳其轮，濡其尾，无咎。" },
      { position: 2, text: "六二：妇丧其茀，勿逐，七日得。" },
      { position: 3, text: "九三：高宗伐鬼方，三年克之，小人勿用。" },
      { position: 4, text: "六四：繻有衣袽，终日戒。" },
      { position: 5, text: "九五：东邻杀牛，不如西邻之禴祭，实受其福。" },
      { position: 6, text: "上六：濡其首，厉。" }
    ]
  },
  { 
    id: 39, 
    upperTrigram: 5, 
    lowerTrigram: 7, 
    name: "Jian", 
    chineseName: "水山蹇", 
    binary: "010100", 
    symbol: "☵☶", 
    judgment: "蹇：利西南，不利东北；利见大人，贞吉。", 
    meaning: "艰难险阻，进退维谷，需待贵人。",
    yaoLines: [
      { position: 1, text: "初六：往蹇，来誉。" },
      { position: 2, text: "六二：王臣蹇蹇，匪躬之故。" },
      { position: 3, text: "九三：往蹇来反。" },
      { position: 4, text: "六四：往蹇来连。" },
      { position: 5, text: "九五：大蹇朋来。" },
      { position: 6, text: "上六：往蹇来硕，吉；利见大人。" }
    ]
  },
  { 
    id: 47, 
    upperTrigram: 5, 
    lowerTrigram: 8, 
    name: "Kun", 
    chineseName: "水泽困", 
    binary: "010011", 
    symbol: "☵☱", 
    judgment: "困：亨，贞，大人吉，无咎，有言不信。", 
    meaning: "困顿穷厄，坚守正道，终获亨通。",
    yaoLines: [
      { position: 1, text: "初六：臀困于株木，入于幽谷，三岁不觌。" },
      { position: 2, text: "九二：困于酒食，朱绂方来，利用享祀，征凶，无咎。" },
      { position: 3, text: "六三：困于石，据于蒺藜，入于其宫，不见其妻，凶。" },
      { position: 4, text: "九四：来徐徐，困于金车，吝，有终。" },
      { position: 5, text: "九五：劓刖，困于赤绂，乃徐有说，利用祭祀。" },
      { position: 6, text: "上六：困于葛藟，于臲卼，曰动悔。有悔，征吉。" }
    ]
  },

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