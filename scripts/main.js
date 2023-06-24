class Creature {
    static number = 0;
    #id;
    get id(){
        return this.#id;
    }
    constructor(name, healthPoints, damage){
        this.name = name;
        this.healthPoints = healthPoints;
        Creature.number++;
        this.#id = Creature.number;
        this.damage = damage;
    }
    defeat(other){
        console.log(`Существо ${other.name} уничтожено`);  
    }
}
class Player extends Creature {
    #lvl;
    constructor(name, healthPoints, damage, lvl){
        super(name, healthPoints, damage);
        this.#lvl = lvl;
    }
    get lvl(){
        return this.#lvl;
    }

    attack(other){
        other.healthPoints -= this.damage;
        if (other.healthPoints <=0) {
            this.defeat(other);
            this.#lvl++;
            return true;
        }
        else return false;
    }
        print(){
            console.log(
                `Имя: ${this.name}\n`+
                `Уровень игрока: ${this.lvl}\n`+
                `Здоровье: ${this.healthPoints}\n`+
                `Урон: ${this.damage}\n`
            )
        }

}

class Enemy extends Creature {
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
    }
    attack(other){
        other.healthPoints -= this.damage;
        if (other.healthPoints <=0) {
            this.defeat(other);
            return true;
        }
        else return false;
    }
    print(){
        console.log(
            `Имя: ${this.name}\n`+
            `Здоровье: ${this.healthPoints}\n`+
            `Урон: ${this.damage}\n`
        )
    }
}  
  
const player1 = new Player(
    'Белый дракон',
    35,
    7,
    1);

const enemy1 = new Enemy(
    'Черный лебедь',
    30,
    6);

console.log('НАЧАЛЬНЫЕ УСЛОВИЯ:\n');
enemy1.print();
player1.print();
do
{
    console.log (`Атака ${enemy1.name} на ${player1.name}`);
    var attack1 = enemy1.attack(player1);
    if (!attack1){
    console.log (`Атака ${player1.name} на ${enemy1.name}`);
    var attack2=player1.attack(enemy1);
    }
    else break;
    console.log('РЕЗУЛЬТАТ АТАКИ:\n');
    enemy1.print();
    player1.print();    
}
while((attack1==false) && (attack2==false));
 
console.log('РЕЗУЛЬТАТ ИГРЫ:\n');
enemy1.print();
player1.print(); 