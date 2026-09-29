import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Rex', tipo: 'Perro' },
    { id: 2, nombre: 'Misi', tipo: 'Gato' },
    { id: 3, nombre: 'Lolo', tipo: 'Pajaro' },
  ];

  findAll() {
    return this.mascotas;
  }

  findOne(id: number) {
    return this.mascotas.find(m => m.id === id);
  }
}
