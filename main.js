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
        };
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

    editContact: function(editName, editNumber) {  
        if(editName && editNumber) {
            this.lista_contatti.push({contact_name: editName, phone_number: editNumber});
            this.showContacts;
        };
        if(check == false) {
            check= true;
            showContactBtn.innerHTML= 'Nascondi contatti';
        };
    }
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

editContactBtn.addEventListener('click', ()=> {
    rubrica.editContact(nameInput.value, numberInput.value);
    rubrica.removeContact(nameInput.value);
    nameInput.value= '';
    numberInput.value= '';
});