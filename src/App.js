import './App.css';

const App = () => {
  const handleClick = (event, param) => {
    console.log(event);
    console.log(param);
  };

  return (
    <div>
      <button
        onClick={event => handleClick(event, 'bobbyhadz.com')}
      >
        Click
      </button>
    </div>
  );
};

export default App;
