import type { Hexagram } from '../hexagram-data';

// 坎宫八卦（上卦为坎）
export const KAN_PALACE_HEXAGRAMS: Hexagram[] = [
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
      { position: 5, text: "九五：显比，王用三驱，失前禽，邑人不诫，吉。" },
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
      { position: 3, text: "六三：即鹿无虞，惟入于林中，君子几不如舍，往吝。" },
      { position: 4, text: "六四：乘马班如，求婚媾，往吉，无不利。" },
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
      { position: 3, text: "九三：井渫不食，为我心恻。可用汲，王明，并受其福。" },
      { position: 4, text: "六四：井甃，无咎。" },
      { position: 5, text: "九五：井洌，寒泉食。" },
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
      { position: 6, text: "上六：系用徽纆，寘于丛棘，三岁不得，凶。" }
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
      { position: 3, text: "九三：往蹇，来反。" },
      { position: 4, text: "六四：往蹇，来连。" },
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
      { position: 2, text: "九二：困于酒食，朱绂方来，利用亨祀，征凶，无咎。" },
      { position: 3, text: "六三：困于石，据于蒺藜，入于其宫，不见其妻，凶。" },
      { position: 4, text: "九四：来徐徐，困于金车，吝，有终。" },
      { position: 5, text: "九五：劓刖，困于赤绂，乃徐有说，利用祭祀。" },
      { position: 6, text: "上六：困于葛藟，于臲卼，曰动悔有悔，征吉。" }
    ]
  }
];