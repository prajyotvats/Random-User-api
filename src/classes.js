

// this is parent
class God{
    constructor() {
         this.name = 'maniram'
    }
    
    showing() {
         return this.name
     }
}


// this is child of God
// this is simple a blueprint
class Human extends God{

    constructor() {
        super()
        this.surname = 'mahto'     
        this.fullName = 'manish' + this.surname
    }

    // method
    show() {
        return  this.fullName 
    }     
}


let humanObj1 = new Human()
// when one create an obj constructor get called automatic
 
console.log('Your full name is :' , humanObj1.show());  
console.log('Your full name is :' , humanObj1.showing());  

let humanObj2 = new Human('manish', 'chauhan')






