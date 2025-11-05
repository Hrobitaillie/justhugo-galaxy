<template>
  <div class="horizontal-scroll-wrapper" :class="{ 'fade-left': showLeftFade, 'fade-right': showRightFade }">
    <div
      ref="scrollContainer"
      class="horizontal-scroll"
      @scroll="onScroll"
    >
      <slot />
    </div>
    <div v-if="showLeftFade" class="fade fade-left"></div>
    <div v-if="showRightFade" class="fade fade-right"></div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalScroll',
  data() {
    return {
      showLeftFade: false,
      showRightFade: false,
      isDragging: false,
      dragStartX: 0,
      scrollStartX: 0,
    };
  },
  mounted() {
    this.updateFade();
    const el = this.$refs.scrollContainer;
    el.addEventListener('scroll', this.onScroll);
    el.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('resize', this.updateFade);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  },
  beforeUnmount() {
    const el = this.$refs.scrollContainer;
    el.removeEventListener('scroll', this.onScroll);
    el.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('resize', this.updateFade);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    onScroll() {
      this.updateFade();
    },
    updateFade() {
      const el = this.$refs.scrollContainer;
      if (!el) return;
      this.showLeftFade = el.scrollLeft > 0;
      this.showRightFade = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    },
    onMouseDown(e) {
      const el = this.$refs.scrollContainer;
      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.scrollStartX = el.scrollLeft;
      el.classList.add('grabbing');
      e.preventDefault();
    },
    onMouseUp() {
      if (this.isDragging) {
        this.isDragging = false;
        this.$refs.scrollContainer.classList.remove('grabbing');
      }
    },
    onMouseMove(e) {
      if (!this.isDragging) return;
      const el = this.$refs.scrollContainer;
      const dx = e.clientX - this.dragStartX;
      el.scrollLeft = this.scrollStartX - dx;
    },
  },
};
</script>

<style scoped>
.horizontal-scroll-wrapper {
  position: relative;
}
 .horizontal-scroll {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  cursor: grab;
  user-select: none;
}
 .horizontal-scroll.grabbing {
  cursor: grabbing;
}
.fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 32px;
  pointer-events: none;
  z-index: 2;
}
.fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0));
}
.fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(255,255,255,0.8), rgba(255,255,255,0));
}
</style>
