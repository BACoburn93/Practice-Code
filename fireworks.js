//Code Originated from Web Dev Junkie on www.youtube.com
//I merely manipulated it and tried to gain an understanding of how it all worked

const fireworks = []; //Creates an array to store a firework divs to be pushed into
const particles = []; //Creates an array to store a particle divs to be pushed into

class Particle { //create a class to hold all of the logic
    constructor() { //The first thing it will do is spawn a firework at the bottom of the page

        const colors = [ //An Array to generate colors
            'red',
            'yellow',
            'orange',
            'pink',
            'cyan',
            'green'
        ]

        this.x = 0;
        this.y = 0;

        this.speed = Math.random() * 2 + 2; //Sets a base speed to use for the velocity for the Particles
        this.angle = Math.random() * Math.PI * 2; //Creates an angle using PI to randomize a direction for the movement
        this.vx = Math.cos(this.angle) * this.speed; //Used to create the angle
        this.vy = -Math.sin(this.angle) * this.speed;//Used to create the angle

        this.el = document.createElement('div'); //This causes a div to be passed in
        this.el.className = 'particle'; //This gives the div a className of particle
        this.el.style.left = this.x + 'px'; //Sets the x-axis of the created div
        this.el.style.top = this.y + 'px'; //Sets the y axis of the created div
        this.el.style.backgroundColor = colors[parseInt(Math.random() * colors.length)]; //Creates a random color from the array for the particles
        document.body.appendChild(this.el); //This appends the created div to the body

        setTimeout(() => {
            this.el.remove();
            particles.splice(particles.indexOf(this), 1); //Removes the element after 300 milliseconds
        }, 500);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.el.style.left = this.x + 'px'; //Sets the x-axis of the created div
        this.el.style.top = this.y + 'px'; //Sets the y-axis of the created div
    }
    // explode() {
    //     const particle = new Particle();
    //     particle.setPosition(this.x, this.y);
    //     particles.push(particle);
    // }

    update() {
        this.setPosition(this.vx + this.x, this.vy + this.y) //Every time update is called, it slowly increments it by a certain amount 
        this.vy += 0.05; //Sets the weight of the Firework and Particle classes
    }
}

class Firework { //create a class to hold all of the logic
    constructor() { //The first thing it will do is spawn a firework at the bottom of the page
        this.x = window.innerWidth / 2; //spawns it in the center
        this.y = window.innerHeight - 10; //Spawns it slightly up

        this.speed = 8; //Sets a base speed to use for the velocity
        this.angle = (Math.random() * Math.PI / 5) + Math.PI / 2.5; //Creates an angle using PI to randomize a direction for the movement
        this.vx = Math.cos(this.angle) * this.speed; //Need to learn about Sine
        this.vy = -Math.sin(this.angle) * this.speed;//Need to learn about Cosine

        this.el = document.createElement('div'); //This causes a div to be passed in
        this.el.className = 'firework'; //This gives the div a className of firework
        this.el.style.left = this.x + 'px'; //Sets the x-axis of the created div
        this.el.style.top = this.y + 'px'; //Sets the y axis of the created div
        document.body.appendChild(this.el); //This appends the created div to the body

        setTimeout(() => {
            this.el.remove();
            fireworks.splice(fireworks.indexOf(this), 1); //Removes the element after 1200 milliseconds
            this.explode(); //Runs the explode method
        }, 1200);
    }

    explode() {
        for (let i = 0; i < 120; i++) {
            const particle = new Particle();
            particle.setPosition(this.x, this.y);
            particles.push(particle);
        }
    }

    update() {
        this.x += this.vx; //Every time updae is called, it slowly increments it by a certain amount every time update is called
        this.y += this.vy;
        this.el.style.left = this.x + 'px'; //This also needs to be set in the function to keep the style updating
        this.el.style.top = this.y + 'px';
        this.vy += 0.06; //Sets the weight
    }
}





setInterval(() => {
    fireworks.forEach((firework) => firework.update()); //This causes the fireworks created in the Array to trigger the update function
    particles.forEach((particle) => particle.update());
    particles.forEach((particle) => particle.update());
}, 14);

setInterval(() => {
    const firework = new Firework(); //Creates a firework variable using the created Firework class
    fireworks.push(firework); //Pushes the firework div into the fireworks array
}, 1200);