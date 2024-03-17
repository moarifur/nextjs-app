import {NextResponse} from "next/server";

/*------------------------ Getting a collection of objects -----------------------
TODO: Fetch data from a db but here we hard coded data
------------------------------------------------------------------------------ */
export const GET = (req) => {
    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'Arif'},
    ])
};

/*----------------------------- Creating an object ------------------------------
TODO-01:  To create an user, we need to -
                (1) Send a request to the user endpoint
                (2) Include an user object in the body of the request

TODO-02:  Once we read the body of the request -
                (1) Validate data
                (2) If invalid data, return error code 400
                (3) Else return the data has been created
------------------------------------------------------------------------------ */
// TODO-01: (1) Send a request to the user endpoint
export async function POST(request) {
    // TODO-01: (2) Include an user object in the body of the request
    const body = await request.json()

    // Reference: creating an object 01.png
    // return NextResponse.json(body)
    // Reference: creating an object 02.png
    // return NextResponse.json({ id: 1, name: body.name })

    // TODO-02: (1) Validate data
    if (!body.name)
        // TODO-02: (2) If invalid data, return error code 400
        // Reference: creating an object 03.png
        return NextResponse.json({ error: 'Name is required' }, {status: 400})
    // TODO-02: (3) Else return the data has been created
    // Reference: creating an object 04.png
    return NextResponse.json({ id: 1, name: body.name }, {status: 201})
}

