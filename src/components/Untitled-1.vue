<template>
<div class="hello">
    <div class="row">
        <div class="cold-md-6 offset-4">
            <b-input-group class="mt-3 mb-3">
                <b-form-input v-model="kotaText" required placeholder="Type here..."></b-form-input>
                <b-input-group-append>
                    <b-button variant="info" type="submit" @click="addKotaI">Tambah Kota</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 offset-4">
            <div v-for="kota in daftarKota" :key="kota.name" align="left">
                <div class="row mb-2">
                    <div class="col-md-6">
                        {{ kota.name }}
                    </div>
                    <div class="col-md-6">
                        <b-button variant="danger" @click="deleteKota(kota.id)">
                            <font-awesome-icon icon="trash" />
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            kotaText: ""
        }
    },
    methods: {
        ...mapActions(["addKota", "deleteKota"]),
        addKotaI() {
            this.addKota({
                id: v1(),
                name: this.kotaText
            });
        },
    },
    computed: {
        ...mapGetters([
            'daftarKota',
        ]),
    }
};
</script>
