import supabase from '@/utils/supabase';
export const metadata = {
  title: 'Nourish Log - Food',
};
type SearchResult = {
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
};
type FoodData = {
  food_noutrition: SearchResult[];
};
export default async function FoodPage() {
  const { data } = await supabase.from('food').select('food_noutrition');
  return (
    <>
      <main className="flex flex-col flex-wrap items-center h-full">
        <div className="flex flex-row flex-wrap">
          {data!.map((foodData: FoodData) => (
            <div
              key={foodData.food_noutrition[0].name}
              className="rounded-3xl bg-neutral-300 dark:bg-neutral-600 m-4 p-2 w-64"
            >
              <p className="rounded-3xl font-bold bg-neutral-400 dark:bg-neutral-700 text-center capitalize">
                {foodData.food_noutrition[0].name} 🧧
              </p>
              <p>🍕 Calories: {foodData.food_noutrition[0].calories}</p>
              <p>
                🍽 Serving Size: {foodData.food_noutrition[0].serving_size_g}g
              </p>
              <p>🥓 Total Fat: {foodData.food_noutrition[0].fat_total_g}g</p>
              <p>
                🍔 Saturated Fat: {foodData.food_noutrition[0].fat_saturated_g}g
              </p>
              <p>🥛 Protein: {foodData.food_noutrition[0].protein_g}g</p>
              <p>🧀 Sodium: {foodData.food_noutrition[0].sodium_mg}mg</p>
              <p>🍌 Potassium: {foodData.food_noutrition[0].potassium_mg}mg</p>
              <p>
                🍖 Cholesterol: {foodData.food_noutrition[0].cholesterol_mg}mg
              </p>
              <p>
                🍞 Total Carbohydrates:
                {foodData.food_noutrition[0].carbohydrates_total_g}g
              </p>
              <p>🥜 Fiber: {foodData.food_noutrition[0].fiber_g}g</p>
              <p>🍩 Sugar: {foodData.food_noutrition[0].sugar_g}g</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
