import {NextResponse} from "next/server";
import schema from "../schema";
import {products} from "../products";

// GET method with parameters
export const GET = (req, { params }) => {
    const { id } = params;
    if (id) {
        const product = products.find(p => p.id === parseInt(id));
        if (product)
            return NextResponse.json(product);
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(products)
}

// PUT method with parameters
export async function PUT (request, { params }) {
    const { id } = params;
    const body = await request.json();
    const index = products.findIndex(p => p.id === parseInt(id));
    const validation = schema.safeParse(body);
    if (index !== -1) {
        if (!validation.success)
            return NextResponse.json(validation.error.errors, { status: 400 });
        products[index] = {
            id: parseInt(id),
            name: body.name,
            price: body.price,
        };
        return NextResponse.json(products[index]);
    }
    else
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
}

// DELETE method with parameters
export const DELETE = (request, { params }) => {
    const { id } = params;
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        return NextResponse.json(deletedProduct[0]);
    } else {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
}