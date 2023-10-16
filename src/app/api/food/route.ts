import { NextResponse } from 'next/server';
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
export async function GET(request: Request) {
  const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=milk`;
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
  return NextResponse.json(searchResult);
}
