import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura' },
    { id: 2, titulo: 'Hogwarts Legacy', genero: 'Aventura' },
    { id: 3, titulo: 'Mario Kart 8 Deluxe', genero: 'Carreras' },
    { id: 4, titulo: 'Los Sims 4', genero: 'Simulacion' }
  ];

  findAll(genero?: string) {
    if (!genero) return this.juegos;
    return this.juegos.filter(j => j.genero === genero);
  }
}
