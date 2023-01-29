const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d") // context handles content

canvas.height = window.innerHeight // set canvas size
canvas.width = window.innerWidth

context.lineWidth = 10 // set drawing settings
context.lineCap = "round"

context.fillStyle = "white" // set canvas background white
context.fillRect(0, 0, canvas.width, canvas.height)
context.fillStyle = "black"

let drawing = false // determine if drawing or not

function start(e) { // runs when mouse down
    drawing = true
    draw(e) // creates singular dot when mouse clicked
}

function end() { // runs when mouse up
    drawing = false
    context.beginPath() // reset path
}

function draw(e) { // runs when mouse move
    if(!drawing) return // drawing must be true
    context.lineTo(e.clientX, e.clientY) // draws at mouse position
    context.stroke()
}

canvas.addEventListener("mousedown", start) // listens for mouse down, up, and move

canvas.addEventListener("mouseup", end)

canvas.addEventListener("mousemove", draw)