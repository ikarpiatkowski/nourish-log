export default async function Food() {
  const url =
    'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=cheese';
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '103346cb27msh411ffdcbea4bd27p1b7e80jsnf31b146c3ba0',
      'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div className="p-10 bg-indigo-700 m-2 shadow-lg">
        {result.map((r: any) => (
          <p key={r.name}>
            Food: {r.name} <br />
            Calories: {r.calories} <br />
            Serving: {r.serving_size_g} <br />
            Fat: {r.fat_total_g} <br />
            Fat Saturated: {r.fat_saturated_g} <br />
            Protein: {r.protein_g} <br />
            Sodium: {r.sodium_mg} <br />
            Potassium: {r.potassium_mg} <br />
            Cholesterol: {r.cholesterol_mg} <br />
            Carbohydrates: {r.carbohydrates_total_g} <br />
            Fiber: {r.fiber_g} <br />
            Sugar: {r.sugar_g} <br />
          </p>
        ))}
      </div>
    </main>
  );
}
