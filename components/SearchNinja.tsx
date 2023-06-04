import { createClient } from '@supabase/supabase-js';
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
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const searchResult = await search(searchFood);
  const { data, error } = await supabase
    .from('food')
    .insert({ food_noutrition: searchResult });
  return (
    <>
      {searchResult.map((food: SearchResult) => (
        <div key={food.name} className="bg-gray-800 m-4 p-2">
          {food.name}
          <p>Calories: {food.calories}</p>
          <p>Serving Size: {food.serving_size_g}g</p>
          <p>Total Fat: {food.fat_total_g}g</p>
          <p>Saturated Fat: {food.fat_saturated_g}g</p>
          <p>Protein: {food.protein_g}g</p>
          <p>Sodium: {food.sodium_mg}mg</p>
          <p>Potassium: {food.potassium_mg}mg</p>
          <p>Cholesterol: {food.cholesterol_mg}mg</p>
          <p>Total Carbohydrates: {food.carbohydrates_total_g}g</p>
          <p>Fiber: {food.fiber_g}g</p>
          <p>Sugar: {food.sugar_g}g</p>
        </div>
      ))}
    </>
  );
}
