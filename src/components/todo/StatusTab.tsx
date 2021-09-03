import React from "react";
import { connect } from "react-redux";
import { changeStatus } from "../../store/reducers/tasks";



function StatusTab(props:any) {

function switchTab(status: string) {
    props.setStatus(status)
}


	return (
		<div className="tabs">
			<div
				className="tab all"
				onClick={(e) => {
					switchTab("all");
				}}
			>
				All
			</div>
			<div
				className="tab active"
				onClick={(e) => {
					switchTab("active");
				}}
			>
				Active
			</div>
			<div
				className="tab done"
				onClick={(e) => {
					switchTab("done");
				}}
			>
				Done
			</div>
		</div>
	);
}

function mapDispatchToProps(dispatch:any){
    return{
        setStatus:(status:string)=>{
            dispatch(changeStatus(status))
        }
    }
}


export default connect(null, mapDispatchToProps)(StatusTab);
