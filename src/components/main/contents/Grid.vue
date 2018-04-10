<template lang="html">
  <div class="grid">
    <!-- <h1>{{myList}}</h1> -->
    <h1><center>VUE DRAGGABLE</center></h1>
    <!-- <grid
      :draggable="true"
      :sortable="true"
      :items="items"
      :height="200"
      :width="200">
      <template slot="cell" scope="props">
        <div class="gridding" v-bind:style="{'width' : h[props.index],'height' : h[props.index], 'background' : bg[props.index] }" @change="test">
          <div>Data: {{props.item}}</div>
          <div>{{props.index}} / {{props.sort}}</div>
        </div>
      </template>
    </grid> -->
    <div class="">
      <draggable :list="list">
        <div v-for="(el,i) in list" class="" :style="{'padding':'10px','background':'#c1c1c1','margin':'10px','width':el.w,'display':'inline-block'}">
          {{el.name}}
          <!-- <button type="button" name="button">{{el.email}}</button> -->
        </div>
        <!-- <div class="">
          {{myList[0]}}
          <h1>HELLO WORLD1!!</h1>
        </div>
        <div class="">
          {{myList[1]}}
          <h1>HELLO WORLD2!!</h1>
        </div>
        <div class="">
          {{myList[2]}}
          <h1>HELLO WORLD3!!</h1>
        </div> -->
      </draggable>
    </div>
    <div class="" style="margin-top:300px;">
      <span>Clicked : </span> <span>{{items.join(',')}}</span>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  components : {
    draggable : Draggable
  },
  data () {
    return {
      list:[{name:"John",w:"300px"},
  				{name:"Joao",w:"100px"},
  				{name:"Jean",w:"200px"},
          {name:"Tom",w:"100%"}  ]
  		,
      items: [
        'a',
        'b',
        'c'
      ],
      h: [
        '100px',
        '150px',
        '200px'
      ],
      bg : [
        'green',
        'blue',
        'red'
      ]
    }
  },
  computed : {
    myList : {
      get(){
        return this.$store.state["data"]["userList"]
      }
    }
  },
  methods : {
    sel(e){
      console.log(e.target.innerHTML);
    },
    test(){
      console.log("props.item");
    }
  },
  mounted(){
    console.log(this.$store.state["data"]["userList"]);
  }
}
</script>

<style lang="scss">
.grid{
  padding:50px 100px;
}

.v-grid-item-wrapper{
  padding:5px;
}

.gridding{
  padding: 5px;
}
</style>
