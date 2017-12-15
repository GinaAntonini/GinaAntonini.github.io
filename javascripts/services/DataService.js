"use strict";

app.service("DataService", function($http, $q, FIREBASE_CONFIG){

    const getBlogs = () => {
        let blogs = []; 
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => { 
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
    
    const getJobs = () => {
        let jobs = []; 
            return $q((resolve, reject) => {
                $http.get(`${FIREBASE_CONFIG.databaseURL}/jobs.json`).then((results) => { 
                    let fbJobs = results.data;
                    Object.keys(fbJobs).forEach((key) => {
                        fbJobs[key].id = key;
                        jobs.push(fbJobs[key]);
                        // console.log("jobs", jobs);
                    });
                resolve(jobs);      
                }).catch((err) => {
                    reject(err);
                });
            }); 
        }; 
    
    const getProjects = () => {
        let projects = []; 
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => { 
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