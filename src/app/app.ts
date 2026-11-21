import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBar } from './components/head-bar/head-bar';
import { SearchBar } from './components/search-bar/search-bar';
import { Auto } from './interfaces/auto';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedAuto: Auto | null = null;

  updateAuto(auto: Auto): void {
    this.selectedAuto = auto;
  }


  closeDetails(): void {
    this.selectedAuto = null;
  }


  autoList: Auto[] = [
    {     
      id: 1,
      brand: "Mercedes Benz",
      model: "C-CLASS",
      price: 230,
      power: 9,
      photo: "CLASS-C.webp",
      availability: 4,
      description: "La Mercedes-Benz Classe C est une gamme de berlines compactes de prestige, réputée pour allier une esthétique sportive à un habitacle haute technologie. Elle propose des équipements de pointe comme le cockpit numérique et une hybridation légère favorisant efficacité et dynamisme."
    },
    {
      id: 2,
      brand: "Mercedes Benz",
      model: "GLA",
      price: 203,
      power: 8,
      photo: "GLA.webp",
      availability: 4,
      description: "Le Mercedes-Benz GLA est un SUV compact haut de gamme, développé sur la plateforme de la Classe A. Doté de technologies modernes et d'un confort supérieur, il constitue le SUV le plus compact et agile de la gamme Mercedes."
    },
    {
      id: 3,
      brand: "Mercedes Benz",
      model: "GLE",
      price: 450,
      power: 17,
      photo: "GLE.webp",
      availability: 4,
      description: "Le Mercedes-Benz GLE est un SUV prestigieux réputé pour son alliance unique de sportivité et de confort luxueux. Spacieux et doté d'innovations technologiques de premier plan, il incarne l'élégance et la polyvalence avec des motorisations d'exception."
    },
    {
      id: 4,
      brand: "Jaguar",
      model: "F-Pace",
      price: 399,
      power: 16,
      photo: "FPACE.webp",
      availability: 4,
      description: "Le Jaguar F-PACE est un SUV de luxe associant performance et raffinement. Son intérieur redessiné offre un espace généreux et haut de gamme, équipé du système multimédia tactile Pivi Pro de 11,4 pouces et de matériaux d'exception."
    },
    {
      id: 5,
      brand: "Jaguar",
      model: "E-PACE",
      price: 350,
      power: 12,
      photo: "EPACE.webp",
      availability: 4,
      description: "Le Jaguar E-PACE est un SUV compact qui marie lignes sportives et modernité technologique. Il se distingue par un poste de conduite orienté vers le conducteur, une finition soignée et une expérience de conduite dynamique."
    },
    {
      id: 6,
      brand: "Audi",
      model: "Q3 CROSSBACK",
      price: 230,
      power: 9,
      photo: "Q3.webp",
      availability: 3,
      description: "L'Audi Q3 Sportback est un SUV compact au profil de coupé alliant allure sportive et praticité. Il se démarque par sa silhouette dynamique, son habitacle technologique et son coffre modulable pour une utilisation quotidienne élégante."
    },
    {
      id: 7,
      brand: "Audi",
      model: "Q5",
      price: 350,
      power: 16,
      photo: "Q5.webp",
      availability: 3,
      description: "L'Audi Q5 est un SUV de prestige combinant puissance, technologie et confort d'exception. Il se distingue par sa calandre emblématique, sa transmission intégrale quattro et ses projecteurs LED modernes."
    },
    {
      id: 8,
      brand: "Audi",
      model: "A3 SPORTBACK",
      price: 145,
      power: 8,
      photo: "A3.webp",
      availability: 3,
      description: "L'Audi A3 Sportback est une berline compacte premium reconnue pour sa ligne athlétique et son intérieur connecté. Elle offre un cockpit virtuel intuitif et un confort de conduite remarquable avec des finitions de haute qualité."
    },
    {
      id: 9,
      brand: "BMW",
      model: "X2 SDRIVE PACK",
      price: 245,
      power: 8,
      photo: "X2.webp",
      availability: 3,
      description: "Le BMW X2 sDrive Pack allie un design M Sport affûté à des suspensions dynamiques et des projecteurs LED adaptatifs. Son style affirmé offre une tenue de route sportive et un grand confort."
    },
    {
      id: 10,
      brand: "BMW",
      model: "IX",
      price: 432,
      power: 11,
      photo: "IX.webp",
      availability: 3,
      description: "La BMW iX est un SUV de luxe 100 % électrique au design avant-gardiste. Son habitacle épuré et spacieux intègre les technologies les plus évoluées d'aide à la conduite pour une autonomie remarquable."
    },
    {
      id: 11,
      brand: "BMW",
      model: "X3 HYBRIDE",
      price: 355,
      power: 11,
      photo: "X3.webp",
      availability: 3,
      description: "Le BMW X3 Hybride rechargeable combine un moteur thermique efficient et un moteur électrique performant. Son habitacle spacieux avec écran incurvé BMW offre confort et polyvalence au quotidien."
    },
    {
      id: 12,
      brand: "Land Rover",
      model: "Range Rover Evoque",
      price: 340,
      power: 9,
      photo: "EVOQUE.webp",
      availability: 4,
      description: "Le Range Rover Evoque est un SUV compact de grand luxe aux lignes épurées et sophistiquées. Ses finitions en cuir haut de gamme et ses phares Pixel LED lui confèrent une élégance intemporelle."
    },
    {
      id: 13,
      brand: "Land Rover",
      model: "Defender 90",
      price: 398,
      power: 21,
      photo: "DEFENDER.webp",
      availability: 4,
      description: "Le Land Rover Defender 90 est un baroudeur légendaire aux capacités tout-terrain exceptionnelles. Il allie une robustesse iconique à un intérieur contemporain et confortable."
    },
    {
      id: 14,
      brand: "Land Rover",
      model: "Range Rover",
      price: 702,
      power: 24,
      photo: "RANGE.webp",
      availability: 4,
      description: "Le Range Rover est la référence ultime des SUV de luxe, associant prestige incomparable, technologies de pointe et capacités tout-terrain hors pair pour un voyage en première classe."
    },
    {
      id: 15,
      brand: "Alfa Romeo",
      model: "Stelvio",
      price: 268,
      power: 18,
      photo: "STELVIO.webp",
      availability: 11,
      description: "L'Alfa Romeo Stelvio est un SUV dynamique et raffiné au design italien distinctif. Sa répartition des masses idéale et ses motorisations vigoureuses procurent un plaisir de conduite intense."
    },
    {
      id: 16,
      brand: "Alfa Romeo",
      model: "Giulia",
      price: 198,
      power: 18,
      photo: "GIULIA.webp",
      availability: 11,
      description: "L'Alfa Romeo Giulia est une berline sportive élégante et performante. Avec sa direction ultra-précise, son combiné numérique moderne et son allure féline, elle incarne la passion automobile italienne."
    }
  ];
}
