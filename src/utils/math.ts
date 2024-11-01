export function getPercent(progress: number, quantity: number): number {
	if (!progress || !quantity) return 0
	return Math.floor(Math.min(100, (100 * progress) / quantity))
}
