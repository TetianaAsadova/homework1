const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      console.log("this.potions[i].name", this.potions[i].name);
      console.log("oldName", oldName);
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        console.log(`$(new this.potions[i].name)`, this.potions[i].name);
        console.log(this.potions)
        break;
      }
      
    }
     console.log(`Potion ${oldName} is not in inventory!`) ;
  },  
};
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
atTheOldToad.updatePotionName("Dragonbreath", "Polymorth");