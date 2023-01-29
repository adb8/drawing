document.addEventListener("keydown", e => { // listen for keydown

    if(e.key == "s" && e.ctrlKey) { // if ctrl+s

        e.preventDefault() // prevent save webpage

        if(window.navigator.msSaveBlob) { // internet explorer & edge
            window.navigator.msSaveBlob(canvas.msToBlob(), "image.png") // download image
        } 
        
        else { // other browsers
            const a = document.createElement("a") // create & append anchor tag
            document.body.appendChild(a)

            a.href = canvas.toDataURL()
            a.download = "image.png"
            a.click() // virtually click anchor tag to download

            document.body.removeChild(a) // remove anchor tag
        }

    }

})