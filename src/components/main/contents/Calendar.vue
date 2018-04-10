<template lang="html">
  <div class="calendar">
    <h1><center>VUE CALENDAR</center></h1>
    <!-- <datepicker :value="date" style="margin-bottom:50px;" format="dd/MM/yyyy" :disabled="disabled" :monday-first="true"></datepicker> -->

    <full-calendar ref="calendar" :events="events" :config="config" defaultView="month" @day-click="changeView" ></full-calendar>
     <!-- @event-selected="eventSelected" -->
  </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  components: {
      Datepicker
  },
  data() {
    return {
      date: new Date(),
      formats : {
        title: 'MMMM YYYY',
        weekdays: 'W',
        navMonths: 'MMM',
        input: ['L', 'DD-MM-YYYY', 'DD/MM/YYYY'], // Only for `v-date-picker`
        dayPopover: 'L', // Only for `v-date-picker`
      },
      events: [
       {
           title  : 'event1',
           start  : '2018-01-01',
       },
       {
           title  : 'event2',
           start  : '2018-01-05',
           end    : '2018-01-07',
       },
       {
           title  : 'event3',
           start  : '2018-01-09T12:30:00',
           allDay : false,
       },
     ],
     config : {
       // dayClick(date, jsEvent, view){
       //   // console.log(date.format().replace("T"," "));
       //   // console.log(jsEvent.pageX + ',' + jsEvent.pageY);
       //   // console.log(view.name);
       //   console.log(this);
       // },
       select(start,end,jsEvent,view){
         // console.log(start.format());
         // console.log(end.format());
       }
     },
     selectedDate: new Date(2018,3, 25),
     disabled: {
          customPredictor: function (date) {
            // disables every day of a month which is a multiple of 3
            if (date.getDay() === 6 || date.getDay() === 0) {
              return true
            }
          }
        }
    };
  },
  methods : {
    changeView(date,jsEvent,view) {
      console.log(view.name);
      if(view.name === "month"){
        this.$refs.calendar.fireMethod('changeView', 'agendaDay');
      }
        // console.log(this.$refs.calendar.fireMethod);
    },
    eventSelected(date,jsEvent,view){
      // console.log(this.$refs.calendar.fireMethod);
    }
  }
}
</script>

<style lang="css">
/* @import '~fullcalendar/dist/fullcalendar.css'; */
.calendar{
  margin: 50px 20px;
}

/* #calendar{
  width:1500px;
  height:600px;
} */

.calendar{
  margin-bottom: 0;
}

</style>
