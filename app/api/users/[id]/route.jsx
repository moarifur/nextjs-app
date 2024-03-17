import { NextResponse } from "next/server"

/*---------------------------- Getting a single object ---------------------------
TODO: (1) Fetch data by a rule
           (2) If not found, return 404 error
           (3) Else return data
------------------------------------------------------------------------------ */
export function GET(request, { params }) {
    // TODO: (1) Fetch data by a rule
    if(params.id > 10)
        // TODO: (2) If not found, return 404 error
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    // TODO: (3) Else return data
    return NextResponse.json({ id: 1, name: 'Arif' }, { status: 201 })
}

/*----------------------------- Updating an object ------------------------------
TODO-01:  To update an user, we need to -
                (1) Send a request to the user endpoint
                (2) Include an user object in the body of the request

TODO-02:  Once we read the body of the request -
                (1) Validate  the request body
                (2) If invalid data, return error code 400
                (3) Fetch the user with the given id
                (4) If id doesn't exist, return error code 404
                (5) Else update the user  and return the updated user
------------------------------------------------------------------------------ */
// TODO-01:  (1) Send a request to the user endpoint
export async function PUT(request, { params }) {
    // TODO-01:  (2) Include an user object in the body of the request
    const body = await request.json()
    //  TODO-02:  (1) Validate  the request body
    if (!body.name)
        // updating an object 02.png
        //  TODO-02:  (2) If invalid data, return error code 400
        return NextResponse.json({error: "Name is required"}, {status: 400})
    //  TODO-02:  (3) Fetch the user with the given id
    if (params.id > 10)
        // updating an object 03.png
        //  TODO-02:  (4) If id doesn't exist, return error code 404
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    // updating an object 01.png
    //  TODO-02:  (5) Else update the user  and return the updated user
    return NextResponse.json({id: 1, name: body.name})
}
