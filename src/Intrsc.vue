<template>
  <div>
    <p>約分時計 <span class="small">Simplified Clock</span></p>
    <p>参考映像</p>
  </div>
  <video src="/video.mp4" controls class="responsive-video" />
  <div class="github-link">
    <a
      href="https://github.com/thoth333/Simplified-Clock"
      target="_blank"
      rel="noopener"
    >
      View on GitHub
    </a>
  </div>
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
.github-link {
  text-align: center;
  margin-top: 2em;
}
.github-link a {
  color: #24292f;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dotted #24292f;
  transition: color 0.2s;
}
.github-link a:hover {
  color: #0366d6;
  border-bottom: 1px solid #0366d6;
}
</style>
