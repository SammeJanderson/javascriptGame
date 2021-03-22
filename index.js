

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight







const x = innerWidth / 2
const y = innerHeight / 2

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill();
    }
}




class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill();
    }

    update() {
        this.draw();
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}






const player = new Player(x, y, 30, 'green')



const projectiles = [];




function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0,canvas.width,canvas.height)
    player.draw();
    projectiles.forEach(projectile => {
        projectile.update();
    })
}


window.addEventListener('click', (event) => {
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }



    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'red', velocity))

})





animate();
