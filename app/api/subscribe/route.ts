import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.retool.com/v1/workflows/a9d888b7-923b-4bf6-98e4-dee231cdc8c6/startTrigger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Workflow-Api-Key': 'retool_wk_bdb5c77eafff4ffb9faff276286a9961'
      },
      body: JSON.stringify({
        data: {
          email: email
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Retool API error:', errorData)
      throw new Error('Failed to process subscription')
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed'
    })

  } catch (error: any) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to subscribe. Please try again later.'
      },
      { status: 500 }
    )
  }
}