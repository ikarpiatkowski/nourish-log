import supabase from '@utils/supabase';
export const metadata = {
  title: 'Nourish Log - Food',
};
export default async function FoodPage() {
  const { data } = await supabase.from('food').select('food_noutrition');
  return (
    <>
      <main className="bg-gray-900 h-screen">
        <div className="flex flex-row flex-wrap">
          {data!.map((food: any) => (
            <div key={food.name} className="rounded-3xl bg-indigo-700 m-4 p-2">
              <p className="font-bold text-center capitalize">
                {food.food_noutrition[0].name} 🧧
              </p>
              <p>🍕 Calories: {food.food_noutrition[0].calories}</p>
              <p>🍽 Serving Size: {food.food_noutrition[0].serving_size_g}g</p>
              <p>🥓 Total Fat: {food.food_noutrition[0].fat_total_g}g</p>
              <p>
                🍔 Saturated Fat: {food.food_noutrition[0].fat_saturated_g}g
              </p>
              <p>🥛 Protein: {food.food_noutrition[0].protein_g}g</p>
              <p>🧀 Sodium: {food.food_noutrition[0].sodium_mg}mg</p>
              <p>🍌 Potassium: {food.food_noutrition[0].potassium_mg}mg</p>
              <p>🍖 Cholesterol: {food.food_noutrition[0].cholesterol_mg}mg</p>
              <p>
                🍞 Total Carbohydrates:
                {food.food_noutrition[0].carbohydrates_total_g}g
              </p>
              <p>🥜 Fiber: {food.food_noutrition[0].fiber_g}g</p>
              <p>🍩 Sugar: {food.food_noutrition[0].sugar_g}g</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
