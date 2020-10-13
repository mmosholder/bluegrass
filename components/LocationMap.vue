<template>
  <section class="container">
    <div class="row">
      <div class="-map">
        <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="zoom">
          <gmap-marker
            :position="marker.position"
          />
        </gmap-map>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok'],

  data() {
    return {
      center: { lat: Number(this.blok.latitude), lng: Number(this.blok.longitude) },
      mapTypeId: "roadmap",
      zoom: 15,
      marker: { position: { lat: Number(this.blok.latitude), lng: Number(this.blok.longitude) } },
    };
  }
};
</script>
