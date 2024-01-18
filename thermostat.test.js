const Thermostat = require('./thermostat')

xdescribe(Thermostat, () => {
    it('Sets the thermostat to 20 when it initialises', () => {
        let thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20)
    })
    it('Increases the temperature to 22', () => {
        let thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    })
    it('Decreases the temperature to 19', () => {
        let thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(19)
    })
    it('Tries to decrease the temperature to 7 but fails', () => {
        let thermostat = new Thermostat();
        for (let i = 0 ; i < 13 ; i++) {
            thermostat.down();
            }
        expect(thermostat.getTemperature()).toBe(10)
    })
    it('Returns power saving mode status and is true at initialisation', () => {
        let thermostat = new Thermostat();
        expect(thermostat.getPowerSavingMode()).toBe(true)
    })
    it('Sets power saving mode to off', () => {
        let thermostat = new Thermostat();
        thermostat.setPowerSavingModeOff();
        expect(thermostat.getPowerSavingMode()).toBe(false)
    })
    it('Increases the temperature to 27 but is stopped due to power saving mode', () => {
        let thermostat = new Thermostat();
        for (let i = 0 ; i < 7 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25)
    })
    it('Turns off PSM sets temperature to 27, succeeds', () => {
        let thermostat = new Thermostat();
        thermostat.setPowerSavingModeOff();
        for (let i = 0 ; i < 7 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(27)
    })
    it('Turns off PSM sets temperature to 33, fails', () => {
        let thermostat = new Thermostat();
        thermostat.setPowerSavingModeOff();
        for (let i = 0 ; i < 13 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32)
    })
    it('Sets temperate to 22, then resets to 20', () => {
        let thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20)
    })
})