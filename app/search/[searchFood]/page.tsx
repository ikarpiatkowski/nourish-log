const search = async (searchFood: string) => {
  const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${searchFood}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '103346cb27msh411ffdcbea4bd27p1b7e80jsnf31b146c3ba0',
      'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
    },
  };
  const response: SearchResult = await fetch(url, options);
  const result = await response.text();
  const resultJson = JSON.parse(result);
  return resultJson;
};
export default async function SearchResult({
  params: { searchFood },
}: SearchPageProps) {
  const searchResult = await search(searchFood);
  return (
    <div>
      {searchResult.map((food: SearchResult) => (
        <div key={food.name}>
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
    </div>
  );
}
