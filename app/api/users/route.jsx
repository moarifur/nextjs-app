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
