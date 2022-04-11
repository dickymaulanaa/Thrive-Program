import React,{useState} from 'react';
import ReactDOM from 'react-dom'

const App = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
    //    setCount(count + 1)
       setCount ((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleAdd}> tambah</button>
        </div>
    )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));