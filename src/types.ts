export interface List {
	id: number
	name: string
}

export interface Task {
	id: number
	name: string
	done: boolean
	list_id: number
}

export interface NewTask {
	name: string
	listId: number
}

export interface SwitchTaskOrderPayload {
	task: Task
	otherTask: Task
}

export interface SwitchListOrderPayload {
	list: List
	otherList: List
}
