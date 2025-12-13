import type { Hexagram } from '../hexagram-data';

// 震宫八卦（上卦为震）
export const ZHEN_PALACE_HEXAGRAMS: Hexagram[] = [
  { 
    id: 34, 
    upperTrigram: 3, 
    lowerTrigram: 1, 
    name: "DaZhuang", 
    chineseName: "雷天大壮", 
    binary: "001111", 
    symbol: "☳☰", 
    judgment: "大壮：利贞。", 
    meaning: "雷动天上，阳刚强盛，盛大壮健。",
    yaoLines: [
      { position: 1, text: "初九：壮于趾，征凶，有孚。" },
      { position: 2, text: "九二：贞吉。" },
      { position: 3, text: "九三：小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。" },
      { position: 4, text: "九四：贞吉悔亡，藩决不羸，壮于大舆之輹。" },
      { position: 5, text: "六五：丧羊于易，无悔。" },
      { position: 6, text: "上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉。" }
    ]
  },
  { 
    id: 16, 
    upperTrigram: 3, 
    lowerTrigram: 2, 
    name: "Yu", 
    chineseName: "雷地豫", 
    binary: "001000", 
    symbol: "☳☷", 
    judgment: "豫：利建侯行师。", 
    meaning: "雷出地上，顺应民心，和乐安逸。",
    yaoLines: [
      { position: 1, text: "初六：鸣豫，凶。" },
      { position: 2, text: "六二：介于石，不终日，贞吉。" },
      { position: 3, text: "六三：盱豫，悔。迟有悔。" },
      { position: 4, text: "九四：由豫，大有得。勿疑。朋盍簪。" },
      { position: 5, text: "六五：贞疾，恒不死。" },
      { position: 6, text: "上六：冥豫，成有渝，无咎。" }
    ]
  },
  { 
    id: 51, 
    upperTrigram: 3, 
    lowerTrigram: 3, 
    name: "Zhen", 
    chineseName: "震为雷", 
    binary: "001001", 
    symbol: "☳☳", 
    judgment: "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", 
    meaning: "雷声震动，威慑四方，恐惧修省。",
    yaoLines: [
      { position: 1, text: "初九：震来虩虩，后笑言哑哑，吉。" },
      { position: 2, text: "六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得。" },
      { position: 3, text: "六三：震苏苏，震行无眚。" },
      { position: 4, text: "九四：震遂泥。" },
      { position: 5, text: "六五：震往来厉，亿无丧，有事。" },
      { position: 6, text: "上六：震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。" }
    ]
  },
  { 
    id: 32, 
    upperTrigram: 3, 
    lowerTrigram: 4, 
    name: "Heng", 
    chineseName: "雷风恒", 
    binary: "001110", 
    symbol: "☳☴", 
    judgment: "恒：亨，无咎，利贞，利有攸往。", 
    meaning: "雷风相薄，震动巽顺，恒久不变。",
    yaoLines: [
      { position: 1, text: "初六：浚恒，贞凶，无攸利。" },
      { position: 2, text: "九二：悔亡。" },
      { position: 3, text: "九三：不恒其德，或承之羞，贞吝。" },
      { position: 4, text: "九四：田无禽。" },
      { position: 5, text: "六五：恒其德，贞，妇人吉，夫子凶。" },
      { position: 6, text: "上六：振恒，凶。" }
    ]
  },
  { 
    id: 40, 
    upperTrigram: 3, 
    lowerTrigram: 5, 
    name: "Jie", 
    chineseName: "雷水解", 
    binary: "001010", 
    symbol: "☳☵", 
    judgment: "解：利西南，无所往，其来复吉。有攸往，夙吉。", 
    meaning: "雷雨作解，险难消散，解除困境。",
    yaoLines: [
      { position: 1, text: "初六：无咎。" },
      { position: 2, text: "九二：田获三狐，得黄矢，贞吉。" },
      { position: 3, text: "六三：负且乘，致寇至，贞吝。" },
      { position: 4, text: "九四：解而拇，朋至斯孚。" },
      { position: 5, text: "六五：君子维有解，吉；有孚于小人。" },
      { position: 6, text: "上六：公用射隼于高墉之上，获之，无不利。" }
    ]
  },
  { 
    id: 55, 
    upperTrigram: 3, 
    lowerTrigram: 6, 
    name: "Feng", 
    chineseName: "雷火丰", 
    binary: "001101", 
    symbol: "☳☲", 
    judgment: "丰：亨。王假之，勿忧，宜日中。", 
    meaning: "雷火交辉，光明盛大，事业兴旺。",
    yaoLines: [
      { position: 1, text: "初九：遇其配主，虽旬无咎，往有尚。" },
      { position: 2, text: "六二：丰其蔀，日中见斗，往得疑疾，有孚发若，吉。" },
      { position: 3, text: "九三：丰其沛，日中见沫，折其右肱，无咎。" },
      { position: 4, text: "九四：丰其蔀，日中见斗，遇其夷主，吉。" },
      { position: 5, text: "六五：来章，有庆誉，吉。" },
      { position: 6, text: "上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。" }
    ]
  },
  { 
    id: 62, 
    upperTrigram: 3, 
    lowerTrigram: 7, 
    name: "XiaoGuo", 
    chineseName: "雷山小过", 
    binary: "001100", 
    symbol: "☳☶", 
    judgment: "小过：亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。", 
    meaning: "雷动山上，稍有过越，小事可为。",
    yaoLines: [
      { position: 1, text: "初六：飞鸟以凶。" },
      { position: 2, text: "六二：过其祖，遇其妣；不及其君，遇其臣；无咎。" },
      { position: 3, text: "九三：弗过防之，从或戕之，凶。" },
      { position: 4, text: "九四：无咎，弗过遇之，往厉必戒，勿用永贞。" },
      { position: 5, text: "六五：密云不雨，自我西郊，公弋取彼在穴。" },
      { position: 6, text: "上六：弗遇过之，飞鸟离之，凶，是谓灾眚。" }
    ]
  },
  { 
    id: 54, 
    upperTrigram: 3, 
    lowerTrigram: 8, 
    name: "GuiMei", 
    chineseName: "雷泽归妹", 
    binary: "001011", 
    symbol: "☳☱", 
    judgment: "归妹：征凶，无攸利。", 
    meaning: "雷动泽上，少女归嫁，征凶无利。",
    yaoLines: [
      { position: 1, text: "初九：归妹以娣，跛能履，征吉。" },
      { position: 2, text: "九二：眇能视，利幽人之贞。" },
      { position: 3, text: "六三：归妹以须，反归以娣。" },
      { position: 4, text: "九四：归妹愆期，迟归有时。" },
      { position: 5, text: "六五：帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。" },
      { position: 6, text: "上六：女承筐无实，士刲羊无血，无攸利。" }
    ]
  }
];