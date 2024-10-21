import { Button, Input } from "../../../../../../../design-system/src"

const EditUserForm = () => {
	return (
		<>
			<form className="flex flex-col gap-spacing-xl grow order-2">

				<Input
					name="user-name"
					label="Nome"
					type="text"
					value={""}
				/>
				<Input
					name="user-email"
					label="Email"
					type="text"
					value={""}
				/>
				<Input
					name="user-email"
					label="Senha"
					type="password"
					value={""}
				/>
				<Button variant="primary">
					Concluir transação
				</Button>
			</form>
		</>
	)
}

export default EditUserForm;