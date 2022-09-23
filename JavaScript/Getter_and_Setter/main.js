const menu = {
    _meal:"",
    _price:0,
    set meal(mealToCheck){
      if(typeof mealToCheck == "string"){
        this._meal = mealToCheck;
        // console.log("new meal assigned");
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck == "number")
        this._price = priceToCheck;
    },
    get todaysSpecial(){
      if(this._meal === "" || 0 >= this._price ) {
        return "Meal or price was not set correctly!"
      } else {
        return `todays speacial is ${this._meal} and costs ${this._price} monopoly shekals`
      }
    }
  };
  menu.meal = "Horse ear";
  menu.price = 10;
  console.log(menu.todaysSpecial);