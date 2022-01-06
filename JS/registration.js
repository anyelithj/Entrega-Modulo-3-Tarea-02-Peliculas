
let list = document.getElementById("list");
let btn = document.getElementById("button");

let users = [];


btn.addEventListener('click', (e) =>{
  
    e.preventDefault();
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let adress = document.getElementById("adress").value;
    let observations = document.getElementById("observations").value;
    if( (name === '' )|| (lastName === '')) {
        showMessage('¡Ingrese un valor, por favor!');
    }else if((phone  === '') || (adress === '') ){
        showMessage('¡Ingrese un valor, por favor!');
    } else if(isNaN(phone)) {
        showMessage('¡Ingrese un valor valido, por favor!');
    } else {
      registerUser(name, lastName, phone, adress, observations);
    }

})
let registerUser = (Name, LastName, Phone, Adress, Observations) => {
    let register = {
        name: Name,
        lastName: LastName,
        phone: Phone,
        adress: Adress,
        observations: Observations
    }
    users.push(register);
    saveData(users);  
}
 let saveData = () => {
    localStorage.setItem('user', JSON.stringify(users))
}
 let showMessage = (mens) => {
    const Message = document.createElement('div');
    Message.setAttribute('class', 'error');
    Message.textContent = mens;
    form.appendChild(Message);
    setTimeout( () => {
        Message.remove();
    }, 5000);
}


let listData = () => {
    list.innerHTML = "";
    users = JSON.parse(localStorage.getItem("user"));
    users.forEach(element => {
        const {  name, lastName, phone, adress, observations} = element;
        list.innerHTML += `   <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${lastName}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${phone}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${adress}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${observations}</h6>
        </div>
    </div>`
    });
}
document.addEventListener('DOMContentLoaded',listData)
