export interface Producto{
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    disponibilidad: boolean;
    cantidad?: number;
    marca: string;
    categoria: string;
}