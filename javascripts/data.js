"use strict";

const dom = require('./dom');
const events = require('./events');

let firebaseKey = '';
let sortedArray = [];


const setFirebaseKey = (key) => {
    firebaseKey = key; 
};

const apiKeys = () => {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url: `db/apiKeys.json`
        }).done((data) => {
            resolve(data); 
        }).fail((error) => {
            reject(error); 
        });
    });
};

const retrieveKeys = () => {
    apiKeys().then((results) => {        
        setFirebaseKey(results.firebase);
        firebase.initializeApp(results.firebase);
        events.myLinks();
        return getBlogs();
    }).then((blogs) => {
        dom.createBlogDomString(blogs);
        return getJobs();
    }).then((jobs) => {
        dom.createJobDomString(jobs);
        return getProjects();
    }).then((projects) => {
    	dom.createPortfolioDomString(projects);
    }).catch((error) => {
        console.log(error); 
    });
};

const getBlogs = () => {
    let blogs = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((fbBlogs) => { 
            if (fbBlogs !== null) {
                resolve(fbBlogs) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

const getJobs = () => {
    let jobs = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/jobs.json`).then((fbJobs) => { 
            if (fbJobs !== null) {
                resolve(fbJobs) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

const getProjects = () => {
    let projects = []; 
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/projects.json`).then((fbProjects) => { 
            if (fbProjects !== null) {
                resolve(fbProjects) ;
            }         
        }).catch((err) => {
            console.log(err);
        });
    }); 
}; 

module.exports = {retrieveKeys};