import type { Hexagram } from '../hexagram-data';

// 兑宫八卦（上卦为兑）
export const DUI_PALACE_HEXAGRAMS: Hexagram[] = [
  { 
    id: 43, 
    upperTrigram: 8, 
    lowerTrigram: 1, 
    name: "Guai", 
    chineseName: "泽天夬", 
    binary: "011111", 
    symbol: "☱☰", 
    judgment: "夬：扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。", 
    meaning: "决断果敢，刚决柔，除旧布新。",
    yaoLines: [
      { position: 1, text: "初九：壮于前趾，往不胜为咎。" },
      { position: 2, text: "九二：惕号，莫夜有戎，勿恤。" },
      { position: 3, text: "九三：壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。" },
      { position: 4, text: "九四：臀无肤，其行次且。牵羊悔亡，闻言不信。" },
      { position: 5, text: "九五：苋陆夬夬，中行无咎。" },
      { position: 6, text: "上六：无号，终有凶。" }
    ]
  },
  { 
    id: 45, 
    upperTrigram: 8, 
    lowerTrigram: 2, 
    name: "Cui", 
    chineseName: "泽地萃", 
    binary: "011000", 
    symbol: "☱☷", 
    judgment: "萃：亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。", 
    meaning: "聚合荟萃，万物聚集，共享太平。",
    yaoLines: [
      { position: 1, text: "初六：有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。" },
      { position: 2, text: "六二：引吉，无咎，孚乃利用禴。" },
      { position: 3, text: "六三：萃如嗟如，无攸利，往无咎，小吝。" },
      { position: 4, text: "九四：大吉，无咎。" },
      { position: 5, text: "九五：萃有位，无咎。匪孚，元永贞，悔亡。" },
      { position: 6, text: "上六：赍咨涕洟，无咎。" }
    ]
  },
  { 
    id: 17, 
    upperTrigram: 8, 
    lowerTrigram: 3, 
    name: "Sui", 
    chineseName: "泽雷随", 
    binary: "011001", 
    symbol: "☱☳", 
    judgment: "随：元亨利贞，无咎。", 
    meaning: "随从应和，顺时而动，泰然处之。",
    yaoLines: [
      { position: 1, text: "初九：官有渝，贞吉。出门交有功。" },
      { position: 2, text: "六二：系小子，失丈夫。" },
      { position: 3, text: "六三：系丈夫，失小子。随有求得，利居贞。" },
      { position: 4, text: "九四：随有获，贞凶。有孚在道，以明，何咎。" },
      { position: 5, text: "九五：孚于嘉，吉。" },
      { position: 6, text: "上六：拘系之，乃从维之。王用亨于西山。" }
    ]
  },
  { 
    id: 28, 
    upperTrigram: 8, 
    lowerTrigram: 4, 
    name: "DaGuo", 
    chineseName: "泽风大过", 
    binary: "011110", 
    symbol: "☱☴", 
    judgment: "大过：栋桡，利有攸往，亨。", 
    meaning: "大为过度，非常之时，需要变通。",
    yaoLines: [
      { position: 1, text: "初六：藉用白茅，无咎。" },
      { position: 2, text: "九二：枯杨生稊，老夫得其女妻，无不利。" },
      { position: 3, text: "九三：栋桡，凶。" },
      { position: 4, text: "九四：栋隆，吉。有它吝。" },
      { position: 5, text: "九五：枯杨生华，老妇得其士夫，无咎无誉。" },
      { position: 6, text: "上六：过涉灭顶，凶，无咎。" }
    ]
  },
  { 
    id: 60, 
    upperTrigram: 8, 
    lowerTrigram: 5, 
    name: "Jie", 
    chineseName: "泽水困", 
    binary: "011010", 
    symbol: "☱☵", 
    judgment: "节：亨。苦节不可贞。", 
    meaning: "节制有度，适可而止，过犹不及。",
    yaoLines: [
      { position: 1, text: "初九：不出户庭，无咎。" },
      { position: 2, text: "九二：不出门庭，凶。" },
      { position: 3, text: "六三：不节若，则嗟若，无咎。" },
      { position: 4, text: "六四：安节，亨。" },
      { position: 5, text: "九五：甘节，吉。往有尚。" },
      { position: 6, text: "上六：苦节，贞凶，悔亡。" }
    ]
  },
  { 
    id: 49, 
    upperTrigram: 8, 
    lowerTrigram: 6, 
    name: "Ge", 
    chineseName: "泽火革", 
    binary: "011101", 
    symbol: "☱☲", 
    judgment: "革：巳日乃孚，元亨利贞，悔亡。", 
    meaning: "变革更新，革故鼎新，顺天应人。",
    yaoLines: [
      { position: 1, text: "初九：巩用黄牛之革。" },
      { position: 2, text: "六二：巳日乃革之，征吉，无咎。" },
      { position: 3, text: "九三：征凶，贞厉。革言三就，有孚。" },
      { position: 4, text: "九四：悔亡，有孚改命，吉。" },
      { position: 5, text: "九五：大人虎变，未占有孚。" },
      { position: 6, text: "上六：君子豹变，小人革面，征凶，居贞吉。" }
    ]
  },
  { 
    id: 31, 
    upperTrigram: 8, 
    lowerTrigram: 7, 
    name: "Xian", 
    chineseName: "泽山咸", 
    binary: "011100", 
    symbol: "☱☶", 
    judgment: "咸：亨，利贞，取女吉。", 
    meaning: "感应相通，男女相感，和谐交往。",
    yaoLines: [
      { position: 1, text: "初六：咸其拇。" },
      { position: 2, text: "六二：咸其腓，凶，居吉。" },
      { position: 3, text: "九三：咸其股，执其随，往吝。" },
      { position: 4, text: "九四：贞吉，悔亡。憧憧往来，朋从尔思。" },
      { position: 5, text: "九五：咸其脢，无悔。" },
      { position: 6, text: "上六：咸其辅颊舌。" }
    ]
  },
  { 
    id: 58, 
    upperTrigram: 8, 
    lowerTrigram: 8, 
    name: "Dui", 
    chineseName: "兑为泽", 
    binary: "011011", 
    symbol: "☱☱", 
    judgment: "兑：亨，利贞。", 
    meaning: "喜悦和合，朋友讲习，和颜悦色。",
    yaoLines: [
      { position: 1, text: "初九：和兑，吉。" },
      { position: 2, text: "九二：孚兑，吉，悔亡。" },
      { position: 3, text: "六三：来兑，凶。" },
      { position: 4, text: "九四：商兑，未宁，介疾有喜。" },
      { position: 5, text: "九五：孚于剥，有厉。" },
      { position: 6, text: "上六：引兑。" }
    ]
  }
];