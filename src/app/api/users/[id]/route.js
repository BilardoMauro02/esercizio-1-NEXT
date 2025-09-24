import { NextResponse } from "next/server";

export async function GET(request, {params}) {

    const {id} = await Promise.resolve(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return NextResponse.json(user);

};
