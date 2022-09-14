export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  createdAt: Date | string;
}

export type ClienteGuardar = Omit<Cliente, 'id' | 'createdAt'>;

export type ClienteLeer = Readonly<Cliente>;

// export class Cliente {
//   private _id: number;
//   private _nombre: string;
//   private _apellido: string;
//   private _email: string;
//   private _createdAt: Date;

//   constructor(id: number, nombre: string, apellido: string, email: string, createdAt: Date) {
//     this._id = id;
//     this._nombre = nombre;
//     this._apellido = apellido;
//     this._email = email;
//     this._createdAt = createdAt;
//   }


//   get id(): number {
//     return this._id;
//   }

//   set id(id: number) {
//     this._id = id;
//   }

//   get nombre(): string {
//     return this._nombre;
//   }

//   set nombre(nombre: string) {
//     this._nombre = nombre;
//   }

//   get apellido(): string {
//     return this._apellido;
//   }

//   set apellido(apellido: string) {
//     this._apellido = apellido;
//   }

//   get email(): string {
//     return this._email;
//   }

//   set email(email: string) {
//     this._email = email;
//   }

//   get createdAt(): Date {
//     return this._createdAt;
//   }

//   set createdAt(createdAt: Date) {
//     this._createdAt = createdAt;
//   }
// }
