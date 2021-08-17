## **Kertemberkem - Kerttervező**
---
---

## Az alkalmazás leírása

**Célja:**

Az alkalmazás feladata, hogy az adatbázisba bevitt növényekből kertterveket lehessen összeállítani, illetve fontosabb kertészeteket is megtalálják a felhasználók a körnéykükön.

**Technikai követelmények, előírások:**
- Az alkalmazás Angular-alapú, model-service-component architektúra jellemzi
- Az egyes service-eket egy base service szolgálja ki
- A dizájnért a Bootstrap, a Font Awesome, a CSS/SCSS és a jQuery felel
- MongoDB, NoSQL
- NodeJS API: saját API szolgálja ki a frontendet
- Minden API útvonalhoz egy unit teszt kapcsolódik
- Az API-hoz Swagger alapú dokumentáció tartozik
- A felület bizonyos oldalai csak belépés után elérhetőek (JWT autentikáció) 
- Adminisztrátori szerepkört leíró User Story a README.md-ben
- Markdown dokumentáció a documentaton.md-ben
- Az alkalmazás dockerizálva van, konténerből futtatható 

**Megjelenése:**

- Az alkalmazás egy oldalsvos navigációval rendelkezik, amelyen az egyes oldalak között lehet váltani, reszponzív.

---
---

## **Főbb részei:**

---
---
## _**1. Főoldal**_

**Komponens neve:** home  
**Komponens helye:** page/home

Egy mobiloptimalizált, felületen nagyban egy kert fotója látható, alatta egy carousel-ben még néhány megvalósítható ötlet.

_Megjegyzés_: Opcionálisan képek jelennek meg egy BS carousel komponensben.

---
---
## _**2. Navigáció**_

**Komponens neve:** navigation  
**Komponens helye:** common/navigation

Az egyes aloldalakra az Angular routing segítségével lehet navigálni egy BS navbar segítségével.

- A Users menügombra kattintva az alkalmazás a regisztrált felhasználókat listázó aloldalra navigálva megjeleníti az összes felhasználó adatbázisban tárolt adatait.
- A Plant menügombra kattintva az alkalmazás a regisztált növények adatbázisban tárolt adatait.
- A Sample Garden menügombra kattintva az alkalmazás a regisztált ültetési tervek, mintakertek adatbázisban tárolt adatait tartalmazó oldalra visz.
- A Users' Garden menügombra kattintva az alkalmazás a felhasználók által összegyűjtött növénylistákat adatbázisban tárolt adatait tartalmazó oldalra visz.
- A Stores menügombra kattintva az alkalmazás a regisztrált kerészetek tárolt adatait tartalmazó oldalra visz.


---
---
## _**3. Plant adatbázis**_
---

**Osztály neve:** plant
**Osztály helye:** model/plant

**Service neve:** plant.service
**Service helye:** service/plant.service

**Komponens neve:** plants.component
**Komponens helye:** page/plants.component

Az oldalon megjelenik az összes növény adata egy helyen.  

Ezek az adatok a következők:
- id 
- name (a növény neve)
- latin name (a növény latin neve)
- colour(a virág színe)
- waterDemand (a növény vízigénye)
- lightDemand (a növény fényigénye)
- soilDemand (a növény talajigénye)
- blooming (a virágzás ideje)
- lifeCycles (évelő, vagy egy/kétnyári)
- type (lágyszárú, vagy cserje, esetleg fa)
- toxic (a növény mérgező-e, vagy sem, vagy esetleg étezésre alkalmas)
- evergreen (a növény örökzöld, fél-örökzöld, vagy egyik sem)
- url (egy külső hivatkozás, vagy kép linkje)

---

**Create:**

> _Az Add New Plant gombra kattintva egy űrlap segítségével 
> új növény adatai vehetők fel és menthetők el az adatbázisban._

- A Add New Plant gombra való kattintással egy új oldal nyílik meg, ahol egy új növény adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.


---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott növény adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással az növény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott növény adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy növény törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a növény entitását az adatbázisból.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt növény nem lesz látható.

---
---
## _**4. Garden adatbázis**_
---

**Osztály neve:** garden
**Osztály helye:** model/garden

**Service neve:** plant.garden
**Service helye:** service/garden.service

**Komponens neve:** plants.component
**Komponens helye:** page/gardens.component

Az oldalon megjelenik az összes felhasználók által készített növénylista adata egy helyen.  

Ezek az adatok a következők:
- id 
- user (aki készítette, vagy akinek ajánlják)
- garden (a növények neve a felhasználó gyűjteményében, melyek nem biztos, hogy a Plant adatbázban is fenn vannak)
- note (hozzáadott jegyzzetek)

---

**Create:**

> _Az Add New Garden gombra kattintva egy űrlap segítségével 
> új garden adatai vehetők fel és menthetők el az adatbázisban._

- A Add New Garden gombra való kattintással egy új oldal nyílik meg, ahol egy új garden adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.


---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott garden adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással az garden egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott garden  adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy garden törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az garden entitását az adatbázisból.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt garden nem lesz látható.

---
## _**5. Sample Hortus adatbázis**_
---

**Osztály neve:** sampleHortus
**Osztály helye:** model/sampleHortus

**Service neve:** sample.service
**Service helye:** service/sample.service

**Komponens neve:** plants.component
**Komponens helye:** page/gardens.component

Az oldalon megjelenik a regisztrál mintakertek adatai egy helyen.  

Ezek az adatok a következők:
- id 
- név (a kert fantázianave, vagy elnevezése)
- plantList (a növények nevei, melyek nem biztos, hogy a Plant adatbázban is fenn vannak)
- note (hozzáadott jegyzzetek)
- url (link külső hivatkozáshoz ,vagy képhez)

---

**Create:**

> _Az Add New Sample Garden gombra kattintva egy űrlap segítségével 
> új sample garden adatai vehetők fel és menthetők el az adatbázisban._

- A Add New Sample Garden való kattintással egy új oldal nyílik meg, ahol egy új sample garden adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.


---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott sample  garden adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással a sample garden egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott sample  garden  adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy sample  garden törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a sample garden entitását az adatbázisból.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt sample nem lesz látható.

---
---
## _**6. Shop adatbázis**_
---

**Osztály neve:** Shop
**Osztály helye:** model/shop

**Service neve:** shop.service
**Service helye:** service/shop.service

**Komponens neve:** shops.component
**Komponens helye:** page/shops.component

Az oldalon megjelenik a regisztrál mintakertek adatai egy helyen.  

Ezek az adatok a következők:
- id 
- név (a bolt neve)
- city (a város, ahol a bolt található)
- address (a bolt pontos címe)
- url (link külső hivatkozáshoz ,vagy képhez)
- note (hozzáadott jegyzzetek)

---

**Create:**

> _Az Add New Store gombra kattintva egy űrlap segítségével 
> új bolt adatai vehetők fel és menthetők el az adatbázisban._

- A Add New Store való kattintással egy új oldal nyílik meg, ahol egy új bolt adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.


---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott bolt adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással a bolt egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott bolt adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy bolt törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a bolt entitását az adatbázisból.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt bolt nem lesz látható.

---
---
---
## _**7. User adatbázis**_
---

**Osztály neve:** User
**Osztály helye:** model/user

**Service neve:** user.service
**Service helye:** service/user.service

**Komponens neve:** user.component
**Komponens helye:** page/user.component

Az oldalon megjelenik a regisztrált felhasználók adatai egy helyen.  

Ezek az adatok a következők:
- id 
- firstName (keresztnév)
- lastName (családnév)
- email (email cím)
- password (jelszó)
- role (adott jogosultsági szint)
- accessToken (access token)

---

**Create:**

> _Az Add New User gombra kattintva egy űrlap segítségével 
> új felhasználó adatai vehetők fel és menthetők el az adatbázisban._

- A Add New User való kattintással egy új oldal nyílik meg, ahol egy új felhasználó adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.


---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott felhasználó adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással a bolt egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott felhasználó adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy felhasználó törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a felhasználó  entitását az adatbázisból.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt felhasználó  nem lesz látható.

---



## **További fejlesztési lehetőségek:**  
- Jogosultásgi körök meghatározása, az adott oldalak megtekintését jogosultsághoz lehetne kötni
- Hibaüzenetek megjelenítése (validálás).
- Toasterek a műveletek sikerességének visszajelzéséről.
- A mintakertekhez, és felhasználók kertjeihez csak olyan növényt lehessen hozzáadni, ami az adatbázisban már szerepel, ráklikelve az adatbáziban rendelkezésre álló adatlap jelenne meg. Ez feltételezi az adatbázis fejlesztését
- A növények adatbázisát kártyásan megjeleníteni, hogy egy kép is tartozzon az adatlaphoz, sokkal látványosabb lenne
- a növények ismérveinek kibővítése: fagyérzékenység, védettség, ültetési idő, lehetséges felhasználás, stb
- keresés elkészítése
- sorrendbe helyezés elkészítése
-boltok térképes megjelenítése
- 


## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/FeketeO/kertemberkem/blob/main/README.md)

- [A dokumentáció itt érhető el.](https://github.com/FeketeO/kertemberkem/blob/main/documentation.md)

- [A dokumentáció itt érhető el.](https://github.com/FeketeO/kertemberkem/blob/main/DEVELOPER_DOCUMENTATION.md)


