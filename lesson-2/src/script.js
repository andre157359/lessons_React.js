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

const slider = new Slider(600, 400, 5);
someSlider = new Slider(500, 300, 10)

slider.whoAmI();
someSlider.whoAmI();