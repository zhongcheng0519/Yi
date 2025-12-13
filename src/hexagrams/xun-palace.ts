import type { Hexagram } from '../hexagram-data';

// 巽宫八卦（上卦为巽）
export const XUN_PALACE_HEXAGRAMS: Hexagram[] = [
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
      { position: 1, text: "初九：复自道，何其咎，吉。" },
      { position: 2, text: "九二：牵复，吉。" },
      { position: 3, text: "九三：舆说辐，夫妻反目。" },
      { position: 4, text: "六四：有孚，血去惕出，无咎。" },
      { position: 5, text: "九五：有孚挛如，富以其邻。" },
      { position: 6, text: "上九：既雨既处，尚德载，妇贞厉。月几望，君子征凶。" }
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
      { position: 1, text: "初六：童观，小人无咎，君子吝。" },
      { position: 2, text: "六二：窥观，利女贞。" },
      { position: 3, text: "六三：观我生，进退。" },
      { position: 4, text: "六四：观国之光，利用宾于王。" },
      { position: 5, text: "九五：观我生，君子无咎。" },
      { position: 6, text: "上九：观其生，君子无咎。" }
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
      { position: 1, text: "初九：利用为大作，元吉，无咎。" },
      { position: 2, text: "六二：或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。" },
      { position: 3, text: "六三：益之用凶事，无咎。有孚中行，告公用圭。" },
      { position: 4, text: "六四：中行，告公从。利用为依迁国。" },
      { position: 5, text: "九五：有孚惠心，勿问元吉。有孚惠我德。" },
      { position: 6, text: "上九：莫益之，或击之，立心勿恒，凶。" }
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
      { position: 1, text: "初六：进退，利武人之贞。" },
      { position: 2, text: "九二：巽在床下，用史巫纷若，吉，无咎。" },
      { position: 3, text: "九三：频巽，吝。" },
      { position: 4, text: "六四：悔亡，田获三品。" },
      { position: 5, text: "九五：贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。" },
      { position: 6, text: "上九：巽在床下，丧其资斧，贞凶。" }
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
      { position: 1, text: "初六：用拯马壮，吉。" },
      { position: 2, text: "九二：涣奔其机，悔亡。" },
      { position: 3, text: "六三：涣其躬，无悔。" },
      { position: 4, text: "六四：涣其群，元吉。涣有丘，匪夷所思。" },
      { position: 5, text: "九五：涣汗其大号，涣王居，无咎。" },
      { position: 6, text: "上九：涣其血去逖出，无咎。" }
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
  }
];