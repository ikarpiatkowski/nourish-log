'use client';
import { useAuth } from '@clerk/nextjs';
import supabase from '@utils/supabase';
import { useState } from 'react';
export default async function UserFood() {
  const [datePicker, setDatePicker] = useState('2023-06-21');
  const { userId } = useAuth();
  const { data } = await supabase
    .from('userFood')
    .select('food')
    .eq('user_id', userId)
    .eq('created_at', datePicker);
  return (
    <>
      <input
        className="p-5 m-5"
        type="date"
        onChange={(e) => setDatePicker(e.target.value)}
      />
      <div className="flex flex-wrap">
        {data!.map((f: any) => (
          <div
            key={f.food[0].name}
            className="rounded-3xl bg-neutral-300 dark:bg-neutral-600 m-4 p-2 w-64"
          >
            <p className="rounded-3xl bg-neutral-400 dark:bg-neutral-700 font-bold text-center capitalize">
              {f.food[0].name} 🧧
            </p>
            <p>🍕 Calories: {f.food[0].calories}</p>
            <p>🍽 Serving Size: {f.food[0].serving_size_g}g</p>
            <p>🥓 Total Fat: {f.food[0].fat_total_g}g</p>
            <p>🍔 Saturated Fat: {f.food[0].fat_saturated_g}g</p>
            <p>🥛 Protein: {f.food[0].protein_g}g</p>
            <p>🧀 Sodium: {f.food[0].sodium_mg}mg</p>
            <p>🍌 Potassium: {f.food[0].potassium_mg}mg</p>
            <p>🍖 Cholesterol: {f.food[0].cholesterol_mg}mg</p>
            <p>
              🍞 Total Carbohydrates:
              {f.food[0].carbohydrates_total_g}g
            </p>
            <p>🥜 Fiber: {f.food[0].fiber_g}g</p>
            <p>🍩 Sugar: {f.food[0].sugar_g}g</p>
          </div>
        ))}
      </div>
    </>
  );
}
