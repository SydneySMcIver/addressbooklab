"Use Strict;";
class addressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let human = new Contact(name, email, phone, relation);
    this.contacts.push(human);
  }
  deleteAt(index) {
    index = Number(index);
    this.contacts = [
      ...this.contacts.slice(0, index),
      ...this.contacts.splice(index, 1)
    ];
  }
}
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relations = relation;
  }
}
function print(book) {
  for (const contact of book.contacts) {
    console.log(contact);
  }
}
const book = new addressBook();
book.add("Ron", "ron@example.com", "12345", "family");
book.add("Rachel", "rachel@example.com", "45678", "family");
book.add("Kalynn", "kalynn@example.com", "89012", "family");
book.add("Sydney", "sydney@example.com", "24680", "Me");
// console.log(book);
// book.deleteAt(3);

// console.log(book);

print(book);

function display() {
  (document.querySelector("contact_list").innerHTML = ""),
    addressBook.contacts.forEach((contact, index) => {
      const newEntry = document.createElement("div");
      newEntry.classList.add("contact_box");
      newEntry.innerHTML = `
    <p>Name: ${contact.name}</p>
    <p>email: ${contact.email}</p>
    <p>phone: ${contact.phone}</p>
    <p>relation: ${contact.relation}</p>
    <i class="fa fa-trash" data-index-number="${index}"
    aria-hidden="true"</i>
    `;
      document.querySelector("#contact_list").appendChild(newEntry);
    });
}
display();

const form = document.querySelector("form");

form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefualt();
  constformData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}
document.querySelector("contact_list").addEventListener("click", deleteContact);

function deleteConatct(e) {
  if (e.target.classList.contains(fa - trash)) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    addressBook.deleteAt(index);
    display();
  }
}
