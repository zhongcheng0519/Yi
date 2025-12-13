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

// 导入各宫八卦数据
import { QIAN_PALACE_HEXAGRAMS } from './hexagrams/qian-palace';
import { KUN_PALACE_HEXAGRAMS } from './hexagrams/kun-palace';
import { ZHEN_PALACE_HEXAGRAMS } from './hexagrams/zhen-palace';
import { XUN_PALACE_HEXAGRAMS } from './hexagrams/xun-palace';
import { KAN_PALACE_HEXAGRAMS } from './hexagrams/kan-palace';
import { LI_PALACE_HEXAGRAMS } from './hexagrams/li-palace';
import { GEN_PALACE_HEXAGRAMS } from './hexagrams/gen-palace';
import { DUI_PALACE_HEXAGRAMS } from './hexagrams/dui-palace';

// 64卦完整数据
export const HEXAGRAMS: Hexagram[] = [
  // 乾宫八卦（上卦为乾）
  ...QIAN_PALACE_HEXAGRAMS,
  
  // 坤宫八卦（上卦为坤）
  ...KUN_PALACE_HEXAGRAMS,
  
  // 震宫八卦（上卦为震）
  ...ZHEN_PALACE_HEXAGRAMS,
  
  // 巽宫八卦（上卦为巽）
  ...XUN_PALACE_HEXAGRAMS,
  
  // 坎宫八卦（上卦为坎）
  ...KAN_PALACE_HEXAGRAMS,
  
  // 离宫八卦（上卦为离）
  ...LI_PALACE_HEXAGRAMS,
  
  // 艮宫八卦（上卦为艮）
  ...GEN_PALACE_HEXAGRAMS,
  
  // 兑宫八卦（上卦为兑）
  ...DUI_PALACE_HEXAGRAMS
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