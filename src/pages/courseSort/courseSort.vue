<template>
  <div>
    <div class="coursesort-head" @click="tocourseSortdetailed"></div>
    <footerGuide></footerGuide>
  </div>
</template>

<script>
import footerGuide from "../../components/footerGuide"
export default {
  components: {
    footerGuide
  },
  methods: {
    tocourseSortdetailed() {
      this.$router.push({
        path: '/courseSort/sortDetailed'
      });
    }
  }
};
</script>


<style lang="scss">
.coursesort-head {
  width: 100%;
  height: 1.207729rem;
  background-color: pink;
}
</style>