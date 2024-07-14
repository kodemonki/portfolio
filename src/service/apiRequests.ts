
export const getProjects = () =>{
    return fetch('projects.json').then(res=>res.json());
}

export const getExperience = () =>{
    return fetch('experience.json').then(res=>res.json());
}