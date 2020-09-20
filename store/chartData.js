import { getField, updateField } from "vuex-map-fields";
import axios from "axios";
export const state = () => ({ 
    chartDetails : {
        defaultData:[]
}
});

export const actions = {
    loadData ({commit}) {
        axios.get("http://localhost:4000/defaultData").then(response =>{
            commit("getChartData",response.data);
        })
    }
}
export const getters = {
    getField
  };
  
 export const mutations ={
    updateField,
    getChartData(state, defaultData){
        state.chartDetails.defaultData = defaultData;
      
    } 
 } 