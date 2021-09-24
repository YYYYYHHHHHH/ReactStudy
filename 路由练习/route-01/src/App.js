import './App.css';
import { Link, Route, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 编写路由链接，实现链接跳转 */}
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item" to="/home">Home</Link>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由，保存路由链接和组件的对应关系 */}
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              <Redirect to="/about"></Redirect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
