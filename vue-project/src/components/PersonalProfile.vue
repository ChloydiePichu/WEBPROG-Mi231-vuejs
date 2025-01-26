<template>
    <div id="container">
      <div id="about-me">
        <h2>About Me</h2>
        <p>Hello, my name is Chloyd! I am 20 years old and I am currently a 2nd-year college student at APC.</p>
        <div class="button-container">
          <button data-target="education" @click="showContent('education')">Education</button>
          <button data-target="course" @click="showContent('course')">Course</button>
          <button data-target="it-experience" @click="showContent('it-experience')">IT Experience</button>
          <button data-target="hobbies" @click="showContent('hobbies')">Hobbies</button>
          <button data-target="goals" @click="showContent('goals')">Goals</button>
          <button data-target="gallery" @click="showContent('gallery')">Gallery</button>
        </div>
      </div>
  
      <div id="display-box">
        <component :is="currentComponent" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentComponent: null,
      };
    },
    methods: {
      showContent(component) {
        this.currentComponent = component;
      },
    },
    components: {
      education: {
        template: `
          <div>
            <h2>Education & Achievements</h2>
            <ul>
              <li>Dean's Lister in Asia Pacific College for A.Y. 2023-2024</li>
              <li>Consistent top notcher from elementary to JHS</li>
              <li>Kinder - Grade 10 - Domini Angelicus Integrated School</li>
              <li>Grade 11 - Current - Asia Pacific College</li>
            </ul>
          </div>
        `,
      },
      course: {
        template: `
          <div>
            <h2>Course</h2>
            <p>WEBPROG for 2nd term A.Y. 2024-2025</p>
          </div>
        `,
      },
      "it-experience": {
        template: `
          <div>
            <h2>IT Experience</h2>
            <table>
              <tr><th>Experience</th><th>Date</th></tr>
              <tr><td>Developer of iTeach</td><td>2021</td></tr>
              <tr><td>Developed a grade calculator web app</td><td>2022</td></tr>
              <tr><td>Developed a facility-booking mobile app</td><td>2024</td></tr>
              <tr><td>Student specializing in I.T.</td><td>2021 - Current</td></tr>
            </table>
          </div>
        `,
      },
      hobbies: {
        template: `
          <div>
            <h2>Hobbies & Interests</h2>
            <ul>
              <li>Dancing</li>
              <li>Cooking</li>
              <li>Playing video games</li>
              <li>Taking naps</li>
            </ul>
          </div>
        `,
      },
      goals: {
        template: `
          <div>
            <h2>Goals & Dreams</h2>
            <p>I want to become a consistent person. Consistent in keeping myself in shape and healthy, consistent in maintaining relationships, consistent in keeping myself motivated, etc. I also aim to create a video game that I always wanted as a kid. That is the reason for my enrollment in APC.</p>
          </div>
        `,
      },
      gallery: {
        data() {
          return {
            images: [
              { src: "gala.jpg", alt: "Gallery Image 1" },
              { src: "pc-pic.jpg", alt: "Gallery Image 2" },
            ],
            currentIndex: 0,
          };
        },
        methods: {
          prevImage() {
            this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
          },
          nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
          },
        },
        template: `
          <div>
            <h2>Picture Gallery</h2>
            <div class="carousel">
              <button class="prev-button" @click="prevImage">&#10094;</button>
              <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" class="carousel-image" />
              <button class="next-button" @click="nextImage">&#10095;</button>
            </div>
          </div>
        `,
      },
    },
  };
  </script>
  
  <style>
  body {
    font-family: sans-serif;
    margin: 0;
    overflow-x: hidden;
    background: linear-gradient(to bottom, #000033, #000066, #000099);
    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  #container {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    max-width: 800px;
    text-align: center;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  h2 {
    color: #ccf;
    margin-bottom: 15px;
  }
  
  p,
  ul,
  table {
    font-size: 16px;
    line-height: 1.6;
    text-shadow: 1px 1px 2px #000;
  }
  
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 12px 20px;
    background-color: rgba(50, 100, 150, 0.6);
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: rgba(70, 120, 170, 0.8);
  }
  
  .carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
  }
  
  .carousel-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .prev-button,
  .next-button {
    background-color: rgba(50, 100, 150, 0.6);
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
  }
  
  .prev-button:hover,
  .next-button:hover {
    background-color: rgba(70, 120, 170, 0.8);
  }
  </style>
  