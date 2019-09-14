function butoon() {
    return 'button';
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nexSlider() {
        console.log('Test');

    }
    prevSlider() {
        console.log('Test1');

    }
    whoAmI() {
        console.log(this.width, this.height, this.count);

    }
}

class AutoSlider extends Slider {
    constructor (width, height, count, auto) {
        super(width, height, count);
        this.auto = auto;
    }
    play() {
        console.log(`Autoplay: ${this.auto}`);
        
    }
}

// const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAmI();
// slider.play();

export {butoon};

export default Slider;