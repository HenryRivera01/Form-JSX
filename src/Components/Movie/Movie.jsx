export const Movie = ({ name, duration, genre }) => {
  return (
    <article>
      <h2>{name}</h2>
      <span>{duration}</span>
      <h6>{genre}</h6>
    </article>
  )
}
