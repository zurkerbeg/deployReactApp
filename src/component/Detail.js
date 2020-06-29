import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Detail extends Component {
    render(){
        return(
            <div>
                
                <Link to="/"><h2>Back to Home</h2></Link>
                <div className="container">
                <p>At this time, results are ordered with the most recent following first — however,
                    this ordering is subject to unannounced change and eventual consistency issues. 
                    Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. 
                    See Using cursors to navigate collections for more information
                </p>
            </div>
            </div>
        )
    }
}
export default Detail;