import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase.from('food').select('food_noutrition');
  return NextResponse.json(data);
}
