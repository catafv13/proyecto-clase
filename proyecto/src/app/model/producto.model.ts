export interface Producto{
    id: number
    nombre: string
    precio: number
    descripcion: string
    imagen: string
    disponible: boolean
    cantidad?: number
}