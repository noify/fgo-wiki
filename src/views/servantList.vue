<template>
  <div id="servantList">
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
    <v-card class="servantCard">
      <v-card-title>
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
        <tr>
          <td>
            <div class="svtF">
              <img class="face" width="64" :src="$assetsBaseUrl + props.item.face_icon">
              <img width="64"  v-if="props.item.rarity == 1 || props.item.rarity == 2" src="@/assets/images/box/servant_C.png">
              <img width="64"  v-if="props.item.rarity == 3" src="@/assets/images/box/servant_S.png">
              <img width="64"  v-if="props.item.rarity == 4 || props.item.rarity == 5" src="@/assets/images/box/servant_G.png">
              <img class="class" :src="$assetsBaseUrl + '/common/images/icon/class/class_' + props.item.class + '_'+ props.item.rarity +'.png'">
              <img class="rarity" v-if="props.item.rarity == 1" src="@/assets/images/box/star1.png">
              <img class="rarity" v-if="props.item.rarity == 2" src="@/assets/images/box/star2.png">
              <img class="rarity" v-if="props.item.rarity == 3" src="@/assets/images/box/star3.png">
              <img class="rarity" v-if="props.item.rarity == 4" src="@/assets/images/box/star4.png">
              <img class="rarity" v-if="props.item.rarity == 5" src="@/assets/images/box/star5.png">
            </div>
          </td>
          <td>{{ props.item.collectionNo }}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.hpMax }}</td>
          <td>{{ props.item.atkMax }}</td>
          <td>{{ props.item.cost }}</td>
        </tr>
        </template>
      </v-data-table>
    </v-card>

    </v-flex>
    </v-layout>
  </div>
</template>

<style lang='less'>
#servantList{
  .svtF{
    position: relative;
    width: 64px;
    height: 70px;
    img{
      position: absolute;
    }
    .class{
      top: 0px;
      left: 0px;
      width: 20px;
    }
    .rarity{
      bottom: 6px;
      right: -1px;
      height: 12px;
    }
  }
}
</style>

<script>
import svtList from '@/master/svtList'

export default {
  name: 'servantList',
  data () {
    return {
      loading: false,
      search: '',
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: 'face_icon'
        },
        { text: '编号', value: 'collectionNo' },
        { text: '名称', value: 'name' },
        { text: '最大HP', value: 'hpMax' },
        { text: '最大ATK', value: 'atkMax' },
        { text: '费用', value: 'cost' },
      ],
      desserts: svtList
    }
  },
  mounted () {
  }
}
</script>
