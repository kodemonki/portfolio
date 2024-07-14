
export const getProjects = () =>{
    return fetch('json/projects.json').then(res=>res.json());
}

export const getExperience = () =>{
    return fetch('json/experience.json').then(res=>res.json());
}