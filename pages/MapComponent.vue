<template>
    <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    function initMap() {
        var location = { lat: 19.260458179788312, lng: 105.70099439445364 }; // Tọa độ của bạn

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location,
        });

        var marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }

    $(document).ready(function () {
        initMap();
    });
})
</script>

<style scoped>
#map {
    width: 100%;
    height: auto;
}
</style>