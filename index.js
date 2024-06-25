    const input = document.getElementById("input-value")
    const convert = document.getElementById("convert")
    const length = document.getElementById("length")
    const volume = document.getElementById("volume")
    const mass = document.getElementById("mass")

    convert.addEventListener("click", function () {
        const toConvert = parseFloat(input.value)

        if (isNaN(toConvert) || toConvert <= 0) {
            alert("Please enter a valid positive number.")
            return
        }

        const inFeet = toConvert * 3.281
        const inMeter = toConvert / 3.281
        length.textContent = `${toConvert} meters = ${inFeet.toFixed(3)} feet | ${toConvert} feet = ${inMeter.toFixed(3)} meters`

        const inGallon = toConvert * 0.264
        const inLiter = toConvert / 0.264
        volume.textContent = `${toConvert} liters = ${inGallon.toFixed(3)} gallons | ${toConvert} gallons = ${inLiter.toFixed(3)} liters`

        const inPound = toConvert * 2.204
        const inKilogram = toConvert / 2.204
        mass.textContent = `${toConvert} kilos = ${inPound.toFixed(3)} pounds | ${toConvert} pounds = ${inKilogram.toFixed(3)} kilos`
    })