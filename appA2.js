                                    //Assignment No
//Ans No 1
         
 function print (def) {
        return function (ghi) {
          console.log(def + ghi) 
          
        }
       }
let innerFunction = print(6);
innerFunction (6)

//Ans No 2

 function searchArray(arr, val) {
    
     if (arr.length === 0) {
       return false;
     }
       else if (arr[0] === val) {
       return true;
     } 
    return searchArray(arr.slice(2), val);
  }
    
   const myArray = [1, 2, 3, 4, 5];
   console.log(searchArray(myArray, 3)); 

// Ans No 3

let myPara = document.querySelector("p");
myPara.innerHTML = "<b>This is my third assignment of javaScript</b>";
myPara.style.backgroundColor = "#3333"
myPara.style.Color = "#ffff"

// Ans No 4

function addList (listItem) {
    const newList = document.createElement("li");
    newList.innerText = listItem;
    const unorderedList = document.getElementById("list");
    unorderedList.appendChild(newList);
}

addList("This is a new list item");

// Ans No 5

const changeBG = document.getElementById("changebg");
function changeBackgroundColor (element,  newColor) {
    element.style.backgroundColor = newColor;
}

changeBackgroundColor(changeBG, "blue");

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');

// Ans No 6

let myObj = {
    name: "Abdullah",
    age: 22,
  
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj" , myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);

// Ans No 7

localStorage.clear();

function f (a,b) {
    const result = a + b;

    return result;

}

const fString = f.toString();

const body = fString.substring((fString.indexOf("{"))+1, fString.lastIndexOf("}"));

const params = getParameterNames(f);

localStorage.setItem('body', body);
localStorage.setItem('params', JSON.stringify(params));



// Ans No 8

function store(){ 
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value; 

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    
}









