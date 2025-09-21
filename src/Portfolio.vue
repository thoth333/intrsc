<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Header -->
    <header
      class="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
    >
      <nav class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <img
              src="/thoth-icon.png"
              alt="Profile Picture"
              class="w-10 h-10 rounded-full"
            />
            <span class="text-xl font-semibold text-gray-900">Thoth</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <!--
            <a
              href="#about"
              class="text-gray-600 hover:text-blue-600 transition-colors"
              >About</a
            >
            -->
            <a
              href="#projects"
              class="text-gray-600 hover:text-blue-600 transition-colors"
              >Projects</a
            >
            <a
              href="#apps"
              class="text-gray-600 hover:text-blue-600 transition-colors"
              >Apps</a
            >
            <!--
            <a
              href="#contact"
              class="text-gray-600 hover:text-blue-600 transition-colors"
              >Contact</a
            >
          --></div>
        </div>
      </nav>
    </header>

    <!-- Hero Section with Accent Background -->
    <section class="py-20 px-6 bg-blue-50">
      <div class="max-w-6xl mx-auto text-center">
        <img
          src="/thoth-icon.png"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8"
        />
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Thoth とーと</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Web & Mobile App Developer
          <!-- ここに、こういうアプリ作りたいな～みたいな精神を乗っけたい。-->
          <!-- ~~ developer passionate about creating beautiful, functional
          web applications-->
          <!-- そういえば、青色でいいん？-->
        </p>
        <!--
        <button
          class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Work
        </button>
      --></div>
    </section>

    <!-- About Section -->
    <!--
    <section id="about" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-gray-600 mb-6">
            I'm a passionate developer with 5+ years of experience building web
            applications. I love turning complex problems into simple, beautiful
            solutions.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
              >React</span
            >
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
              >Vue.js</span
            >
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
              >Node.js</span
            >
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
              >TypeScript</span
            >
          </div>
        </div>
      </div>
    </section>
    -->
    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto mb-40">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Project
        </h2>
        <div class="w-1/3 mx-auto">
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/quaintimg.png"
              alt="QUAINT"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                星陵祭オンライン整理券システム
              </h3>
              <p class="text-gray-600 mb-4">
                東京都立日比谷高校の文化祭「星陵祭」のオンライン整理券システム「QUAINT」の2023年度開発に携わりました。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  Nuxt
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://2023.seiryofes.com/"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                  >View Site</a
                >
                <a
                  href="https://github.com/hibiya-itchief/2023-quaint-app"
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Contributed Projects
        </h2>
        <div class="lg:w-2/3 grid md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/spimg.png"
              alt="Shortcut Puzzle"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Shortcut Puzzle
              </h3>
              <p class="text-gray-600 mb-4">
                東京大学のサークル「ut.code();」のプロジェクトです。東京大学の文化祭の一つ「五月祭」で出展されました。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  PixiJS
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://shortcut-game.utcode.net/"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                  >View Site</a
                >
                <a
                  href="https://github.com/ut-code/shortcut-game"
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/kfimg.png"
              alt="Komaba Festival"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                第76回駒場祭公式ウェブサイト
              </h3>
              <p class="text-gray-600 mb-4">
                東京大学の文化祭の一つ「駒場祭」の公式ウェブサイトの開発に携わっています。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  Nuxt
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://www.komabasai.net/76/visitor/"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                  >View Site</a
                >
              </div>
            </div>
          </div>
          <!-- もともとは、繰り返せるようになってた。そっちの方が良いから、時間できたら作ろう。
          <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  :href="project.liveUrl"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                  >Live Demo</a
                >
                <a
                  :href="project.githubUrl"
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
          -->
        </div>
      </div>
    </section>

    <!-- Apps in Development -->
    <section id="apps" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Apps in Development
        </h2>
        <div class="lg:w-2/3 grid md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/lvimg.png"
              alt="LINEverse"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                LINEverse
              </h3>
              <p class="text-gray-600 mb-4">
                LINEのメッセージを相手目線で疑似的に見るアプリです。著作権の関係で、一般公開の予定はありません。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  Nuxt
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/thoth333/LINEverse"
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/scimg.png"
              alt="Simplified Clock"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">約分時計</h3>
              <p class="text-gray-600 mb-4">
                現在時刻を約分して表示するジョークアプリです。知人のみに配布しています。
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  Flutter
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="http://intrsc.thwth.dev/"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                  >View Demo</a
                >
                <a
                  href="https://github.com/thoth333/Simplified-Clock"
                  class="text-gray-600 hover:text-gray-800 transition-colors"
                  >GitHub</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <!--
    <section id="contact" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <p class="text-lg text-gray-600 mb-8">
          I'm always interested in new opportunities and collaborations
        </p>
        <div class="flex justify-center space-x-6">
          <a
            href="mailto:john@example.com"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/johndeveloper"
            class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
    -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndeveloper/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndeveloper/taskapp",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "API Integration", "Charts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndeveloper/weather",
  },
]);

const appsInDevelopment = ref([
  {
    id: 1,
    title: "AI Content Generator",
    description: "AI-powered tool for generating marketing content and copy",
    progress: 75,
    expectedCompletion: "March 2024",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description:
      "Comprehensive fitness app with workout plans and progress tracking",
    progress: 45,
    expectedCompletion: "May 2024",
  },
]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Outfit:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Outfit", "Noto Sans JP", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-weight: 500;
}
</style>
