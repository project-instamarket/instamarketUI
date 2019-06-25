<template>
  <div class="overlay__container">
    <div class="content">
      <div class="overlay" />
      <slot />
      <div class="overlay__content">
        <slot name="overlayContent" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding: 1em 0;
  float: left;
  width: 50%;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .overlay {
  background: rgba(0,0,0,0.2);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .overlay {
  opacity: 1;
}

.overlay__content {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .overlay__content {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.fader {
  left: 20%;
}
</style>
