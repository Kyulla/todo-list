export async function todoApi() {
    const listaTodo = await fetch("https://jsonplaceholder.typicode.com/posts");
    return listaTodo.json();
}