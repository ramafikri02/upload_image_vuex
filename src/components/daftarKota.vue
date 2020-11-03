<template>
<div>
    <div class="row">
        <div class="col-md-6">
            <div v-for="kota in daftarKota" :key="kota.name" align="left">
                {{ kota.name }}
                <b-button variant="danger" @click="deleteTodo(todo.id)">
                    <font-awesome-icon icon="trash" />
                </b-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex"

export default {
    computed: {
        ...mapGetters([
            'daftarKota',
        ]),
    }
}
</script>

<style>

</style>
