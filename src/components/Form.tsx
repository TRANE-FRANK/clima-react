import { ChangeEvent, FormEvent, useState } from "react"
import { countries } from "../data/countries"
import type { SearchType } from "../types"
import Alert from "./Alert"

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  })

  const [alert, setAlert] = useState("")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son ogligatios")
      return
    }
    fetchWeather(search)
  }

  return (
    <form
      className="w-full max-w-xl bg-slate-800 p-8 rounded-lg shadow-2xl"
      onSubmit={handleSubmit}
    >
      {alert && <Alert>{alert}</Alert>}
      <div className="flex flex-col my-6 w-full">
        <label htmlFor="city" className="text-white text-xl font-bold">
          Ciudad:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Escribe una ciudad..."
          className="w-full max-w-full bg-transparent text-white text-lg rounded-lg my-2 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col w-full my-6">
        <label htmlFor="country" className="text-white text-xl font-bold">
          País:
        </label>
        <select
          name="country"
          onChange={handleChange}
          id="country"
          className="w-full max-w-full bg-transparent text-white text-lg p-2 my-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={search.country}
        >
          <option value="" className="bg-transparent text-black">
            -- Selecciona un país --
          </option>
          {countries.map((country) => (
            <option
              className="text-black"
              key={country.code}
              value={country.code}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        value="Buscar Clima ⛅"
        className="rounded-lg p-2 my-6 text-center bg-transparent text-white font-bold border border-white hover:bg-white hover:text-black transition-all duration-300 w-full cursor-pointer"
      />
    </form>
  )
}
