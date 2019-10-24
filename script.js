class addressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let human = new Contact(name, email, phone, relation);
    this.contacts.push(human);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
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
book.add("Grant", "grant@example.com", "12345", "boss");
book.add("charlene", "charlene@example.com", "45678", "boss");
book.add("Mitch", "mitch@example.com", "89012", "boss");
book.add("Sydney", "sydney@example.com", "24680", "boss");
// console.log(book);
// book.deleteAt(3);

// console.log(book);

print(book);
