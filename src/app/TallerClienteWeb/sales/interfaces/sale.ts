import { ProductDetail } from "./product-detail";

export interface Sale {
    id: number;
    fechaVenta: string;
    precioTotal: number;
    usuario: string;
    productos: ProductDetail[];
}
