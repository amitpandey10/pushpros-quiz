import React ,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={record:"",name:"",loader:false}
    this.loadData=this.loadData.bind(this);
  }


  /**set the response after first render**/
  componentDidMount(){
		fetch('https://aimtell.com/files/sites.json', {
		  method: 'get',
		})
		.then((res) => res.json())
		.then((res) => {
      console.log(res.sites)
      this.setState({
        record:res.sites
      })
		})
		.catch((err)=>{
			alert('Error Occur! '+err);
		});
  }


  /***Call Function on click loadData******/
  loadData(){
    let collectedData=[];
    this.state.record.forEach((recd)=>{
      collectedData.push(<div className="rTableRow"><div className="rTableHead">{recd.id}</div><div className="rTableHead">{recd.name}</div><div className="rTableHead">{recd.url}</div></div>);
    })
    this.setState({
      name:collectedData,
      loader:true
    })
  }

  render(){
    return (
        <div id="record">
          <div id="inner-content">
            <h1>Sample Table</h1>
            <span>You should be able to recreate this table.By default,content of this will be empty.When you click the button it should fetch the data located at <br/>
            https://aimtell.com/files/sites.json using AJAX and insert it into the page using HANDLEBARS.</span>

            <span onClick={this.loadData}><button className="button button2">Load Data</button></span>
            <div>&nbsp;</div>
            <div>
              <div>&nbsp;</div>
              <div className="rTable">
                <div className="rTableRow">
                  <div className="rTableHead"><strong>Id</strong></div>
                  <div className="rTableHead"><strong>Name</strong></div>
                  <div className="rTableHead"><strong>Url</strong></div>
                </div>
                {this.state.name}
              </div>
            </div>
          </div>
       </div>
    )
  }
}

export default App;
