<template>
    <div class="p-4">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        Ecosystem
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Data
                            Analysis</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Data
                            Visualization</a>
                    </div>
                </li>
            </ol>
        </nav>
        <!-- grid wrapper card -->
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
            <div v-for="chart in chartsOptions" class="bg-white overflow-hidden shadow-lg rounded-lg h-[40rem]">
                <v-chart :option="chart" autoresize />
            </div>
        </div>
        <!-- end wrapper card -->
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import VChart from "vue-echarts";
import axios from "axios";

export default {
    name: "Data Visualization",
    components: {
        VChart,
        Icon,
    },
    data() {
        return {
            chartsOptions: {},
            previous_data: null,
            timer: "",
        };
    },
    methods: {
        fetchGraph() {
            axios
                .get(process.env.VUE_APP_DF_PLOTS_API)
                .then((response) => {
                    var data = JSON.stringify(response.data)
                    if (data != this.previous_data) {
                        this.previous_data = data;
                        console.log(response.data)
                        Object.keys(response.data).forEach((id) => {
                            this.chartsOptions[id] = response.data[id]
                        }, this);
                    }
                });
        },
    },
    mounted() {
        this.fetchGraph();
        this.timer = setInterval(this.fetchGraph, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
};
</script>
