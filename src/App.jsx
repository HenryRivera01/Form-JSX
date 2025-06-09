import { Form } from "./Components/Form/Form"
import { Movie } from "./Components/Movie/Movie"

export const App = () => {
  const movieData = [
    {
      name: "Titanic",
      duration: "180",
      genre: "Drama",
    },
    {
      name: "The Simpsons",
      duration: "120",
      genre: "comedy",
    },
    {
      name: "Bolt",
      duration: "110",
      genre: "Kids",
    },
  ]

  // spread Operator
  console.log(...movieData)

  const handleConsole = () => {
    console.log("algo")
  }

  return (
    // <Form />
    <section>
      {movieData.map((eachMovie) => {
        return <Movie {...eachMovie} />
      })}
      <button onClick={handleConsole}>Click</button>
      <input
        type="text"
        name="test"
        id=""
        onChange={() => console.log("estoy cambiando")}
      />
    </section>
  )
}
