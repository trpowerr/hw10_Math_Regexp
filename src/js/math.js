class imbalancePerson {
    constructor () {
        this.attack = 100;   
    }
    
    newAttack(numberOfCells) {
        return this.attack - (this.attack / 100 * ((numberOfCells - 1) * 10));
    }

    stoned (numberOfCells) {
        return person.newAttack(numberOfCells) - Math.log2(numberOfCells) * 5; 
    }

};

class Magician extends imbalancePerson {};
class Demon extends imbalancePerson {};

export const person = new Magician();
export const person2 = new Demon(); 
 


