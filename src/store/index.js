import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listPesan: [
      { 
        id: 1,
        makanan: 'Batagor',
        minuman: 'Es teh',
        opsipesan: 'Dibungkus',
        gambar: '333580.jpg'},
      { 
        id: 2,
        makanan: 'Somay',
        minuman: 'Es Jeruk',
        opsipesan: 'Makan disini',
        gambar: '602575.png'},
      { 
        id: 3,
        makanan: 'Mie Ayam',
        minuman: 'Es Campur',
        opsipesan: 'Dibungkus',
        gambar: '1108903.png'},
      ],
  },
  mutations: {
    tambahPesan(state, pesan) {
      state.listPesan.push(pesan)
    },
    hapusPesan(state, id) {
      state.listPesan = state.listPesan.filter(pesan=>pesan.id != id);
    }
  },
  actions: {
    addPesan({ commit }, pesan) {
      commit('tambahPesan', pesan);
    },
    deletePesan({ commit }, id) {
      commit('hapusPesan', id);
    }
  },
  modules: {},
  getters: {
    daftarPesan(state) {
      return state.listPesan;
  },
  }
});
