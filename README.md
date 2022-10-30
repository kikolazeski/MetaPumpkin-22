# MetaPumpkin-22

[FrontEnd (iOS App, Android App, Webseite)](https://github.com/Cybarose/frontend-fitXchange/tree/main) \
[BackEnd (NodeJs Express, MySQL)](https://github.com/gogamid/backend-fitXchange/tree/main) \
[Konzept Webseite](https://metapumpkin22.neocities.org/index.html)

# Running
## Frontend
Android Studio/VS Code with Flutter/Dart/Emulator
## Backend
VS Code/MySQLWorkbench with Firebase

## Use Cases/Features/Requirements
1. Partner vereine können Kurse anbieten mit Voraussetzungen (Hart - Schwimmkurs Vorhanden / Soft - Fitnes level selbsteinschätzung)
2. Nutzter können die angebotene Kurse buchen
3. Nutzter haben Accounts mit Voraussetzungen
4. Nutzter sollen sich anmelden mit email und passwort
5. Nutzter können Kurse in deren Feed Suchen
6. Nutzter können Kurse Filtern (Organisation, Sportart, Kultur, Alter, Erfahrung, Entfernung, Zeit)
7. Nutzter können von ein oder mehrere Termine abtretten
8. Ein zweiter Nutzter kann abgegebene Termine annehmen und % bezahlen
9. Nutzter können QR codes generieren die die Voraussetzungen und belegte Kurse beinhalten 
10. Die Trainer (Partner Vereine) können vor start vom Termin QR codes scannen um zu sehen wer alles da ist der auch da sein darf und damit wird die Überweisung durchgemacht
11. Mit jede Erscheinung zu ein Termin bekommt jeder Nutzter ein Badge als teilgenommen
12. Je mehr Badges um so ne größere Priorität hat ein Nutzte zur Belegung von Kurse
13. Nutzter bekommt Pushbenachrichtigung mindestens 2 Stunden (Nutzter/Verein-min/max-deffiniert) um zu sagen ob man kommt oder nicht.
14. Nutzter kann im Voraus sagen ob er da ist oder nicht
15. Nutzter können sowohl ein ganzen Kurs, als auch Einzeltermine. Im beiden fällen kann ein Termin freigegeben werden
16. Die Bezahlung geschiet pro Termin
17. Die Bezahlung geschiet in die mindest Zeit vor Termin beginn
18. Falls ein weiterer Nutzter kommt (Ausversehen geclickt) kann mittels ein QR code ein Einzelltermin zugeteilt werden
19. Die Bezahlung wird mit ein Lastschriftmandat durchgefürt
21. So können Last minute plätze zur Buchung freigegeben werden
22. Nutzter können Kurse bewerten
23. Nutzter und Vereine können Social media Accounts verlinken
24. Trainer können Nutztervoraussetzungen ergänzen
25. Trainer können bestimmte Nutzter ausschliesen
26. Nutzter können Kurse Blockieren
27. Nutzter können eine .ics datei exportieren für deren Kalendar
28. Nutzter können eine Liste sehen von die belegten Kurse 
29. Nutzter können sehen welche Badges die haben (ie welche Kurse die schon belegt haben)
30. Nutzter können in eine Liste sehen was noch abgebucht wird (Lastschrift-mandat/buchung Liste)
31. Per Lastschrift bekommen wir als Unternehmen 2%
32. Geschäftsmodell: Revenue Sharing / Pay by use
33. Partner vereine haben höhere Kontos
34. Partner nachweisen, der von uns validiert wird (ie es gibt Angebote falls man irgendwo arbeitet)
35. 

## Entitäten:
    1. User
    2. Kurse (User hat Kurse)
    3. Termin (Kurse haben Termine)
    4. Organisation (Kurse haben Organisation)
    5. Trainer 
    6. Mandate
    7. Zahlung
    8. Buchung (Termine können gebucht werden von Nutzter)(Zahlung, Mandat, User, Termin)
