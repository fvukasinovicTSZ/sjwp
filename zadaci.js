class Korisnik {
    constructor(ime, email) {
        this.ime = ime;
        this.email = email;
    }

    prikaziDetalje() {
        console.log(`Ime: ${this.ime}, Email: ${this.email}`);
    }
}

class Admin extends Korisnik {
    obrisiKorisnika(korisnik) {
        console.log(`Admin ${this.ime} je obrisao korisnika ${korisnik.ime}`);
    }
}

class RegularKorisnik extends Korisnik {
    promijeniLozinku() {
        console.log(`${this.ime} je promijenio lozinku`);
    }
}

const admin = new Admin('Marko', 'marko@admin.com');
const korisnik = new RegularKorisnik('Ana', 'ana@user.com');
admin.prikaziDetalje();
korisnik.prikaziDetalje();
admin.obrisiKorisnika(korisnik);



class Proizvod {
    constructor(naziv, cijena) {
        this.naziv = naziv;
        this.cijena = cijena;
    }

    prikaziDetalje() {
        console.log(`${this.naziv} - ${this.cijena} EUR`);
    }
}

class PopustProizvod extends Proizvod {
    constructor(naziv, cijena, popust) {
        super(naziv, cijena);
        this.popust = popust;
    }

    prikaziDetalje() {
        const novaCijena = this.cijena - (this.cijena * this.popust / 100);
        console.log(`${this.naziv} - ${novaCijena} EUR (popust ${this.popust}%)`);
    }
}

const proizvod1 = new Proizvod('Laptop', 1000);
const proizvod2 = new PopustProizvod('Mobitel', 500, 20);
proizvod1.prikaziDetalje();
proizvod2.prikaziDetalje();



class Oblik {
    constructor(sirina, visina) {
        this.sirina = sirina;
        this.visina = visina;
    }

    nacrtaj() {
        console.log('Crtam osnovni oblik');
    }
}

class Krug extends Oblik {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.radius = radius;
    }

    nacrtaj() {
        const div = document.createElement('div');
        div.style.width = this.radius * 2 + 'px';
        div.style.height = this.radius * 2 + 'px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = 'blue';
        div.style.margin = '10px';
        document.body.appendChild(div);
    }
}

class Pravokutnik extends Oblik {
    nacrtaj() {
        const div = document.createElement('div');
        div.style.width = this.sirina + 'px';
        div.style.height = this.visina + 'px';
        div.style.backgroundColor = 'red';
        div.style.margin = '10px';
        document.body.appendChild(div);
    }
}

const krug = new Krug(50);
const pravokutnik = new Pravokutnik(100, 60);
krug.nacrtaj();
pravokutnik.nacrtaj();



class ElementStranice {
    constructor(element) {
        this.element = element;
    }

    dodajDogadjaj(event, callback) {
        this.element.addEventListener(event, callback);
    }
}

class Dugme extends ElementStranice {
    promijeniTekst(noviTekst) {
        this.element.textContent = noviTekst;
    }
}

const button = document.createElement('button');
button.textContent = 'Klikni me';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.margin = '10px';
document.body.appendChild(button);

const dugme = new Dugme(button);
dugme.dodajDogadjaj('click', () => {
    dugme.promijeniTekst('Kliknuto!');
});



class Navigacija {
    constructor(linkovi) {
        this.linkovi = linkovi;
    }

    generiraj() {
        const nav = document.createElement('nav');
        nav.style.backgroundColor = '#333';
        nav.style.padding = '10px';

        this.linkovi.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.tekst;
            a.style.color = 'white';
            a.style.padding = '10px 15px';
            a.style.textDecoration = 'none';
            a.style.display = 'inline-block';
            nav.appendChild(a);
        });

        document.body.appendChild(nav);
    }
}

class DinamicnaNavigacija extends Navigacija {
    generiraj() {
        const nav = document.createElement('nav');
        nav.style.backgroundColor = '#333';
        nav.style.padding = '10px';

        this.linkovi.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.tekst;
            a.style.color = 'white';
            a.style.padding = '10px 15px';
            a.style.textDecoration = 'none';
            a.style.display = 'inline-block';
            a.style.transition = 'background-color 0.3s';

            a.addEventListener('mouseenter', () => {
                a.style.backgroundColor = '#555';
            });
            a.addEventListener('mouseleave', () => {
                a.style.backgroundColor = 'transparent';
            });

            nav.appendChild(a);
        });

        document.body.appendChild(nav);
    }
}

const linkovi = [
    { tekst: 'Početna', url: '#' },
    { tekst: 'O nama', url: '#' },
    { tekst: 'Kontakt', url: '#' }
];

const navigacija = new DinamicnaNavigacija(linkovi);
navigacija.generiraj();

class Autentifikacija {
    constructor(korisnickoIme, lozinka) {
        this.korisnickoIme = korisnickoIme;
        this.lozinka = lozinka;
        this.prijavljen = false;
    }

    prijava() {
        this.prijavljen = true;
        console.log(`${this.korisnickoIme} je prijavljen.`);
    }

    odjava() {
        this.prijavljen = false;
        console.log(`${this.korisnickoIme} je odjavljen.`);
    }
}

class OAuthAutentifikacija extends Autentifikacija {
    prijava() {
        this.prijavljen = true;
        console.log(`Prijavljen putem OAuth: ${this.korisnickoIme}.`);
    }
}

class Korisnik {
    constructor(tipPristupa) {
        this.tipPristupa = tipPristupa;
    }

    pristupiStranici() {
        console.log("Pristup odobren.");
    }
}

class AdminKorisnik extends Korisnik {
    pristupiStranici() {
        console.log("Administrator: Pristup odobren.");
    }
}

class RegularniKorisnik extends Korisnik {
    pristupiStranici() {
        if (this.tipPristupa === "dozvoljeno") {
            console.log("Pristup odobren.");
        } else {
            console.log("Pristup odbijen.");
        }
    }
}
