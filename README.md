# MUFADevX

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MUFADevX</title>
  <script src="https://cdn.tailwindcss.com"></script>
  
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif; 
    }
    h1, h2, h3 {
      font-family: 'Orbitron', sans-serif; 
    }
  </style>
</head>

<body class="bg-black text-white font-sans">

  <!-- Navbar -->
  <nav class="flex justify-between items-center px-8 py-3 bg-black/70 backdrop-blur-md fixed w-[90%] top-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md z-50">
    <h1 class="text-2xl font-bold tracking-wide">
      <span class="text-gray-200">MUFA</span><span class="text-cyan-400">DevX</span>
    </h1>
    <ul class="flex space-x-8 text-lg">
      <li><a href="#home" class="hover:text-cyan-400 transition">Home</a></li>
      <li><a href="#about" class="hover:text-cyan-400 transition">About</a></li>
      <li><a href="#portofolio" class="hover:text-cyan-400 transition">Versions</a></li>
      <li><a href="#contact" class="hover:text-cyan-400 transition">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">

    <!-- 3D Robot Embed -->
    <div class="absolute inset-0 z-0">
      <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-y43u1B9tiBKErdJKm6WjtWfJ/' frameborder='0' width='100%' height='100%'></iframe>
    </div>

    
    

    <!-- Text Content -->
<div class="relative z-20 pointer-events-none">
  <h1 class="text-6xl md:text-8xl font-extrabold tracking-wider text-white">
    MUFA<span class="text-cyan-400">DevX</span>
  </h1>
  <p class="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
    Powered by AI, designed for humans. Build. Explore. Innovate.
  </p>

  <!-- Buttons -->
  <div class="mt-8 flex justify-center space-x-6 pointer-events-auto">
    <a href="#about" class="px-6 py-3 bg-cyan-400 text-black rounded-lg font-bold hover:bg-cyan-300 transition">
      Explore Projects
    </a>
    <a href="#contact" class="px-6 py-3 border border-cyan-400 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition">
      Let's Connect
    </a>
  </div>
</div>


  </section>

  <!-- About Section -->
  <section id="about" class="py-20 px-8 bg-gray-800 text-center">
    <h2 class="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
    <p class="max-w-3xl mx-auto text-gray-300">
      Nureonix is a next-generation humanoid robot designed with advanced AI, adaptive learning, 
      and realistic movements. Built to assist in real-world environments, it bridges the gap 
      between humans and machines.
    </p>
  </section>

  <!-- Versions Section -->
  <section id="versions" class="py-20 px-8 text-center">
    <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
      Versions
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <!-- Card 1 -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition">
        <img src="https://via.placeholder.com/300x300" alt="Robot V1" class="rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-cyan-400">NUREONIX V1</h3>
        <p class="text-gray-400 mt-2">The first prototype with basic movement and AI learning capabilities.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition">
        <img src="https://via.placeholder.com/300x300" alt="Robot V2" class="rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-cyan-400">NUREONIX V2</h3>
        <p class="text-gray-400 mt-2">Improved mobility and advanced neural learning algorithms.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition">
        <img src="https://via.placeholder.com/300x300" alt="Robot V3" class="rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-cyan-400">NUREONIX V3</h3>
        <p class="text-gray-400 mt-2">Latest model with lifelike interaction and autonomous decision-making.</p>
      </div>

    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 px-8 bg-gray-800 text-center">
    <h2 class="text-4xl font-bold mb-6 text-cyan-400">Contact</h2>
    <p class="text-gray-300 mb-4">Get in touch with us for collaboration or inquiries.</p>
    <div class="flex justify-center space-x-6 text-2xl">
      <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-linkedin"></i></a>
      <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-github"></i></a>
      <a href="#" class="hover:text-cyan-400 transition"><i class="fab fa-instagram"></i></a>
    </div>
  </section>

</body>
</html>
