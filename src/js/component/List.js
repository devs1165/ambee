import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { setListData } from '../actions/DashboardAction';
import GoogleMapReact from 'google-map-react';



class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			color:'green',
			banColor:'green',
			val:'0',
			center: {
				lat: 21.7679,
				lng: 78.8718
				},

		}
	}
	componentDidMount() {
		store.dispatch(setListData());
		
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.list == nextProps.list) {
			
		}


		if (this.props.list !== nextProps.list) {

			store.dispatch(setListData());
			if (nextProps.list <= 0 && nextProps.list<=4) {
				this.setState({
					color:'green',
					banColor:'yellow',
					val:nextProps.list
				})
			}
			else if (nextProps.list > 4 && nextProps.list <= 8) {
				this.setState({
					color:'yellow',
					banColor:'blue',
					val:nextProps.list

				})	
			}
			else if (nextProps.list > 8 && nextProps.list<=10) {
				this.setState({
					color:'red',
					banColor:'green',
					val:nextProps.list


				})	
			}
		}	
	}

	


	render(){
	const MARKER_SIZE = 40;
	const greatPlaceStyle = {
	  position: 'absolute',
	  width: MARKER_SIZE,
	  height: MARKER_SIZE,
	  left: -MARKER_SIZE / 2,
	  top: -MARKER_SIZE / 2,
	  backgroundColor:this.state.color,
	  borderRadius:'50%',
	  fontSize:'22px',
	  color:'white',
	  lineHeight:'40px',
	  textAlign:'center'

	};
	const banStyle = {
	  position: 'absolute',
	  width: MARKER_SIZE,
	  height: MARKER_SIZE,
	  left: -MARKER_SIZE / 2,
	  top: -MARKER_SIZE / 2,
	  backgroundColor:this.state.banColor,
	  borderRadius:'50%',
	  fontSize:'22px',
	  color:'white',
	  lineHeight:'40px',
	  textAlign:'center'

	}
	const DelhiComponent = ({ text }) => <div style={greatPlaceStyle}>{text}</div>;
	const BangComponent = ({ text }) => <div style={banStyle}>{text}</div>;

		return(
			<div style={{height:'100vh',width:'100vw'}}>
				<GoogleMapReact
			        defaultCenter={this.state.center}
			        defaultZoom={5}
			      >
				      <DelhiComponent
		                lat={28.7041}
		                lng={77.1025}
		                text={this.state.val}
		             />
		              <BangComponent
		                lat={12.9716}
		                lng={77.5946}
		                text={this.state.val}
		             />

			      
			    </GoogleMapReact>
		    </div>
		)

	}
}






const mapStateToProps = (store) => {
  return {
    list: store.dashboard.remove_list
  };
};

const mapDispatchToProps = (dispatch) => ({
  setListData: (list) => {
    dispatch(setListData(list));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
