import Register from "./Register.tsx"
import "@testing-library/jest-dom"
import { act } from 'react';
import { render, screen } from "@testing-library/react"

describe("Успешный рендер Register с ошибками пустых полей", () => {
    it("красная рамка у полей ввода", async () => {
        await act(async () => render(<Register />))

        const submitButton = screen.getByText("Войти")
        await act(async () => submitButton.click())

        expect(screen.getByPlaceholderText("Имя пользователя")).toHaveClass("border-error")
        expect(screen.getByPlaceholderText("Эл. почта")).toHaveClass("border-error")
        expect(screen.getByPlaceholderText("Пароль")).toHaveClass("border-error")
        expect(screen.getByPlaceholderText("Повторите пароль")).toHaveClass("border-error")
    })

    it("ошибка в имени пользователя", async () => {
        await act(async () => render(<Register />))

        const submitButton = screen.getByText("Зарегистрироваться")
        await act(async () => submitButton.click())

        const errorLogin = screen.getByText("Имя пользователя должно содержать не менее 3 символов")
        expect(errorLogin).toBeInTheDocument()
    })

    it("ошибка в эл.почте", async () => {
        await act(async () => render(<Register />))

        const submitButton = screen.getByText("Зарегистрироваться")
        await act(async () => submitButton.click())

        const errorPassword = screen.getByText("Некорректный Email")
        expect(errorPassword).toBeInTheDocument()
    })

    it("ошибка в пароле", async () => {
        await act(async () => render(<Register />))

        const submitButton = screen.getByText("Зарегистрироваться")
        await act(async () => submitButton.click())

        const errorPassword = screen.getByText("Пароль должен быть не менее 6 символов")
        expect(errorPassword).toBeInTheDocument()
    })

    it("ошибка в подтверждении пароля", async () => {
        await act(async () => render(<Register />))

        const submitButton = screen.getByText("Зарегистрироваться")
        await act(async () => submitButton.click())

        const errorPassword = screen.getByText("Поле обязательно для заполнения")
        expect(errorPassword).toBeInTheDocument()
    })
})
