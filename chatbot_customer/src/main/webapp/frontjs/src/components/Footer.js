import React, {Component} from 'react';
import Button from '@mui/material/Button';
import PopupDom from "./PopupDom";
import ChatComp from "./ChatComp";

class Footer extends Component {
	constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
        }
    }
	
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
 
    closePopup(){
		console.log("closePopup");
        this.setState({
            isOpenPopup: false,
        })
    }
	
	render(){
		return(
			<div>
				<Button id="popupDom" style={fabStyle} variant="contained" 
				onClick={this.openPopup}>문의하기</Button>
				{this.state.isOpenPopup && 
                        <PopupDom>
                            <ChatComp onClose={this.closePopup}/>
                        </PopupDom>
				}
			</div>
		);
	}
};

/* For css - Start */
const fabStyle={
  position: 'fixed',
  bottom: 50,
  right: 50,
};
/* For css - End */

export default Footer;
