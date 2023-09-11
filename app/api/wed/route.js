import data from '../mo.json'
import { NextResponse } from 'next/server'

export async function GET() {
  //res.status(200).json(data);
    return NextResponse.json({ data })

  }