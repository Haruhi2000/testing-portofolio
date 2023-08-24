const persons = [];

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        // 1. Tambahkan di constructor untuk set value gender
    }

    setTitle() {
        (this.gender === "L") ? this.name = `Tuan ${this.name}` : this.name = `Nyonya ${this.name}`;
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
    }
    static find(name) {
        return persons.find(item => item.name = name)
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    } 
}

const person1 = new Person("Bilal", "L");
person1.setTitle();
const person2 = new Person("Angel", "P");
person2.setTitle();
// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 

persons.push(person1);
persons.push(person2);
// 4. setiap object person nya ditambahkan ke array object persons

console.log("List Array Person : ");
console.log(persons);
// 5. tampilkan object persons.

const personFind = Person.find("Bilal", "L");
console.log("Hasil Pencarian dengan inputan nama : ");
console.log(personFind);
// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.