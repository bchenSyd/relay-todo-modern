const {
  insertRace,
  deleteRace,
  updateRace,
  getRace,
  getRaces,
} = require('./redis');
const events = require('../events');

async function addTodo(text, completed = false) {
  const id = await insertRace({
    text,
    completed,
  });
  return id;
}

async function renameTodo(id, text) {
  const race = getRace(id);
  race.text = text;
  updateRace(id, race);
  events.emit('amqp.changes', { id });
}

async function changeTodoStatus(id, isCompleted) {
  const race = await getRace(id);
  race.completed = isCompleted;
  updateRace(id, race);
  events.emit('amqp.changes', { id });
}

async function getTodo(id) {
  const race = await getRace(id);
  return race;
}

async function getTodos(status = 'any') {
  const races = await getRaces(status);
  return races;
}

function getViewer() {
  return {
    id: 'bochen2014',
  };
}

async function markAllTodos(completed) {
  const races = await getRaces();
  const changedIds = [];
  races.forEach(race => {
    if (race.completed !== completed.toString()) {
      race.complete = completed;
      updateRace(race.id, race);
      changedIds.push(race.id);
    }
  });
  return changedIds;
}

function removeTodo(id) {
  deleteRace(id);
}

async function removeCompletedTodos() {
  const races = await getRaces('completed');
  const deletedIds = [];
  races.forEach(race => {
    deleteRace(race.id);
    deletedIds.push(race.id);
  });
  return races;
}

module.exports = {
  addTodo,
  changeTodoStatus,
  getTodo,
  getTodos,
  getViewer,
  markAllTodos,
  removeTodo,
  removeCompletedTodos,
  renameTodo,
};
