import { Weather } from "../hooks/useWather"
import { formatTemperature } from "../utils"

type WeatherDetailProps = {
  weather: Weather
}

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div className="flex flex-col h-auto text-white p-10 bg-slate-800 justify-center items-center rounded-lg shadow-2xl w-full max-w-full">
      <h2 className="text-3xl font-bold">Clima de: {weather.name} 🌅 </h2>
      <p className="text-2xl font-semibold my-8">
        
        Temperatura Actual: {""}
        <span className="font-bold text-green-500">{formatTemperature(weather.main.temp)}&deg;C</span>
      </p>
      <div className="mt-6 text-xl grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <p>
          Min: <span className="font-bold text-blue-500">{formatTemperature(weather.main.temp_min)}&deg;C</span>
        </p>
        <p>
          Max: <span className="font-bold text-yellow-500">{formatTemperature(weather.main.temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  )
}
