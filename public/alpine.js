import axios from "axios"

document.addEventListener('alpine:init', () => {
    Alpine.data('CarbonTracker', function () {
        return {
            title: 'Carbon Project Database',
            projects: [],
            id:'',
            projectId: '',
            newProjectId: '',
            newProjectName: '',
            newScope: '',
            newCreditsAvailable: '',
            newCreditsIssued: '',
            getProjects: '',
            createStatus: '',
            deleteProject: '',
            deleteStatus: '',
            updateProjectId:'',
            updateProjectName:'',
            updateScope:'',
            updateCreditsAvailable:'',
            updateCreditsIssued:'',

            init() {
                this.getProjects()
            },


            createProject() {
                axios.post('http://localhost:4003/api/carbonadd/', {
                    projectId: this.newProjectId,
                    projectName: this.newProjectName,
                    scope: this.newScope,
                    totalCreditsAvailable: this.newCreditsAvailable,
                    totalCreditsIssued: this.newCreditsIssued
                }).then(response => {
                    this.createStatus = response.data.message
                    this.newProjectId = ''
                    this.newProjectName = ''
                    this.newScope = ''
                    this.newCreditsAvailable = ''
                    this.getProjects()
                }).catch(error => (
                    console.log(error)
                ))
            },

            deleteProject() {
                return axios.post('http://localhost:4003/api/carbon/delete', {
                    id: this.deleteProject
                }).then(response => {
                    this.deleteStatus = response.data.message
                    this.getProjects()
                })
            },
            updateProject(){

            }
        }
    }
    )
}
)
