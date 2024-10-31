import { getPercent} from "./math.ts";

describe ('Функция получения процента из прогресса и общей суммы баллов', () => {
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(0, 0);
        expect(result).toBe(0);
    });
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(0, 100);
        expect(result).toBe(0);
    });
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(100, 0);
        expect(result).toBe(0);
    });
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(10, 100);
        expect(result).toBe(10);
    });
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(100, 10);
        expect(result).toBe(100);
    });
    it ('Правильно вычисляет проценты', () => {
        const result = getPercent(100, 100);
        expect(result).toBe(100);
    });
});

