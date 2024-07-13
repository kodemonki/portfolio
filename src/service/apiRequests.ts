
export const getProjects = () =>{
    return fetch('projects.json').then(res=>res.json());
}