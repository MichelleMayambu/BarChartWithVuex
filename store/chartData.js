import { getField, updateField } from "vuex-map-fields";

export const state = () => ({ 
    chartDetails : {
        defaultData:[
        {
        month:"january",
        value:20
        },
        {
        month:"February",
        value: 50
        },
        {
        month:"March",
        value:60
        },
        {
        month:"April",
        value:80
        },
        {
        month:"May",
        value:20
        },
        {
        month:"June",
        value:40
        },
        {
        month:"July",
        value:70
        },
        {
        month:"August",
        value:60
        },
        {
        month:"September",
        value:30
        },
        {
        month:"October",
        value:60
        },
        {
        month:"November",
        value:70},
        {
        month:"December",
        value:89
        }
    ]
}
});

export const getters = {
    getField
  };
  
 export const mutations ={
    updateField
 } 