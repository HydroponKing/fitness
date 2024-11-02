import { useNavigate } from 'react-router-dom'

export function useSafeNavigate() {
	try {
		return useNavigate()
	} catch (error: unknown) {
		return () => {}
	}
}
