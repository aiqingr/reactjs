import BackDrop from "../BackDrop/BackDrop";
import Cards from "../Cards/Cards";
import "./ConfirmModal.css";

const ComfirmModal = (props) => {
	return (
		<BackDrop>
			<Cards className="confirmModal">
				<div className="confirmText">
					<p>{props.ConfirmText}</p>
				</div>
				<div className="confirmButton">
					<button className="okButton" onClick={props.onOk}>
						sure
					</button>
					<button onClick={props.onCancel}>cancel</button>
				</div>
			</Cards>
		</BackDrop>
	);
};

export default ComfirmModal;
