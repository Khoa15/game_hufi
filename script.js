const socket = io("http://localhost:5000")
const speed = 0.8,
    velocity = {x:0, y:0}
    keys = []

const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

document.addEventListener('keydown', (e)=>{
    socket.emit('keydown', e.keyCode)
})

// const image = new Image()
// image.src = 'map.png'

// const playerImage = new Image()
// playerImage.src = 'img/playerDown.png'

// class Sprite{
//     constructor({position, velocity, image}){
//         this.position = position
//         this.velocity = velocity
//         this.image = image
//     }

//     draw(){
//         c.drawImage(this.image, this.position.x, this.position.y)
//     }
// }

// const background = new Sprite({
//     position: {
//         x: 0,
//         y: 0
//     },
//     image: image
// })

// function update(){
//     window.requestAnimationFrame(update)
//     background.draw()
//     c.drawImage(playerImage,
//         0,
//         0,
//         playerImage.width/4,
//         playerImage.height,
//         canvas.width/2,
//         canvas.height / 2,
//         playerImage.width/4,
//         playerImage.height,
//     )
//     if(keys[87]){
//         background.position.y += 3
//         //up
//     }
//     if(keys[83]){
//         background.position.y -= 3
//         //down
//     }
//     if(keys[65]){
//         background.position.x += 3
//         //left
//     }
//     if(keys[68]){
//         background.position.x -= 3
//         //right
//     }
//     velocity.y *= speed
//     velocity.x *= speed

// }
// update()

// window.addEventListener('keydown', (e)=>{
//     keys[e.keyCode] = true
// })

// window.addEventListener('keyup', (e)=>{
//     keys[e.keyCode] = false
// })