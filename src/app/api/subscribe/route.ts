import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // 将邮箱保存到 Supabase
    const { error } = await supabase
      .from('subscribers')
      .insert([
        { 
          email,
          subscribed_at: new Date().toISOString()
        }
      ])

    if (error) {
      // 如果是唯一性约束错误，返回友好的消息
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'You are already subscribed!' },
          { status: 400 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 