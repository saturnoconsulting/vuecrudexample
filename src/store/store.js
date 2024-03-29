import Vuex from "vuex";
import getters from "@/services/getters";
import mutations from "@/services/mutations";
import actions from "@/services/actions";

export default new Vuex.Store({
    state: {
        spinner: true,
        menu: 0,
        posts: []
    },
    getters,
    mutations,
    actions,
    modules: {}
});
