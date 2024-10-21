import { Illustration, WidgetContainer } from "../../../../../../design-system/src";
import TransactionForm from "../Transaction/TransactionForm";
import EditUserForm from "./EditUserForm";

const EditUser = () => {
	return (
		<>
			<WidgetContainer
				backgroundColor="background-medium-grey"
				title="Minha conta"
			>
				<div className="flex justify-between gap-spacing-lg max-desktop:flex-col">
					<EditUserForm />
					<div className="max-tablet:order-3 max-desktop:order-2">
						<Illustration chooseImage={"editAccount"} />
					</div>
				</div>
			</WidgetContainer>
		</>
	)
}

export default EditUser;