import type { Hexagram } from '../hexagram-data';

// 艮宫八卦（上卦为艮）
export const GEN_PALACE_HEXAGRAMS: Hexagram[] = [
  { 
    id: 26, 
    upperTrigram: 7, 
    lowerTrigram: 1, 
    name: "DaXu", 
    chineseName: "山天大畜", 
    binary: "100111", 
    symbol: "☶☰", 
    judgment: "大畜：利贞，不家食吉，利涉大川。", 
    meaning: "大为积蓄，止健不动，积小成大。",
    yaoLines: [
      { position: 1, text: "初九：有厉利已。" },
      { position: 2, text: "九二：舆说輹。" },
      { position: 3, text: "九三：良马逐，利艰贞。曰闲舆卫，利有攸往。" },
      { position: 4, text: "六四：童豕之牿，元吉。" },
      { position: 5, text: "六五：豮豕之牙，吉。" },
      { position: 6, text: "上九：何天之衢，亨。" }
    ]
  },
  { 
    id: 23, 
    upperTrigram: 7, 
    lowerTrigram: 2, 
    name: "Bo", 
    chineseName: "山地剥", 
    binary: "100000", 
    symbol: "☶☷", 
    judgment: "剥：不利有攸往。", 
    meaning: "剥落衰败，阴盛阳衰，不宜有所作为。",
    yaoLines: [
      { position: 1, text: "初六：剥床以足，蔑贞凶。" },
      { position: 2, text: "六二：剥床以辨，蔑贞凶。" },
      { position: 3, text: "六三：剥之，无咎。" },
      { position: 4, text: "六四：剥床以肤，凶。" },
      { position: 5, text: "六五：贯鱼以宫人宠，无不利。" },
      { position: 6, text: "上九：硕果不食，君子得舆，小人剥庐。" }
    ]
  },
  { 
    id: 27, 
    upperTrigram: 7, 
    lowerTrigram: 3, 
    name: "Yi", 
    chineseName: "山雷颐", 
    binary: "100001", 
    symbol: "☶☳", 
    judgment: "颐：贞吉。观颐，自求口实。", 
    meaning: "颐养之道，修身养性，自求口实。",
    yaoLines: [
      { position: 1, text: "初九：舍尔灵龟，观我朵颐，凶。" },
      { position: 2, text: "六二：颠颐，拂经，于丘颐，征凶。" },
      { position: 3, text: "六三：拂颐，贞凶，十年勿用，无攸利。" },
      { position: 4, text: "六四：颠颐吉，虎视眈眈，其欲逐逐，无咎。" },
      { position: 5, text: "六五：拂经，居贞吉，不可涉大川。" },
      { position: 6, text: "上九：由颐，厉吉，利涉大川。" }
    ]
  },
  { 
    id: 18, 
    upperTrigram: 7, 
    lowerTrigram: 4, 
    name: "Gu", 
    chineseName: "山风蛊", 
    binary: "100110", 
    symbol: "☶☴", 
    judgment: "蛊：元亨，利涉大川。先甲三日，后甲三日。", 
    meaning: "整治腐败，拨乱反正，振兴事业。",
    yaoLines: [
      { position: 1, text: "初六：干父之蛊，有子，考无咎，厉终吉。" },
      { position: 2, text: "九二：干母之蛊，不可贞。" },
      { position: 3, text: "九三：干父之蛊，小有悔，无大咎。" },
      { position: 4, text: "六四：裕父之蛊，往见吝。" },
      { position: 5, text: "六五：干父之蛊，用誉。" },
      { position: 6, text: "上九：不事王侯，高尚其事。" }
    ]
  },
  { 
    id: 4, 
    upperTrigram: 7, 
    lowerTrigram: 5, 
    name: "Meng", 
    chineseName: "山水蒙", 
    binary: "100010", 
    symbol: "☶☵", 
    judgment: "蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。", 
    meaning: "启蒙教育，童蒙求师，诚心求教。",
    yaoLines: [
      { position: 1, text: "初六：发蒙，利用刑人，用说桎梏，以往吝。" },
      { position: 2, text: "九二：包蒙吉，纳妇吉，子克家。" },
      { position: 3, text: "六三：勿用娶女，见金夫，不有躬，无攸利。" },
      { position: 4, text: "六四：困蒙，吝。" },
      { position: 5, text: "六五：童蒙，吉。" },
      { position: 6, text: "上九：击蒙，不利为寇，利御寇。" }
    ]
  },
  { 
    id: 22, 
    upperTrigram: 7, 
    lowerTrigram: 6, 
    name: "Bi", 
    chineseName: "山火贲", 
    binary: "100101", 
    symbol: "☶☲", 
    judgment: "贲：亨。小利有攸往。", 
    meaning: "文饰美化，刚柔相济，质文并重。",
    yaoLines: [
      { position: 1, text: "初九：贲其趾，舍车而徒。" },
      { position: 2, text: "六二：贲其须。" },
      { position: 3, text: "九三：贲如濡如，永贞吉。" },
      { position: 4, text: "六四：贲如皤如，白马翰如，匪寇婚媾。" },
      { position: 5, text: "六五：贲于丘园，束帛戋戋，吝，终吉。" },
      { position: 6, text: "上九：白贲，无咎。" }
    ]
  },
  { 
    id: 52, 
    upperTrigram: 7, 
    lowerTrigram: 7, 
    name: "Gen", 
    chineseName: "艮为山", 
    binary: "100100", 
    symbol: "☶☶", 
    judgment: "艮：艮其背，不获其身，行其庭，不见其人，无咎。", 
    meaning: "止于所当止，静止不动，守正待时。",
    yaoLines: [
      { position: 1, text: "初六：艮其趾，无咎，利永贞。" },
      { position: 2, text: "六二：艮其腓，不拯其随，其心不快。" },
      { position: 3, text: "九三：艮其限，列其夤，厉薰心。" },
      { position: 4, text: "六四：艮其身，无咎。" },
      { position: 5, text: "六五：艮其辅，言有序，悔亡。" },
      { position: 6, text: "上九：敦艮，吉。" }
    ]
  },
  { 
    id: 41, 
    upperTrigram: 7, 
    lowerTrigram: 8, 
    name: "Sun", 
    chineseName: "山泽损", 
    binary: "100011", 
    symbol: "☶☱", 
    judgment: "损：有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。", 
    meaning: "减损抑止，损下益上，损己利人。",
    yaoLines: [
      { position: 1, text: "初九：已事遄往，无咎，酌损之。" },
      { position: 2, text: "九二：利贞，征凶，弗损益之。" },
      { position: 3, text: "六三：三人行，则损一人；一人行，则得其友。" },
      { position: 4, text: "六四：损其疾，使遄有喜，无咎。" },
      { position: 5, text: "六五：或益之，十朋之龟弗克违，元吉。" },
      { position: 6, text: "上九：弗损益之，无咎，贞吉，利有攸往，得臣无家。" }
    ]
  }
];