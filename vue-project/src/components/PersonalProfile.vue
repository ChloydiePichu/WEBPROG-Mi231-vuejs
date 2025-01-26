<template>
    <div id="container">
        <div id="about-me">
            <h2>About Me</h2>
            <p>Hello, my name is Chloyd! I am 20 years old and I am currently a 2nd-year college student at APC.</p>
            <div class="button-container">
                <button data-target="education">Education</button>
                <button data-target="course">Course</button>
                <button data-target="it-experience">IT Experience</button>
                <button data-target="hobbies">Hobbies</button>
                <button data-target="goals">Goals</button>
                <button data-target="gallery">Gallery</button>
            </div>
        </div>
        <div id="display-box"></div>

        <div id="education" class="hidden-content">
            <h2>Education & Achievements</h2>
            <ul>
                <li>Dean's Lister in Asia Pacific College for A.Y. 2023-2024</li>
                <li>Consistent top notcher from elementary to JHS</li>
                <li>Kinder - Grade 10 - Domini Angelicus Integrated School</li>
                <li>Grade 11 - Current - Asia Pacific College</li>
            </ul>
        </div>

        <div id="course" class="hidden-content">
            <h2>Course</h2>
            <p>WEBPROG for 2nd term A.Y. 2024-2025</p>
        </div>

        <div id="it-experience" class="hidden-content">
            <h2>IT Experience</h2>
            <table>
                <tr><th>Experience</th><th>Date</th></tr>
                <tr><td>Developer of iTeach</td><td>2021</td></tr>
                <tr><td>Developed a grade calculator web app</td><td>2022</td></tr>
                <tr><td>Developed a facility-booking mobile app</td><td>2024</td></tr>
                <tr><td>Student specializing in I.T.</td><td>2021 - Current</td></tr>
            </table>
        </div>

        <div id="hobbies" class="hidden-content">
            <h2>Hobbies & Interests</h2>
            <ul>
                <li>Dancing</li>
                <li>Cooking</li>
                <li>Playing video games</li>
                <li>Taking naps</li>
            </ul>
        </div>

        <div id="goals" class="hidden-content">
            <h2>Goals & Dreams</h2>
            <p>I want to become a consistent person. Consistent in keeping myself in shape and healthy, consistent in maintaining relationships, consistent in keeping myself motivated, etc. I also aim to create a video game that I always wanted as a kid. That is the reason for my enrollment in APC.</p>
        </div>

        <div id="gallery" class="hidden-content">
            <h2>Picture Gallery</h2>
            <div class="image-gallery">
                <img src="gala.jpg" alt="Image 1">
                <img src="pc pic.jpg" alt="Image 2">
            </div>
        </div>
    </div>
</template>

<script>
const buttons = document.querySelectorAll('.button-container button');
const displayBox = document.getElementById('display-box');
const contentElements = {};

document.querySelectorAll('.hidden-content').forEach(element => {
    contentElements[element.id] = element.innerHTML;
    element.remove();
});

function initializeCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = (i === index) ? 'block' : 'none';
        });
    }

    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        displayBox.innerHTML = '';  

        if (targetId === 'survey') {
            displayBox.innerHTML = contentElements[targetId];
            const submitButton = displayBox.querySelector('.submit-button');

            submitButton.addEventListener('click', () => {
                const suggestions = displayBox.querySelector('#suggestions').value;
                const likes = displayBox.querySelector('#likes').value;
                const rating = displayBox.querySelector('input[name="rating"]:checked')?.value;

                alert(`Thank you for your feedback!\nSuggestions: ${suggestions}\nLikes: ${likes}\nRating: ${rating}`);
            });
        } else if (targetId === 'gallery') {
            const galleryContent = `
                <div class="carousel">
                    <button class="prev-button">❮</button>
                    <div class="carousel-images">
                        <img src="gala.jpg" alt="Gallery Image 1" class="carousel-image" />
                        <img src="pc pic.jpg" alt="Gallery Image 2" class="carousel-image" />
                    </div>
                    <button class="next-button">❯</button>
                </div>
            `;
            displayBox.innerHTML = galleryContent;
            initializeCarousel(); 
        } else {
            displayBox.innerHTML = contentElements[targetId];
        }
    });
});
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

#profile-image {
    width: 150px;
    height: auto;
    display: block; 
    margin: 0 auto 20px; 
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

h2 {
    color: #ccf;
    margin-bottom: 15px;
}

p, ul, table {
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
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    min-width: 120px; 
    text-align: center;
}

button:hover {
    background-color: rgba(70, 120, 170, 0.8);
}

.popup {
    display: none;
    position: fixed;
    z-index: 2; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7); 
    backdrop-filter: blur(3px);
}

.popup-content {
    background-color: rgba(20, 20, 50, 0.9); 
    margin: 10% auto;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.hidden-content {
    display: none;
}

.close-button {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
    color: #ddd;
    cursor: pointer;
    text-shadow: none;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    color: #eee;
}

table th,
table td {
    border: 1px solid #444;
    padding: 10px;
    text-align: left;
}

table th {
    background-color: rgba(50, 100, 150, 0.6);
    color: white;
}

.image-gallery {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
    flex-wrap: wrap;
}

.carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    max-width: 100%;
    overflow: hidden;
}

.carousel-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.5s ease; 
}

.carousel-button {
    background-color: rgba(50, 100, 150, 0.6);
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.carousel-button:hover {
    background-color: rgba(70, 120, 170, 0.8);
}

.prev-button {
    position: absolute;
    left: 10px;
}

.next-button {
    position: absolute;
    right: 10px;
}

.image-gallery img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}


.survey-form {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

 .survey-form h3 {
    color: #ccf;
    margin-bottom: 15px;
}

.survey-form label {
    display: block;
    margin-bottom: 10px;
    color: #eee;
    font-size: 14px;
}

.survey-form input[type="text"],
.survey-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #555;
    border-radius: 5px;
    background: #222;
    color: #eee;
}

.survey-form textarea {
    resize: vertical;
}

.rating {
    display: flex;
gap: 5px;
    margin-bottom: 15px;
}

.rating input {
    display: none;
}

.rating label {
    font-size: 24px;
    color: #666;
    cursor: pointer;
}

.rating input:checked ~ label,
.rating input:hover ~ label {
    color: #ffcc00;
}

.submit-button {
    background-color: rgba(50, 100, 150, 0.6);
    padding: 10px 15px;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: rgba(70, 120, 170, 0.8);
}
</style>
