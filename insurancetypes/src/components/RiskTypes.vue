<style scoped>

label {
    vertical-align: middle;
    padding-right: 10px;
}

.button {
    background-color: #2c3e50;
    color: white;
    font-size: 1.5rem;
    width: 50%;
}

</style>

<template>
<section>
<div class="container">
    <form @submit.prevent="">
        <div v-for="inf in info">
            <div v-for="ins in inf">
                    <div class="column is-half is-offset-one-quarter" v-if='ins.type ==="Text"'>
                        <div class="field">
                            <label class="label">{{ins.field_name}}:</label>
                            <div class="control">
                                <input class="input" required>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half is-offset-one-quarter" v-if='ins.type ==="Date"'>
                        <label class="label">{{ins.field_name}}:</label>
                        <b-datepicker placeholder="Type or select a date..." icon="calendar-today" :readonly="false">
                        </b-datepicker>
                    </div>
                    <div class="column is-half is-offset-one-quarter" v-if='ins.type ==="Number"'>
                        <div class="field">
                            <label class="label">{{ins.field_name}} in $:</label>
                            <div class="control">
                                <input class="input" required>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half is-offset-one-quarter" v-if='ins.type =="enum"'>
                        <div class="control">
                            <label class="label">{{ins.field_name}}</label>
                            <div class="select">
                                <select>
                                    <option selected>Select dropdown</option>
                                    <option>Engineer</option>
                                    <option>Doctor</option>
                                    <option>Teacher</option>
                                </select>
                            </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="column is-4 is-offset-6">
            <input type="submit" value="Add" class="button">
            </div>
    </form>
    </div>
</section>

</template>

<script>

// @ is an alias to /src
import axios from 'axios';
import Datepicker from 'vuejs-datepicker'
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
    name: "RiskTypes",
    components: {
        Datepicker
    },
    data() {
        return {
            date: new Date(),
            info: null,
            loading: true,
            errored: false
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/riskfields/' + this.$route.params.slug + '/')
            .then(response => {
                this.info = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
};

</script>
