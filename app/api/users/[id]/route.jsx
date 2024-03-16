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
