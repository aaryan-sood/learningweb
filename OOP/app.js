// Prototype
// String.prototype.yell=function(){
//     return `${this.toUpperCase()} !!!`
// }

// Array.prototype.pop=function(){
//     return `Sorry i do not want to pop it off!!`
// }

//Factory Functions
// function hex(r,g,b){
//     return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r,g,b){
//     return `rgb(${r},${g},${b})`
// }

// function makeColor(r,g,b){
//     const color={};
//     color.r=r;
//     color.g=g;
//     color.b=b;
//     color.rgb=() => {
//         return `rgb(${this.r},${this.g},${this.b})`;
//     }
//     color.hex=() => {
//         return '#'+ ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
//     }
//     return color;
// }
// color=makeColor(35,144,240);

// new keyword
// function Color(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
// }
// Color.prototype.rgb=function(){
//     return `rgb(${this.r},${this.g},${this.b})`
// }

// Color.prototype.hex=function(){
//     return '#'+ ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
// }

// Color.prototype.rgba=function(a=1.0){
//     this.a=a
//     return `rgba(${this.r},${this.g},${this.b},${this.a})`
// }
// let color1=new Color(255,145,30)
// let color2=new Color(124,36,54)
// console.log(color1.rgb())
// console.log(color1.hex())
// console.log(color2.rgb())
// console.log(color2.hex())
// console.log(color1.rgb === color2.rgb)

// Class functionality
// class Color{
//     constructor(r,g,b){
//         this.r=r;
//         this.g=g;
//         this.b=b;
//         this.calcHSL()
//     }
//     rgb(){
//         return `rgb(${this.r},${this.g},${this.b})`
//     }
//     hsl(){
//         return `hsl(${this.h},${this.s}%,${this.l}%)`
//     }
//     hex(){
//         return '#'+ ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
//     }
//     rgba(a=1.0){
//         this.a=a;
//         return `rgba(${r},${g},${b},${a})`
//     }
//     oppsite(){
//         return `hsl(${(180+this.h)%360},${this.s},${this.l})`
//     }
//     fullsaturation(){
//         return `hsl(${this.h},100%,${this.l}%)`
//     }
//     calcHSL() {
    
//         // Make r, g, and b fractions of 1
        
//         this.r /= 255;
//         this.g /= 255;
//         this.b /= 255;
    
//         // Find greatest and smallest channel values
//         let cmin = Math.min(this.r, this.g, this.b),
//             cmax = Math.max(this.r, this.g, this.b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
//         if (delta == 0) h = 0;
//         else if (cmax == this.r)
//             // Red is max
//             h = ((this.g - this.b) / delta) % 6;
//         else if (cmax == this.g)
//             // Green is max
//             h = (this.b - this.r) / delta + 2;
//         else
//             // Blue is max
//             h = (this.r - this.g) / delta + 4;
    
//         h = Math.round(h * 60);
    
//         // Make negative hues positive behind 360°
//         if (h < 0) h += 360;
//         // Calculate lightness
//         l = (cmax + cmin) / 2;
    
//         // Calculate saturation
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
//         // Multiply l and s by 100
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
//         this.h=h;
//         this.s=s;
//         this.l=l;
//     }
// }
// let color1=new Color(123,57,145);
// let color2=new Color(255,255,255);
// console.log(color1.rgb());
// console.log(color1.hex());
// console.log(color2.rgb());
// console.log(color2.hex());
// console.log(color1.rgb === color2.rgb)
// console.log(color1.h,color1.s,color1.l)
// console.log(color2.h,color2.s,color2.l)

// extends and super 

class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    eat(){
        return `${this.name} is eating !!`
    }
}
class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        super(name,age)
        this.livesLeft=livesLeft;
    }
    meow(){
        return `MEOW !!`
    }
}
class Dog extends Pet{
    bark(){
        return 'WOOF !!'
    }
}
let kitty=new Cat("kitty",3)
console.log(kitty.eat())
console.log(kitty.meow())
let duke=new Dog("duke",4)
console.log(duke.eat())
console.log(duke.bark())