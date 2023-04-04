import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../helpers/firebase';

import { writable } from 'svelte/store';


const createQuestions = () => {

  const { subscribe, set, update } = writable([]);

  return {
    subscribe,

    add: async question => {
      await addDoc(collection(db, 'questions'), question);
    },

    put: ({ docs }) => {
      update(() => docs.map((doc) => {
        return ({ id: doc.id, ...doc.data() })
      }))
    },

    del: async (id) => {
      await deleteDoc(doc(db, 'questions', id));
      console.log(id + ' borrado')
    }
  };

};

export const questions = createQuestions();











