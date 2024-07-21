
export const getProjects = () =>{
    return fetch('assets/json/projects.json').then(res=>res.json());
}

export const getExperience = () =>{
    return fetch('assets/json/experience.json').then(res=>res.json());
}