document.addEventListener('alpine:init', () => {
    Alpine.data('CarbonTracker', function () {
        return {
            title: 'Carbon Project Databse',
            addproject: '',
            newProjectId: '',
            newScope:'',
            newTotalCreditsAvailable:'',
            newCreditsIssued:'',

            createProject() {
                axios.post('http://localhost:4011/api/carbonadd', {
                    id: this.id,
                    project_id: this.newProjectId,
                    scope: this.newScope,
                    totalCreditsAvailable: this.newTotalCreditsAvailable,
                    totalCreditsIssued: this.newCreditsIssued
                }).then(response => {
                    this.id = response.data.message
                    console.log(id)
                    this.newProjectId= ''
                    this.newScope = ''
                    this.newTotalCreditsAvailable = ''
                    this.newTotalCreditsAvailable = ''
                }).catch(error => (
                    console.log(error)
                ))
            }
        }
    }
    )
    })