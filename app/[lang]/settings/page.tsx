export const metadata = {
  title: 'Nourish Log - Settings',
};
export default function SettingsPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        Fat
        <div className="w-40 bg-gray-200 rounded-full h-4 dark:bg-gray-700 m-4">
          <div className="bg-blue-600 h-4 rounded-full w-3/4 text-center leading-none text-xs font-medium">
            75%
          </div>
        </div>
        Carbohydrates
        <div className="w-40 bg-gray-200 rounded-full h-4 dark:bg-gray-700 m-4">
          <div className="bg-red-600 h-4 rounded-full w-1/4 text-center leading-none text-xs font-medium">
            25%
          </div>
        </div>
        Sugar
        <div className="w-40 bg-gray-200 rounded-full h-4 dark:bg-gray-700 m-4">
          <div className="bg-green-600 h-4 rounded-full w-3/5 text-center leading-none text-xs font-medium">
            60%
          </div>
        </div>
        Fiber
        <div className="w-40 bg-gray-200 rounded-full h-4 dark:bg-gray-700 m-4">
          <div className="bg-yellow-400 h-4 rounded-full w-5/12 text-center leading-none text-xs font-medium">
            42%
          </div>
        </div>
        Protein
        <div className="w-40 bg-gray-200 rounded-full h-4 dark:bg-gray-700 m-4">
          <div className="bg-purple-600 h-4 rounded-full w-11/12 text-center leading-none text-xs font-medium">
            92%
          </div>
        </div>
        <div className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400">
          XD
        </div>
        <progress
          className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400"
          value={66}
          max={100}
        ></progress>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Red
          </span>
        </label>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Green
          </span>
        </label>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Purple
          </span>
        </label>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yellow
          </span>
        </label>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Teal
          </span>
        </label>
        <label className="relative inline-flex items-center m-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Orange
          </span>
        </label>
        <div className="flex items-center justify-center">
          <div className="w-36 h-36 bg-red-600 rounded-full"></div>
          <div className="w-24 h-24 bg-red-500 rounded-full"></div>
          <div className="w-12 h-12 bg-red-400 rounded-full"></div>
        </div>
        <div className="text-lg w-40 h-40 font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono">
          404
        </div>
        <div className="h-20 w-20 relative">
          <div className="h-20 w-20 border-2 rounded-full">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
