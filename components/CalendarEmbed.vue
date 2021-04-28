<template>
  <section class="container">
    <div class="-row">
      <div class="calendar content">
        <div class="calendar__button">
          <a :href="blok.calendar_link" target="_blank"
            >View in Google Calendar</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["blok"],
};
</script>
