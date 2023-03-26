
/* ***********************************
 C O M P O N E N T S 
*********************************** */
class Alpha extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return 
  }
}

class Input extends React.Component {
  constructor(props){
    super(props)
  }
  onKeyUp(event) {
    search_term = '';
    if (event.charCode === 13) {
      search_term = event.target.value
      searchFilter()
    }
  }
  render(){
    return (
      <input  className="form-control searcher" onKeyPress={this.onKeyUp} id="search" placeholder="search" />
    )
  }
}


ReactDOM.render(<Input /> , document.getElementById("search"))

/* ***********************************
R E A C T O R S 
*********************************** */
var search_term = "";
var data_result;

const searchFilter = () => {
  if (search_term == "") {
      clear(Input)
  } else {
      flexSearch(search_term)
  }
}

const flexSearch = (val) => {
  clear()
  for (const key in data) {
      if (key.includes(val)) {
          data_result = data[key];
          renderFire();
          return 0;
      } 
  }
   renderWater()
}
/* ***********************************
R E N D E R E R S 
*********************************** */
const Red = function (props) {
  return (
    <div style={{backgroundColor: "red", color: "white"}} className="indicator">     
        Please check if there is a typo in <strong>"{search_term}"</strong> | | Or search the web for the term
    </div>
   );
 }
 const Green = function (props) {
  return (
    <div style={{backgroundColor: "green", color: "white"}} className="indicator">     
        Query available!!!
    </div>
   );
 }

 class Render extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
  ReactDOM.render(<Green  /> , document.getElementById('indicator'))   
  }
  render(){
    const items = data_result.map(function (x) {
    return (
      <div id="pad" className="card">
      <div className="card-body">{x}</div> 
      </div>
    )
  })
        return(
          items
        )
  }
}

const clear = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('output'))
}

const renderFire = () =>{ // Creating element maker variables
  ReactDOM.render(<Render result = {data_result} /> , document.getElementById('output'))   
}

const renderWater = () => {
  ReactDOM.render(<Red  /> , document.getElementById('indicator'))   
}
