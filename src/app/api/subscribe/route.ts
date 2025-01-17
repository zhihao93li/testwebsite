import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
    
    if (error) throw error
    
    return NextResponse.json({ message: 'Subscribed successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 