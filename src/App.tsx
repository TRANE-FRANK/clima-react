import Alert from "./components/Alert"
import Form from "./components/Form"
import Spinner from "./components/Spinner"
import WeatherDetail from "./components/WeatherDetail"
import useWather from "./hooks/useWather"

export default function App() {
  const { fetchWeather, weather, loading, notFound, hasWeatherData } =
    useWather()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="m-8 text-center text-white text-3xl md:text-5xl font-bold">
        Buscador de Clima ⛅
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>No se encontraron resultados...</Alert>}
      </div>
    </div>
  )
}
