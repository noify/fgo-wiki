<template>
  <div id="servantList">
   <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :loading="loading"
      hide-actions
      item-key="collectionNo"
      :search="search"
    >
     <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td><img width="60" :src="'http://kazemai.github.io/fgo-vz/' + props.item.face_icon"></td>
        <td>{{ props.item.collectionNo }}</td>
        <td>{{ props.item.rarity }}</td>
        <td>{{ props.item.name }}</td>
        <td>
          <img width="30" :src="'http://kazemai.github.io/fgo-vz/common/images/icon/class/class_' + props.item.class + '_'+ props.item.rarity +'.png'">
        </td>
        <td>{{ props.item.hpMax }}</td>
        <td>{{ props.item.atkMax }}</td>
        <td>{{ props.item.cost }}</td>
      </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text><img v-for="cardId in props.item.cardIds" v-bind:key="props.item.svtid + '-' + cardId" style="margin-right: -30px;" :src="`http://kazemai.github.io/fgo-vz/common/images/icon/cmdCard/icon_cmdCard_${cardId}.png`" width="60"></v-card-text>
          <v-card-text><img style="margin-left: 60px;" :src="`http://kazemai.github.io/fgo-vz/common/images/icon/cmdCard/icon_cmdCard_${props.item.mstSvtTreasureDevice}.png`" width="60"></v-card-text>
        </v-card>
      </template>
    </v-data-table>
      </v-card>
  </div>
</template>

<style lang='less'>
</style>

<script>
const master = r => require.ensure([], () => r(require('@/util/master')), 'master')

export default {
  name: 'servantList',
  data () {
    return {
      loading: true,
      search: '',
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: 'face_icon'
        },
        { text: '编号', value: 'collectionNo' },
        { text: '星数', value: 'rarity' },
        { text: '名称', value: 'name' },
        { text: '职阶', value: 'class' },
        { text: '最大HP', value: 'hpMax' },
        { text: '最大ATK', value: 'atkMax' },
        { text: '费用', value: 'cost' },
      ],
      desserts: []
    }
  },
  mounted () {
    master( m => {
      this.desserts = m.default.svtList()
      this.loading = false
      console.log(m.default.svtList())
    })
  }
}
</script>
