"use strict";
var Eisdeale;
(function (Eisdeale) {
    window.addEventListener("load", handleLoad);
    let Zeichenflaeche;
    let smileyX = 600; // Startposition des Smileys
    let smileyY = 600;
    let isSmileyMoving = false;
    const standX = 225; // X-Position des Standes
    const standY = 135; // Y-Position des Standes
    let smileyRadius = 30;
    function handleLoad(_event) {
        let leinwand = document.querySelector("canvas");
        if (!leinwand)
            return;
        Zeichenflaeche = leinwand.getContext("2d");
        bildErstellen();
    }
    function bildErstellen() {
        const breite = Zeichenflaeche.canvas.width;
        const hoehe = Zeichenflaeche.canvas.height;
        Zeichenflaeche.fillStyle = "#ffffff";
        Zeichenflaeche.fillRect(0, 0, breite, hoehe);
        kunden(smileyX, smileyY, smileyRadius);
        stand();
        preis();
        theke();
        essBereich();
        // Bewegung des Smileys starten
        isSmileyMoving = true;
        moveSmileyToStand();
    }
    function moveSmileyToStand() {
        if (!isSmileyMoving)
            return;
        // Schrittweite
        const step = 2;
        // Bewegungsrichtung berechnen
        const dx = standX - smileyX;
        const dy = standY - smileyY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < step) {
            // Ziel erreicht
            smileyX = standX;
            smileyY = standY;
            isSmileyMoving = false;
            drawScene();
            return;
        }
        // Schritt in Richtung Ziel
        smileyX += (dx / distance) * step;
        smileyY += (dy / distance) * step;
        drawScene();
        requestAnimationFrame(moveSmileyToStand);
    }
    function drawScene() {
        const breite = Zeichenflaeche.canvas.width;
        const hoehe = Zeichenflaeche.canvas.height;
        Zeichenflaeche.clearRect(0, 0, breite, hoehe);
        Zeichenflaeche.fillStyle = "#ffffff";
        Zeichenflaeche.fillRect(0, 0, breite, hoehe);
        stand();
        preis();
        theke();
        essBereich();
        kunden(smileyX, smileyY, smileyRadius);
    }
    function kunden(x, y, radius) {
        // Kopf zeichnen
        Zeichenflaeche.beginPath();
        Zeichenflaeche.fillStyle = "#00FF00"; // Grüner Kopf
        Zeichenflaeche.arc(x, y, radius, 0, 2 * Math.PI);
        Zeichenflaeche.fill();
        Zeichenflaeche.stroke();
        // Sonnenbrille zeichnen
        const brilleRadius = radius / 4 + 2; // Größe der Brille
        // Brillenrahmen (schwarz)
        Zeichenflaeche.beginPath();
        Zeichenflaeche.fillStyle = "#000000"; // Farbe der Sonnenbrille
        // Linkes Glas
        Zeichenflaeche.arc(x - radius / 3, y - radius / 3, brilleRadius, 0, 2 * Math.PI);
        // Rechtes Glas
        Zeichenflaeche.arc(x + radius / 3, y - radius / 3, brilleRadius, 0, 2 * Math.PI);
        Zeichenflaeche.fill();
        // Halterungen der Sonnenbrille
        Zeichenflaeche.beginPath();
        Zeichenflaeche.strokeStyle = "#000000"; // Farbe der Halterungen
        // Linke Halterung
        Zeichenflaeche.moveTo(x - radius / 3 - brilleRadius, y - radius / 3);
        Zeichenflaeche.lineTo(x - radius / 4 - brilleRadius - 10, y - radius / 3);
        // Rechte Halterung
        Zeichenflaeche.moveTo(x + radius / 3 + brilleRadius, y - radius / 3);
        Zeichenflaeche.lineTo(x + radius / 4 + brilleRadius + 10, y - radius / 3);
        Zeichenflaeche.stroke();
        // Nase zeichnen (Strich mit Pfeil)
        const naseLänge = radius / 6;
        const naseX = x;
        const naseY = y; // Position in der Mitte des Gesichts
        Zeichenflaeche.beginPath();
        Zeichenflaeche.strokeStyle = "#000000"; // Farbe der Nase
        // Erster Teil der Nase (schräg)
        Zeichenflaeche.moveTo(naseX - naseLänge / 4, naseY - naseLänge / 2);
        Zeichenflaeche.lineTo(naseX + naseLänge / 4, naseY - naseLänge / 2 + naseLänge);
        // Zweiter Teil der Nase (gerade)
        Zeichenflaeche.moveTo(naseX + naseLänge / 4, naseY - naseLänge / 2 + naseLänge);
        Zeichenflaeche.lineTo(naseX + naseLänge / 4 + naseLänge / 4, naseY - naseLänge / 2 + naseLänge);
        Zeichenflaeche.stroke();
        // Mund zeichnen
        Zeichenflaeche.beginPath();
        Zeichenflaeche.strokeStyle = "#000000"; // Mundfarbe
        Zeichenflaeche.arc(x, y + radius / 3, radius / 2, 0, Math.PI); // Halbkreis für den Mund
        Zeichenflaeche.stroke();
    }
    function stand() {
        // Parameter für den Stand
        const standBreite = 400; // Breite des Standes
        const standHoehe = 200; // Höhe des Standes
        const schildX = 25; // X-Koordinate des Schildes
        const schildY = 25; // Y-Koordinate des Schildes
        // Zeichnen des Standes
        Zeichenflaeche.strokeStyle = "#0000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schildX, schildY);
        Zeichenflaeche.lineTo(schildX, schildY + standHoehe);
        Zeichenflaeche.lineTo(schildX + standBreite, schildY + standHoehe);
        Zeichenflaeche.lineTo(schildX + standBreite, schildY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd777";
        Zeichenflaeche.fill();
        // Zeichnen des Schildes oben im Stand
        const schildBreite = 400; // Breite des Schildes
        const schildHoehe = 50; // Höhe des Schildes
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schildX, schildY);
        Zeichenflaeche.lineTo(schildX, schildY + schildHoehe);
        Zeichenflaeche.lineTo(schildX + schildBreite, schildY + schildHoehe);
        Zeichenflaeche.lineTo(schildX + schildBreite, schildY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd777";
        Zeichenflaeche.fill();
        // Text im Schild einfügen
        const schildText = "Eisdealer";
        const schildTextX = schildX + schildBreite / 2;
        const schildTextY = schildY + schildHoehe / 2;
        Zeichenflaeche.font = "24px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(schildText, schildTextX, schildTextY);
        // Querstrich in der Mitte des Stand-Rechtecks, 50 Pixel höher (10 Pixel weiter runter verschoben)
        const strichY = schildY + schildHoehe + (standHoehe / 2) - 40; // 40 Pixel höher (50 - 10)
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schildX, strichY);
        Zeichenflaeche.lineTo(schildX + standBreite, strichY);
        Zeichenflaeche.strokeStyle = "#000000"; // Farbe für den Strich
        Zeichenflaeche.stroke();
        // Smiley zeichnen (Mitarbeiter) im Stand-Rechteck, 50 Pixel höher (10 Pixel weiter runter verschoben)
        const smileyRadius = 25; // Radius des Smileys
        const smileyX = schildX + standBreite / 2; // X-Koordinate des Smileys
        const smileyY = strichY - (smileyRadius + 5); // Y-Koordinate des Smileys, 40 Pixel höher (50 - 10)
        // Smiley-Kopf
        Zeichenflaeche.beginPath();
        Zeichenflaeche.arc(smileyX, smileyY, smileyRadius, 0, 2 * Math.PI);
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.stroke();
        // Augen des Smileys
        const augenRadius = 3;
        const augeXOffset = 10;
        const augeY = smileyY - 10; // Position der Augen auf der vertikalen Achse
        const augeLinksX = smileyX - augeXOffset;
        const augeRechtsX = smileyX + augeXOffset;
        // Linkes Auge
        Zeichenflaeche.beginPath();
        Zeichenflaeche.arc(augeLinksX, augeY, augenRadius, 0, 2 * Math.PI);
        Zeichenflaeche.fillStyle = "#000000";
        Zeichenflaeche.fill();
        // Rechtes Auge
        Zeichenflaeche.beginPath();
        Zeichenflaeche.arc(augeRechtsX, augeY, augenRadius, 0, 2 * Math.PI);
        Zeichenflaeche.fillStyle = "#000000";
        Zeichenflaeche.fill();
        // Mund des Smileys
        const mundRadius = 12;
        const mundY = smileyY + 10; // Position des Munds auf der vertikalen Achse
        Zeichenflaeche.beginPath();
        Zeichenflaeche.arc(smileyX, mundY, mundRadius, 0, Math.PI, false); // Halbkreis für den Mund
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.stroke();
        //Wartebereich
        const warteHoehe = 700;
        const warteY = 227;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schildX, warteY);
        Zeichenflaeche.lineTo(schildX, warteY + warteHoehe);
        Zeichenflaeche.lineTo(schildX + standBreite, warteY + warteHoehe);
        Zeichenflaeche.lineTo(schildX + standBreite, warteY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd666";
        Zeichenflaeche.fill();
        //Schlange
        Zeichenflaeche.strokeStyle = "f000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schildX + 125, warteY);
        Zeichenflaeche.lineTo(schildX + 125, 900);
        Zeichenflaeche.moveTo(schildX + 275, warteY);
        Zeichenflaeche.lineTo(schildX + 275, 900);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd777";
    }
    function preis() {
        const preisBreite = 200;
        const preisHoehe = 200;
        const preisX = 435;
        const preisY = 25;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(preisX, preisY);
        Zeichenflaeche.lineTo(preisX, preisY + preisHoehe);
        Zeichenflaeche.lineTo(preisX + preisBreite, preisY + preisHoehe);
        Zeichenflaeche.lineTo(preisX + preisBreite, preisY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd777";
        Zeichenflaeche.fill();
        //Preisschildtext
        const preisText = "1 Kugel 1€";
        const preisTextX = preisX + preisBreite / 2;
        const preisTextY = preisY + preisHoehe / 5;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(preisText, preisTextX, preisTextY);
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText("2 Kugeln 2€", preisTextX, preisTextY + 40);
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText("2 Kugeln 2,50€", preisTextX, preisTextY + 80);
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText("pro Topping = 0,5€ ", preisTextX, preisTextY + 120);
    }
    function theke() {
        const thekenBreite = 500;
        const thekenHoehe = 300;
        const thekeX = 900;
        const thekeY = 500;
        Zeichenflaeche.strokeStyle = "#ffd777";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(thekeX, thekeY);
        Zeichenflaeche.lineTo(thekeX, thekeY + thekenHoehe);
        Zeichenflaeche.lineTo(thekeX + thekenBreite, thekeY + thekenHoehe);
        Zeichenflaeche.lineTo(thekeX + thekenBreite, thekeY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#ffd777";
        Zeichenflaeche.fill();
        const fachBreite = 100;
        const fachHoehe = 100;
        //Vanille
        const vanilleX = thekeX + 50;
        const vanilleY = thekeY + 180;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(vanilleX, vanilleY);
        Zeichenflaeche.lineTo(vanilleX, vanilleY + fachHoehe);
        Zeichenflaeche.lineTo(vanilleX + fachBreite, vanilleY + fachHoehe);
        Zeichenflaeche.lineTo(vanilleX + fachBreite, vanilleY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#f7dd7a";
        Zeichenflaeche.fill();
        //Benennung der Sorte
        const vanilleText = "Vanille";
        const vanilleTextX = vanilleX + fachBreite - 50;
        const vanilleTextY = vanilleY + fachHoehe - 110;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(vanilleText, vanilleTextX, vanilleTextY);
        //Stracciatella 
        const stracciatellaX = vanilleX + 150;
        const stracciatellaY = vanilleY;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(stracciatellaX, stracciatellaY);
        Zeichenflaeche.lineTo(stracciatellaX, stracciatellaY + fachHoehe);
        Zeichenflaeche.lineTo(stracciatellaX + fachBreite, stracciatellaY + fachHoehe);
        Zeichenflaeche.lineTo(stracciatellaX + fachBreite, stracciatellaY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        // Stracciatella-Muster
        const musterCanvas = document.createElement('canvas');
        musterCanvas.width = 10;
        musterCanvas.height = 10;
        const musterContext = musterCanvas.getContext('2d');
        if (musterContext) {
            // Hintergrund weiß
            musterContext.fillStyle = "#FFFFFF";
            musterContext.fillRect(0, 0, musterCanvas.width, musterCanvas.height);
            // Schwarze Punkte
            musterContext.fillStyle = "#000000";
            musterContext.beginPath();
            musterContext.arc(3, 3, 2, 0, 2 * Math.PI);
            musterContext.fill();
            musterContext.beginPath();
            musterContext.arc(7, 7, 2, 0, 2 * Math.PI);
            musterContext.fill();
            musterContext.beginPath();
            musterContext.arc(3, 7, 2, 0, 2 * Math.PI);
            musterContext.fill();
            musterContext.beginPath();
            musterContext.arc(7, 3, 2, 0, 2 * Math.PI);
            musterContext.fill();
        }
        // Erstellen und Anwenden des Patterns
        const stracciatellaPattern = Zeichenflaeche.createPattern(musterCanvas, 'repeat');
        Zeichenflaeche.fillStyle = stracciatellaPattern;
        Zeichenflaeche.fillRect(stracciatellaX, stracciatellaY, fachBreite, fachHoehe);
        //Benennung der Sorte
        const stracciatellaText = "Stracciatella";
        const stracciatellaTextX = stracciatellaX + fachBreite - 50;
        const stracciatellaTextY = stracciatellaY + fachHoehe - 110;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(stracciatellaText, stracciatellaTextX, stracciatellaTextY);
        //Haselnuss
        const haselnussX = stracciatellaX + 150;
        const haselnussY = stracciatellaY;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(haselnussX, haselnussY);
        Zeichenflaeche.lineTo(haselnussX, haselnussY + fachHoehe);
        Zeichenflaeche.lineTo(haselnussX + fachBreite, haselnussY + fachHoehe);
        Zeichenflaeche.lineTo(haselnussX + fachBreite, haselnussY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#aa3a29";
        Zeichenflaeche.fill();
        //Benennung der Sorte
        const haselnussText = "Haselnuss";
        const haselnussTextX = haselnussX + fachBreite - 50;
        const haselnussTextY = haselnussY + fachHoehe - 110;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(haselnussText, haselnussTextX, haselnussTextY);
        // Topping-Fach
        const toppingHoehe = fachHoehe / 1.5;
        const toppingBreite = fachBreite / 1.3;
        //Schokosauce
        const schokoX = thekeX + 61;
        const schokoY = thekeY + 50;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(schokoX, schokoY);
        Zeichenflaeche.lineTo(schokoX, schokoY + toppingHoehe);
        Zeichenflaeche.lineTo(schokoX + toppingBreite, schokoY + toppingHoehe);
        Zeichenflaeche.lineTo(schokoX + toppingBreite, schokoY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#5b3a29";
        Zeichenflaeche.fill();
        //Benennung der Sorte
        const schokoText = "Schoko-Sauce";
        const schokoTextX = schokoX + toppingBreite - 35;
        const schokoTextY = schokoY + toppingHoehe - 80;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(schokoText, schokoTextX, schokoTextY);
        //Kirschen
        const kirschenX = schokoX + 297;
        const kirschenY = schokoY;
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(kirschenX, kirschenY);
        Zeichenflaeche.lineTo(kirschenX, kirschenY + toppingHoehe);
        Zeichenflaeche.lineTo(kirschenX + toppingBreite, kirschenY + toppingHoehe);
        Zeichenflaeche.lineTo(kirschenX + toppingBreite, kirschenY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#b14459";
        Zeichenflaeche.fill();
        //Benennung der Sorte
        const kirscheText = "Kirschen";
        const kirscheTextX = kirschenX + toppingBreite - 38;
        const kirscheTextY = kirschenY + toppingHoehe - 80;
        Zeichenflaeche.font = "20px Arial";
        Zeichenflaeche.textAlign = "center";
        Zeichenflaeche.textBaseline = "middle";
        Zeichenflaeche.fillStyle = "#000000"; // Textfarbe setzen
        Zeichenflaeche.fillText(kirscheText, kirscheTextX, kirscheTextY);
    }
    function essBereich() {
        const essBreite = 700;
        const essHoehe = 400;
        const essX = 750;
        const essY = 0;
        Zeichenflaeche.strokeStyle = "#525257";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(essX, essY);
        Zeichenflaeche.lineTo(essX, essY + essHoehe);
        Zeichenflaeche.lineTo(essX + essBreite, essY + essHoehe);
        Zeichenflaeche.lineTo(essX + essBreite, essY);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#525257";
        Zeichenflaeche.fill();
        // Tisch-Parameter
        const tischBreite = 70;
        const tischHoehe = 70;
        const tische = [
            { x: 900, y: 95 },
            { x: 1100, y: 95 },
            { x: 1300, y: 95 },
            { x: 800, y: 250 },
            { x: 1000, y: 250 },
            { x: 1200, y: 250 }
        ];
        // Tische zeichnen
        tische.forEach(tisch => {
            zeichneTisch(tisch.x, tisch.y, tischBreite, tischHoehe);
        });
    }
    function zeichneTisch(x, y, breite, hoehe) {
        Zeichenflaeche.strokeStyle = "#000000";
        Zeichenflaeche.beginPath();
        Zeichenflaeche.moveTo(x, y);
        Zeichenflaeche.lineTo(x, y + hoehe);
        Zeichenflaeche.lineTo(x + breite, y + hoehe);
        Zeichenflaeche.lineTo(x + breite, y);
        Zeichenflaeche.closePath();
        Zeichenflaeche.stroke();
        Zeichenflaeche.fillStyle = "#000000";
        Zeichenflaeche.fill();
    }
})(Eisdeale || (Eisdeale = {}));
//# sourceMappingURL=eisdeale.js.map