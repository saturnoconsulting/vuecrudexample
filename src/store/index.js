import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        spinner: true,
        menu: 0
    },
    getters: {
        getStatusSpinner: state => {
            return state.spinner;
        },
        getStatusMenu: state => {
            return state.menu;
        }
    },
    mutations: {
        showSpinner(state){
            state.spinner = true;
        },
        hideSpinner(state){
            state.spinner = false;
        },
        changeMenu(state,menu){
            state.menu = menu;
        }
    },
    actions: {},
    modules: {}
});
