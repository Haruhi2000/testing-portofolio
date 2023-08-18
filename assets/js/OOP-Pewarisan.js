class Kendaraan {
    constructor(merk, tahunProduksi) {
        this.merk = merk;
        this.tahunProduksi = tahunProduksi;
    }

    hitungUsia() {
        const tahunSekarang = new Date().getFullYear();
        return tahunSekarang - this.tahunProduksi;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, tahunProduksi) {
        super(merk, tahunProduksi);
    }

    infoUsia () {
        console.log(`Mobil dengan merk ${this.merk} merupakan mobil berumur ${this.hitungUsia()}`)
    }
}

class Motor extends Kendaraan {
    constructor(merk, tahunProduksi){
        super(merk, tahunProduksi);
    }

    infoUsia () {
        console.log(`Motor dengan merk ${this.merk} merupakan mobil berumur ${this.hitungUsia()}`)
    }
}

const agya = new Mobil("Toyota", 2015)
agya.infoUsia();
const nmax = new Motor("Yamaha", 2018)
nmax.infoUsia();