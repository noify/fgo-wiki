import Vue from 'vue'
import Vuex from 'vuex'
import master from '../util/master'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },

  actions: {
  },

  mutations: {
  },

  getters: {
    svtList: () => {
      let list = []
      for (let i in master.mstSvt) {
        if ((1 == master.mstSvt[i].type || 2 == master.mstSvt[i].type || 5 == master.mstSvt[i].type || 9 == master.mstSvt[i].type || 99 == master.mstSvt[i].type) && 0 != master.mstSvt[i].collectionNo) {
          let c = ''
          for (c in master.mstSvtLimit) {
            if (master.mstSvtLimit[c].svtId == master.mstSvt[i].id) {
              break;
            }
          }
          list.push({
            svtid: master.mstSvt[i].id, // id
            rarity: master.mstSvtLimit[c].rarity, // 星级
            class: master.mstSvt[i].classId, // 职阶 1Saber 2Archer 3Lancer 4Rider 5Caster 6Assassin 7Berserker 8Shielder 9Ruler 11Avenger 10Alterego 23MoonCancer 25Foreigner
            type: master.mstSvt[i].battleSize, // ？
            no: master.mstSvt[i].collectionNo, // 编号
            face_icon: "common/images/icon/faces/" + master.mstSvt[i].id + "0.png", // 头像
            // SvtNameZh2: findSvtNameZh2(master.mstSvt[i].id), // 中文名2
            // SvtNameZh: findSvtNameZh(master.mstSvt[i].id), // 中文名
            ruby: master.mstSvt[i].ruby, // ruby
            name: master.mstSvt[i].name, // name
            hpBase: master.mstSvtLimit[c].hpBase, // 基础 hp
            hpMax: master.mstSvtLimit[c].hpMax, // 最大 hp
            atkBase: master.mstSvtLimit[c].atkBase, // 基础 atk
            atkMax: master.mstSvtLimit[c].atkMax, // 最大 atk
            cardIds: master.mstSvt[i].cardIds, // 指令卡 1蓝 2红 3绿
            mstSvtTreasureDevice: (() => {for (let b in master.mstSvtTreasureDevice) { if (master.mstSvt[i].id == master.mstSvtTreasureDevice[b].svtId && 1 == master.mstSvtTreasureDevice[b].num) {
              return master.mstSvtTreasureDevice[b].cardId
            }}})(), // 宝具卡 1蓝 2红 3绿
            cost: master.mstSvt[i].cost // 消耗
          })
        }
      }
      return list
    }
  }
})

export default store
