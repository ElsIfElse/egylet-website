export const checkAdmin = function(){
    const isAdmin = localStorage.getItem('isAdmin')
    if(!isAdmin){
        return false
    }
    return true
}