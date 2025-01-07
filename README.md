# React + Vite
LINK do strony: https://zeneksolufka.github.io/hex-colors/
Dokumentacja projektu What The Hex
1. Opis projektu
What The Hex to aplikacja internetowa zbudowana w oparciu o framework React. Umożliwia użytkownikom:

-Wprowadzanie kodów HEX w celu wyświetlenia odpowiadającego im koloru.
-Wybieranie kolorów za pomocą palety kolorów.
-Przeglądanie historii wprowadzonych kolorów wraz z ich nazwami i kodami HEX.
Technologie i frameworki:
-React: Framework do budowania dynamicznych interfejsów użytkownika.
-react-scripts: Narzędzie CLI do zarządzania projektem React.
-chroma-js: Biblioteka do pracy z kolorami.
-color-name-list: Lista nazw kolorów HEX.

2. Architektura projektu
a. Struktura komponentów:
Aplikacja jest podzielona na modularne komponenty:

-App.jsx: Główny komponent aplikacji, zarządza stanem i koordynuje interakcję między komponentami.
-InputForm.jsx: Odpowiada za wprowadzanie kodów HEX i wybór kolorów z palety.
-ColorDisplay.jsx: Wyświetla szczegóły wybranego koloru (HEX, RGB, nazwa, zmienne CSS/SCSS/LESS).
-History.jsx: Przechowuje i wyświetla historię wybranych kolorów.
b. Stan aplikacji:
Stan globalny zarządzany jest przy użyciu hooka useState. Komponent App przechowuje:

-Obecnie wybrany kolor.
-Listę zapisanych kolorów w historii.

3. Użyte narzędzia i funkcjonalności
a. Generatory komponentów:
Komponenty były tworzone ręcznie z użyciem wzorców React. W projekcie można zautomatyzować ten proces za pomocą CLI, np. npx create-react-app.

b. Routery kierujące ruchem HTTP:
Aplikacja nie korzysta obecnie z routerów. Jeśli wymagane byłoby dodanie wielostronicowości, można użyć react-router-dom.

c. Szablony HTML:
Szablony HTML generowane są dynamicznie w React za pomocą JSX. Przykład:

jsx
Skopiuj kod
<div className="color-display">
  <div className="color-preview" style={{ backgroundColor: hex }}></div>
  <h2>{name || 'Unknown Color'}</h2>
</div>
d. Współpraca z REST API:
Aplikacja nie korzysta z REST API. Można by dodać API np. do pobierania aktualnych trendów kolorystycznych.

e. Zarządzanie kolorami:
-chroma-js: Służy do walidacji kodów HEX oraz konwersji kolorów na różne formaty (RGB, CSS itp.).
-color-name-list: Pozwala dopasować nazwę koloru do wprowadzonego kodu HEX.

4. Problemy napotkane podczas pracy i ich rozwiązanie
Problem 1: Obsługa błędnych kodów HEX
Opis: Użytkownik mógł wpisać niepoprawny kod HEX, co powodowało błędy w aplikacji.
Rozwiązanie: Dodano walidację kodu HEX w InputForm.jsx:

javascript
Skopiuj kod
const hexPattern = /^#[0-9A-Fa-f]{6}$/;
if (!hexPattern.test(inputValue)) {
  setError('Invalid hex code. Please try again.');
  return;
}
Problem 2: Zarządzanie dużą liczbą kolorów w historii
Opis: Przy wielu wpisanych kolorach historia wychodziła poza ekran.
Rozwiązanie: Dodano przewijanie z ograniczeniem wysokości sekcji History:

5. Propozycje dalszego rozwoju
a. Funkcjonalności:
Eksport historii kolorów: Możliwość zapisu historii do pliku CSV.
Współpraca z API: Dodanie integracji z API generującym palety kolorów na podstawie wybranego HEX.
Udostępnianie kolorów: Możliwość kopiowania szczegółów koloru do schowka lub udostępnienia w mediach społecznościowych.
b. Inne propozycje:
Aplikacje inżynierskie: Rozszerzenie aplikacji o funkcję analizy kolorów w obrazach przesyłanych przez użytkowników.
Projekty edukacyjne: Tworzenie quizów o teorii kolorów, np. dopasowanie RGB do nazwy koloru.

6. Podsumowanie
Aplikacja What The Hex jest solidną podstawą do pracy z kolorami w środowisku webowym. Została zbudowana w oparciu o React i rozszerzona o dodatkowe narzędzia, takie jak chroma-js. Dokumentacja może służyć jako punkt wyjścia do dalszych prac nad projektem.
