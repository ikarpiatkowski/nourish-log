import supabase from '@/utils/supabase';
import { Progress } from '@/components/ui/progress';
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
  food: SearchResult[];
};
export default async function ServerSearch({
  params: { userId, datePicker },
}: any) {
  let totalCalories = 0;
  let totalFat = 0;
  let totalProtein = 0;
  let totalCarbohydrates = 0;
  let totalFiber = 0;
  const { data } = await supabase
    .from('userFood')
    .select('food')
    .eq('user_id', userId)
    .eq('created_at', datePicker);
  return (
    <>
      {data!.forEach((foodData: FoodData) => {
        totalCalories += foodData.food[0].calories;
        totalFat += foodData.food[0].fat_total_g;
        totalProtein += foodData.food[0].protein_g;
        totalCarbohydrates += foodData.food[0].carbohydrates_total_g;
        totalFiber += foodData.food[0].fiber_g;
      })}
      <main className="flex p-4">
        <div className="flex flex-col w-44 p-4">
          {`Calories ${parseFloat(((totalCalories / 2000) * 100).toFixed(0))}%`}
          <Progress className="mt-4" value={(totalCalories / 2000) * 100} />
        </div>
        <div className="flex flex-col w-44 p-4">
          {`Fat ${parseFloat(((totalFat / 80) * 100).toFixed(0))}%`}
          <Progress className="mt-4" value={(totalFat / 80) * 100} />
        </div>
        <div className="flex flex-col w-44 p-4">
          {`Protein ${parseFloat(((totalProtein / 100) * 100).toFixed(0))}%`}
          <Progress className="mt-4" value={(totalProtein / 100) * 100} />
        </div>
        <div className="flex flex-col w-44 p-4">
          {`Carbs ${parseFloat(
            ((totalCarbohydrates / 180) * 100).toFixed(0)
          )}%`}
          <Progress className="mt-4" value={(totalCarbohydrates / 180) * 100} />
        </div>
        <div className="flex flex-col w-44 p-4">
          {`Fiber ${parseFloat(((totalFiber / 20) * 100).toFixed(0))}%`}
          <Progress className="mt-4" value={(totalFiber / 20) * 100} />
        </div>
      </main>
      <div className="flex flex-wrap">
        {data!.map((foodData: FoodData) => (
          <div
            key={foodData.food[0].name}
            className="rounded-3xl bg-slate-300 dark:bg-slate-600 m-4 p-2 w-64"
          >
            <p className="rounded-3xl bg-slate-400 dark:bg-slate-800 font-bold text-center capitalize">
              {foodData.food[0].name} 🧧
            </p>
            <p>🍕 Calories: {foodData.food[0].calories}</p>
            <p>🍽 Serving Size: {foodData.food[0].serving_size_g}g</p>
            <p>🥓 Total Fat: {foodData.food[0].fat_total_g}g</p>
            <p>🍔 Saturated Fat: {foodData.food[0].fat_saturated_g}g</p>
            <p>🥛 Protein: {foodData.food[0].protein_g}g</p>
            <p>🧀 Sodium: {foodData.food[0].sodium_mg}mg</p>
            <p>🍌 Potassium: {foodData.food[0].potassium_mg}mg</p>
            <p>🍖 Cholesterol: {foodData.food[0].cholesterol_mg}mg</p>
            <p>
              🍞 Total Carbohydrates:
              {foodData.food[0].carbohydrates_total_g}g
            </p>
            <p>🥜 Fiber: {foodData.food[0].fiber_g}g</p>
            <p>🍩 Sugar: {foodData.food[0].sugar_g}g</p>
          </div>
        ))}
      </div>
    </>
  );
}
