<template>
<div class="hello">
    <b-row>
        <b-col md="8" offset-md="2">
            <b-form @submit.prevent="tambahPesanan">
                <b-input-group class="mt-3 mb-3">
                    <b-form-input v-model="inputMakanan" placeholder="Masukkan Makan..." required></b-form-input>
                </b-input-group>
                <b-input-group class="mb-3">
                    <b-form-input v-model="inputMinuman" placeholder="Masukkan Minuman..." required></b-form-input>
                </b-input-group>
                <b-input-group class="mb-3">
                    <b-form-select id="input-3" v-model="opsi" :options="opsis" required></b-form-select>
                    <b-input-group-append>
                        <b-button type="reset" variant="danger">Reset</b-button>
                        <b-button variant="info" type="submit">Tambah Pesanan</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form>
        </b-col>
    </b-row>
    <b-row>
        <b-col md="8" offset-md="2">
            <div v-for="(pesan, nomor) in daftarPesan" :key="pesan.id" align="left">
                <b-row class="mb-2">
                    <b-col md="6">
                        {{ nomor+1 }}
                        {{ pesan.makanan }},
                        {{ pesan.minuman }} :
                        {{ pesan.opsipesan }}
                    </b-col>
                    <b-col md="6" align="right">
                        <b-button variant="danger" @click="deletePesan(pesan.id)">
                            <font-awesome-icon icon="trash" />
                        </b-button>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex"
import {
    v1
} from "uuid";

export default {
    data() {
        return {
            inputMakanan: "",
            inputMinuman: "",
            opsi: null,
            opsis: [{
                text: 'Makan disini atau Dibungkus',
                value: null
            }, 'Dibungkus', 'Makan disini']
        }
    },
    methods: {
        ...mapActions(["addPesan", "deletePesan"]),
        tambahPesanan() {
            this.addPesan({
                id: v1(),
                makanan: this.inputMakanan,
                minuman: this.inputMinuman,
                opsipesan: this.opsi,
            });
            this.inputMakanan = ""
            this.inputMinuman = ""
            this.opsi = null
        },
    },
    computed: {
        ...mapGetters([
            'daftarPesan',
        ]),
    }
};
</script>
