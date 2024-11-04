import { useEffect, useState } from "react";
import { Illustration, WidgetContainer } from "../../../../../../design-system/src";
import { getUserById } from "$/requests/user";
import EditUserForm from "./EditUserForm";
import { useUser } from "$/app/contexts/UserContext"; // Importe o contexto

const EditUser = () => {
	const { userId } = useUser(); // Recupere o ID do usuário do contexto
	const [userData, setUserData] = useState({ name: "", email: "", password: "" });

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (userId) {
					const response = await getUserById(userId);
					const { name, email, password } = response.data.user;
					setUserData({ name, email, password });
				}
			} catch (error) {
				console.error("Erro ao buscar o usuário:", error);
			}
		};

		fetchUserData();
	}, [userId]);

	return (
		<>
			<WidgetContainer backgroundColor="background-medium-grey" title="Minha conta">
				<div className="flex justify-between gap-spacing-lg max-desktop:flex-col">

					<EditUserForm userData={userData} />
					<div className="max-tablet:order-3 max-desktop:order-2">
						<Illustration chooseImage={"editAccount"} />
					</div>
				</div>
			</WidgetContainer>
		</>
	);
};

export default EditUser;
