import ErrorMsg from "./ErrorMsg.tsx";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Успешный рендер вывода ошибки", () => {

    it("вывод ошибки в параграф", () => {
        const message = "Произошла ошибка"

        render(<ErrorMsg error={message}/>)

        const element = screen.getByRole("paragraph")
        expect(element.textContent).toEqual(message)
    })
})
