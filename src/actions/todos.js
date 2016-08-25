/**
 * The various action "creators" for todos. Think of these as constructors for
 * plain objects.
 */

export const ADD_TODO = 'ADD_TODO';
export const MARK_DONE = 'MARK_DONE';
export const MARK_NOT_DONE = 'MARK_NOT_DONE';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text) {
    return {
        actionType: ADD_TODO,
        text: text
    };
}

export function markAsDone(id) {
    return {
        actionType: MARK_DONE,
        id: id
    };
}

export function markNotDone(id) {
    return {
        actionType: MARK_NOT_DONE,
        id: id
    };
}

export function deleteTodo(id) {
    return {
        actionType: DELETE_TODO,
        id: id
    };
}
