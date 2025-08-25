<template>
  <div>
    <p>約分時計 <span class="small">Simplified Clock</span></p>
    <p>参考映像</p>
  </div>
  <video src="/video.mp4" controls class="responsive-video" />
</template>

<style scoped>
p {
  text-align: center;
  font-size: 3em;
  margin: 0.3em 0;
}
.small {
  font-size: 0.7em;
}
.responsive-video {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 1em auto;
}
</style>
