myController.useBluetooth()
basic.forever(function () {
    if (myController.isButtonPressed("⬆️")) {
        myController.sendData("1")
    } else if (myController.isButtonPressed("⬇️")) {
        myController.sendData("2")
    } else if (myController.isButtonPressed("➡️")) {
        myController.sendData("3")
    } else if (myController.isButtonPressed("⬅️")) {
        myController.sendData("4")
    } else if (myController.isButtonPressed("🚀turbo ")) {
        myController.sendData("5")
    } else if (myController.isButtonPressed("🛑")) {
        myController.sendData("6")
    } else if (myController.isButtonPressed("🪩dance")) {
        myController.sendData("7")
    } else if (myController.isButtonPressed("Umidade 💧")) {
        myController.sendData("8")
    } else if (myController.isButtonPressed("Temp🌡️")) {
        myController.sendData("9")
    } else if (myController.isButtonPressed("SOLO 🌱")) {
        myController.sendData("10")
    } else {
    	
    }
})
