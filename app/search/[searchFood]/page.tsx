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
  return result;
};
export default async function SearchResult({
  params: { searchFood },
}: SearchPageProps) {
  const searchResult = await search(searchFood);
  return (
    <div className="flex flex-col p-64 items-center justify-center w-full h-screen">
      {searchResult}
    </div>
  );
}
