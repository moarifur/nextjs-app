import React from 'react';
import {NextResponse} from "next/server";

export const GET = (req) => {
    return NextResponse.json([
        {id: 1, name: 'Mosh'},
        {id: 2, name: 'Arif'},
    ])
};
