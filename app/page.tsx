import { createClient } from '@supabase/supabase-js';
export const revalidate = 0;
export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase.from('food').select('food_noutrition');
  const supadata = JSON.stringify(data);
  const supadataparse = JSON.parse(supadata);
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gray-900">
        <pre>
          {supadataparse.map((food: any) => (
            <div key={food.name} className="bg-gray-800 m-4 p-2">
              {food.food_noutrition[0].name}
              <p>Calories: {food.food_noutrition[0].calories}</p>
              <p>Serving Size: {food.food_noutrition[0].serving_size_g}g</p>
              <p>Total Fat: {food.food_noutrition[0].fat_total_g}g</p>
              <p>Saturated Fat: {food.food_noutrition[0].fat_saturated_g}g</p>
              <p>Protein: {food.food_noutrition[0].protein_g}g</p>
              <p>Sodium: {food.food_noutrition[0].sodium_mg}mg</p>
              <p>Potassium: {food.food_noutrition[0].potassium_mg}mg</p>
              <p>Cholesterol: {food.food_noutrition[0].cholesterol_mg}mg</p>
              <p>
                Total Carbohydrates:
                {food.food_noutrition[0].carbohydrates_total_g}g
              </p>
              <p>Fiber: {food.food_noutrition[0].fiber_g}g</p>
              <p>Sugar: {food.food_noutrition[0].sugar_g}g</p>
            </div>
          ))}
        </pre>
      </main>
    </>
  );
}
