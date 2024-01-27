export interface List {
	id: number
	name: string
}

export interface Task {
	id: number
	name: string
	isDone: boolean
	list_id: number
}

export interface NewTask {
	name: string
	listId: number
}
