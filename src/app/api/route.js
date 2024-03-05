import { NextResponse } from "next/server";

// export async function GET(){
//     return NextResponse.json({status: true, message: "From Get response"})
// }

// export async function POST(){
//     return NextResponse.json({status: true, message: "From POST response"})
// }


export async function GET(req, res){
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id');
    const category = searchParams.get('name');
    const price = searchParams.get('price');
    return NextResponse.json({status: true, message: {id, category, price }});
}


export async function POST(req, res){
    // Search Params
    // const {searchParams} = new URL(req.url);
    // const id = searchParams.get('id');
    // const category = searchParams.get('name');
    // const price = searchParams.get('price');
    // return NextResponse.json({status: true, message: {id, category, price }});

    const jsonBody = req.json();
    let name = jsonBody['name'];
    let profession = jsonBody['profession'];
    let city = jsonBody['city'];
    return NextResponse.json({name,profession, city})
}