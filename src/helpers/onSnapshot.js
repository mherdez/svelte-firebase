import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

import { todos } from '../stores/store';
import { questions } from '../stores/storeQuestion';

export const snap = onSnapshot(collection(db, 'tasks'),
  (querySnapshot) => {
    todos.put(querySnapshot);
  },
  (err) => {
    console.log(err);
  }
);

export const snapQuestions = onSnapshot(collection(db, 'questions'),
  (querySnapshot) => {
    questions.put(querySnapshot);
  },
  (err) => {
    console.log(err);
  }
);