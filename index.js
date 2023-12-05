class Die {
    constructor(sides) {
        this.sides = sides;
        this.side = this.roll();
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }

    get value() {
        return this.side;
    }
}

const DieFactory = (option) => {
    switch (option) {
        case 'd4':
            return new Die(4);
            break;
        case 'd8':
            return new Die(8);
            break; 
        case 'd10':
            return new Die(10);
            break; 
        case 'd12':
            return new Die(12);
            break; 
        case 'd20':
            return new Die(20);
            break; 
        case 'd100':
            return new Die(100);
            break; 
        default: 
            return new Die(6);
    }
} 

const numberGenerator = (value, offset = false) => {
    if (offset) {
        return Math.floor(Math.random() * value) + 1;
    }
    return Math.floor(Math.random() * value);
};

module.exports = {
    DieFactory,
    numberGenerator
}