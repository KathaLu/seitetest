# Concept-based-Navigation-in-e-Portfolio
### Überblick
1. [Projektgruppe und Projekt](#projektgruppe-und-projekt)
2. [Voraussetzungen](#voraussetzungen)
3. [Technologien](#technologien)
4. [Vorgehen](#vorgehen)
5. [Kollaboratives Arbeiten](#kollaboratives-arbeiten)
6. [Schwierigkeiten & Lösungen](#schwierigkeiten-und-lösungen)
7. [Weitere Forschungsideen](#weitere-forschungsideen)
8. [Fazit](#fazit)
<br>

### Projektgruppe und Projekt
***
Hi 👋,  
wir sind Theresa Günther, Katharina Jahn, Michelle Payer und Sandra Schneider und bearbeiten gemeinsam die Aufgabe "Concept-based navigation in e-portfolios".

🔭 Unser Arbeitsauftrag und die Ziele lauten folgendermaßen:

<b>Aufgabenstellung</b>:
Entwicklung und Umsetzung eines Navigationskonzepts zur einfachen Ansteuerung und zum Durchlaufen von webbasierten E-Portfolios. Anhand einer existierenden Concept-Map kann interaktiv zwischen den darin enthaltenen Konzepten und passenden Passagen im E-Portfolio navigiert werden.

<b>Ziel</b>:
Unterstützung einer Concept-Map-basierten Navigation durch E-Portfolios.   
Beispiel: Alle Stellen, an denen das Konzept "Robotik" angesprochen wird, werden visuell hervorgehoben. Werden mehrere Stellen gefunden, kann von Stelle zu Stelle gesprungen werden.
Navigation soll in beide Richtungen funktionieren: 
- von der Concept Map zum Text in den E-Portfolios
- vom E-Portfolio zurück zur Concept Map
<br>

**Endprodukt:** 
  
  Highlighten (visuelle Hervorhebung) von bestimmten Begriffen/Konzepten in e-portfolios. Werden mehrere Stellen gefunden, kann durch einen Weiter-Button von Stelle zu Stelle gesprungen werden.
  
<br>

**Gesamtüberblick unserer Aufgaben und Ziele als Miroboard:** 
 
 https://miro.com/app/board/uXjVOc8n0i4=/
<br>
<br>

### Voraussetzungen
***
**Definitorische Abgrenzungen** 

<b>Concept-Map</b>:  
Unter Concept Maps versteht man zweidimensionale Strukturdarstellungen von Wissen oder Informationen in Form eines Netzwerkes. Das Netzwerk besteht aus Konzepten und Relationen.

<b>e-portfolio</b>: 
 
 Ein E - Portfolio ist eine Software mit verschiedenen Dokumenten und Datenarten (Texte, Grafiken, Töne, Videos). 

"E-Portfolios stellen eine digitale Form eines Portfolios dar, bei der das Repertoire der computergestützten und web-basierten Medien zur Umsetzung genutzt werden kann. Dazu können unter anderem Medienformen wie Blogs und Profilseiten verwendet werden. Zusätzlich lassen sich auch mit Hilfe von Hyperlinks Verknüpfungen zu anderen Materialien oder Web-Seiten, z.B. zu Seiten mit Referenzen oder auch zu Seiten anderer Lernender, einfügen. Darüber hinaus können auch Bilder, Filme und andere Medien direkt in das Portfolio eingebunden werden. Dennoch unterscheiden sich die e-Portfolios mehr durch ihre Form von klassischen Portfolios als durch die Inhalte." (Quelle: https://www.moopaed.de/moodle/pluginfile.php/579635/mod_resource/content/0/Handreichung%20zur%20Portfolioprüfung%20IT-3-V1.2.pdf)

Beispielhafte E-Portfolios, deren Navigation und Struktur wir als Orientierung und Grundlage für unser Projekt genutzt haben: 
- https://serdareviceportfolioit3.wordpress.com/
- https://alexandraseportfolioit3.wordpress.com/ 
- https://spournaraseportfolioit3.wordpress.com
<br>

**Weitere Projekte unserer Kohorte, welche für unser Projekt relevant waren bzw. welche als Voraussetzung für unser Projekt dienen:**  
 
 **Gruppe 5:** 
 
•D3-based visualisation of concept maps with import from concept 
map file format (CMapTools)

•A headless command-line tool (NodeJS, Python, ...)

•Use of automatic layouters

<br>

**Gruppe 8:**

•Zuordnen der Wörter aus dem Portfolio zu Kategorien 

•Die Wörter werden dann je nach Kategorie farblich hinterlegt 

•Beispiel: Wort "Location" und dann wird der Ort blau hinterlegt

<br>
<br>


### Technologien
***
Genutzte Technologien für unser Projekt (allgemein) in chronologischer Reihenfolge:
* [Zoom](https://zoom.us) 
* [GoogleDocs](https://www.google.de/intl/de/docs/about/)
* [Netlify](https://www.netlify.com)
* [CMapTools](https://cmap.ihmc.us/)  
* [Brackets](https://brackets.io/)
* [Atom](https://atom.io)
* [HTML](https://www.w3.org/html/)
* [CSS](https://www.w3schools.com/css/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Github](https://github.com/)
<br>
<br>

### Vorgehen
***
Im Folgenden zeigen wir unser zusammengefasstes Vorgehen der Gruppenarbeit und des Projekts.  
1. Auseinandersetzung mit dem Arbeitsauftrag
  - Klären der Ziele und Anforderungen 
  
2. Einarbeitung in die Grundlagen 
  - CMaps
  - e-portfolios
  - HTML & Java
  
3. Sammeln erster Ideen und Austausch über Vorschläge des Projekts 

4. Regelmäßige Gruppentreffen mit Austausch über: 
  - Erstellen eines e-Portfolios (Webseite) in HTML
  - Erstellen einer universellen CMap (in Cmap Tools) mit hierarchischer Struktur
  - Erstellung von Verknüpfung der Buttons, d.h klickbar machen und highlighten

 <br>
 
Im Folgenden zeigen wir unser detailliertes Vorgehen des Projekts. 

<b>Stand 08.12.2021</b>:
- Portfolios von Kommilitonen besorgen und vergleichen. 
  Schwerpunkt: Gibt es eine schnelle Möglichkeit zwischen den Portfolios zu wechseln und eine einheitliche Navigation? ✅
- Bewertungskriterien (Handreichung für Portfolios) anschauen ✅
- CMap Tool downloaden und einarbeiten ✅
- Wenn bestimmte Entscheidungen getroffen werden (Technologie) sollten diese dokumentiert werden und nachvollziehbar sein ✅

<b>Stand 28.01.2022</b>: 

Brainstorming Aufgaben: 
1. Framing Cmaps Export
2. HTML Single Page Darstellung 
3. Brücke darstellen → highlighten, wie kann ich wo klicken und wo anders navigieren

Daraus enstandene Aufgaben:
- in HTML Seite bestimmte Wörter markieren (statisch → Button einbauen → Button durch Interaktion ersetzen) (durch Buttonklicks unterschiedliche Wörter selektieren/   deselektieren) → unabhängig von Cmap ✅
- Portfolio als URL an Zwischenort speichern ✅
- Speicherung der Modelle bzw. Cmap als SVG Datei exportieren, selbst ne Website schreiben wo die drin ist und anklickbar machen 
- Verbindung miteinander (Buttons durch Cmap ersetzen) ✅

<b>Stand 18.02.2022</b>:
- einfache Cmap gestalten (in Cmap Tools) (universell: Oberthema 1, Oberthema 2 etc.) ✅
- Code von Cmap verstehen → welche Stelle ist wo, wo kann was eingefügt werden? → Id´s identifizieren → CXL Datei anschauen ✅
- Buttons erstellen ✅
- Springen innerhalb einer Seite durch Buttondruck mit Befehl "href id" einfügen ✅
- Buttons Highlighten ✅
- Bei Druck auf anderen Button highlight etc. von vorherigem Button entfernen und neu highlighten ✅

Darüberhinaus folgende Aufgaben:
→ beide Aufgabenbereiche zusammenfügen, kombinieren und testen ✅
→ kleines universelles Java Programm schreiben ✅

<b>Stand 16.03.2022</b>:
- Buttons klickbar ✅
- Suchwörter farblich unterlegt / highlighten ✅
- ReadMe-Datei anlegen ✅

<b>Stand 18.03.2022</b>:
- größere CMap erstellen (in Cmap Tools) (Scrollen) ✅
- ReadMe-Datei ausführlicher schreiben ✅

<b>Stand 31.03.2022</b>:
- Paragraph highlighten?  ✅
→ Ganzer Paragraph highlighten (In Portfolios sind die Paragraphen oft kürzer, oft 
     nur 2 Zeilen) 
→ Aus kompletten Paragraph können auch nur 2-3 Sätze gehighlightet werden 
    (wenn dies wichtige Sätze sind die zum Thema passen → logische Absätze) 
- Wichtig: Marker setzen aus dem die ID erkennbar ist → Welches Konzept?  ✅


<b>Stand 07.04.2022</b>:
- Usertest für unsere 2 Navigationsmöglichkeiten (Auflistung oder Weiter-Button) erstellen  ✅
-  ✅

<b>Stand 05.05.2022</b>:
-  ✅
-  ✅
<br>
<br>

### Kollaboratives Arbeiten
***
Im Folgenden nennen wir kurz unsere Tools zum kollaborativen Arbeiten.
1. **Zoom:**
Regelmäßige Gruppenarbeiten und Austausch über den aktuellen Stand bzw. Fortschritte.  
2. **Google Docs:**
Sammlung unserer Grundlagen, Ideen, Aufgabenverteilung und Mitschriften der Sprechstunden.  
2. **Slack:**
Kommunikation mit den Dozenten. 
3. **Github:**
Dokumentation des Projekts und gemeinsames sammeln der Ergebnisse.
4. **CMapTools Cloud:**
Online Austausch und Erstellung einer gemeinsamen CMap.
<br>

### Weitere Forschungsideen
***
Im Folgenden nennen wir unsere persönlichen Überlegungen für die Weiterarbeit mit unserem Projekt.
Hinweis: Diese Ideen sollen lediglich als Anregung dienen und stellen kein Muss dar!

<b>Weiterarbeit mit dem Portfolio an sich</b>:
1. Möglichkeit → Klicken im Portfolio an bestimmte Stelle und anschließendes Highlighten in der CMap an entsprechender Stelle
2. Möglichkeit → 

<b>Weiterarbeit für Dozierende</b>:
1. Möglichkeit → 
2. Möglichkeit → 

<b>Weiterarbeit für Studierende</b>:
1. Möglichkeit → Anstelle der Navigationsmöglichkeit mit dem "Weiter-Button" ein Programm für die Navigationsmöglichkeit "Auflistung" (s. Anhang - Usertest) schreiben
2. Möglichkeit → 

<br>
<br>

### Fazit
***
**Schwierigkeiten & Lösungen:**
- Eigene CMap von CMap-Tools speichern:  
CMap in CMap-Tools erstellen → Auf Datei mit Rechtsklick klicken → Speichern → unter Meine Cmaps gespeichert und kann bei Bedarf weiterbearbeitet werden.
Um CMap-Datei in einem neuen Format speichern zu wollen auf Datei klicken → Exportieren als und das gewünschte Dateiformat auswählen (z.B. PDF, JPEG, Web- seite, SVG etc.)

- Cmap für weitere Personen sichtbar machen / teilen bzw. zusammen an einer Cmap arbeiten: 
 über Cmap Cloud möglich (https://cmapcloud.ihmc.us/login.html). Hierfür muss eigene CMap im gewünschten Format gespeichert werden und dann in CMap-Cloud bei geteiltem Projekt hochgeladen werden. 
<br>
<br>

