class Thermostat {
    constructor() {
        this.temperature = 20
        this.powerSavingMode = true
    }
    getTemperature() {
        return this.temperature
    }
    getPowerSavingMode() {
        return this.powerSavingMode
    }
    up() {
        if (this.getPowerSavingMode() == true && this.temperature < 25) {
            this.temperature++;
            }
        else if (this.getPowerSavingMode() == false && this.temperature < 32) {
            this.temperature++;
            };
    }
    down() {
        if (this.temperature > 10) {
            this.temperature--
        }
    }
    setPowerSavingModeOn() {
        this.powerSavingMode = true
    }
    setPowerSavingModeOff() {
        this.powerSavingMode = false
    }
    reset() {
        this.temperature = 20
    }
}

module.exports = Thermostat