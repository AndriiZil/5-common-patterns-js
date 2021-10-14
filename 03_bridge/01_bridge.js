class InterfacePages {
    getContent() {
        throw new Error(`В ${this.constructor.name} не описан метод getContent()`)
    }
    setTheme() {
        throw new Error(`В ${this.constructor.name} не описан метод setTheme()`)
    }
}

class About extends InterfacePages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class Careers extends InterfacePages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "Careers page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

// Additional Ierarchy
class DarkTheme {
    getColor() {
        return 'Dark Black'
    }
}

class LightTheme {
    getColor() {
        return 'Off white'
    }
}

class AquaTheme {
    getColor() {
        return 'Light blue'
    }
}


const darkTheme = new DarkTheme()
const lightTheme = new LightTheme;

const about = new About(darkTheme); // initialization
const careers = new Careers(darkTheme);

console.log(about.getContent()) // "About page in Dark Black"
console.log(careers.getContent())// "Careers page in Dark Black"

about.setTheme(lightTheme); // динамически меняем темы
careers.setTheme(lightTheme);

console.log(about.getContent())// "About page in Off white"
console.log(careers.getContent())// "Careers page in Off white"
