import type { Hexagram } from '../hexagram-data';

// 乾宫八卦（上卦为乾）
export const QIAN_PALACE_HEXAGRAMS: Hexagram[] = [
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
      { position: 1, text: "初六：不永所事，小有言，终吉。" },
      { position: 2, text: "九二：不克讼，归而逋，其邑人三百户，无眚。" },
      { position: 3, text: "六三：食旧德，贞厉，终吉。或从王事，无成。" },
      { position: 4, text: "九四：不克讼，复即命，渝安贞，吉。" },
      { position: 5, text: "九五：讼，元吉。" },
      { position: 6, text: "上九：或锡之鞶带，终朝三褫之。" }
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
      { position: 1, text: "初九：同人于门，无咎。" },
      { position: 2, text: "六二：同人于宗，吝。" },
      { position: 3, text: "九三：伏戎于莽，升其高陵，三岁不兴。" },
      { position: 4, text: "九四：乘其墉，弗克攻，吉。" },
      { position: 5, text: "九五：同人，先号啕而后笑，大师克相遇。" },
      { position: 6, text: "上九：同人于郊，无悔。" }
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
      { position: 1, text: "初六：遁尾，厉，勿用有攸往。" },
      { position: 2, text: "六二：执之用黄牛之革，莫之胜说。" },
      { position: 3, text: "九三：系遁，有疾厉，畜臣妾吉。" },
      { position: 4, text: "九四：好遁，君子吉，小人否。" },
      { position: 5, text: "九五：嘉遁，贞吉。" },
      { position: 6, text: "上九：肥遁，无不利。" }
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
      { position: 1, text: "初九：素履，往无咎。" },
      { position: 2, text: "九二：履道坦坦，幽人贞吉。" },
      { position: 3, text: "六三：眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。" },
      { position: 4, text: "九四：履虎尾，愬愬终吉。" },
      { position: 5, text: "九五：夬履，贞厉。" },
      { position: 6, text: "上九：视履考祥，其旋元吉。" }
    ]
  }
];