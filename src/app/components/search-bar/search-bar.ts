import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faMagnifyingGlass, 
  faEye, 
  faCar, 
  faGaugeHigh, 
  faWarehouse, 
  faRotateLeft 
} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements OnInit {
  // Icônes FontAwesome pour l'interface
  faMagnifyingGlass = faMagnifyingGlass;
  faEye = faEye;
  faCar = faCar;
  faGaugeHigh = faGaugeHigh;
  faWarehouse = faWarehouse;
  faRotateLeft = faRotateLeft;


  @Input() autos: Auto[] = [];

  @Output() selectAutoEvent = new EventEmitter<Auto>();

  searchBrand: string = '';
  selectedAutos: Auto[] = [];

  currentSelectedId: number | null = null;

  availableBrands: string[] = [
    'Toutes',
    'Mercedes Benz',
    'BMW',
    'Audi',
    'Jaguar',
    'Land Rover',
    'Alfa Romeo'
  ];

  ngOnInit(): void {
    this.selectedAutos = this.autos;
  }

  searchAutoList(): void {
    const term = this.searchBrand.trim().toLowerCase();

    if (!term) {
      this.selectedAutos = this.autos;
    } else {
      this.selectedAutos = this.autos.filter(car =>
        car.brand.toLowerCase().includes(term) ||
        car.model.toLowerCase().includes(term)
      );
    }
  }

  filterByBrand(brand: string): void {
    if (brand === 'Toutes') {
      this.searchBrand = '';
    } else {
      this.searchBrand = brand;
    }
    this.searchAutoList();
  }

  resetSearch(): void {
    this.searchBrand = '';
    this.selectedAutos = this.autos;
  }

  selectedAuto(auto: Auto): void {
    this.currentSelectedId = auto.id;
    this.selectAutoEvent.emit(auto);
  }
}
