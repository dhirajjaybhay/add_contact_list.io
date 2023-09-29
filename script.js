const addBtn = document.getElementById("submit-btn")
const resetBtn = document.getElementById("reset-btn")
const deletBtn = document.getElementById("delet-btn")
const form = document.querySelector("form");
const recordContainer = document.querySelector("record-container")
const  mySearchButtonBtn = document.getElementById("searchName")
const searchButton = document.getElementById("search-btn-name")
const searchResetBtn = document.getElementById("input-reset-btn")
const notFound = document.getElementById("record-display-h2")
const errorMsg = document.getElementById("error-msg");


let contacts = [];
function addToContact() {   
    const name = document.getElementById("name")
    const number = document.getElementById("number")
    let addContact = {
        "name": name.value,
        "contact": number.value
    }
    //console.log(inputType);
    
    
    
    
    if(addContact.name.length > 2 && addContact.contact.length == 10){
        let flag = 0;
        let myNameToShow = "";
        for(let m = 0 ; m < contacts.length ; m++){
            if(addContact.contact == contacts[m].contact)
            {
                flag = 1;
                myNameToShow = contacts[m].name;
                break;
            }
        }
        if(flag == 0)
        {
            contacts.push(addContact);
            form.reset();
            notFound.innerHTML = "Available Contacts";  
            errorMsg.innerHTML = "";
            functionToAddImformation(contacts);
        }else{
            alert("Number is already registered with name : " + myNameToShow)
        }
    }else{
        if(addContact.name.length <= 1)
        //alert("Length of name should be greater than 2");
        errorMsg.innerHTML = "Length of name should be greater than 2";
        else if(addContact.contact.length != 10)
        //alert("Mobile number should of 10 digits");
        errorMsg.innerHTML = "Mobile number should of 10 digits";
        
    }
   

    // console.log(contacts)
    // checkInput(contacts);
}

function functionToAddImformation(contacts) {
    let myHtml = ''
    
    let newElement = document.getElementById("contactDetail");
    for (i = 0; i <= contacts.length - 1; i++) {
        myHtml += ` ${i + 1}  
        <div>
           <span>Name :</span>
           <span id="name-content"> ${contacts[i].name}</span>
        </div>
        <div class="record-el">
           <span>contact :</span>
           <span id="contact-content">${contacts[i].contact}</span>
        </div>
        <button type="button" id="delet-btn" onclick="deletInfo(${i})">
           <span><i class="fa-solid fa-trash" ></i>Delete</span>
        </button>`
    }
    newElement.innerHTML = myHtml;
}

addBtn.addEventListener("click", addToContact);
resetBtn.addEventListener("click",resetButtonInfo);
searchButton.addEventListener("click",searchButtonByName);
searchResetBtn.addEventListener("click",searchResetButton);


function deletInfo(id) {
    contacts.splice(id, 1);
    console.log(contacts);
    functionToAddImformation(contacts);
}

function resetButtonInfo() {
    contacts = [];
    functionToAddImformation(contacts);
}

function searchButtonByName(){
    
    //searchButtonByName.value = "";
    let myOtherArray = [];
    console.log(myOtherArray)
    
    let myVar = mySearchButtonBtn.value;
    myVar = myVar.toUpperCase();
    let myFlag = 0;
    for(let x = 0 ; x < contacts.length ; x++)
    {
        if(contacts[x].name.toUpperCase().includes(myVar) || contacts[x].contact.includes(myVar)){
            myOtherArray.push(contacts[x]);
            myFlag = 1;
        }
        
    }
    if(myFlag==0){
        notFound.innerHTML = "No Record(s) found";
    }else{
        notFound.innerHTML = "Available Contacts";    
    }

    
    functionToAddImformation(myOtherArray)
}

function searchResetButton(){
    mySearchButtonBtn.value = "";
    notFound.innerHTML = "Available Contacts";    
    functionToAddImformation(contacts);
}
