/**
 * An in memory todo store.
 */

import EventEmitter from 'eventemitter3';
import dispatcher from '../dispatcher';
import * as actions from '../actions/todos';

const CHANGE = 'todos:change';

// export this class so we can test it easily without having to deal
// with the global state.
export class TodoStore {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.events = new EventEmitter();

        // ID => todo mapping
        this.todos = {};
        // a list of IDs so we can maintain order
        this.ids = [];
        // Simiulate an auto increment
        this.lastId = 0;

        this.dispatchToken = this.dispatcher.register(this._handleAction.bind(this));
    }

    getTodos() {
        // return copies of the the objects we store to prevent modification (mostly).
        // The individual todo objects are still the same instances
        return {
            ids: this.ids.slice(),
            todos: Object.assign({}, this.todos),
        };
    }

    addListener(callback, context) {
        this.events.on(CHANGE, callback, context);
        return () => this.events.off(CHANGE, callback, context);
    }

    _handleAction(action) {
        switch (action.actionType) {
            case actions.ADD_TODO:
                this._addTodo(action.text);
                break;
            case actions.MARK_DONE:
                this._markDone(action.id);
                break;
            case actions.MARK_NOT_DONE:
                this._markNotDone(action.id);
                break;
            case actions.DELETE_TODO:
                this._deleteTodo(action.id);
                break;
        }
    }

    _addTodo(text) {
        const id = ++this.lastId;

        this.todos[id] = {
            id: id,
            text: text,
            done: false
        };
        this.ids.push(id);
        this._emitChange();
    }

    _markDone(id) {
        if (this._hasTodo(id) && !this.todos[id].done) {
            this.todos[id] = Object.assign({}, this.todos[id], {
                done: true
            });
            this._emitChange();
        }
    }

    _markNotDone(id) {
        if (this._hasTodo(id) && this.todos[id].done) {
            this.todos[id] = Object.assign({}, this.todos[id], {
                done: false
            });
            this._emitChange();
        }
    }

    _deleteTodo(id) {
        if (this._hasTodo(id)) {
            const idx = this.ids.indexOf(id);
            const ids = this.ids.slice();
            ids.splice(idx, 1);

            delete this.todos[id];
            this.ids = ids;

            this._emitChange();
        }
    }

    _emitChange() {
        this.events.emit(CHANGE, this.ids, this.todos);
    }

    _hasTodo(id) {
        return typeof this.todos[id] !== 'undefined';
    }
}

// export a global instance by default
export default new TodoStore(dispatcher);
