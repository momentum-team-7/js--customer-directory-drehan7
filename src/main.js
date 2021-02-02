const mainContainer = document.querySelector(".main-container");


// Loop that calls function to populate data for how ever many customers there are
for (let i = 0; i < customers.length; i++) {
    makeAndFillDiv(i);
}





// Function that creates a new div and populates it with customer data
// takes in an index that correlates to position in object i.e. customers[i]
function makeAndFillDiv(i) {
    let newDiv = document.createElement("div");
    newDiv.className = "profile"

    let profilePic = document.createElement("img")
    profilePic.src = customers[i].picture.large

    let nameTitle = document.createElement("p")
    nameTitle.className = "name-title"
    nameTitle.innerHTML = titleCaseName(customers[i].name.first + " " + customers[i].name.last);

    let cellNumber = document.createElement("p");
    cellNumber.className = "cell-number";
    cellNumber.innerHTML = `${customers[i].cell}`

    let email = document.createElement("p");
    email.className = "email";
    email.innerHTML = customers[i].email;

    let address = document.createElement("address");
    address.innerHTML = `${customers[i].location.street.number} ${customers[i].location.street.name}<br>${customers[i].location.city}, ${nameToAbbr(customers[i].location.state)} ${customers[i].location.postcode}`;

    let dob = document.createElement("p")
    dob.className = "dob";
    dob.innerHTML = `DOB: ${moment(customers[i].dob.date).format('ll')}`

    let customerSince = document.createElement("p");
    customerSince.className = "customer-since";
    customerSince.innerHTML = `Customer since: ${moment(customers[i].registered.date).format('ll')}`
    
    newDiv.appendChild(profilePic);
    newDiv.appendChild(nameTitle);
    newDiv.appendChild(cellNumber);
    newDiv.appendChild(email);
    newDiv.appendChild(address);
    newDiv.appendChild(dob);
    newDiv.appendChild(customerSince);

    mainContainer.appendChild(newDiv);

}



// Function to properly capitalize names
function titleCaseName(name) {
    let allNames = name.toLowerCase().split(" ");
    for (let i = 0; i < allNames.length; i++) {
        allNames[i] = allNames[i][0].toUpperCase() + allNames[i].slice(1);
    }
    return allNames.join(" ");
}