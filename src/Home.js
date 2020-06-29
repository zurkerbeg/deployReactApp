import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from './component/Loading';
import Detail from './component/Detail';
class Home extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            data:[],
            loading:false
        }
        console.log(this.state.data);
     }
    componentDidUpdate(){
        const closeBtn = document.querySelectorAll('.close');
        closeBtn.forEach( function(el){
            el.addEventListener("click",function(e){
                e.target.parentElement.style.display='none'
            })
        })
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        setTimeout( ()=>{
        fetch('https://api.github.com/users?page=1&per_page=5')
        .then(res => res.json())
        .then( data => this.setState({
            loading:false,
            data:data
        })); 
        },1000)
    }
    render(){
        let condition = '';
        if(this.state.loading === true){
            condition = <div className="loading-session"><Loading/></div>
        }
        return(
          <div className="container">
          <header className="header">
           <h1>Who to follow</h1>
           <button type="button" className="refresh">Refresh</button>
          </header>
          {condition}
          {
            this.state.data.map(loop => 
            <div className="dataFollower" key={loop.id}>
            <img src={loop.avatar_url} alt="profile"></img>
            <div className="UserSpace">
            <Link to="/detail"><div className="user">{loop.login}</div></Link>
            <div className="username">@{loop.login}</div>
            </div>
            <button className="close">X</button>
            </div>
              )
          }
        </div>
        )
    }
}
export default Home;