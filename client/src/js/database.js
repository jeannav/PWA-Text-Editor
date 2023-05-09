import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  // TODO: Add logic to a method that accepts some content and adds it to the database
// not sure if this is correct or if I have the console.error in the correct place
export const putDb = async (content) => {
  console.log('Put to the database');
  const indexedDb = await openDB(jate, 1);
  const tx = indexedDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // not sure about {id: 1 value:content}
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log('data saved to database', result);

};
// part of the starter code
// console.error('putDb not implemented');
  // TODO: Add logic for a method that gets all the content from the database

  export const getDb = async () => {
  console.log('GET all from the database');
  const indexedDb = await openDB('jate', 1);
  const tx = indexedDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};
// part of the starter code
// console.error('getDb not implemented');

initdb();
