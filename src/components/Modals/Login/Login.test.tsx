import Login from "./Login"
import "@testing-library/jest-dom"
import { act } from 'react';
import { render, screen } from "@testing-library/react"

describe("Успешный рендер Login с ошибками пустых полей", () => {
    it("красная рамка у полей ввода", async () => {
        await act(async () => render(<Login />))

        const submitButton = screen.getByText("Войти")
        await act(async () => submitButton.click())
        
        expect(screen.getByPlaceholderText("Эл. почта")).toHaveClass("border-error")
        expect(screen.getByPlaceholderText("Пароль")).toHaveClass("border-error")
    })

    it("ошибка в логине", async () => {
        await act(async () => render(<Login />))

        const submitButton = screen.getByText("Войти")
        await act(async () => submitButton.click())
        
        const errorLogin = screen.getByText("Введите логин")
        expect(errorLogin).toBeInTheDocument()
    })
    
    it("ошибка в пароле", async () => {
        await act(async () => render(<Login />))

        const submitButton = screen.getByText("Войти")
        await act(async () => submitButton.click())
        
        const errorPassword = screen.getByText("Введите пароль")
        expect(errorPassword).toBeInTheDocument()
    })
})
