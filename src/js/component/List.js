import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { setListData } from '../actions/DashboardAction';
import Listitem from './ListItem';
import GoogleMapReact from 'google-map-react';



class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			color:'green',
			banColor:'green',

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
			if (nextProps.list <= 10 && nextProps.list<=200) {
				this.setState({
					color:'green',
					banColor:'yellow'

				})
			}
			else if (nextProps.list >= 200 && nextProps.list <= 500) {
				this.setState({
					color:'yellow',
					banColor:'blue'
				})	
			}
			else if (nextProps.list >= 500 && nextProps.list<=700) {
				this.setState({
					color:'red',
					banColor:'green'

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
	  borderRadius:'50%'

	};
	const banStyle = {
	  position: 'absolute',
	  width: MARKER_SIZE,
	  height: MARKER_SIZE,
	  left: -MARKER_SIZE / 2,
	  top: -MARKER_SIZE / 2,
	  backgroundColor:this.state.banColor,
	  borderRadius:'50%'

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
		                text={'greatPlaceStyle'}
		             />
		              <BangComponent
		                lat={12.9716}
		                lng={77.5946}
		                text={'greatPlaceStyle'}
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