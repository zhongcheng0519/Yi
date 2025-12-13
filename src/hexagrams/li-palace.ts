import type { Hexagram } from '../hexagram-data';

// 离宫八卦（上卦为离）
export const LI_PALACE_HEXAGRAMS: Hexagram[] = [
  { 
    id: 14, 
    upperTrigram: 6, 
    lowerTrigram: 1, 
    name: "DaYou", 
    chineseName: "火天大有", 
    binary: "101111", 
    symbol: "☲☰", 
    judgment: "大有：元亨。", 
    meaning: "火在天上，光照四方，盛大丰有。",
    yaoLines: [
      { position: 1, text: "初九：无交害，匪咎，艰则无咎。" },
      { position: 2, text: "九二：大车以载，有攸往，无咎。" },
      { position: 3, text: "九三：公用亨于天子，小人弗克。" },
      { position: 4, text: "九四：匪其彭，无咎。" },
      { position: 5, text: "六五：厥孚交如，威如，吉。" },
      { position: 6, text: "上九：自天祐之，吉无不利。" }
    ]
  },
  { 
    id: 35, 
    upperTrigram: 6, 
    lowerTrigram: 2, 
    name: "Jin", 
    chineseName: "火地晋", 
    binary: "101000", 
    symbol: "☲☷", 
    judgment: "晋：康侯用锡马蕃庶，昼日三接。", 
    meaning: "火出地上，光明日进，晋升向上。",
    yaoLines: [
      { position: 1, text: "初六：晋如，摧如，贞吉。罔孚，裕无咎。" },
      { position: 2, text: "六二：晋如，愁如，贞吉。受兹介福，于其王母。" },
      { position: 3, text: "六三：众允，悔亡。" },
      { position: 4, text: "九四：晋如硕鼠，贞厉。" },
      { position: 5, text: "六五：悔亡，失得勿恤，往吉无不利。" },
      { position: 6, text: "上九：晋其角，维用伐邑，厉吉无咎，贞吝。" }
    ]
  },
  { 
    id: 21, 
    upperTrigram: 6, 
    lowerTrigram: 3, 
    name: "ShiKe", 
    chineseName: "火雷噬嗑", 
    binary: "101001", 
    symbol: "☲☳", 
    judgment: "噬嗑：亨，利用狱。", 
    meaning: "火雷相交，刚柔并济，噬嗑通达。",
    yaoLines: [
      { position: 1, text: "初九：屦校灭趾，无咎。" },
      { position: 2, text: "六二：噬肤灭鼻，无咎。" },
      { position: 3, text: "六三：噬腊肉，遇毒，小吝无咎。" },
      { position: 4, text: "九四：噬干胏，得金矢，利艰贞，吉。" },
      { position: 5, text: "六五：噬干肉，得黄金，贞厉无咎。" },
      { position: 6, text: "上九：何校灭耳，凶。" }
    ]
  },
  { 
    id: 50, 
    upperTrigram: 6, 
    lowerTrigram: 4, 
    name: "Ding", 
    chineseName: "火风鼎", 
    binary: "101110", 
    symbol: "☲☴", 
    judgment: "鼎：元吉，亨。", 
    meaning: "火风相济，鼎新革故，烹饪化育。",
    yaoLines: [
      { position: 1, text: "初六：鼎颠趾，利出否，得妾以其子，无咎。" },
      { position: 2, text: "九二：鼎有实，我仇有疾，不我能即，吉。" },
      { position: 3, text: "九三：鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。" },
      { position: 4, text: "九四：鼎折足，覆公餗，其形渥，凶。" },
      { position: 5, text: "六五：鼎黄耳金铉，利贞。" },
      { position: 6, text: "上九：鼎玉铉，大吉无不利。" }
    ]
  },
  { 
    id: 64, 
    upperTrigram: 6, 
    lowerTrigram: 5, 
    name: "WeiJi", 
    chineseName: "火水未济", 
    binary: "101010", 
    symbol: "☲☵", 
    judgment: "未济：亨，小狐汔济，濡其尾，无攸利。", 
    meaning: "火水相违，事未完成，初难后亨。",
    yaoLines: [
      { position: 1, text: "初六：濡其尾，吝。" },
      { position: 2, text: "九二：曳其轮，贞吉。" },
      { position: 3, text: "六三：未济，征凶，利涉大川。" },
      { position: 4, text: "九四：贞吉，悔亡，震用伐鬼方，三年有赏于大国。" },
      { position: 5, text: "六五：贞吉，无悔，君子之光，有孚，吉。" },
      { position: 6, text: "上九：有孚于饮酒，无咎，濡其首，有孚失是。" }
    ]
  },
  { 
    id: 30, 
    upperTrigram: 6, 
    lowerTrigram: 6, 
    name: "Li", 
    chineseName: "离为火", 
    binary: "101101", 
    symbol: "☲☲", 
    judgment: "离：利贞，亨。畜牝牛，吉。", 
    meaning: "重明继照，光明不息，柔顺中正。",
    yaoLines: [
      { position: 1, text: "初九：履错然，敬之无咎。" },
      { position: 2, text: "六二：黄离，元吉。" },
      { position: 3, text: "九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶。" },
      { position: 4, text: "九四：突如其来如，焚如，死如，弃如。" },
      { position: 5, text: "六五：出涕沱若，戚嗟若，吉。" },
      { position: 6, text: "上九：王用出征，有嘉折首，获匪其丑，无咎。" }
    ]
  },
  { 
    id: 56, 
    upperTrigram: 6, 
    lowerTrigram: 7, 
    name: "Lv", 
    chineseName: "火山旅", 
    binary: "101100", 
    symbol: "☲☶", 
    judgment: "旅：小亨，旅贞吉。", 
    meaning: "火在山上，行旅在外，小事亨通。",
    yaoLines: [
      { position: 1, text: "初六：旅琐琐，斯其所取灾。" },
      { position: 2, text: "六二：旅即次，怀其资，得童仆贞。" },
      { position: 3, text: "九三：旅焚其次，丧其童仆，贞厉。" },
      { position: 4, text: "九四：旅于处，得其资斧，我心不快。" },
      { position: 5, text: "六五：射雉一矢亡，终以誉命。" },
      { position: 6, text: "上九：鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。" }
    ]
  },
  { 
    id: 38, 
    upperTrigram: 6, 
    lowerTrigram: 8, 
    name: "Kui", 
    chineseName: "火泽睽", 
    binary: "101011", 
    symbol: "☲☱", 
    judgment: "睽：小事吉。", 
    meaning: "火泽相违，刚柔异位，乖离矛盾。",
    yaoLines: [
      { position: 1, text: "初九：悔亡，丧马勿逐，自复；见恶人无咎。" },
      { position: 2, text: "九二：遇主于巷，无咎。" },
      { position: 3, text: "六三：见舆曳，其牛掣，其人天且劓，无初有终。" },
      { position: 4, text: "九四：睽孤，遇元夫，交孚，厉无咎。" },
      { position: 5, text: "六五：悔亡，厥宗噬肤，往何咎。" },
      { position: 6, text: "上九：睽孤，见豕负涂，载鬼一车，先张之弧后说之弧，匪寇婚媾，往遇雨则吉。" }
    ]
  }
];