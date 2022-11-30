import './App.css';
import useFetch from './utils/useFetch';

function App() {
  const { data: joke, loading: loadingJoke, error: errorJoke, refetch: refetchJoke } = useFetch('https://dog.ceo/api/breeds/image/random');
  const { data: quote, loading: loadingQuote, error: errorQuote, refetch: refetchQuote } = useFetch('https://api.quotable.io/random');


  if (loadingJoke) return <div>Loading...</div>;
  if (loadingQuote) return ;

  if (errorJoke) return console.log(errorJoke);
  if (errorQuote) return console.log(errorQuote);


  return (
    <div className="App">
      <img src={joke?.message} alt="Random Dog" />
      {/* {data ? <img src={joke.message}></img> : null} */}
      <button onClick={refetchJoke}>Refetch joke</button>
      {loadingQuote ? <div>Loading...</div> 
      : 
      <div>
        <p>{quote?.content}</p>
        <p>{quote?.author}</p>
        <button onClick={refetchQuote}>Refetch Quote</button>
      </div>
      }
    </div>
  );
}

export default App;
