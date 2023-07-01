'use client';
import supabase from '@/utils/supabase';
import { useAuth } from '@clerk/nextjs';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
const search = async (searchFood: string) => {
  const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${searchFood}`;
  const options = {
    next: { revalidate: 60 },
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '103346cb27msh411ffdcbea4bd27p1b7e80jsnf31b146c3ba0',
      'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
    },
  };
  const searchResult: SearchResult[] = await fetch(url, options).then((res) =>
    res.json()
  );
  return searchResult;
};
export default async function SearchNinja({
  params: { searchFood },
}: SearchPageProps) {
  const router = useRouter();
  const { userId } = useAuth();
  const searchResult = await search(searchFood);
  const style =
    ' rounded-xl m-1 px-2 py-1 dark:text-white bg-neutral-400 dark:bg-neutral-700 items-center gap-x-2 flex';
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await supabase.from('userFood').insert({
      food: searchResult,
      user_id: userId,
    });
    router.push('/dashboard');
  };
  return (
    <>
      {searchResult.map((food: SearchResult) => (
        <div
          key={food.name}
          className="duration-300 rounded-3xl bg-neutral-300 dark:bg-neutral-600 m-4 p-2"
        >
          <p className="rounded-3xl font-bold bg-neutral-400 dark:bg-neutral-700 text-center capitalize">
            {food.name} 🧧
          </p>
          <p>🍕 Calories: {food.calories}</p>
          <p>🍽 Serving Size: {food.serving_size_g}g</p>
          <p>🥓 Total Fat: {food.fat_total_g}g</p>
          <p>🍔 Saturated Fat: {food.fat_saturated_g}g</p>
          <p>🥛 Protein: {food.protein_g}g</p>
          <p>🧀 Sodium: {food.sodium_mg}mg</p>
          <p>🍌 Potassium: {food.potassium_mg}mg</p>
          <p>🍖 Cholesterol: {food.cholesterol_mg}mg</p>
          <p>🍞 Total Carbohydrates: {food.carbohydrates_total_g}g</p>
          <p>🥜 Fiber: {food.fiber_g}g</p>
          <p>🍩 Sugar: {food.sugar_g}g</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <button className={style} type="submit">
          <ClipboardIcon className="h-6 w-6" />
          Save
        </button>
      </form>
    </>
  );
}
