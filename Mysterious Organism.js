// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const  pAequorFactory = (number, dna) =>{
    return{
      _specimenNum: number,
      _dna: dna,
      mutate(){

        this._dna = this._dna.map(base => {
            let newBase = returnRandBase();
            while(base == newBase){
                newBase = returnRandBase();
            }

            return newBase;
        });

        return this._dna;

      },

      compareDNA(pAequor){
        let subject2 = [...pAequor._dna];
        let sameCount = 0;
        for(let i = 0; i < this._dna.length; i++){
            if(this._dna[i] == subject2[i]){
                sameCount++;
            }
        }

        sameCount = ((sameCount / this._dna.length) * 100).toFixed(2);
        return `specimen #${this._specimenNum} and specimen #${pAequor._specimenNum} have ${sameCount}% DNA in common`;

      },

      willLikelySurvive(){
        const G = this._dna.filter(base => {
            if(base == 'G'){
                return base;
            }
        });
        const C = this._dna.filter(base => {
            if(base == 'C'){
                return base;
            }
        });

        return (G.length / this._dna.length >= 0.6) || (C.length / this._dna.length >= 0.6) ? true : false;
      }
    };
  }


let arrayOfMonsters = [];
  
for(let i = 0; i < 100; i++){
    let monster = pAequorFactory(i, mockUpStrand());

    if(monster.willLikelySurvive()){
        arrayOfMonsters.push(monster);
    }
}
if(arrayOfMonsters.length > 1){
    console.log(arrayOfMonsters[0]._dna);
    console.log(arrayOfMonsters[1]._dna);
    console.log(arrayOfMonsters[0].compareDNA(arrayOfMonsters[1]));
}