/*
In this file we have a function that returns a valid collection if the collection ID is not sent as a function parameter.
We have custom values ​​that refer to each collection in our database.
In "Contexts" we have the possible interaction scenarios with Firebase.
In this example we have the context of "list".
This means that all operations that involve changing a list (adding, editing and removing products) are related to the context of a "list".
In the future, our application may grow and allow the user to do other things than just create a shopping list, that way we would have new contexts.
Today we only have this context because each list represents a collection in our database.
Assuming that we had thought of a different architecture, where we had a collection with the tokens of the lists and another with only the products,
we would have two contexts, one for "list" and the other for "products".
For this function to be useful, in Firebase operations functions it is necessary to pass the context to which the function is related as a default value
for the collectionID parameter.
*/

import { LOCAL_STORAGE_LIST_TOKEN } from '../hooks/useLocalStorage';

export const Contexts = {
  list: 'list',
};

export const validatedCollection = (context) => {
  if (context === Contexts.list) {
    return window.localStorage.getItem(LOCAL_STORAGE_LIST_TOKEN);
  }
};
