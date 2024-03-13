import "./App.css";
import hooks from "./hooks";

function App() {
  const { useFetchData } = hooks;
  const { isLoading, error, data } = useFetchData();

  return (
    <>
      {error ? (
        <div>Failed Fetch Data</div>
      ) : isLoading ? (
        <div>loading....</div>
      ) : (
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.completed}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
