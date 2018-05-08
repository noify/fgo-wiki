import LZ from 'lz-string'
import masterData from './masterData'
import { forEach } from 'lodash'

function convert_formated_hex_to_bytes(hex_str) {
  var count = 0,
      hex_arr,
      hex_data = [],
      hex_len,
      i;
  
  if (hex_str.trim() == "") return [];
  
  /// Check for invalid hex characters.
  if (/[^0-9a-fA-F\s]/.test(hex_str)) {
    return false;
  }
  
  hex_arr = hex_str.split(/([0-9a-fA-F][0-9a-fA-F])/g);
  hex_len = hex_arr.length;
  
  for (i = 0; i < hex_len; ++i) {
    if (hex_arr[i].trim() == "") {
      continue;
    }
    hex_data[count++] = parseInt(hex_arr[i], 16);
  }
  return hex_data;
}

function convert_formated_hex_to_string(s) {
  var byte_arr = convert_formated_hex_to_bytes(s);
  var res = "";
  for (var i = 0 ; i<byte_arr.length ; i+=2) {
    res += String.fromCharCode(byte_arr[i] | (byte_arr[i+1]<<8));
  }
  return res;
}

var mstTxt = LZ.decompress(convert_formated_hex_to_string(masterData));

var master = JSON.parse(mstTxt);

let svtList = () => {
  let Sdate = new Date()
  let js = 0
  let list = []
  let mstSvtLimit = master.mstSvtLimit
  forEach(master.mstSvt, mstSvt => {
    if ((1 == mstSvt.type || 2 == mstSvt.type || 5 == mstSvt.type || 9 == mstSvt.type || 99 == mstSvt.type) && 0 != mstSvt.collectionNo) {
      let c = ''
      for (c in mstSvtLimit) {
        js++
        if (mstSvtLimit[c].svtId == mstSvt.id) {
          break;
        }
      }
      list.push({
        svtid: mstSvt.id, // id
        rarity: mstSvtLimit[c].rarity, // 星级
        class: mstSvt.classId, // 职阶 1Saber 2Archer 3Lancer 4Rider 5Caster 6Assassin 7Berserker 8Shielder 9Ruler 11Avenger 10Alterego 23MoonCancer 25Foreigner
        type: mstSvt.battleSize, // ？
        collectionNo: mstSvt.collectionNo, // 编号
        face_icon: "common/images/icon/faces/" + mstSvt.id + "0.png", // 头像
        // SvtNameZh2: findSvtNameZh2(mstSvt.id), // 中文名2
        // SvtNameZh: findSvtNameZh(mstSvt.id), // 中文名
        ruby: mstSvt.ruby, // ruby
        name: mstSvt.name, // name
        hpBase: mstSvtLimit[c].hpBase, // 基础 hp
        hpMax: mstSvtLimit[c].hpMax, // 最大 hp
        atkBase: mstSvtLimit[c].atkBase, // 基础 atk
        atkMax: mstSvtLimit[c].atkMax, // 最大 atk
        cardIds: mstSvt.cardIds, // 指令卡 1蓝 2红 3绿
        mstSvtTreasureDevice: (() => {for (let b in master.mstSvtTreasureDevice) { if (mstSvt.id == master.mstSvtTreasureDevice[b].svtId && 1 == master.mstSvtTreasureDevice[b].num) {
          return master.mstSvtTreasureDevice[b].cardId
        }}})(), // 宝具卡 1蓝 2红 3绿
        cost: mstSvt.cost // 消耗
      })
    }
  })
  console.log(js, (new Date() - Sdate)/1000)
  return list
}

export default {
  svtList
}
