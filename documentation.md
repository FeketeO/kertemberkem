## **Kertemberkem**
---
---
## _**1. Főoldal és navigáció**_
---
**1. agile user story:**
> _Adminisztrátorként a főoldalon egy üdvözlő képernyő fogad a következő idézettel:._
>"A föld mosolyog a virágok között."  
                    Ralph Waldo Emerson

**Elfogadási kritérium:**  

Egy mobiloptimalizált, látványos háttérrel a fenti idézet olvasható.

---

**2. agile user story:**
> _A navigáció sávban a növényeknek, a mintakertek, kertészetek, növénygondozási útmutatók és szakemberek aloldalaira lehet navigálni._

**Elfogadási kritérium:**

- A Növények gombra kattintva az alkalmazás a növényeket bemutató aloldalra navigálva megjeleníti az összes felvitt növény adatbázisban tárolt adatait kártyás formában.
- A Mintakertek gombra kattintva az alkalmazás a mintakertek aloldalra navigálva megjeleníti a mintakertek adatbázisban tárolt adatait kártyás formában.
- A Kertészetek gombra kattintva az alkalmazás a Kertészetek aloldalra navigálva megjeleníti a kertészetek adatbázisban tárolt adatait listázva.
- A Növényápolás gombra kattintva az alkalmazás a növénygondozási útmutatók aloldalra navigálva megjeleníti a felvitt növénygondozási útmutatók adatbázisban tárolt adatait listázva.
- A Szakemberek gombra kattintva az alkalmazás a szakemberek aloldalra navigálva megjeleníti a felvitt szakemberek adatbázisban tárolt adatait listázva.

---
---
## _**2. Növények adatbázis**_
---
**1. agile user story:**
> _Adminisztrátorként egy helyen tekinthessem át és szerkeszthessem az adatbázisba felvitt növények adatait
> egy látványos, képes weboldalon._

**Elfogadási kritérium:**  
Az oldalra navigálva megjelenik az összes növény adata egy helyen.  
Ezek az adatok:
applikációban szereplő növények
> azonosító,  
> név,  
> latin név  
> lágyszárú/félcserje/cserje/fa,  
> egynyár/kétnyári/évelő,  
> nemes/vadvirág/gyom,  
> fűszer/gyógynövény/mérgező,    
> örökzöld,  
> fényigényes/árnyéktűrő/félárnyék,  
> savanyú/meszes/homokos/agyagos talajigény,  
> vízigényes/szárazságtűrő,  
> sziklakerti növény,  
> virágzó cserje,  
> talajtakaró,  
> kúszó,  
> alacsony/közepes/magas/óriás,  
> tavasz/nyár/ősz/tél virágzás,  
> fagyérzékeny,  
> Szín (fehér, lila, kék, sárga, rózsaszín, bordó, piros, vörös, ),  
> világos/sötét színű,
> álló/csüngő/bokros,  
> kép,   

**Elfogadási kritérium:**  
A Növények gombra való kattintással megjelenik az összes növény adata kártyás formátumban egy helyen. A Lista gombra kattintva a lista nézetre navigál az applikácó.

---
**2. agile user story:**
> _Az új növény gombra kattintva egy űrlap segítségével 
> új növény adatait vehetem fel és menthetem el az adatbázisban._

**Elfogadási kritérium:**  
- Az új növény gombra való kattintással egy új oldal nyílik meg, ahol egy új növény adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt mutató oldalra navigál vissza az alkalmazás.

---
**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a növény adatait szerkeszthetem és menthetem el az adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a növény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott növény adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes növényt tartalmazó oldalra navigál vissza az alkalmazás.

---
**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy növényt törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a növény bejegyzését az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt növény nem lesz látható.

---
**5. agile user story:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatom a növényeket._

**Elfogadási kritérium:**  
- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő rekordokat az adatbázisból, és listázza azokat.

---
**6. agile user story:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra kereshetek az adatbázisban a választott kategórián belül._

**Elfogadási kritérium:**  
- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő rekordokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**7. agile user story:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetem a szám típusú adatokat, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetem a szöveges adatokat._

**Elfogadási kritérium:**  
- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint a rekordokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint a rekordokat.

---

---
---
## _**3. A Kertemberkem aloldalai**_
---
---
**_Kertemberkem - Készítői/admin oldal_**

---
**1. agile user story:**
> _A Kertemberkem Növények aloldalra navigálva megjelennek az adatbázisban tárolt növények adatai._

**Elfogadási kritérium:**  
Az oldalra navigálva megjelenik az összes növény adata egy helyen.  
Ezek az adatok:
applikációban szereplő növények
> azonosító,  
> név,  
> latin név  
> lágyszárú/félcserje/cserje/fa,  
> egynyár/kétnyári/évelő,  
> nemes/vadvirág/gyom,  
> fűszer/gyógynövény/mérgező,    
> örökzöld,  
> fényigényes/árnyéktűrő/félárnyék,  
> savanyú/meszes/homokos/agyagos talajigény,  
> vízigényes/szárazságtűrő,  
> sziklakerti növény,  
> virágzó cserje,  
> talajtakaró,  
> kúszó,  
> alacsony/közepes/magas/óriás,  
> tavasz/nyár/ősz/tél virágzás,  
> fagyérzékeny,  
> Szín (fehér, lila, kék, sárga, rózsaszín, bordó, piros, vörös, ),  
> világos/sötét színű,
> álló/csüngő/bokros,  
> kép,   

**2. agile user story:**

> _Az új növény gombra kattintva egy űrlap segítségével 
> új mnövény adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az új növény gombra való kattintással egy új oldal nyílik meg, ahol egy új növény adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a növény adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a növény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott növény adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy növényt törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a növény rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt növény nem lesz látható.

---
**_Mintakertek oldal_**

---

**1. agile user story:**
> _Az alkalmazás a Mintakertek aloldalra navigálva már kész kertek jelennek meg - lehetőleg beszédes címmel.._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes mintakertet adatait kártyás formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- kép
- cím
- növények listája
- szöveges leírás
- url (a képregény marveles oldalára mutató link)

**2. agile user story:**
> _Az Új Mintakert gombra kattintva egy űrlap segítségével 
> új mintakert adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az új mintakert gombra való kattintással egy új oldal nyílik meg, ahol egy új mintakert adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a mintakert adatait szerkeszthetem és menthetem el az adatbázisban._

- Az Update gombra való kattintással a mintakert egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott mintakert adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes mintakertet tartalmazó oldalra navigál vissza az alkalmazás.

---
**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy növmintakertet törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a mintakert bejegyzését az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt mintakert nem lesz látható.

---
**_Kertészetek oldal_**

---
**1. agile user story:**
> _Az alkalmazás a Kertészetek aloldalra navigálva az elérhető kertészeteket jeleníti meg a készítő szerint fontos adatokkal._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes rendszerbe felvitt kertészet adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- name (név)
- address (cím)

---

**2. agile user story:**

> _Az Új kertészet gombra kattintva egy űrlap segítségével 
> új kertészet adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az új kertészet gombra való kattintással egy új oldal nyílik meg, ahol egy új kertészet adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kertészet adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a kertészet egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott kertészet adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy kertészetet törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a növény kertészet az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt kertészet nem lesz látható.
---
**_Növényápolás oldal_**

**1. agile user story:**
> _Az alkalmazás a _Növényápolás aloldalra navigálva a rendszerbe felvitt, főbb növénycsoportok gondozásáról, ápolásáról szóló bejegyzéseket jeleníti meg._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes listába felvett elérhető ápolási útmutató adatait lista formátumban. Ezek az adatok a következők: 
- id (azonosító)
- title (cím)
- url (a leírás oldalára mutató link)

---

**2. agile user story:**

> _Az Új útmutató gombra kattintva egy űrlap segítségével 
> új útmutató adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az új útmutató gombra való kattintással egy új oldal nyílik meg, ahol egy új útmutató adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a útmutató adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással az útmutató egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott útmutató adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy útmutatót törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a útmutató rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt útmutató nem lesz látható.
---
**Szakember oldal_**

---
> _Az alkalmazás a Szakember aloldalra navigálva a rendszerbe felvitt szakemberek adatbázisban tárolt adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes listába felvett elérhető ápolási útmutató adatait lista formátumban. Ezek az adatok a következők: 
- id (azonosító)
- fullName (név)
- picture (kép)
- url (a leírás oldalára mutató link)

---

**2. agile user story:**

> _Az Új Szakember gombra kattintva egy űrlap segítségével 
> új szakember adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az új szakember gombra való kattintással egy új oldal nyílik meg, ahol egy új szakember adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agile user story:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a szakember adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a szakember egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott szakember adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes növényt listázó oldalra navigál vissza az alkalmazás.

---

**4. agile user story:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy szakembert törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a szakember rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt szakember nem lesz látható.

## _A projekt egyéb adatai:_

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
10 hét

**További fejlesztési lehetőségek:**  
- Mintakertekben szereplő növények bekötése a növények oldalaira.
- Hibaüzenetek megjelenítése (validálás).
- A növényeket listázó aloldalon lapozó készítése.
