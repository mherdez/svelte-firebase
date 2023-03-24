import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

import { todos } from '../stores/store';

export const snap = onSnapshot(collection(db, 'tasks'),
  (querySnapshot) => {
    todos.put(querySnapshot);
  },
  (err) => {
    console.log(err);
  }
);