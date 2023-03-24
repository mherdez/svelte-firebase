import { addDoc, collection } from 'firebase/firestore';
import { db } from '../helpers/firebase';

import { writable } from 'svelte/store';


const createTodos = () => {

  const { subscribe, set, update } = writable([]);

  return {
    subscribe,

    add: async todo => {
      await addDoc(collection(db, 'tasks'), todo);
      update(todos => [...todos]);
    },

    put: ({ docs }) => {
      update(() => docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }
  };

};

export const todos = createTodos();











