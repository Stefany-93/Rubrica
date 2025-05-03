// Wrapper dei contatti
let contactsWrapper= document.querySelector('#contactsWrapper');

// Bottoni
let showContactBtn= document.querySelector('#showContactBtn');
let check = false;

let addContactBtn= document.querySelector('#addContactBtn');

let removeContactBtn= document.querySelector('#removeContactBtn');

let editContactBtn = document.querySelector('#editContactBtn');

// Inputs
let nameInput= document.querySelector('#nameInput');
let numberInput= document.querySelector('#numberInput');

const rubrica= {
    lista_contatti: [
       {contact_name: 'Carl', phone_number: 333},
       {contact_name: 'Dug', phone_number: 444},
       {contact_name: 'Kevin', phone_number: 555}
    ],
    showContacts: function() {
        contactsWrapper.innerHTML= '';
        this.lista_contatti.forEach((contatto) => {
            let div= document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
            <p class="lead">${contatto.contact_name}<p>
            <p>${contatto.phone_number}<p>
            `;
            contactsWrapper.appendChild(div);
        });
        
    },

    addContact: function(newName, newNumber) {  
        if(newName && newNumber) {
            this.lista_contatti.push({contact_name: newName, phone_number: newNumber});
            this.showContacts;
        };
        if(check == false) {
            check= true;
            showContactBtn.innerHTML= 'Nascondi contatti';
        }
    },

    removeContact: function (removedName) {
        let names= this.lista_contatti.map((contatto) => (contatto.contact_name));
        let index= names.indexOf(removedName);
        if(index >= 0) {
            this.lista_contatti.splice(index, 1);
            this.showContacts();
        };
        if (check == false) {
            check= true;
            showContactBtn.innerHTML= 'Nascondi contatti';
        };
    },

    // editContact: function(nome, numero) {
    //     this.lista_contatti.forEach((contatto) => {
    //         if(contatto.contact_name == nome) {
    //             contact_number = numero;
    //         };
    //     });
    // }

    editContact: function(editName, editNumber) {  
        if(editName && editNumber) {
            this.lista_contatti.push({contact_name: editName, phone_number: editNumber});
            this.showContacts;
        };
        if(check == false) {
            check= true;
            showContactBtn.innerHTML= 'Nascondi contatti';
        }
    },
};

addContactBtn.addEventListener('click', ()=> {
    rubrica.addContact(nameInput.value, numberInput.value);
    nameInput.value= '';
    numberInput.value= '';
});

removeContactBtn.addEventListener('click', () => {
    rubrica.removeContact(nameInput.value);
});

showContactBtn.addEventListener('click', () => {
    if (check == false) {
        rubrica.showContacts();
        check= true;
        showContactBtn.innerHTML= 'Nascondi contatti';
    } else {
        contactsWrapper.innerHTML= '';
        check= false;
        showContactBtn.innerHTML= 'Mostra contatti';
    };

});

// editContactBtn.addEventListener('click', () => {
//     if(nameInput != '') {
//         rubrica.editContact(nameInput.value, numberInput.value);
//         nameInput.value= '';
//         numberInput.value= '';
//     }
// });

editContactBtn.addEventListener('click', ()=> {
    rubrica.editContact(nameInput.value, numberInput.value);
    rubrica.removeContact(nameInput.value);
    nameInput.value= '';
    numberInput.value= '';
});


// let nameInput = document.querySelector('#nameInput');
// let numberInput = document.querySelector('#numberInput');

// btnShow = document.querySelector('#btnShow');
// btnAdd = document.querySelector('#btnAdd');
// btnRemove = document.querySelector('#btnRemove');
// btnEdit = document.querySelector('#btnEdit');
// let check = false;

// let containerContacts = document.querySelector('.containerContacts');

// let rubrica = {
//     listaContatti: [
//         {name: 'Carl', number: 333},
//         {name: 'Dug', number: 444},
//         {name: 'Kevin', number: 555}
//     ],

//     showContacts: function() {
//         this.listaContatti.forEach(contatto => {
//             let p = document.createElement('p');
//             p.innerHTML = `${contatto.name}: ${contatto.number}`;
//             containerContacts.appendChild(p);
//         })
//     },

//     addContacts: function(newName, newNumber) {
//         this.listaContatti.push({name: newName, number: newNumber})
//     },

//     removeContacts: function(removeName) {
//         let filtered = rubrica.listaContatti.filter(contatto => contatto.name != removeName);
//         rubrica.listaContatti = filtered;
//     },

//     editContacts: function(nome, numero) {
//         this.listaContatti.forEach(contatto => {
//             if(contatto.name == nome) {
//                 contatto.number = numero;
//             };
//         });
//     }
// };

// btnShow.addEventListener('click', () => {
//     if(check == false) {
//         rubrica.showContacts();
//         btnShow.innerHTML = 'Nascondi contatti';
//         check = true;
//     }else {
//         check = false;
//         containerContacts.innerHTML = '';
//         btnShow.innerHTML = 'Mostra contatti';
//     }
// });

// btnAdd.addEventListener('click', () => {
//     if(nameInput.value != '') {
//         rubrica.addContacts(nameInput.value, numberInput.value);
//         nameInput.value= '';
//         numberInput.value= '';
//     }
// });

// btnRemove.addEventListener('click', () => {
//     if(nameInput != '') {
//         rubrica.removeContacts(nameInput.value);
//         nameInput.value= '';
//     }
// });

// btnEdit.addEventListener('click', () => {
//     if(nameInput != '') {
//         rubrica.editContacts(nameInput.value, numberInput.value);
//         nameInput.value= '';
//         numberInput.value= '';
//     }
// });