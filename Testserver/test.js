const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this._field = field;
  }

  get field(){
    return this._field;
  }

  print(){
    this._field.forEach(element => {
        console.log(element.join(""));
    });
  }
}


const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();