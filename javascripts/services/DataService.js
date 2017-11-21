"use strict";

app.service("DataService", function($http, $q, FIREBASE_CONFIG){

    const getBlogs = (id) => {
        let blogs = []; 
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json?orderBy="id"&equalTo="${id}"`).then((results) => { 
                let fbBlogs = results.data;
                Object.keys(fbBlogs).forEach((key) => {
                    fbBlogs[key].id = key;
                    blogs.push(fbBlogs[key]);
                });
            resolve(blogs);      
            }).catch((err) => {
                reject(err);
            });
        }); 
    }; 
    
    const getJobs = (id) => {
        let jobs = []; 
            return $q((resolve, reject) => {
                $http.get(`${FIREBASE_CONFIG.databaseURL}/jobs.json?orderBy="id"&equalTo="${id}"`).then((results) => { 
                    console.log("jobs", jobs);
                    let fbJobs = results.data;
                    Object.keys(fbJobs).forEach((key) => {
                        fbJobs[key].id = key;
                        jobs.push(fbJobs[key]);
                    });
                resolve(jobs);      
                }).catch((err) => {
                    reject(err);
                });
            }); 
        }; 
    
    const getProjects = (id) => {
        let projects = []; 
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json?orderBy="id"&equalTo="${id}"`).then((results) => { 
                let fbProjects = results.data;
                Object.keys(fbProjects).forEach((key) => {
                    fbProjects[key].id = key;
                    projects.push(fbProjects[key]);
                });
            resolve(projects);      
            }).catch((err) => {
                reject(err);
            });
        }); 
    }; 

	return {getBlogs, getJobs, getProjects};
});