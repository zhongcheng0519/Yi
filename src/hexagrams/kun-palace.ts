import type { Hexagram } from '../hexagram-data';

// 坤宫八卦（上卦为坤）
export const KUN_PALACE_HEXAGRAMS: Hexagram[] = [
  { 
    id: 11, 
    upperTrigram: 2, 
    lowerTrigram: 1, 
    name: "Tai", 
    chineseName: "地天泰", 
    binary: "000111", 
    symbol: "☷☰", 
    judgment: "泰：小往大来，吉亨。", 
    meaning: "天地交泰，阴阳和合，通达顺畅。",
    yaoLines: [
      { position: 1, text: "初九：拔茅茹，以其汇，征吉。" },
      { position: 2, text: "九二：包荒，用冯河，不遐遗，朋亡，得尚于中行。" },
      { position: 3, text: "九三：无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。" },
      { position: 4, text: "六四：翩翩不富，以其邻，不戒以孚。" },
      { position: 5, text: "六五：帝乙归妹，以祉元吉。" },
      { position: 6, text: "上六：城复于隍，勿用师。自邑告命，贞吝。" }
    ]
  },
  { 
    id: 2, 
    upperTrigram: 2, 
    lowerTrigram: 2, 
    name: "Kun", 
    chineseName: "坤为地", 
    binary: "000000", 
    symbol: "☷☷", 
    judgment: "坤：元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。", 
    meaning: "柔顺承载，厚德载物，以柔克刚。",
    yaoLines: [
      { position: 1, text: "初六：履霜，坚冰至。" },
      { position: 2, text: "六二：直，方，大，不习无不利。" },
      { position: 3, text: "六三：含章可贞。或从王事，无成有终。" },
      { position: 4, text: "六四：括囊；无咎，无誉。" },
      { position: 5, text: "六五：黄裳，元吉。" },
      { position: 6, text: "上六：龙战于野，其血玄黄。" }
    ]
  },
  { 
    id: 24, 
    upperTrigram: 2, 
    lowerTrigram: 3, 
    name: "Fu", 
    chineseName: "地雷复", 
    binary: "000001", 
    symbol: "☷☳", 
    judgment: "复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。", 
    meaning: "阳气复生，循环往复，万象更新。",
    yaoLines: [
      { position: 1, text: "初九：不远复，无祗悔，元吉。" },
      { position: 2, text: "六二：休复，吉。" },
      { position: 3, text: "六三：频复，厉无咎。" },
      { position: 4, text: "六四：中行独复。" },
      { position: 5, text: "六五：敦复，无悔。" },
      { position: 6, text: "上六：迷复，凶，有灾眚。用行师，终有大败，以其国君，凶；至于十年，不克征。" }
    ]
  },
  { 
    id: 19, 
    upperTrigram: 2, 
    lowerTrigram: 4, 
    name: "Lin", 
    chineseName: "地风升", 
    binary: "000110", 
    symbol: "☷☴", 
    judgment: "升：元亨，用见大人，勿恤，南征吉。", 
    meaning: "上升进取，顺势而为，步步高升。",
    yaoLines: [
      { position: 1, text: "初六：允升，大吉。" },
      { position: 2, text: "九二：孚乃利用禴，无咎。" },
      { position: 3, text: "九三：升虚邑。" },
      { position: 4, text: "六四：王用亨于岐山，吉无咎。" },
      { position: 5, text: "六五：贞吉，升阶。" },
      { position: 6, text: "上六：冥升，利于不息之贞。" }
    ]
  },
  { 
    id: 7, 
    upperTrigram: 2, 
    lowerTrigram: 5, 
    name: "Shi", 
    chineseName: "地水师", 
    binary: "000010", 
    symbol: "☷☵", 
    judgment: "师：贞，丈人，吉无咎。", 
    meaning: "兴师动众，以正治国，统帅之道。",
    yaoLines: [
      { position: 1, text: "初六：师出以律，否臧凶。" },
      { position: 2, text: "九二：在师中，吉无咎，王三锡命。" },
      { position: 3, text: "六三：师或舆尸，凶。" },
      { position: 4, text: "六四：师左次，无咎。" },
      { position: 5, text: "六五：田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。" },
      { position: 6, text: "上六大君有命，开国承家，小人勿用。" }
    ]
  },
  { 
    id: 36, 
    upperTrigram: 2, 
    lowerTrigram: 6, 
    name: "MingYi", 
    chineseName: "地火明夷", 
    binary: "000101", 
    symbol: "☷☲", 
    judgment: "明夷：利艰贞。", 
    meaning: "光明受伤，韬光养晦，坚守正道。",
    yaoLines: [
      { position: 1, text: "初九：明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。" },
      { position: 2, text: "六二：明夷，夷于左股，用拯马壮，吉。" },
      { position: 3, text: "九三：明夷于南狩，得其大首，不可疾贞。" },
      { position: 4, text: "六四：入于左腹，获明夷之心，出于门庭。" },
      { position: 5, text: "六五：箕子之明夷，利贞。" },
      { position: 6, text: "上六：不明晦，初登于天，后入于地。" }
    ]
  },
  { 
    id: 15, 
    upperTrigram: 2, 
    lowerTrigram: 7, 
    name: "Qian", 
    chineseName: "地山谦", 
    binary: "000100", 
    symbol: "☷☶", 
    judgment: "谦：亨，君子有终。", 
    meaning: "谦虚谨慎，有终有始，吉祥亨通。",
    yaoLines: [
      { position: 1, text: "初六：谦谦君子，用涉大川，吉。" },
      { position: 2, text: "六二：鸣谦，贞吉。" },
      { position: 3, text: "九三：劳谦君子，有终吉。" },
      { position: 4, text: "六四：无不利，撝谦。" },
      { position: 5, text: "六五：不富，以其邻，利用侵伐，无不利。" },
      { position: 6, text: "上六：鸣谦，利用行师，征邑国。" }
    ]
  },
  { 
    id: 46, 
    upperTrigram: 2, 
    lowerTrigram: 8, 
    name: "Lin", 
    chineseName: "地泽临", 
    binary: "000011", 
    symbol: "☷☱", 
    judgment: "临：元，亨，利，贞。至于八月有凶。", 
    meaning: "居高临下，刚浸而长，泽润大地。",
    yaoLines: [
      { position: 1, text: "初九：咸临，贞吉。" },
      { position: 2, text: "九二：咸临，吉无不利。" },
      { position: 3, text: "六三：甘临，无攸利。既忧之，无咎。" },
      { position: 4, text: "六四：至临，无咎。" },
      { position: 5, text: "六五：知临，大君之宜，吉。" },
      { position: 6, text: "上六：敦临，吉无咎。" }
    ]
  }
];