export function getColorClassName(color: string): string {
	switch (color) {
		case "primary":
			return "bg-blue-500 hover:bg-blue-600 text-white" // Primary color changed
		case "secondary":
			return "bg-gray-500 hover:bg-gray-600 text-white" // Secondary color changed
		case "danger":
			return "bg-red-500 hover:bg-red-600 text-white" // Danger color changed
		default:
			return "bg-gray-400 hover:bg-gray-500 text-white" // Default color changed
	}
}
