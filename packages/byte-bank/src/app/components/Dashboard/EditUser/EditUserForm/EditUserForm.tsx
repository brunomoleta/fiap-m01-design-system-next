import { Button, Input } from "../../../../../../../design-system/src";
import { useEffect, useState } from "react";
import { updateUser } from "$/requests/user"; // Importe o updateUser
import { useUser } from "$/app/contexts/UserContext"; // Para obter o userId

interface EditUserFormProps {
	userData: {
		name: string;
		email: string;
		password: string;
	};
}

const EditUserForm = ({ userData }: EditUserFormProps) => {
	const { userId } = useUser(); // Obter o userId do contexto
	const [formData, setFormData] = useState({
		name: userData.name,
		email: userData.email,
		password: "", // Inicialmente vazio para evitar exibição da senha
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Atualiza formData sempre que userData mudar
	useEffect(() => {
		setFormData({
			name: userData.name,
			email: userData.email,
			password: "", // Deixe vazio para evitar exibir a senha
		});
	}, [userData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!userId) {
			alert("ID do usuário não encontrado.");
			setIsSubmitting(false);
			return;
		}

		try {
			const dataToUpdate = {
				id: userId,
				name: formData.name,
				email: formData.email,
				...(formData.password && { password: formData.password }),
			};
			await updateUser(userId, dataToUpdate);
			alert("Informações atualizadas com sucesso!");
		} catch (error) {
			console.error("Erro ao atualizar o usuário:", error);
			alert("Erro ao atualizar as informações.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form className="flex flex-col gap-spacing-xl grow order-2" onSubmit={handleSubmit}>
			<Input
				name="name"
				label="Nome"
				type="text"
				value={formData.name}
				onChange={handleChange}
			/>
			<Input
				name="email"
				label="Email"
				type="text"
				value={formData.email}
				onChange={handleChange}
			/>
			<Input
				name="password"
				label="Senha"
				type="password"
				value={formData.password}
				onChange={handleChange}
				placeholder="Deixe em branco para não alterar"
			/>
			<Button type="submit" variant="primary" disabled={isSubmitting}>
				{isSubmitting ? "Salvando..." : "Concluir transação"}
			</Button>
		</form>
	);
};

export default EditUserForm;
