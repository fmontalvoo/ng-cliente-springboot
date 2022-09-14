export class CustomError extends Error {
  constructor(mensaje: string, datos_erroneos: string[], ...params: any[]) {
    // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
    super(...params)

    this.name = 'CustomError'
    // Información de depuración personalizada
    this.message = mensaje;
    datos_erroneos[0] = `*${datos_erroneos[0]}`;
    this.stack = datos_erroneos.join('\n*');

  }
}
