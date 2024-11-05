import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, Illustration, Input } from "../../../../../../design-system/src";
import { loginUser, registerUser } from "$/requests/user";
import { useRouter } from 'next/navigation';
import { useUser } from "$/app/contexts/UserContext";

interface ModalLoginProps {
    isOpen: boolean;
    onClose: () => void;
    isLogin: boolean;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose, isLogin }) => {
    const [isLoginMode, setIsLoginMode] = useState(isLogin);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [emailError, setEmailError] = useState("");
    const router = useRouter();
    const { setUserName, setUserId } = useUser();

    useEffect(() => setIsLoginMode(isLogin), [isLogin]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const nextElement = document.getElementById("__next");
            if (nextElement) {
                Modal.setAppElement("#__next");
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(value && !emailPattern.test(value) ? "Dado incorreto. Revise e digite novamente." : "");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (emailError) return;

        try {
            if (isLoginMode) {
                const login = await loginUser({ email: formData.email, password: formData.password });
                setUserName(login.data.data.name);
                setUserId(login.data.data.id)
            } else {
                const user = await registerUser(formData);

                setUserName(formData.name);
                setUserId(user.data.user._id)

                setIsLoginMode(true);
            }
            router.push('/dashboard');
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Login e Cadastro"
            style={{
                content: { maxWidth: "50%", margin: "auto", padding: "4rem", borderRadius: "8px" },
            }}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <button onClick={onClose} className="text-2xl self-end text-gray-500 hover:text-gray-700 focus:outline-none">×</button>
            <Illustration chooseImage={isLoginMode ? "register" : "login"} />
            <h2 className="text-2xl font-semibold my-4">{isLoginMode ? "Login" : "Criar Conta"}</h2>
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
                {!isLoginMode && (
                    <Input
                        name="name"
                        type="text"
                        placeholder="Digite seu nome completo"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                )}
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                {emailError && <span className="text-red-500">{emailError}</span>}
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                {!isLoginMode && (
                    <div className="flex items-center space-x-2 mt-4">
                        <Input type="checkbox" required name={""} />
                        <label className="text-gray-700">
                            Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco
                        </label>
                    </div>
                )}
                <div className="flex justify-center items-center">
                    <Button type="submit" variant={isLoginMode ? "primaryGreen" : "primary"}>
                        {isLoginMode ? "Acessar" : "Criar Conta"}
                    </Button>
                </div>

            </form>
        </Modal>
    );
};

export default ModalLogin;
